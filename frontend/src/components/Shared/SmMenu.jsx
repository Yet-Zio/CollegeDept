import { Link } from "react-router-dom";

export default function SmMenu() {

  const menuItemsList = [
    {
      iconId: 1,
      description: "Student Login",
      path: "/studentlogin"
    },
    {
      iconId: 2,
      description: "Staff Login",
      path: "/teacherlogin"
    },
    {
      iconId: 3,
      description: "Association Home",
      path: "/home-assoc"
    },
    {
      iconId: 4,
      description: " Recomended Tools",
      path: "/recomended-tools"
    },
    {
      iconId: 5,
      description: "About Creators",
      path: "/about-creators"
    },
    {
      iconId: 6,
      description: "About Staffs",
      path: "/about-staff"
    },
    {
      iconId: 7,
      description: "About Department",
      path: "/about-deapartment"
    },
    {
      iconId: 8,
      description: "Contact Us",
      path: "/contact-us"
    },
  ];
  return (
    <>
      <div className="h-[98%] w-[98%] flex justify-between flex-col items-center">
        {menuItemsList.map((item, index) => (
          <Link to={`${item.path}`}
            key={index}
            className="bg-[#E77500] rounded-lg sm:w-[100%] sm:h-[10%] flex justify-start items-center text-[20px] w-[90%] h-[10%] select-none active:bg-[#e77400d8]"
          >
            <span className="ml-2 text-sm flex font-semibold">
              {item.description}
            </span>
          </Link>
        ))}

        <div
          className="bg-[#474237] active:bg-[#33312d] w-[100%] h-[10%] flex justify-start items-center text-white select-none rounded-xl"
        >
          <div className="ml-2 w-[3dvh] h-[3dvh] rounded-full flex justify-center items-center bg-white" />
          <span className="ml-2">Profile</span>
        </div>
      </div>
    </>
  );
}
