/* eslint-disable react/prop-types */
import html2pdf from "html2pdf.js";
import { useEffect } from "react";
// eslint-disable-next-line no-unused-vars
export default function Article({CurrrentData}) {
  const item = {
    id: 1,
    ProfileImageUrl:CurrrentData.profileUrl,
    ByWhom: CurrrentData.firstName+" "+CurrrentData.lastName,
    title: CurrrentData.title,
    publishedDate: CurrrentData.date,
    descritption: CurrrentData.description,
  };
  useEffect(() => {
    document.title ="Article-" + item.title ;
  }, [item.title]);
  const generatePdf = () => {
    const element = document.getElementById("content");
    if (!element) {
      console.error("Content element not found.");
      return;
    }
    const options = {
      // margin: [10, 10, 10, 10],
    };
    const htmlElement = createContainer(element.cloneNode(true));
    html2pdf()
      .from(htmlElement)
      .set(options)
      .save()
      .catch((error) => {
        console.error("Error generating PDF:", error);
      });
  };
  const createContainer = (element) => {

    const MainBody = document.createElement("div");
    MainBody.style.display = "flex";
    MainBody.style.flexDirection = "column";
    MainBody.style.justifyContent = "center";
    MainBody.style.alignItems = "center";
    MainBody.style.width = "100%";
    MainBody.style.pointerEvents = "none";
    MainBody.style.backgroundColor = "#0B0B0B";
    MainBody.style.padding = "30px";
    
    const watermarkContainer = document.createElement("div");
    watermarkContainer.style.position = "absolute";
    watermarkContainer.style.opacity = "0.3";
    watermarkContainer.style.width = "100%";
    watermarkContainer.style.height = "100dvh";
    watermarkContainer.style.pointerEvents = "none";

    const watermark = document.createElement("div");
    watermark.style.fontSize = "40px";
    watermark.style.transform = "rotate(-45deg)";
    watermark.style.color = "#DCDCDC";
    watermark.style.textAlign = "center";
    watermark.style.paddingTop = "200px";
    watermark.innerHTML = "DEPT OF CS";
    watermark.style.zIndex="-10"
    watermarkContainer.appendChild(watermark);

    MainBody.appendChild(element);
    MainBody.append(watermarkContainer);
    return MainBody;
  };
  const descriptionArray = item.descritption.split(/\n\s*\n/);
  return (
    <>
    <div className="mt-16"></div>
      <main
        id="content"
        className="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-[#0B0B0B] antialiased"
      >
        <div className="flex justify-between px-4 mx-auto max-w-screen-xl ">
          <article className="mx-auto w-full">
            <header className="mb-4 lg:mb-6">
              <address className="flex items-center mb-6 not-italic">
                <div className="flex items-center mr-3 text-sm text-gray-900 dark:text-white">
                  <img
                    className="mr-4 w-16 h-16 rounded-full"
                    src={item.ProfileImageUrl}
                    alt={item.ByWhom}
                  />
                  <div>
                    <a
                      href="#"
                      rel="author"
                      className="text-xl font-bold text-gray-900 dark:text-white"
                    >
                      {item.ByWhom}
                    </a>
                    <p className="text-base text-gray-500 dark:text-gray-400">
                      {item.Postion}
                    </p>
                    <p className="text-base text-gray-500 dark:text-gray-400">
                      <time title="February 8th, 2022">
                        {item.publishedDate}
                      </time>
                    </p>
                  </div>
                </div>
              </address>
              <h1 className="mb-4 text-3xl font-extrabold leading-tight text-orange-400 lg:mb-6 lg:text-4xl ">
                {item.title}
              </h1>
            </header>
            <div className="flex flex-col justify-evenly">
            <p className="text-white" dangerouslySetInnerHTML={{ __html: item.descritption }}></p>
            </div>
          </article>
        </div>
      </main>
      <main className="bg-[#0B0B0B] antialiased">
        <div className="flex justify-end px-4 mx-auto max-w-screen-xl ">
          <article className="mx-auto w-full">
            <header className="mb-4 lg:mb-6">
              <address className="flex items-center justify-end mb-6 not-italic">
                <button
                  onClick={() => generatePdf()}
                  className=" mb-3 p-2 text-white bg-orange-400 rounded-md"
                >
                  Download
                </button>
              </address>
            </header>
          </article>
        </div>
      </main>
    </>
  );
}
// const watermarkContainer = document.createElement('div');
//     watermarkContainer.style.position = 'absolute';
//     watermarkContainer.style.opacity = '0.3';
//     watermarkContainer.style.width = '100%';
//     watermarkContainer.style.height = '100dvh';
//     watermarkContainer.style.pointerEvents = 'none';

//     const watermark = document.createElement('div');
//     watermark.style.fontSize = '40px';
//     watermark.style.transform = 'rotate(-45deg)';
//     watermark.style.color = '#DCDCDC';
//     watermark.style.textAlign = 'center';
//     watermark.style.paddingTop = '200px';
//     watermark.innerHTML = 'DEPT OF CS';

//     watermarkContainer.appendChild(watermark);
//     element.append(watermarkContainer)
//it will reflect up on the exsiting html content
// image: { type: 'jpeg', quality: 1 },
// html2canvas: { scale: 2 }, // Adjust scale as needed
// jsPDF: { unit: 'px', format: 'a4', orientation: 'portrait' },
//dropped because the the scleing is too hight the scaling in the html canvas is not relfecting and images not showing dont know the fucking reason  and have fucking time to fix it have to complete the assoc dashboard today itself



// {descriptionArray.map((sentence, index) => (
//   <>
//     {/* {index === 1 && (
//       <img
//         src={item.imageurl}
//         alt=""
//         className="rounded-xl mb-7 mt-7"
//       />
//     )} */}
//     <span
//       className="text-justify text-sm md:text-lg text-[#c7c7c7]"
//       key={index}
//     >
//       {sentence} <br />
//       <br />
//     </span>
//   </>
// ))}