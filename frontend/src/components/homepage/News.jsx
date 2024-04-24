import { Link } from "react-router-dom";
export default function News() {
  const newsItems = [
    {
      id: 1,
      description:
        "Dear students and faculty members, we are pleased to inform you that [Date] has been designated as a holiday for all members of our college community. This decision has been made in recognition of [reason]. We encourage everyone to utilize this well-deserved break to unwind, recharge, and engage in activities that promote personal well-being and relaxation. Whether it's spending quality time with loved ones, pursuing personal hobbies, or simply enjoying a peaceful day of rest, we hope you make the most of this opportunity. Wishing you all a pleasant and rejuvenating day off!",
      ImageUrl:
        "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
      byWhom: "Benziger Raj",
      positon: "Head of Department",
    },
    {
      id: 2,
      description:
        "Attention all students! We are excited to announce the release of the examination schedule for the upcoming [Semester/Year]. The detailed timetable, inclusive of exam dates, times, and venues, has been meticulously prepared by the college examination department. Students are strongly advised to carefully review the schedule and ensure they are well-prepared for their respective examinations. Additionally, we encourage proactive planning and time management to optimize study schedules and minimize stress levels during this period. For any queries or clarifications regarding the exam schedule, please reach out to the examination department or refer to the official college website. Wishing each and every one of you the best of luck in your preparations!",
      ImageUrl:
        "https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
      byWhom: "Leena U",
      positon: "Senior Proffessor",
    },
    {
      id: 3,
      description:
        "We are pleased to announce the results of the [Semester/Year] examinations held in [Month/Year]. Students can now access their results on the college website or through their student portals. Congratulations to all the successful candidates! For those who couldn't achieve the desired results, don't lose hope, and remember that every setback is an opportunity for growth",
      ImageUrl:
        "https://images.unsplash.com/photo-1488508872907-592763824245?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      byWhom: "Aravind Nair",
      positon: "Newby",
    },
  ];
  return (
    <>
      <section className="dark:bg-[#0b0a0a]">
        <div className="container-lg px-6 py-10 mx-auto">
          <div className="mt-6 md:flex md:items-center md:justify-between">
            <div>
              <h1 className="text-2xl font-bold text-[#fffefd] capitalize lg:text-3xl">
                Department News
              </h1>

              <div className="flex mx-auto mt-6">
                <span className="inline-block w-40 h-1 bg-[#DC8733] rounded-full"></span>
                <span className="inline-block w-3 h-1 mx-1 bg-[#DC8733] rounded-full"></span>
                <span className="inline-block w-1 h-1 bg-[#DC8733] rounded-full"></span>
              </div>
            </div>

            <div className="flex justify-between mt-8 md:mt-0">
              <Link
                to={"/news"}
                title="left arrow"
                className="p-2 mx-3 text-gray-800 transition-colors duration-300 border rounded-full rtl:-scale-x-100 dark:text-gray-200 dark:hover:bg-[#DC8733] dark:border-gray-700 hover:bg-gray-100"
              >
                View More
              </Link>
            </div>
          </div>

          <section className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 lg:grid-cols-2 xl:grid-cols-3">
            {newsItems.map((item) => {
              return (
                <div
                  key={item.id}
                  className="p-8 border rounded-lg dark:border-gray-700"
                >
                  <div className="flex items-center mt-8 -mx-2 mb-6 ">
                    <img
                      className="object-cover mx-2 rounded-full w-14 shrink-0 h-14 ring-4 ring-[#DC8733]"
                      src={item.ImageUrl}
                      alt=""
                    />

                    <div className="mx-2">
                      <h1 className="font-semibold text-white">
                        {item.byWhom}{" "}
                      </h1>
                      <span className="text-sm dark:text-gray-400">
                        {item.positon}
                      </span>
                    </div>
                  </div>
                  <p className="leading-loose text-justify text-white">{item.description}</p>
                </div>
              );
            })}
          </section>
        </div>
      </section>
    </>
  );
}
