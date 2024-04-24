import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function HotTopics() {
  const [index, setIndex] = useState(0);
  const previousBtnTrigger = () => {
    if (index == 0) setIndex(2);
    else setIndex(index - 1);
  };
  const nextBtnTrigger = () => {
    if (index == 2) setIndex(0);
    else setIndex(index + 1);
  };

  const [isVisible, setIsVisible] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const top = window.scrollY;
      const height = window.innerHeight;
      const bottom = top + height;

      const element = document.getElementById("HotTopics");
      const elementTop = element.offsetTop;
      const elementBottom = elementTop + element.offsetHeight;

      if (elementTop < bottom && elementBottom > top) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isVisible) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 1 },
      });
    } else {
      controls.start({
        opacity: 0.3,
        y: 100,
      });
    }
  }, [isVisible, controls]);

  const HotTopics = [
    {
      id: 1,
      imageurl:
        "https://assets-global.website-files.com/61845f7929f5aa517ebab941/6440f9477c2a321f0dd6ab61_How%20Artificial%20Intelligence%20(AI)%20Is%20Used%20In%20Biometrics.jpg",
      title: "Artificial Inteligence",
      description:
        "With all the hype around Artificial Intelligence - robots, self-driving cars, etc. - it can be easy to assume that AI doesn’t impact our everyday lives. In reality, most of us encounter Artificial Intelligence in some way or the other almost every single day. From the moment you wake up to check your smartphone to watching another Netflix recommended movie, AI has quickly made its way into our everyday lives. According to a study by Statista, the global AI market is set to grow up to 54 percent every single year. But what exactly is AI? Will it really serve good to mankind in the future? Well, there are tons of advantages and disadvantages of Artificial Intelligence which we’ll discuss in this article. But before we jump into the pros and cons of AI, let us take a quick glance over what is AI.",
      AnnouncedBy: "Yipeng Li",
      Position: "Expert Data Scientist at SAP",
    },
    {
      id: 2,
      imageurl:
        "https://media.licdn.com/dms/image/D5612AQHknxRVK-oR9A/article-cover_image-shrink_600_2000/0/1695877101109?e=2147483647&v=beta&t=0xQ2EF8clAS5Vwcqy3bbMA6oFU7g6x3srrrAeA6oLH8",
      title: "Block Chain Tchnology",
      description:
        "Over the past few years, you have consistently heard the term ‘blockchain technology,’ probably regarding cryptocurrencies, like Bitcoin. In fact, you may be asking yourself, “what is blockchain technology?” It seems like blockchain is a platitude but in a hypothetical sense, as there is no real meaning that the layman can understand easily. It is imperative to answer “what is blockchain technology, “including the technology that is used, how it works, and how it’s becoming vital in the digital world.As blockchain continues to grow and become more user-friendly, the onus is on you to learn this evolving technology to prepare for the future. If you are new to blockchain, then this is the right platform to gain solid foundational knowledge.",
      AnnouncedBy: "Microsoft",
      Position: "Microsoft Corporation",
    },
    {
      id: 3,
      imageurl:
        "https://npr.brightspotcdn.com/dims4/default/046d148/2147483647/strip/true/crop/7680x5120+0+0/resize/880x587!/quality/90/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2F78%2Fdf%2Fa027f12342b1ab320dc808aee3b9%2Fadobestock-568336762.jpeg",
      title: "Climate Change",
      description:
        "Climate is sometimes mistaken for weather. But climate is different from weather because it is measured over a long period of time, whereas weather can change from day to day, or from year to year. The climate of an area includes seasonal temperature and rainfall averages, and wind patterns. Different places have different climates. A desert, for example, is referred to as an arid climate because little water falls, as rain or snow, during the year. Other types of climate include tropical climates, which are hot and humid, and temperate climates, which have warm summers and cooler winters.Climate change is the long-term alteration of temperature and typical weather patterns in a place. Climate change could refer to a particular location or the planet as a whole. ",
      AnnouncedBy: "sof",
      Position: "science olympiad foundation",
    },
  ];

  return (
    <>
      <motion.section
        id="HotTopics"
        initial={{ opacity: 0, y: 100 }}
        animate={controls}
        className="bg-[#090909]"
      >
        <h1 className=" flex justify-center items-center text-2xl font-extralight italic p-2 text-orange-600 hover:font-bold duration-150 lg:text-3xl lg:w-96">
          Hot Topics
        </h1>
        <div className="container px-6 py-10 mx-auto overflow-hidden">
          <div className="lg:-mx-6 lg:flex lg:items-center">
            <motion.div
              key={index}
              initial={{ opacity: 0.1, scale:.1,}}
              animate={{opacity:1, scale:1}}
              transition={{ duration: 1 }}
              className="lg:w-1/2 lg:mx-6 w-full h-96 rounded-lg lg:h-[36rem] overflow-hidden"
            >
              <img
                className="object-cover object-center rounded h-full w-full "
                src={HotTopics[index].imageurl}
                alt=""
              />
            </motion.div>

            <div className="mt-8 lg:w-1/2 lg:px-6 lg:mt-0">
              <p className="text-5xl font-semibold text-orange-500 ">“</p>

              <h1 className="text-2xl font-semibold duration-150 text-gray-800 dark:text-white lg:text-3xl lg:w-96 hover:text-orange-600">
                <Link>{HotTopics[index].title}</Link>
              </h1>

              <p className="max-w-lg mt-6 text-gray-500 dark:text-gray-400 ">
                {HotTopics[index].description}
              </p>

              <h3 className="mt-6 text-lg font-medium text-[#ffffff]">
                {HotTopics[index].AnnouncedBy}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {HotTopics[index].Position}
              </p>

              <div className="flex items-center justify-between mt-12 lg:justify-start">
                <button
                  onClick={() => previousBtnTrigger()}
                  title="Previous"
                  className="p-2 mr-2 text-[#DC8733] transition-colors duration-300 border rounded-md flex rtl:-scale-x-100 hover:bg-[#dc8833a5]"
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
                  className="p-2 text-[#DC8733] transition-colors duration-300 border rounded-md rtl:-scale-x-100 flex  hover:bg-[#dc8833a5]"
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
      </motion.section>
    </>
  );
}
