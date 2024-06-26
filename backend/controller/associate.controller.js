import Associate from "../models/associate.model.js";
import bcrypt from "bcrypt";
import { errorHandler } from "../utils/errorHandler.js";
import jwt from "jsonwebtoken";
import Event from "../models/event.model.js";
import Notification from "../models/associateNotification.model.js";
import mongoose from 'mongoose';

export const loginAssociate = async (req, res, next) => {
  const { studentID, password } = req.body;

  try {
    const findMember = await Associate.findOne({ studentID });

    if (!findMember)
      return next(errorHandler(401, "Please enter a valid email"));

    const checkPassword = bcrypt.compareSync(password, findMember.password);

    if (!checkPassword) return next(errorHandler(401, "Invalid Credentials"));

    const token = jwt.sign({ id: findMember._id }, process.env.JWT_KEY, {
      expiresIn: "1d",
    });

    const { password: pass, ...rest } = findMember._doc;

    res.status(201).cookie("accessToken", token, { httpOnly: true }).json(rest);
  } catch (error) {
    next(error);
  }
};

export const addArticle = async (req, res, next) => {
  const { title, body } = req.body;

  try {
    const findUser = await Associate.findById(req.params.id);

    if (!findUser) return next(errorHandler(401, "User not found"));

    findUser.article.push({ title, body });

    await findUser.save();

    res.json({ message: "Article Added Successfully" });
  } catch (error) {
    next(error);
  }
};

export const countAssociate = async (req, res, next) => {
  try {
    const { id } = req.params;

    const fetchUser = await Associate.findById(id);

    let articleCount = fetchUser.article.length;

    const eventCount = await Event.countDocuments({ owner: id });

    const notificationCount = await Notification.countDocuments({ member: id });

    res.status(200).json({ articleCount, eventCount, notificationCount });
  } catch (error) {
    next(error);
  }
};

export const updateAssociate = async (req, res, next) => {
  try {
    const updateUser = await Associate.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
          firstname: req.body.firstname,
          lastname: req.body.lastname,
          dob: req.body.dob,
          gender: req.body.gender,
        },
      },
      { new: true }
    );

    const { password, ...rest } = updateUser._doc;

    res.status(200).json(rest);
  } catch (error) {
    next(error);
  }
};

export const getAllArticle = async (req, res, next) => {
  try {
    const allArticles = await Associate.aggregate([
      {
        $unwind: "$article",
      },
      {
        $project: {
          firstName: "$firstname",
          lastName: "$lastname",
          profileUrl: "$avatar",
          title: "$article.title",
          body: "$article.body",
          date: "$article.date",
        },
      },
    ]);
    res.status(200).json(allArticles);
  } catch (error) {
    next(error);
  }
};

export const getArticle = async (req, res, next) => {
  try {
    const fetchArticle = await Associate.findById(req.params.id);

    res.status(200).json(fetchArticle.article);
  } catch (error) {
    next(error);
  }
};
export const getEvent = async (req, res, next) => {
  try {
    const fetchEvent = await Event.find({ owner: req.params.id });

    res.status(200).json(fetchEvent);
  } catch (error) {
    next(error);
  }
};
export const getNotification = async (req, res, next) => {
  try {
    const fetchNotification = await Notification.find({
      member: req.params.id,
    });

    res.status(200).json(fetchNotification);
  } catch (error) {
    next(error);
  }
};


export const updateAssociateAdmin = async (req, res, next) => {
  const { firstname, lastname, email, studentID } = req.body;

  try {
      
      if (!studentID) {
          return res.status(400).json({ error: "ID is required." });
      }

      
      let associate = await Associate.findOne({ studentID });

  
      if (!associate) {
          return res.status(404).json({ error: "Associate not found." });
      }

      if (firstname) {
          associate.firstname = firstname;
      }
      if (lastname) {
          associate.lastname = lastname;
      }
      if (email) {
          associate.email = email;
      }

      await associate.save()

      res
      .status(200)
      .json("updated successfully");
  } catch (error) {
      next(error);
      
  }
};

export const deleteAssociate = async(req , res , next) => {

  try {
      
      await Associate.findOneAndDelete({studentID : req.params.id})
      res.status(200)
      .json("Associate Deleted Successfully")

  } catch (error) {
      next(error)
  }

} 
