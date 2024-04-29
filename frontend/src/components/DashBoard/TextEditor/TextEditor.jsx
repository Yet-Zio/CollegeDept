import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
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
  const [htmlText, setHtmlText] = useState("");

  const onChange = (newText) => {
    setHtmlText(newText);
    console.log(newText)
  };

  return (
    <>
     <div className="overflow-hidden">
     <div className="w-[100%] h-[100dvh] flex justify-center items-center flex-col overflow-auto">
      <div className="w-[100%] flex justify-between items-center">
        <input className="md:ms-12 ms-4 placeholder:text-gray-700 py-1 rounded-md" placeholder=" Title" type="text" />
        <button className="px-4 py-2 rounded-md mt-2 mb-2 me-12 hover:bg-orange-800 bg-orange-600">upload</button>
      </div>
     <ReactQuill
        style={{ height: window.innerWidth<380? "60dvh":"80dvh", width:"94%" ,marginBottom:window.innerWidth<570? "0":"4dvh"}}
        theme="snow"
        placeholder="Type here"
        value={htmlText}
        onChange={onChange}
        modules={modules}
        formats={formats}
      />
     </div>
     </div>
    </>
  );
}
