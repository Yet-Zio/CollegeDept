import { useState } from "react";

export default function UpCommingEvent() {
  const [index, setIndex] = useState(0);
  const upCommingEventsItems = [
    {
      id: 1,
      imageurl:
        "https://www.nyit.edu/files/events/Event_20181004_NavigatingTheTechCenterMarketplace_Hero.jpg",
      title: "Ctrl Freaks",
      description:
        " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore quibusdam ducimus libero adtempora doloribus expedita laborum saepe voluptas perferendis delectus assumenda rerum, culpaaperiam dolorum, obcaecati corrupti aspernatur a. ",
      AnnouncedBy: "gay bijo",
      Position: "leader of gay assocsiation",
    },
    {
      id: 2,
      imageurl:
        "https://www.shutterstock.com/image-photo/saint-petersburg-russia-october-2017-600nw-746290396.jpg",
      title: "Breaking Z++",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore quibusdam ducimus libero adtempora doloribus expedita laborum saepe voluptas perferendis delectus assumenda rerum, culpaaperiam dolorum, obcaecati corrupti aspernatur a.",
      AnnouncedBy: "gay bijo again",
      Position: "leader of lgbtq++",
    },
    {
      id: 3,
      imageurl:
        "https://thumbs.dreamstime.com/b/moscow-russia-october-epicenter-counter-strike-global-offensive-esports-event-main-stage-venue-editorial-image-tournament-130662429.jpg",
      title: "no ass no play",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore quibusdam ducimus libero adtempora doloribus expedita laborum saepe voluptas perferendis delectus assumenda rerum, culpaaperiam dolorum, obcaecati corrupti aspernatur a.",
      AnnouncedBy: "DrAtomic",
      Position: "the All Father",
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
      <section className="bg-[#0B0A0A]">
        <div className="relative flex">
          <div className="min-h-screen lg:w-1/3"></div>

          <div className="container flex flex-col justify-center w-full min-h-screen px-6 py-10 mx-auto lg:absolute lg:inset-x-0">
            <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">
              UpComming <span className="text-[#DC8733]">Events</span>
            </h1>

            <div className="mt-10 lg:mt-20 lg:flex lg:items-center">
              <img
                className="object-cover object-center w-full lg:w-[32rem] rounded-lg h-96"
                src={upCommingEventsItems[index].imageurl}
                alt=""
              />

              <div className="mt-8 lg:px-10 lg:mt-0">
                <h1 className="text-2xl font-semibold text-gray-800 dark:text-white lg:w-72">
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
            </div>

            <div className="flex items-center justify-between mt-12 lg:justify-start">
              <button
                onClick={() => previousBtnTrigger()}
                title="left arrow"
                className="p-2 text-[#DC8733] transition-colors duration-300 border rounded-full rtl:-scale-x-100 dark:border-gray-700 hover:bg-[#dc8833a5]"
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
              </button>

              <button
                onClick={() => nextBtnTrigger()}
                title="right arrow"
                className="p-2 text-[#DC8733] transition-colors duration-300 border rounded-full rtl:-scale-x-100 dark:border-gray-700 hover:bg-[#dc8833a5]"
              >
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
      </section>
    </>
  );
}
