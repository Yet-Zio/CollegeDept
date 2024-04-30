/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from "react";
import ArticleHistory from "./ArticleHistory";
import EventHistory from "./EventHistory";
import HistoryOptions from "./HistoryOptions";

export default function HistoryContainer() {
  const [isArticle, SetArticle] = useState(false);
  const [isEvent, SetEvent] = useState(false);
  return (
    <>
      {isArticle && !isEvent && <ArticleHistory updateArticleState={SetArticle} />}
      {isEvent && !isArticle && <EventHistory updateEventState={SetEvent} />}
      {!(isArticle && isEvent) && (
        <HistoryOptions
          UpdateState1={SetArticle}
          UpdateState2={SetEvent}
          
        />
      )}
    </>
  );
}
