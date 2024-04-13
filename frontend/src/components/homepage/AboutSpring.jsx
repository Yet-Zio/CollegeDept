import spring from '../../assets/spring.png';

export default function AboutSpring() {
  return (
    <>
        <img src={spring} className="h-[20dvh]" alt="" />
            <span className="h-[80%] text-[#00c72bda] mt-6 text-justify">
            picture this: Spring Framework is like the Swiss Army knife of software development, 
            especially when you&apos;re diving into the world of microservices. It&apos;s not just about building one big monolithic application anymore; 
            it&apos;s about breaking things down into smaller, more manageable pieces. That&apos;s where Spring shines. With its microservices architecture, 
            you can split your app into these neat little modules that communicate with each other seamlessly. And let&apos;s talk security Spring&apos;s got your back
             with its robust Spring Security module, making sure only the right folks get access to your precious data. Plus, when it comes to handling loads of traffic,
              Spring&apos;s built-in load balancing features ensure your app stays up and running smoothly, no matter how many users come knocking. It&apos;s like having a team of 
                superheroes protecting your code and keeping things running like a well-oiled machine.
            </span>
    </>
  )
}
