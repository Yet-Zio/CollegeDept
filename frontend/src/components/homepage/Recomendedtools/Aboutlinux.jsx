import tuxImage from "../../../assets/TuxLinux.png";

export default function Aboutlinux() {
  return (
    <>
      <img src={tuxImage} className="h-[25dvh] w-[20dvh]" alt="" />
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
            <p className="text-lg 2xl:text-xl italic font-medium text-gray-900 dark:text-white">
              &quot;Linux is a game-changer for coders and tech enthusiasts.
              It&apos;s like a customizable playground where you can bend and
              tweak things to your liking. Being open-source means there&apos;s
              a vibrant community constantly improving it. Did you know Android
              and many internet servers run on Linux? Learning Linux isn&apos;t
              just about mastering an OS; it&apos;s like getting a backstage
              pass to the coolest tech show in town.&quot;
            </p>
          </blockquote>
          <figcaption
            onClick={() => {
              window.open("https://www.linuxfoundation.org/", "_blank");
            }}
            className="flex items-center justify-center mt-6 space-x-3 rtl:space-x-reverse"
          >
            <img
              className="w-6 h-6 rounded-full"
              src={tuxImage}
              alt="profile picture"
            />
            <div className="flex items-center divide-x-2 rtl:divide-x-reverse divide-gray-500 dark:divide-gray-700">
              <cite className="ps-3 text-sm text-gray-500 dark:text-gray-400">
                Linux Foundation
              </cite>
            </div>
          </figcaption>
        </figure>
      </span>
    </>
  );
}
