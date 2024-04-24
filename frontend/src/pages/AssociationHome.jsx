import Footer from "../components/Shared/Footer";
import ArticlePrev from "../components/association/ArticlePrev";
import AssocaitionNav from "../components/association/AssocaitionNav";
import EventsPrev from "../components/association/EventsPrev";
import HotTopics from "../components/association/HotTopics";
import UpCommingEvent from "../components/association/UpCommingEvent";
export default function AssociationHome() {

  return (
    <>
      <AssocaitionNav/>
      <UpCommingEvent />
      <EventsPrev />
      <HotTopics />
      <ArticlePrev />
      <Footer />
    </>
  )
}
