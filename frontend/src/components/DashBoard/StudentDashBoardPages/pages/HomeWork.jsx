import { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';

export default function HomeWork() {
  const currentUser = useSelector((state) => state.user.currentUser)
  const [response, setResponse] = useState([]);
  const [batch , setBatch] = useState(currentUser.batch)
console.log(batch)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/student/getHomework/${batch}`);
        setResponse(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="h-auto overflow-hidden w-[100%] ">
        <div className="h-[100%] w-[100%] ms-3 mt-20 flex flex-col gap-11 justify-start items-center overflow-auto ">
            {response.length > 0 ? (
            response.map((item, index) => (
              <article key={index} className="w-[98%] bg-gray-300 rounded-lg">
                <div className="flex items-center mb-4">
                  <img className="w-10 h-10 me-4 rounded-full" src={item.image} alt=""/>
                  <div className="font-medium dark:text-black">
                    <p><time dateTime="2014-08-16 19:00" className="block text-sm text-black-500 dark:text-black-400">{item.subject}</time></p>
                  </div>
                </div>
                <footer className="mb-5 text-sm text-black-500 dark:text-black-400"><p>Uploaded on <time dateTime="2017-03-03 19:00">{item.date}</time></p></footer>
                <p className="mb-2 text-black-500 dark:text-black-400">{item.details}</p>
              </article>
            ))
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </>
  );
}
