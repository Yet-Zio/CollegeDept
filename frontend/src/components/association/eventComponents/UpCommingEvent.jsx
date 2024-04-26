import { useState } from "react";
import { motion } from "framer-motion";

export default function UpCommingEvent() {
  const [index, setIndex] = useState(0);

  const upCommingEventsItems = [
    {
      id: 1,
      imageurl:
        "https://www.nyit.edu/files/events/Event_20181004_NavigatingTheTechCenterMarketplace_Hero.jpg",
      title: "TeamsCode Spring 2024",
      description:
        "Teams of up to 4 members will have 3 hours to solve around 10 problems. There are two divisions: Novice and Advanced, so no matter what skill level you are, there is a place for you.The guest speaker event will feature Yipeng Li, an Expert Data Scientist at SAP, working on chatbots for business application, and Fumin Zhang, a Software Engineer Manager in AWS (Amazon Web Services) that leads innovation and software service development at cloud scale. The schedule is given in the WebSite Check it out",
      AnnouncedBy: "Yipeng Li",
      Position: "Expert Data Scientist at SAP",
    },
    {
      id: 2,
      imageurl:
        "https://afd-imaginecup-prod.azurefd.net/blob/imagine/public/images/RebrandV2_Homepage_Hero_1000x500.png",
      title: "Imagine Cup",
      description:
        "Imagine Cup is more than a competition; it’s a transformative journey that will help founders turn their ideas into reality. Join to receive cutting-edge technology, technical and entrepreneurial mentorship, and the opportunity for global recognition and prizes that will propel your startup forward. ",
      AnnouncedBy: "Microsoft",
      Position: "Microsoft Corporation",
    },
    {
      id: 3,
      imageurl:
        "https://thumbs.dreamstime.com/b/moscow-russia-october-epicenter-counter-strike-global-offensive-esports-event-main-stage-venue-editorial-image-tournament-130662429.jpg",
      title: "Computer Olympiad",
      description:
        "The International Computer Science Olympiad (SOF ICSO) is an annual academic competition organized by SOF for students in classes 1-10 to assess their knowledge and skills in computers and information technology. The curriculum of the SOF Olympiad is designed to provide young students with a platform to identify and nurture their academic talents in the field of computers, preparing them for the competitive world from an early age. Olympiads, as prescribed by NEP, facilitate the development of problem-solving skills, critical thinking, and cognitive skills in students.",
      AnnouncedBy: "sof",
      Position: "science olympiad foundation",
    },
  ];
  const previousBtnTrigger = () => {
    if (index == 0) setIndex(2);
    else setIndex(index - 1);
  };
  const nextBtnTrigger = () => {
    if (index == 2) setIndex(0);
    else setIndex(index + 1);
  };
  return (
    <>
      <div className="bg-[#0B0A0A]">
        <div className="flex items-center">
          <div className="h-[100dvh]"></div>
          <div className="container flex flex-col justify-center w-full px-6 py-10 mx-auto">
            <div className="flex items-center">
              <div className="flex flex-col w-full lg:mb-[7dvh] lg:mt-[5dvh]">
                <h1 className="text-3xl font-extrabold text-center lg:text-7xl 2xl:text-8xl">
                <span className="text-transparent bg-gradient-to-br bg-clip-text from-blue-500 via-red-500 to-black">
                      Event&nbsp;
                  </span>
                  <span className="text-transparent bg-gradient-to-br bg-clip-text from-orange-500 via-indigo-500 to-black">
                     Coming&nbsp;
                  </span>

                  <span className="text-transparent bg-gradient-to-tr bg-clip-text from-[orange] via-pink-500 to-orange-500">
                     Soon ....
                  </span>
                </h1>

                <p className="max-w-3xl mx-auto mt-6 text-lg text-center text-gray-700 dark:text-white md:text-xl">
                  Register for {upCommingEventsItems[index].title}.... Down Below ⬇️
                </p>

                <div className="flex flex-col mt-8 space-y-3 sm:-mx-2 sm:flex-row sm:justify-center sm:space-y-0">
                  <input
                    id="email"
                    type="text"
                    className="px-6 py-3 text-gray-300  border rounded-md bg-[#000000]  dark:border-gray-600 focus:border-orange-400 focus:ring-orange-500 focus:ring-opacity-40 focus:outline-none focus:ring sm:mx-2"
                    placeholder="Email Address"
                  />

                  <button className="px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-orange-500 rounded-md hover:bg-orange-800 focus:bg-orange-600 focus:outline-none sm:mx-2">
                    Register
                  </button>
                </div>
              </div>
            </div>
            
            <motion.div
             key={upCommingEventsItems[index].id}
             initial={{ x: -200, opacity: .1 }}
             animate={{ x: 0, opacity: 1 }}
             transition={{ duration: 1 }}
              className="mt-10 lg:mt-0 lg:flex lg:justify-center lg:items-center"
            >
              <img
                className="object-cover object-center w-full lg:w-[32rem] rounded-lg h-96"
                src={upCommingEventsItems[index].imageurl}
                alt=""
              />

              <div className="mt-8 lg:px-10 lg:mt-0">
                <h1 className="text-2xl font-semibold text-gray-800 dark:text-white lg:w-72 hover:text-orange-600 duration-150">
                  {upCommingEventsItems[index].title}
                </h1>

                <p className="max-w-lg mt-6 text-gray-500 dark:text-gray-400">
                  {upCommingEventsItems[index].description}
                </p>

                <h3 className="mt-6 text-lg font-medium text-blue-500">
                  {upCommingEventsItems[index].AnnouncedBy}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {upCommingEventsItems[index].Position}
                </p>
              </div>
            </motion.div>

            <div className=" container flex items-center justify-between mt-12 lg:w-[90%]">
              <button
                onClick={() => previousBtnTrigger()}
                title="Previous"
                className="p-2 mr-2 text-[#DC8733] transition-colors duration-300 border rounded-md flex rtl:-scale-x-100 hover:bg-[#dc8833a5] xl:ml-[20dvh] "
              >
                 <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M15 19l-7-7 7-7" />
                </svg>
                Prev
              </button>
              <button
                onClick={() => nextBtnTrigger()}
                title="Next"
                className="p-2 text-[#DC8733] transition-colors duration-300 border rounded-md rtl:-scale-x-100 flex  hover:bg-[#dc8833a5] xl:mr-[10dvh]"
              >
                Next
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
