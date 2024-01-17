import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'

function Info() {
  return (
    <div>
        <Navbar/>

        {/* Hero page  */}
        <div className="pt-80px p-5   mx-auto sm:p-10 md:p-16 dark:bg-gray-800 dark:text-gray-100">
            <div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
                <img src="https://source.unsplash.com/random/480x360" alt="" className="w-full h-60 sm:h-96 dark:bg-gray-500" />
                <div className="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md dark:bg-gray-900">
                    <div className="space-y-2">
                        <a rel="noopener noreferrer" href="#" className="inline-block text-2xl font-semibold sm:text-3xl">The Best Activewear from the Nordstrom Anniversary Sale</a>
                        <p className="text-xs dark:text-gray-400">By
                            <a rel="noopener noreferrer" href="#" className="text-xs hover:underline">Leroy Jenkins</a>
                        </p>
                    </div>
                    <div className="dark:text-gray-100">
                        <p>Insert the actual text content here...</p>
                    </div>
                </div>
            </div>
        </div>
        <section className="dark:bg-gray-800 dark:text-gray-100">
            <div className="container px-6 py-12 mx-auto">
                <div className="grid items-center gap-4 xl:grid-cols-5">
                    <div className="max-w-2xl mx-auto my-8 space-y-4 text-center xl:col-span-2 xl:text-left">
                        <h2 className="text-4xl font-bold">Duo assum utroque appetere an</h2>
                        <p className="dark:text-gray-400">Pri ex magna scaevola moderatius. Nullam accommodare no vix, est ei diceret alienum, et sit cetero malorum. Et sea iudico consequat, est sanctus adipisci ex.</p>
                    </div>
                    <div className="p-6 xl:col-span-3">
                        <div className="grid gap-4 md:grid-cols-2">
                            <div className="grid content-center gap-4">
                                <div className="p-6 rounded shadow-md dark:bg-gray-900">
                                    <p>An audire commodo habemus cum. Ne sed corrumpit repudiandae. Tota aliquip democritum pro in, nec democritum intellegam ne. Propriae volutpat dissentiet ea sit, nec at lorem inani tritani, an ius populo perfecto vituperatoribus. Eu cum case modus salutandi, ut eum vocent sensibus reprehendunt.</p>
                                    <div className="flex items-center mt-4 space-x-4">
                                        <img src="https://source.unsplash.com/50x50/?portrait?1" alt="" className="w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500" />
                                        <div>
                                            <p className="text-lg font-semibold">Leroy Jenkins</p>
                                            <p className="text-sm dark:text-gray-400">CTO of Company Co.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-6 rounded shadow-md dark:bg-gray-900">
                                    <p>Sit wisi sapientem ut, pri civibus temporibus voluptatibus et, ius cu hinc fabulas. Nam meliore minimum et, regione convenire cum id. Ex pro eros mucius consectetuer, pro magna nulla nonumy ne, eam putent iudicabit consulatu cu.</p>
                                    <div className="flex items-center mt-4 space-x-4">
                                        <img src="https://source.unsplash.com/50x50/?portrait?2" alt="" className="w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500" />
                                        <div>
                                            <p className="text-lg font-semibold">Leroy Jenkins</p>
                                            <p className="text-sm dark:text-gray-400">CTO of Company Co.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="grid content-center gap-4">
                                <div className="p-6 rounded shadow-md dark:bg-gray-900">
                                    <p>Putant omnium elaboraret per ut. Id dicta tritani nominavi quo, mea id justo errem elaboraret. Agam mollis scripserit ea his, ut nec postea verear persecuti. Ea noster senserit eam, ferri omittantur ei nec. Id mel solet libris efficiantur, commune explicari et eos. Case movet ad est, sed tota vocent appetere ea.</p>
                                    <div className="flex items-center mt-4 space-x-4">
                                        <img src="https://source.unsplash.com/50x50/?portrait?3" alt="" className="w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500" />
                                        <div>
                                            <p className="text-lg font-semibold">Leroy Jenkins</p>
                                            <p className="text-sm dark:text-gray-400">CTO of Company Co.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-6 rounded shadow-md dark:bg-gray-900">
                                    <p>Te omnes virtute volutpat sed. Ei esse eros interesset vel, ei populo denique ocurreret vix, eu cum pertinax mandamus vituperatoribus. Solum nihil luptatum per ex, ei amet viderer eos. Ea illum labitur mnesarchum pro. Eius meis salutandi ei nam, alterum expetenda et nec. Expetenda intellegat at eum, per mazim sanctus honestatis ad. Ei noluisse invenire vix. Te ancillae patrioque qui, probo bonorum vivendum ex vim.</p>
                                    <div className="flex items-center mt-4 space-x-4">
                                        <img src="https://source.unsplash.com/50x50/?portrait?4" alt="" className="w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500" />
                                        <div>
                                            <p className="text-lg font-semibold">Leroy Jenkins</p>
                                            <p className="text-sm dark:text-gray-400">CTO of Company Co.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        
        <div className="container bg-gray-800 mx-auto w-full h-full">
        <div className="relative wrap overflow-hidden p-10 h-full">
            <div className="border-2-2 absolute border-opacity-20 border-gray-700 h-full border left-1/2 transform -translate-x-1/2"></div>
            
            <div className="mb-8 flex justify-between items-center w-full right-timeline">
            <div className="order-1 w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                <h1 className="mx-auto font-semibold text-lg text-white">1</h1>
            </div>
            <div className="order-1 bg-gray-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
                <h3 className="mb-3 font-bold text-gray-800 text-xl">Lorem Ipsum</h3>
                <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
            </div>

            
            <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
            <div className="order-1 w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                <h1 className="mx-auto text-white font-semibold text-lg">2</h1>
            </div>
            <div className="order-1 bg-red-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
                <h3 className="mb-3 font-bold text-white text-xl">Lorem Ipsum</h3>
                <p className="text-sm font-medium leading-snug tracking-wide text-white text-opacity-100">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
            </div>
            
            {/* <!-- right timeline --> */}
            <div className="mb-8 flex justify-between items-center w-full right-timeline">
            <div className="order-1 w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                <h1 className="mx-auto font-semibold text-lg text-white">3</h1>
            </div>
            <div className="order-1 bg-gray-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
                <h3 className="mb-3 font-bold text-gray-800 text-xl">Lorem Ipsum</h3>
                <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
            </div>

            {/* <!-- left timeline --> */}
            <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
            <div className="order-1 w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                <h1 className="mx-auto text-white font-semibold text-lg">4</h1>
            </div>
            <div className="order-1 bg-red-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
                <h3 className="mb-3 font-bold text-white text-xl">Lorem Ipsum</h3>
                <p className="text-sm font-medium leading-snug tracking-wide text-white text-opacity-100">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
            </div>
        </div>
        </div>

        <section className="p-6 dark:bg-gray-800 dark:text-gray-100">
            <div className="container mx-auto grid justify-center grid-cols-2 text-center lg:grid-cols-3">
                <div className="flex flex-col justify-start m-2 lg:m-6">
                    <p className="text-4xl font-bold leadi lg:text-6xl">50+</p>
                    <p className="text-sm sm:text-base">Clients</p>
                </div>
                <div className="flex flex-col justify-start m-2 lg:m-6">
                    <p className="text-4xl font-bold leadi lg:text-6xl">89K</p>
                    <p className="text-sm sm:text-base">Followers on social media</p>
                </div>
                <div className="flex flex-col justify-start m-2 lg:m-6">
                    <p className="text-4xl font-bold leadi lg:text-6xl">3</p>
                    <p className="text-sm sm:text-base">Published books</p>
                </div>
                <div className="flex flex-col justify-start m-2 lg:m-6">
                    <p className="text-4xl font-bold leadi lg:text-6xl">8</p>
                    <p className="text-sm sm:text-base">TED talks</p>
                </div>
                <div className="flex flex-col justify-start m-2 lg:m-6">
                    <p className="text-4xl font-bold leadi lg:text-6xl">22</p>
                    <p className="text-sm sm:text-base">Years of experience</p>
                </div>
                <div className="flex flex-col justify-start m-2 lg:m-6">
                    <p className="text-4xl font-bold leadi lg:text-6xl">10+</p>
                    <p className="text-sm sm:text-base">Workshops</p>
                </div>
            </div>
        </section>

        <Footer/>
    </div>
  )
}

export default Info