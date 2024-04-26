import React, { Suspense } from "react";
import { useSelector } from "react-redux";
import Spinner from "../Common/Spinner";
const AboutSpring = React.lazy(() => import("../Shared/Recomendedtools/AboutSpring"));
const AboutLinux = React.lazy(() => import("../Shared/Recomendedtools/Aboutlinux"));
const AboutReact = React.lazy(() => import("../Shared/Recomendedtools/AboutReact"));
const AboutAngular = React.lazy(() => import("../Shared/Recomendedtools/AboutAngular"));
const AboutVscode = React.lazy(() => import("../Shared/Recomendedtools/AboutVscode"));
const AboutTailwind = React.lazy(() =>
  import("../Shared/Recomendedtools/AboutTailwind")
);

export default function DisplayRecomentation() {
  const selectedMenu = useSelector((state) => state.menuOpt);
  return (
    <>
      <Suspense fallback={<Spinner />}>
        {(selectedMenu.RecomendedToolsOptions ==1) && <AboutLinux/>}
        {( selectedMenu.RecomendedToolsOptions ==2) && <AboutSpring/>}
        {( selectedMenu.RecomendedToolsOptions ==3) && <AboutReact/>}
        {(selectedMenu.RecomendedToolsOptions ==4) && <AboutAngular/>}
        {( selectedMenu.RecomendedToolsOptions ==5) && <AboutVscode/>}
        {( selectedMenu.RecomendedToolsOptions ==6 ) && <AboutTailwind/>}
      </Suspense>
    </>
  );
}
