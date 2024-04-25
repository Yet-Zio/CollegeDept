import { useParams } from "react-router-dom";
import  AssocaitionNav  from './AssocaitionNav.jsx'
import Footer from "../Shared/Footer.jsx";
import Article from "./Article.jsx";
export default function ArticleViewMore() {
  let { id } = useParams();

  return (
    <>
           <AssocaitionNav/>
           <Article id = {id}/>
           <Footer />
    </>
  )
}
