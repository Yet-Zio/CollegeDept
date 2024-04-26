import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Footer from "../components/Shared/Footer";
import Nav from "../components/Shared/Nav";
import Creators from "../components/DeptOfCs/Creators";
import Div1 from "../components/DeptOfCs/Div1";
import News from "../components/DeptOfCs/News";
import OutComes from "../components/DeptOfCs/OutComes";
import UpCommingEvent from "../components/association/eventComponents/UpCommingEvent";
import ArticlePrev from "../components/association/ArticleComponents/ArticlePrev";
import { motion, useAnimation } from "framer-motion";


export default function HomePage() {
  const [valueFromChild, setValueFromChild] = useState(true);
  const selectedMenu = useSelector((state)=>state.menuOpt);
  const handleValueFromChild = (value) => {
    setValueFromChild(value);
  };
  const [isVisible, setIsVisible] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const top = window.scrollY;
      const height = window.innerHeight;
      const bottom = top + height;

      const element = document.getElementById('upCommingEvent');
      const elementTop = element.offsetTop;
      const elementBottom = elementTop + element.offsetHeight;

      if (elementTop < bottom && elementBottom > top) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isVisible) {
      controls.start({
        opacity: 1,
        x: 0,
        transition: { duration: 1 },
      });
    } else {
      controls.start({
        opacity: .3,
        x: -200,
      });
    }
  }, [isVisible, controls]);
  return (
    <>
    <Nav sendDataToParent={handleValueFromChild}/>
    
   {(valueFromChild || selectedMenu.isWdithLow) &&
    <div>
    <Div1 />
    <OutComes />
    <News />
    <div className="h-[1px] w-full bg-[#44310f]"></div>
    <motion.div
            id="upCommingEvent"
            initial={{ opacity: .3, x: -200 }}
            animate={controls}
            className="bg-black"
          >
            <UpCommingEvent />
          </motion.div>
    <div className="h-[1px] w-full bg-[#44310f]"></div>
    <ArticlePrev />
    <Creators />
    <Footer />
    </div>}
    </>
  )
}
