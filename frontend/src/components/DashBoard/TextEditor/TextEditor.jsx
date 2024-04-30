import axios from "axios";
import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";
import pako from 'pako';
const modules = {
  toolbar: [
    [{ 'header': [] }, { 'font': [] }],
    [{ size: [] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [
      { 'list': 'ordered' },
      { 'list': 'bullet' },
      { 'indent': '-1' },
      { 'indent': '+1' },
    ],
    ['link', 'image', 'video'],
    ['clean'],
    [{ 'color': [] }, { 'background': [] }],
    [{ align: '' }, { align: 'center' }, { align: 'right' }, { align: 'justify' }],
  ],

  clipboard: {
    matchVisual: false,
  },
  
};

const formats = [
  'header', 'font', 'size', 'color',
  'bold', 'italic', 'underline', 'strike', 'blockquote',
  'list', 'bullet', 'indent',
  'link', 'image', 'video',
  'align',
];

export default function TextEditor() {
  const [title , setTitle] = useState("");
  const [htmlText, setHtmlText] = useState("");

  console.log(title ,  htmlText)

  const currentUser = useSelector((state) => state.user.currentUser);

  const onChange = (newText) => {
    setHtmlText(newText);
    console.log(newText)
  };


const compressData = async ()=>{
  try {
    const textUint8Array = new TextEncoder().encode(htmlText);
    const compressedData = pako.deflate(textUint8Array);
    const compressedBase64 = btoa(String.fromCharCode.apply(null, compressedData));
    return compressedBase64;
  } catch (error) {
    console.error('Error compressing data:', error);
    return null;
  }
}
  const handleUpload = async(e) =>  {
    e.preventDefault();
    if (!title || !htmlText) {
      Swal.fire({
        title: "Error",
        text: "Please fill out all fields",
        icon: "error"
      });
      return; 
    }
    console.log(await compressData())
    await axios.post((`http://localhost:3000/api/associate/addArticle/${currentUser._id}`) , {title  , body: await compressData()})
    .then((res) => {
      console.log(res)
      Swal.fire({
        title: "Success",
        text: "Article Uploaded Successfully",
        icon: "success"
      });
    })
    .catch((err) => {
      console.log(err)
      Swal.fire({
        title: "Error",
        text: "Uploading Failed",
        icon: "error"
      });
    })
  }

  return (
    <>
     <div className="overflow-hidden">
     <div className="w-[100%] h-[100dvh] flex justify-center items-center flex-col overflow-auto">
      <div className="w-[100%] flex justify-between items-center">
        <input
        onChange={(e) => setTitle(e.target.value)}
        className="md:ms-12 ms-4 placeholder:text-gray-700 py-1 rounded-md" placeholder=" Title" type="text" />
        <button 
        onClick={handleUpload}
        className="px-4 py-2 rounded-md mt-2 mb-2 me-12 hover:bg-orange-800 bg-orange-600">upload</button>
      </div>
     <ReactQuill
        style={{ height: window.innerWidth<380? "60dvh":"80dvh", width:"94%" ,marginBottom:window.innerWidth<570? "0":"4dvh"}}
        theme="snow"
        placeholder="Type here"
        onChange={onChange}
        modules={modules}
        formats={formats}
      />
     </div>
     </div>
    </>
  );
}
