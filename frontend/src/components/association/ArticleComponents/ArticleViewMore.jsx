import  AssocaitionNav  from '../shared/AssocaitionNav.jsx'
import Footer from "../../Shared/Footer.jsx";
import Article from "./Article.jsx";
import { useSelector } from 'react-redux';
export default function ArticleViewMore() {
  const getCurrentRenderData = useSelector(state=>state.ViewMoreStore.CurrentRenderData)
  console.log(getCurrentRenderData)
  return (
    <>
           <AssocaitionNav/>
           <Article CurrrentData={getCurrentRenderData} />
           <Footer />
    </>
  )
}
