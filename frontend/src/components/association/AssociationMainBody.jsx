import ArticlePrev from "./ArticleComponents/ArticlePrev";
import EventsPrev from "./eventComponents/EventsPrev";
import HotTopics from "./ArticleComponents/HotTopics";
import UpCommingEvent from "./eventComponents/UpCommingEvent";

export default function AssociationMainBody() {
  return (
   <>
      <UpCommingEvent />
      <EventsPrev />
      <HotTopics />
      <ArticlePrev />
   </>
  )
}
