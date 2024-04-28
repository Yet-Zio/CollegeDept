import JoditEditor from 'jodit-react';
import { useRef, useState } from 'react';
export default function TextEditor() {
    const editor = useRef(null);
   const  [content,SetContent] = useState();
  return (
   <>
               <div className="h-80vh w-full bg-black flex justify-center items-center">
            <div className="w-full h-full overflow-hidden">
                <JoditEditor
                    ref={editor}
                    value={content}
                    onBlur  ={data => { SetContent(data); console.log(data) }}
                    // CSS class to preserve whitespace and line breaks
                    className="whitespace-pre-wrap"
                />
            </div>
        </div>
   </>
  )
}
