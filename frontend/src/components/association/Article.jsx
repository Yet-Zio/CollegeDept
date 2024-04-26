/* eslint-disable react/prop-types */
import html2pdf from "html2pdf.js";
import { useEffect } from "react";
// eslint-disable-next-line no-unused-vars
export default function Article({ id }) {
  const item = {
    id: id,
    ProfileImageUrl:
      "https://flowbite.com/docs/images/people/profile-picture-2.jpg",
    imageurl:
      "https://assets-global.website-files.com/61845f7929f5aa517ebab941/6440f9477c2a321f0dd6ab61_How%20Artificial%20Intelligence%20(AI)%20Is%20Used%20In%20Biometrics.jpg",
    ByWhom: "Dr_Atomic",
    Postion: "Web Developer",
    title: "Artificial Inteligence",
    publishedDate: "Feb. 8, 2022",
    descritption: `What is Artificial Intelligence?
  AI is about giving machines the ability to think and learn like humans do. It’s about creating systems that can analyze vast amounts of structured data, describe data, recognize patterns, and make decisions based on that information. But artificial intelligence isn’t just about crunching the numbers or following algorithms. It’s about understanding the human experience and using that understanding to solve problems and make our lives better.
  
  Think about it this way: just as we humans learn from our experiences and adapt to new situations, AI can do the same. They can take in information, process it, and then use that knowledge to tackle challenges in ways that traditional computer programs simply can’t. And the more structured data they have access to, the smarter and more capable they become.
  
  But AI isn’t some abstract concept or futuristic technology. It’s already here, and it’s transforming industries across the board. From healthcare and finance to transportation and entertainment, artificial intelligence is making things faster, smarter, and more efficient. It’s helping doctors diagnose diseases earlier, enabling self-driving cars to navigate city streets safely, and even composing music that tugs at our heartstrings. These are just a few AI examples of how this technology is making a difference.
  
  Types of Artificial Intelligence
  As we explore the fascinating world of artificial intelligence, it’s important to understand that AI is not a monolithic entity. Instead, it comes in various forms, each with its own unique characteristics and capabilities, born from decades of AI research by pioneering computer science experts. According to Simplilearn, AI can be categorized based on capabilities, functionalities, and the technologies they employ, such as machine learning and deep neural networks. Let’s explore these different types of AI.
  
  AI Based on Capabilities
  Narrow AI (Weak AI):
  Focuses on a single task or limited set of functions within a predefined scope (e.g. email spam filters, virtual assistants, game-playing programs). These systems often rely on machine learning and AI training processes to refine their performance.
  
  Artificial General Intelligence (AGI or Strong AI):
  Can perform any intellectual task that a human can, possessing the ability to understand, learn, and apply knowledge across various domains (e.g. writing novels, composing music, solving complex mathematical problems). AGI aims to replicate human intelligence, a goal that has driven researchers since the early days of AI research.
  
  Superintelligent AI:
  Surpasses human intelligence in virtually all domains, with the capacity to learn, reason, and make decisions at a level far beyond human capabilities (e.g., a hypothetical AI system that can solve global challenges like poverty, and disease more effectively than humans).
  
  AI Based on Functionality
  Reactive Machines: Respond to specific inputs or stimuli in real-time without relying on memory or past experiences; follow predefined rules and do not have the ability to learn or adapt (e.g., basic chatbots, industrial robots designed for specific tasks).
  Limited Memory: Can learn from historical data and use past experiences to inform current decisions and actions; typically short-term and focused on a specific task (e.g., self-driving cars, personal assistants that learn user preferences, fraud detection systems). These systems often employ machine learning and deep learning algorithms to process data and improve performance.
  Theory of Mind: Can understand and interpret the mental states, beliefs, and intentions of other intelligent entities; capable of engaging in social interactions and exhibiting empathy (e.g., a hypothetical system that can provide personalized mental health support or engage in complex negotiations).
  Self-Aware: Possesses consciousness, self-awareness, and the ability to understand its own existence; has subjective experiences and can reflect on its own thoughts and actions (e.g., a hypothetical system that can contemplate its own purpose, develop its own goals, and make autonomous decisions).
  AI Based on Technologies
  Machine Learning:
  Subset of AI that involves the development of algorithms and statistical models, enabling systems to learn and improve from experience without being explicitly programmed; trains machine learning models on large datasets to identify patterns, make predictions, and take actions (e.g., recommendation systems, credit scoring models, predictive maintenance systems). This field has been a significant focus for AI researchers and computer science experts.
  
  Deep Learning:
  Advanced form of machine learning inspired by the structure and function of the human brain; utilizes artificial neural networks with multiple layers to process and learn from vast amounts of data; achieved breakthroughs in image and speech recognition, natural language processing (NLP), and autonomous systems (e.g., facial recognition systems, voice assistants, self-driving cars). Deep neural networks are a key component of many modern artificial intelligence systems.
  
  Natural Language Processing:
  Focuses on enabling computers to understand, interpret, and generate human language; employed in language translation, sentiment analysis, text summarization, and chatbots; allows machines to interact with humans using natural language (e.g., machine translation tools, voice-controlled smart home devices, content analysis software).
  
  Robotics:
  Involves the development of intelligent machines that can perform tasks autonomously or with minimal human intervention; combines AI with advanced sensors and actuators to enable machines to perceive, make decisions, and control actions (e.g., industrial robots, humanoid robots, autonomous drones, robotic surgeons).
  
  Computer Vision:
  Artificial intelligence technology that allows computers to interpret and understand visual information from the world; encompasses AI techniques such as image recognition, object detection, and facial recognition; used in self-driving cars, medical imaging analysis, and surveillance systems (e.g., autonomous vehicles, medical diagnostic tools, security cameras with facial recognition).
  
  Expert Systems:
  AI programs that emulate the decision-making ability of a human expert in a specific domain; use a knowledge base and a set of rules to provide advice, diagnose problems, or make decisions (e.g., medical diagnosis systems, financial risk assessment tools, manufacturing process optimization software).
  
  These different types of AI showcase the diverse ways in which artificial intelligence can be applied to solve problems, automate tasks, and enhance human capabilities.
  
  Reference: Simplilearn (2024).`,
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
              {descriptionArray.map((sentence, index) => (
                <>
                  {index === 1 && (
                    <img
                      src={item.imageurl}
                      alt=""
                      className="rounded-xl mb-7 mt-7"
                    />
                  )}
                  <span
                    className="text-justify text-sm md:text-lg text-[#c7c7c7]"
                    key={index}
                  >
                    {sentence} <br />
                    <br />
                  </span>
                </>
              ))}
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
