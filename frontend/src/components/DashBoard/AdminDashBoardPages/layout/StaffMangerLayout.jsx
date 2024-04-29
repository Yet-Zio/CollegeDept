import StaffTable from "../../Shared/Tables/Table";


export default function StaffMangerLayout() {
  return (
    <>
        <div className="h-[100dvh] w-[100%] flex justify-center items-start mt-16">
            <div className="w-[98%] h-[93%]">
                <StaffTable/>
            </div>
        </div>
    </>
  )
}
