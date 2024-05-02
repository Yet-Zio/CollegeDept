import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function StudyMaterials() {

  return (
    <>
      <div className="h-[100dvh] w-[100%]">
        <div className="h-[90%] w-[90%] flex justify-start items-start flex-col mt-24">
        <div className="flex  items-start gap-2.5 mb-6">
            <div className="flex flex-col w-full max-w-[100dvh] leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl dark:bg-[#111111]">
              <div className="flex items-center  space-x-2 rtl:space-x-reverse">
                <span className="text-sm font-semibold text-gray-900 dark:text-white">
                  </span>
                <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                  11:46
                </span>
              </div>
              <p className="text-sm font-normal py-2.5 text-gray-900 dark:text-white">
                 Note Down Below
              </p>
              <p className="text-sm font-normal pb-2.5 text-gray-900 dark:text-white">
                <Link to={"http://res.cloudinary.com/dso0reuld/image/upload/v1714589234/pptabus8chyhn4t9rh4b.pdf"}>click to see notes</Link>
              </p>
              <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                Delivered
              </span>
            </div>
          </div><div className="flex  items-start gap-2.5 mb-6">
            <div className="flex flex-col w-full max-w-[100dvh] leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl dark:bg-[#111111]">
              <div className="flex items-center  space-x-2 rtl:space-x-reverse">
                <span className="text-sm font-semibold text-gray-900 dark:text-white">
                  </span>
                <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                  11:46
                </span>
              </div>
              <p className="text-sm font-normal py-2.5 text-gray-900 dark:text-white">
                 Note Down Below
              </p>
              <p className="text-sm font-normal pb-2.5 text-gray-900 dark:text-white">
                <Link to={"http://res.cloudinary.com/dso0reuld/image/upload/v1714589234/pptabus8chyhn4t9rh4b.pdf"}>click to see notes</Link>
              </p>
              <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                Delivered
              </span>
            </div>
          </div><div className="flex  items-start gap-2.5 mb-6">
            <div className="flex flex-col w-full max-w-[100dvh] leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl dark:bg-[#111111]">
              <div className="flex items-center  space-x-2 rtl:space-x-reverse">
                <span className="text-sm font-semibold text-gray-900 dark:text-white">
                  </span>
                <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                  11:46
                </span>
              </div>
              <p className="text-sm font-normal py-2.5 text-gray-900 dark:text-white">
                 Note Down Below
              </p>
              <p className="text-sm font-normal pb-2.5 text-gray-900 dark:text-white">
                <Link to={"http://res.cloudinary.com/dso0reuld/image/upload/v1714589234/pptabus8chyhn4t9rh4b.pdf"}>click to see notes</Link>
              </p>
              <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                Delivered
              </span>
            </div>
          </div><div className="flex  items-start gap-2.5 mb-6">
            <div className="flex flex-col w-full max-w-[100dvh] leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl dark:bg-[#111111]">
              <div className="flex items-center  space-x-2 rtl:space-x-reverse">
                <span className="text-sm font-semibold text-gray-900 dark:text-white">
                  </span>
                <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                  11:46
                </span>
              </div>
              <p className="text-sm font-normal py-2.5 text-gray-900 dark:text-white">
                 Note Down Below
              </p>
              <p className="text-sm font-normal pb-2.5 text-gray-900 dark:text-white">
                <Link to={"http://res.cloudinary.com/dso0reuld/image/upload/v1714589234/pptabus8chyhn4t9rh4b.pdf"}>click to see notes</Link>
              </p>
              <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                Delivered
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
