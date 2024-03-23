export default function () {
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
                            <button title="left arrow" className="p-2 mx-3 text-gray-800 transition-colors duration-300 border rounded-full rtl:-scale-x-100 dark:text-gray-200 dark:hover:bg-[#DC8733] dark:border-gray-700 hover:bg-gray-100">
                                View More
                            </button>
                        </div>
                    </div>

                    <section className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 lg:grid-cols-2 xl:grid-cols-3">
                        <div className="p-8 border rounded-lg dark:border-gray-700">
                            <p className="leading-loose text-white">
                                “Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore quibusdam ducimus libero ad
                                tempora doloribus expedita laborum saepe voluptas perferendis delectus assumenda rerum, culpa
                                aperiam dolorum, obcaecati corrupti aspernatur a.”.
                            </p>

                            <div className="flex items-center mt-8 -mx-2">
                                <img className="object-cover mx-2 rounded-full w-14 shrink-0 h-14 ring-4 ring-[#DC8733]" src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="" />

                                <div className="mx-2">
                                    <h1 className="font-semibold text-gray-800 dark:text-white">Robert</h1>
                                    <span className="text-sm text-gray-500 dark:text-gray-400">CTO, Robert Consultency</span>
                                </div>
                            </div>
                        </div>

                        <div className="p-8 border rounded-lg dark:border-gray-700">
                            <p className="leading-loose text-white">
                                “Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore quibusdam ducimus libero ad
                                tempora doloribus expedita laborum saepe voluptas perferendis delectus assumenda rerum, culpa
                                aperiam dolorum, obcaecati corrupti aspernatur a.”.
                            </p>

                            <div className="flex items-center mt-8 -mx-2">
                                <img className="object-cover mx-2 rounded-full w-14 shrink-0 h-14 ring-4 ring-[#DC8733]" src="https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" alt="" />

                                <div className="mx-2">
                                    <h1 className="font-semibold text-white">Jeny Doe</h1>
                                    <span className="text-sm dark:text-gray-400">CEO, Jeny Consultency</span>
                                </div>
                            </div>
                        </div>

                        <div className="p-8 border rounded-lg dark:border-gray-700">
                            <p className="leading-loose text-white">
                                “Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore quibusdam ducimus libero ad
                                tempora doloribus expedita laborum saepe voluptas perferendis delectus assumenda rerum, culpa
                                aperiam dolorum, obcaecati corrupti aspernatur a.”.
                            </p>

                            <div className="flex items-center mt-8 -mx-2">
                                <img className="object-cover mx-2 rounded-full w-14 shrink-0 h-14 ring-4 ring-[#DC8733]" src="https://images.unsplash.com/photo-1488508872907-592763824245?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" />

                                <div className="mx-2">
                                    <h1 className="font-semibold text-gray-800 dark:text-white">Ema Watson </h1>
                                    <span className="text-sm text-gray-500 dark:text-gray-400">Marketing Manager at Stech</span>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </section>
        </>
    )
}