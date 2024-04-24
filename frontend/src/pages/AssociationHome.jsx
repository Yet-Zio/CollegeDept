import { useState } from "react";
import Footer from "../components/Shared/Footer";
import AssocaitionNav from "../components/association/AssocaitionNav";
import AssociationMainBody from "../components/association/AssociationMainBody";
import AssocationArticleBody from "../components/association/AssocationArticleBody";
import AssocationEventBody from "../components/association/AssocationEventBody";
export default function AssociationHome() {
  const [navId, setNavId] = useState(0);
  const handleData = (val)=>{
    setNavId(val)
  }
  return (
    <>
      <AssocaitionNav sendDataToParent={handleData}/>
      {navId===0 && <AssociationMainBody/>}
      {navId ===1 && <AssocationEventBody/>}
      {navId ===2 && <AssocationArticleBody/>}
      <Footer />
    </>
  )
}
