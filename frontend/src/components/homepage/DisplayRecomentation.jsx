import React, { Suspense } from "react";
import { useSelector } from "react-redux";
import Spinner from "../Shared/Spinner";
const AboutSpring = React.lazy(() => import("./Recomendedtools/AboutSpring"));
const AboutLinux = React.lazy(() => import("./Recomendedtools/Aboutlinux"));
const AboutReact = React.lazy(() => import("./Recomendedtools/AboutReact"));
const AboutAngular = React.lazy(() => import("./Recomendedtools/AboutAngular"));
const AboutVscode = React.lazy(() => import("./Recomendedtools/AboutVscode"));
const AboutTailwind = React.lazy(() =>
  import("./Recomendedtools/AboutTailwind")
);

export default function DisplayRecomentation() {
  const selectedMenu = useSelector((state) => state.menuOpt);
  return (
    <>
      <Suspense fallback={<Spinner />}>
        {selectedMenu.isLinux && <AboutLinux/>}
        {selectedMenu.isSpring && <AboutSpring/>}
        {selectedMenu.isReact && <AboutReact/>}
        {selectedMenu.isAngular && <AboutAngular/>}
        {selectedMenu.isVscode && <AboutVscode/>}
        {selectedMenu.isTailwind && <AboutTailwind/>}
      </Suspense>
    </>
  );
}
