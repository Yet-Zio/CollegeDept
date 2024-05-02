import { useEffect, useState } from "react";
import gay from "../../../../assets/hikigaya.jpeg";
export default function StudyMaterials() {

  const [studyMaterial, setStudyMaterial] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/student/getStudyMaterial/batch2021");
        console.log(response.data)
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setStudyMaterial(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  return (
    <>
      <div className="h-[100dvh] w-[100%]">
        <div className="h-[90%] w-[90%] flex justify-start items-start flex-col mt-24">
          <div className="flex  items-start gap-2.5">
            <img className="w-8 h-8 rounded-full" src={gay} alt="Jese image" />
            <div className="flex flex-col w-full max-w-[100dvh] leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl dark:bg-[#111111]">
              <div className="flex items-center  space-x-2 rtl:space-x-reverse">
                <span className="text-sm font-semibold text-gray-900 dark:text-white">
                  Bijo gay
                  </span>
                <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                  11:46
                </span>
              </div>
              <p className="text-sm font-normal py-2.5 text-gray-900 dark:text-white">
                Math Note Down Below
              </p>
              <p className="text-sm font-normal pb-2.5 text-gray-900 dark:text-white">
                <a
                  href="https://cdn77-pic.xvideos-cdn.com/videos/thumbs169poster/9c/da/ac/9cdaac6d2734aff7f76d968139289daa/9cdaac6d2734aff7f76d968139289daa.7.jpg"
                  className="text-blue-700 dark:text-blue-500 underline hover:no-underline font-medium break-all"
                >
                    click here to see bijo is gay
                </a>
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
