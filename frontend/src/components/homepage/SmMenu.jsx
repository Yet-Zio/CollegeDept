export default function SmMenu() {  
    const menuItemsList=[
        {
          iconId:1,
          description:"Student Login"
        },
        {
          iconId:2,
          description:"Staff Login"
        },
        {
          iconId:3,
          description:"Association Login"
        },
        {
          iconId:4,
          description:" Recomended Tools"
        },
        {
          iconId:5,
          description:"About Us"
        },
        {
          iconId:6,
          description:"About Department"
        },
        {
          iconId:7,
          description:"Contact Us"
        }
      ];
  return (
    <>
        <div className="h-[98%] w-[98%] flex justify-between flex-col items-center">
        {menuItemsList.map((item, index) => (
        <button
          key={index}
        //   onClick={() => redirectMenu(item.iconId)}
          className="bg-[#E77500] rounded-lg sm:w-[100%] sm:h-[10%] flex justify-start items-center text-[20px] w-[90%] h-[10%] select-none active:bg-[#e77400d8]"
        >
          <span className="ml-2 text-sm flex font-semibold">{item.description}</span>
        </button>
      ))}

      <div
        // onClick={() => redirectMenu(8)}
        className="bg-[#474237] active:bg-[#33312d] w-[100%] h-[10%] flex justify-start items-center text-white select-none rounded-xl"
      >
        <div className="ml-2 w-[3dvh] h-[3dvh] rounded-full flex justify-center items-center bg-white" />
        <span className="ml-2">Profile</span>
      </div>
        </div>
    </>
  )
}
