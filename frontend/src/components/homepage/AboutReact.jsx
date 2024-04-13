import react from '../../assets/react.svg';
export default function AboutReact() {
  return (
    <>
        <img src={react} className="h-[20dvh]" alt="" />
            <span className="h-[80%] text-[#00d9ffa2] mt-6 text-justify">
            React! Imagine you&apos;re building a fancy LEGO castle, but instead of using just any old bricks, 
            you&apos;ve got these special ones that magically update themselves whenever you make a change. That&apos;s React in a nutshell. It&apos;s a JavaScript library 
            that&apos;s all about building user interfaces  you know, the stuff people interact with on websites and apps. What makes React stand out is its component-based 
            architecture. You can think of components as building blocks for your UI. Need a button? There&apos;s a component for that. Want to display a list of items? There&apos;s a 
            component for that too. And the best part? React makes it super easy to reuse these components throughout your app, saving you time and keeping your code nice and
             tidy. Oh, and did I mention it&apos;s backed by Facebook and a massive community of developers? So, if you ever get stuck or need help, there&apos;s always someone out there
              ready to lend a hand. React is like having a superpower in your web development toolkit 
             it makes building slick, interactive interfaces a breeze.
            </span>
    </>
  )
}
