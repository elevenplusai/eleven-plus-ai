import heroImg from './assets/hero-img.png';
import logoImg from './assets/logo.png';
import feature1 from './assets/feature1.png';
import feature2 from './assets/feature2.png';
import feature3 from './assets/feature3.png';
import year3 from './assets/year3.png';
import year4 from './assets/year4.png';
import year5 from './assets/year5.png';
import year6 from './assets/year6.png';

const MilestoneCard = ({year, description, children}) => (
    <div className="flex flex-col items-center space-y-4">
        {children}
        <div className="font-hanken text-xl font-bold">Year {year}</div>
        <p className="font-montserrat text-sm text-gray-600 text-center">{description}</p>
    </div>
);

const Website = () => {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="bg-amber-200">
                <div className="container mx-auto px-4 py-12">
                    <div className="flex items-center justify-between">
                        <div className="flex-1">
                            <img
                                src={logoImg}
                                alt="Eleven Plus AI Logo"
                                className="mb-8"
                            />
                            <h1 className="font-hanken text-5xl font-bold mb-4">
                                AI-Powered 11+ Prep
                            </h1>
                            <h2 className="font-hanken text-3xl mb-8">
                                Tailored Learning for Your Child's Success
                            </h2>
                            <div className="space-x-4">
                                <button className="font-montserrat bg-black text-white px-8 py-3 rounded">
                                    Enroll Now
                                </button>
                                <button className="font-montserrat bg-black text-white px-8 py-3 rounded">
                                    Learn About Us
                                </button>
                            </div>
                        </div>
                        <div className="flex-1">
                            <img
                                src={heroImg}
                                alt="Student studying"
                                className="w-full"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* About Us Section with Features */}
            <section className="bg-white">
                <div className="container mx-auto px-4 py-16">
                    <div className="flex gap-12">
                        <div className="w-1/3">
                            <h2 className="font-hanken text-4xl font-bold">About Us</h2>
                        </div>
                        <div className="w-2/3">
                            <p className="font-montserrat text-lg mb-16">
                                We take a smarter approach to 11+ preparation. Using AI-driven technology, we create
                                personalized study plans that adapt to each child's unique strengths, learning pace,
                                and progress. Our tailored approach ensures students focus on the areas they need
                                most, building confidence and maximizing their potential for success.
                            </p>

                            <div className="border-t border-b border-black py-8">
                                <h3 className="font-hanken text-2xl font-bold mb-16">
                                    What differentiates us from other 11+ centers
                                </h3>

                                <div className="grid grid-cols-3 gap-12">
                                    <div className="text-center">
                                        <img
                                            src={feature1}
                                            alt="Smart study plans"
                                            className="mx-auto mb-4"
                                        />
                                    </div>
                                    <div className="text-center">
                                        <img
                                            src={feature2}
                                            alt="In person coaching"
                                            className="mx-auto mb-4"
                                        />
                                    </div>
                                    <div className="text-center">
                                        <img
                                            src={feature3}
                                            alt="AI driven tech"
                                            className="mx-auto mb-4"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Milestones Section */}
            <section className="bg-amber-200">
                <div className="container mx-auto px-4 py-16">
                    <h2 className="font-hanken text-4xl font-bold mb-12">Courses</h2>
                    <div className="grid grid-cols-4 gap-8">
                        <MilestoneCard year="3" description="Share your company timeline">
                            <img src={year3} alt="Year 3 milestone"/>
                        </MilestoneCard>
                        <MilestoneCard year="4" description="Start with your origin or founding">
                            <img src={year4} alt="Year 4 milestone"/>
                        </MilestoneCard>
                        <MilestoneCard year="5" description="Mark important milestones">
                            <img src={year5} alt="Year 5 milestone"/>
                        </MilestoneCard>
                        <MilestoneCard year="6" description="Share challenges and wins">
                            <img src={year6} alt="Year 6 milestone"/>
                        </MilestoneCard>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Website;