import Footer from "../components/Shared/Footer";
import AssocaitionNav from "../components/association/shared/AssocaitionNav";
import AssociationMainBody from "../components/association/AssociationMainBody";
export default function AssociationHome() {
  return (
    <>
      <AssocaitionNav/>
      <div className="mt-10">
      <AssociationMainBody/>
      <Footer />
      </div>
      
    </>
  )
}
