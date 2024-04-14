import tailwind from "../../../assets/Tailwind.png";

export default function AboutTailwind() {
  return (
    <>
      <img src={tailwind} className="h-[20dvh] w-[30dvh]" alt="" />
      <span className="h-[80%] text-[#e4e4e4d3] mt-6 text-justify text-lg useinter italic">
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
            <p className="text-2xl italic font-medium text-gray-900 dark:text-white">
              &quot;Tailwind CSS is a handy tool for web design. It gives you
              ready-to-use classes to style your website without writing much
              CSS. With Tailwind, you can quickly create modern, responsive
              designs, making web development easier and faster.&quot;
            </p>
          </blockquote>
          <figcaption
            onClick={() => {
              window.open("https://tailwindcss.com/", "_blank");
            }}
            className="flex items-center justify-center mt-6 space-x-3 rtl:space-x-reverse"
          >
            <img
              className="w-9 h-6 rounded-full"
              src={tailwind}
              alt="profile picture"
            />
            <div className="flex items-center divide-x-2 rtl:divide-x-reverse divide-gray-500 dark:divide-gray-700">
              <cite className="ps-3 text-sm text-gray-500 dark:text-gray-400">
                Tailwind Home
              </cite>
            </div>
          </figcaption>
        </figure>
      </span>
    </>
  );
}
