/* eslint-disable react/prop-types */
import { useEffect,  useState } from "react";
import { useNavigate } from 'react-router-dom';
import {useDispatch } from 'react-redux'
import { ChangeViewMore } from "../../../redux/Association/CurrentVIewMoreSlice";

export default function Grid({ ContentItem }) {
  const navigate = useNavigate();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const UpdateViewMoreState = useDispatch()
  useEffect(() => {
    const fetchItems = async () => {
      try {
        const resolvedItems = await Promise.all(ContentItem);
        setItems(resolvedItems.filter(item => item && item.description));
        setLoading(false);
        console.log(ContentItem)
      } catch (error) {
        console.error("Error fetching items:", error);
        setLoading(false);
      }
    };

    fetchItems();

  }, [ContentItem]);

  const ButtonTrigger = (val) => {
    UpdateViewMoreState(ChangeViewMore({CurrentRenderData: items[val]}))
    navigate(`/article/item`);
  };
  const renderIntroduction = (description) => {
    const lines = description.split('\n');
    const introduction = lines.slice(0, 5).join('\n'); 
    return introduction;
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex justify-center items-center">
      <div className="h-auto w-[100%] min-h-screen grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 bg-[#0b0b0b] ps-11 pe-11 pt-4 pb-4">
        {items.map((item,index) => (
          <div
            key={item.id}
            className="flex h-[450px] flex-col justify-center items-center z-10 shadow-sm shadow-white rounded-t-3xl"
          >
            <div className="h-[45%] w-[100%] rounded-t-3xl overflow-hidden">
              <img
                src={item.imageurl}
                className="object-contain hover:scale-150 duration-200"
                alt=""
              />
            </div>
            <div className="h-[55%] w-[100%] flex flex-col justify-center items-center text-white overflow-hidden">
              <span className="mb-10 text-xl text-orange-400 text-center md:text-lg">
                {item.title}
              </span>
              <div className="mb-6 h-[100px] p-4 text-justify text-sm lg:text-[1rem] text-white 2xl:text-lg overflow-auto">
                <p dangerouslySetInnerHTML={{ __html: renderIntroduction(item.description) }}></p>
              </div>
              <span className="flex justify-end w-full">
                <button
                  onClick={() => ButtonTrigger(index)}
                  className="bg-orange-400 text-[#262626] pt-1 pb-1 ps-3 pe-3 rounded-sm font-extrabold shadow-sm hover:shadow-none hover:translate-y-[1px] hover:translate-x-[1px] duration-100 hover:text-[black] hover:font-bold hover:bg-orange-600 shadow-white  me-6"
                >
                  View
                </button>
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
