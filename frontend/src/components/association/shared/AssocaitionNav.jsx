import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../../assets/collegedepticon.png";

export default function AssocaitionNav() {
  const [searchQuery, setSearchQuery] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const navigate = useNavigate();
  const fetchedData = [
    {
      id: 1,
      title: "Artificial Intelligence (AI)",
      type: "Article",
    },
    {
      id: 2,
      title: "Neural Networks",
      type: "Article",
    },
    {
      id: 3,
      title: "Data Structures and Algorithms",
      type: "Article",
    },
    {
      id: 4,
      title: "Computer Science Fundamentals",
      type: "Article",
    },
    {
      id: 5,
      title: "Machine Learning",
      type: "Article",
    },
    {
      id: 6,
      title: "Cybersecurity",
      type: "Article",
    },
    {
      id: 7,
      title: "Software Engineering",
      type: "Article",
    },
    {
      id: 8,
      title: "Computer Networks",
      type: "Article",
    },
    {
      id: 9,
      title: "Programming Languages",
      type: "Article",
    },
    {
      id: 10,
      title: "Coding Challenges",
      type: "Article",
    },
    {
      id: 11,
      title: "Bijo is Gay",
      type: "Event",
    },
    {
      id: 12,
      title: "Tech Conference",
      type: "Event",
    },
    {
      id: 13,
      title: "Coding Competition",
      type: "Event",
    },
    {
      id: 14,
      title: "Workshop on Web Development",
      type: "Event",
    },
    {
      id: 15,
      title: "AI/ML Seminar",
      type: "Event",
    },
    {
      id: 16,
      title: "Cyber Security Workshop",
      type: "Event",
    },
    {
      id: 17,
      title: "Tech Startup Meetup",
      type: "Event",
    },
    {
      id: 18,
      title: "Data Science Bootcamp",
      type: "Event",
    },
    {
      id: 19,
      title: "Tech Career Fair",
      type: "Event",
    },
    {
      id: 20,
      title: "Computer Science Alumni Meetup",
      type: "Event",
    },
  ];

  const [isColpase, setColapse] = useState(false);
  const buttonTrigger = () => {
    setColapse(!isColpase);
  };
  const handleSearch = (query) => {
    setSearchQuery(query);
    if (query.trim() !== "") {
      setShowSuggestions(true);
    } else {
      setShowSuggestions(false);
    }
  };

  const filteredSuggestions = fetchedData.filter(
    (data) =>
      data.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      data.type.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const suggestionTrigger = (suggestion) => {
    setSearchQuery(suggestion.title);
    if (suggestion.type == "Event") {
      //add the navigate to evnet navigate
      console.log(suggestion);
    } else {
      navigate(`/article/item/${suggestion.id}`);
    }
    setShowSuggestions(!showSuggestions);
  };
  return (
    <>
      <nav className="bg-[#151515] fixed top-0 w-[100%] z-50">
        <div className="container px-6 py-4 mx-auto">
          <div className="lg:flex lg:items-center">
            <div className="flex items-center justify-between">
              <Link
                to={"/home-assoc"}
                className="md:text-xl xl:text-2xl text-sm font-semibold items-center flex text-[#DC8733]"
              >
                <img
                  src={logo}
                  className="xl:h-[30px] xl:w-[30px] md:h-[2.6dvh] md:w-[2.6dvh] w-[2dvh] h-[2dvh]"
                  alt=""
                />
                Association
              </Link>
              <div className="flex lg:hidden" onClick={() => buttonTrigger()}>
                <button
                  type="button"
                  className="text-white transition-colors hover:text-[#c48749]"
                  aria-label="toggle menu"
                >
                  {!isColpase && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M4 8h16M4 16h16" />
                    </svg>
                  )}

                  {isColpase && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  )}
                </button>
              </div>
            </div>
            <div
              className={`${
                isColpase
                  ? "translate-x-0 opacity-100"
                  : "opacity-0 -translate-x-full"
              } absolute inset-x-0 z-20 flex-1 w-full px-6  py-4 transition-all duration-300 ease-in-out bg-[#151515] lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center lg:justify-end justify-between`}
            >
              <div className="flex flex-col font-semibold text-white xl:text-lg md:text-lg text-sm lg:flex lg:px-16 lg:-mx-4 lg:flex-row lg:items-center">
                <Link
                  to={"/home-assoc"}
                  className="mt-2  duration-300 transform lg:mt-0 lg:mx-4 hover:text-[#DC8733]"
                >
                  Home
                </Link>
                <Link
                  to={"/"}
                  className="mt-2  duration-300 transform lg:mt-0 lg:mx-4 hover:text-[#DC8733]"
                >
                  Dept Home
                </Link>
                <Link
                  to={"/event"}
                  className="mt-2  duration-300 transform lg:mt-0 lg:mx-4 hover:text-[#DC8733]"
                >
                  Event
                </Link>
                <Link
                  to={"/article"}
                  className="mt-2  duration-300 transform lg:mt-0 lg:mx-4 hover:text-[#DC8733]"
                >
                  Articles
                </Link>
                <Link
                  to={"/assoclogin"}
                  className="mt-2  duration-300 transform lg:mt-0 lg:mx-4 hover:text-[#DC8733]"
                >
                  Login
                </Link>

                <div className="relative mt-4 lg:mt-0 lg:mx-4">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <svg
                      className="w-6 font-extrabold h-6 text-[#DC8733]"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                        stroke="currentColor"
                      ></path>
                    </svg>
                  </span>

                  <input
                    onChange={(e) => handleSearch(e.target.value)}
                    type="text"
                    value={searchQuery}
                    className="w-full py-1 pl-10 pr-4 text-[#dad8d8] placeholder-gray-600 bg-[#292929] border-b border-gray-600 dark:placeholder-[#d4d4d4] dark:focus:border-gray-300 lg:w-56 lg:border-transparent focus:outline-none focus:border-gray-600"
                    placeholder="Search"
                  />
                  {showSuggestions && filteredSuggestions.length > 0 && (
                    <ul className="absolute z-10 w-full mt-2 bg-[#6e6e6e]  border border-gray-300 rounded-md shadow-lg">
                      {filteredSuggestions.map((suggestion) => (
                        <li
                          onClick={() => suggestionTrigger(suggestion)}
                          key={suggestion.id}
                          className="px-4 py-2 text-gray-800 border-b duration-150 border-gray-300 cursor-pointer hover:bg-orange-400"
                        >
                          {suggestion.title} ({suggestion.type})
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
