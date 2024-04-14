import spring from "../../../assets/spring.png";

export default function AboutSpring() {
  return (
    <>
      <img src={spring} className="h-[10dvh]" alt="" />
      <span className="h-[80%] text-[#96f583c0] mt-6 text-justify text-lg useinter italic">
        <figure className="max-w-screen-md mx-auto text-center">
          <svg
            className="w-10 h-10 mx-auto mb-3 text-gray-400 dark:text-gray-600"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 18 14"
          >
            <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
          </svg>
          <blockquote>
            <p className="text-lg 2xl:text-xl italic font-medium text-gray-900 dark:text-white">
              &quot;Spring Framework is like a Swiss Army knife for software
              development, especially with microservices. It breaks big apps
              into manageable pieces. With its microservices architecture,
              modules communicate seamlessly. Spring Security ensures data
              safety, and load balancing keeps things running smoothly. It&apos;s
              like having superheroes for your code.&quot;
            </p>
          </blockquote>
          <figcaption 
           onClick={() => {
            window.open("https://spring.io/", "_blank");
          }}
          className="flex items-center justify-center mt-6 space-x-3 rtl:space-x-reverse">
            <img
              className="w-[10dvh] h-6 rounded-full"
              src={spring}
              alt="profile picture"
            />
            <div className="flex items-center divide-x-2 rtl:divide-x-reverse divide-gray-500 dark:divide-gray-700">
              <cite className="ps-3 text-sm text-gray-500 dark:text-gray-400">
                Spring Home
              </cite>
            </div>
          </figcaption>
        </figure>
      </span>
    </>
  );
}
