import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import DriveFolderUploadIcon from "@mui/icons-material/DriveFolderUpload";

const modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }, { font: [] }],
    [{ size: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "image", "video"],
    ["clean"],
  ],

  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false,
  },
};

const formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
  "video",
  "clean",
];

export default function TextEditor() {
  const [htmlText, setHtmlText] = useState("");

  const onChange = (newText) => {
    setHtmlText(newText);
    console.log(newText)
  };

  return (
    <>
      <ReactQuill
        style={{ height: "80dvh" }}
        className="mt-20 w-[100%]"
        theme="snow"
        placeholder="Type here"
        value={htmlText}
        onChange={onChange}
        modules={modules}
        formats={formats}
      />
      <div className=" w-[100%] flex justify-between items-center mt-16 h-[5dvh]">
        <input type="text" className="px-4 py-2 mb-4 ms-4 text-sm font-medium tracking-wide placeholder:text-black capitalize transition-colors duration-300  bg-gray-200 rounded-lg hover:bg-orange-700 focus:outline-none focus:ring focus:ring-orange-300 focus:ring-opacity-50 shadow text-black shadow-black" placeholder="Title" required />
        <button onClick={(e)=>{e.preventDefault()}} className=" px-3 py-2 mb-4 me-4 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 active:shadow-none active:translate-x-0.5 active:translate-y-0.5 transform bg-orange-600 rounded-lg hover:bg-orange-700 focus:outline-none focus:ring focus:ring-orange-300 focus:ring-opacity-50 shadow shadow-black">
                    Upload <DriveFolderUploadIcon/>
                </button>
      </div>
    </>
  );
}
