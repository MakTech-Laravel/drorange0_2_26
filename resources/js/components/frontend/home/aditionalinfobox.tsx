export function AditionalInfoBox() {
    return (
        <>
            <section className="bg-white overflow-hidden">
                {/* Stats */}
              

                {/* Bathroom Remodel Intro */}
                <section className="py-16 lg:py-24">
                    <div className="max-w-5xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
                        {/* Image */}
                        <div className="relative">
                            <div className="absolute -inset-3 border border-blue-100 rounded-2xl -z-10 hidden md:block" />
                            <img
                                src="/images/bgimg/home-page-2.png"
                                alt="Plumber installing pipes during a bathroom remodel"
                                className="w-full h-[420px] md:h-[480px] object-cover rounded-2xl shadow-lg"
                            />
                        </div>

                        {/* Content */}
                        <div>
                            <h2 className="font-inter font-bold text-3xl md:text-4xl text-gray-900 leading-tight">
                                Your Bathroom Remodel Starts with the Space You Have
                            </h2>

                            <p className="mt-5 text-base text-gray-600 font-inter font-normal leading-relaxed">
                                Some bathrooms need a complete rethink. Others are mostly fine except for the parts that have clearly seen better days.
                            </p>

                            <p className="mt-4 text-base text-gray-600 font-inter font-normal leading-relaxed">
                                Rely Services Tampa works with homeowners and businesses on bathroom remodeling projects based on the existing space and what needs to change. The starting point is simple: look at the bathroom you have, then work out what makes sense for it.
                            </p>


                            <a href="/about"
                            className="mt-7 inline-flex items-center gap-2 font-inter font-semibold text-blue-600 hover:text-blue-700 transition-colors group" >
                            Learn More About Us
                            <svg
                                className="w-4 h-4 transition-transform group-hover:translate-x-1"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                        </a>
                    </div>
                </div>
            </section>
        </section >
</> 
    )
}