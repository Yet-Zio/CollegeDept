import Table from "../../Shared/Tables/Table";


export default function StaffMangerLayout() {
  return (
    <>
        <div className="h-[100dvh] w-[100%] flex flex-col justify-center items-start mt-16 ">
            <div className="w-[98%] h-[74%]">
                <Table className=""/>
            </div>
        </div>
    </>
  )
}
