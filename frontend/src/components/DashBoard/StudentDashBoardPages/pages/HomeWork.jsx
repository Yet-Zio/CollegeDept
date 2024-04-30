import benzi from '../../../../assets/hikigaya.jpeg'
export default function HomeWork() {
  return (
    <>
    <div className="h-auto overflow-hidden w-[100%] ">

        <div className="h-[100%] w-[100%] ms-3 mt-20 flex justify-start items-center overflow-auto ">


        <article className="w-[98%] bg-gray-300 rounded-lg">
    <div className="flex items-center mb-4">
        <img className="w-10 h-10 me-4 rounded-full" src={benzi} alt=""/>
        <div className="font-medium dark:text-black">
            <p>Jese Leos <time dateTime="2014-08-16 19:00" className="block text-sm text-black-500 dark:text-black-400">Gayism</time></p>
        </div>
    </div>
    <footer className="mb-5 text-sm text-black-500 dark:text-black-400"><p>Uploaded on <time dateTime="2017-03-03 19:00">March 3, 2017</time></p></footer>
    <p className="mb-2 text-black-500 dark:text-black-400">This is my third Invicta Pro Diver. They are just fantastic value for money. This one arrived yesterday and the first thing I did was set the time, popped on an identical strap from another Invicta and went in the shower with it to test the waterproofing.... No problems.</p>
    <p className="mb-3 text-black-500 dark:text-black-400">It is obviously not the same build quality as those very expensive watches. But that is like comparing a Citroën to a Ferrari. This watch was well under £100! An absolute bargain.</p>

</article>

        </div>

    </div>
    </>
  )
}
