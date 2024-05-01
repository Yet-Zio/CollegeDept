import { useParams } from "react-router-dom";
import  AssocaitionNav  from '../shared/AssocaitionNav.jsx'
import Footer from "../../Shared/Footer.jsx";
import Article from "./Article.jsx";
import { useState } from "react";
export default function ArticleViewMore() {
  let { id } = useParams();
  
  useState(()=>{
    const fetchArticleById = async ()=>{
      try {
        console.log(id)
      } catch (error) {
        console.log(error)
      }
    }
    fetchArticleById()
  },[])


  return (
    <>
           <AssocaitionNav/>
           <Article id = {id}/>
           <Footer />
    </>
  )
}
