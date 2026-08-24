export function AditionalInfoLastBox() {
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
                                src="/images/bgimg/home-page-3.png"
                                alt="Plumber installing pipes during a bathroom remodel"
                                className="w-full h-[420px] md:h-[480px] object-cover rounded-2xl shadow-lg"
                            />
                        </div>

                        {/* Content */}
                        <div>
                            <h2 className="font-inter font-bold text-3xl md:text-4xl text-gray-900 leading-tight">
                                Construction Experience You Can Build On
                            </h2>

                            <p className="mt-5 text-base text-gray-600 font-inter font-normal leading-relaxed">
                                A bathroom may not be the largest room in a property, but remodeling one involves plenty of work behind the finished surfaces.
                            </p>

                            <p className="mt-4 text-base text-gray-600 font-inter font-normal leading-relaxed">

                                Rely Services Tampa brings a broad construction background to bathroom remodeling projects in the Tampa Bay Area. That experience is part of what customers are bringing to the project, alongside the remodeling work itself.
                            </p>



                        </div>
                    </div>
                </section>
            </section >
        </>
    )
}