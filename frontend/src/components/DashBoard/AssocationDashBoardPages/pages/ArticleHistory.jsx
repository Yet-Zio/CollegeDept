/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import AccordionDropDown from "../../Shared/DropDown/Accordion";
import EmptyMessage from "../../Shared/Pages/EmptyMessage";
import ClearIcon from "@mui/icons-material/Clear";
import axios from "axios";
import { useSelector } from "react-redux";


export default function ArticleHistory({ updateArticleState }) {

  const currentUser = useSelector((state) => state.user.currentUser);

  const [Article , setArticle] = useState([])

  useEffect(() => {

    const fetchArticle = async() => {

      await axios.get(`http://localhost:3000/api/associate/getArticle/${currentUser._id}`)
      .then((res) => {
        setArticle(res.data)
      })
      .catch((err) => {
        console.log(err)
      })

    }

    fetchArticle();

  } , [])

  return (
    <>
      <button
        onClick={() => {
          updateArticleState(false);
        }}
        className="m-4 text-center fixed top-14 right-2"
      >
        {" "}
        <ClearIcon />
      </button>
      <div className="w-[100%] h-[100dvh]  flex justify-end items-center">
        <div className="h-[100%] w-[100%] overflow-auto flex flex-col justify-start items-start mt-52 me-2">
          {!(Article.length === 0) &&
            Article.map((item, index) => {
              return <AccordionDropDown key={index} itemData={item} />;
            })}
          {Article.length === 0 && (
            <EmptyMessage emptyMessage={"History is Empty"} />
          )}
        </div>
      </div>
    </>
  );
}
