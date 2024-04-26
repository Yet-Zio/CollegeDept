import react from "../../../assets/react.svg";
export default function AboutReact() {
  return (
    <>
      <img src={react} className="h-[9dvh] lg:h-[15dvh] xl:h-[20dvh]" alt="" />
      <span className="h-[80%] text-[#00d9ffa2] mt-6 text-justify">
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
            <p className="text-sm lg:text-lg 2xl:text-xl italic font-medium text-gray-900 dark:text-white">
              &quot;React is like magic LEGO bricks for web development. Instead
              of static pieces, they update themselves as you build. It&apos;s a
              JavaScript library for creating user interfaces. What sets React
              apart is its component-based approach. Need a button or a list?
              There&apos;s a component for that! Plus, you can reuse components
              across your app easily. Backed by Facebook and a huge community,
              help is always available. React gives you superpowers for building
              slick, interactive interfaces effortlessly.&quot;
            </p>
          </blockquote>
          <figcaption 
           onClick={() => {
            window.open("https://react.dev/", "_blank");
          }}
          className="flex items-center justify-center mt-6 space-x-3 rtl:space-x-reverse">
            <img
              className="w-6 h-6 rounded-full"
              src={react}
              alt="profile picture"
            />
            <div className="flex items-center divide-x-2 rtl:divide-x-reverse divide-gray-500 dark:divide-gray-700">
              <cite className="ps-3 text-sm text-gray-500 dark:text-gray-400">
                React Home
              </cite>
            </div>
          </figcaption>
        </figure>
      </span>
    </>
  );
}
