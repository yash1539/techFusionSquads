import Image from "next/image";


interface featuresdata {
    imgSrc: string;
    heading: string;
    subheading: string;
}

const featuresdata: featuresdata[] = [
    {
        imgSrc: '/images/Features/featureOne.svg',
        heading: 'Time is key',
        subheading: 'Count on us to deliver on time, on budget, and with the highest quality.',
    },
    {
        imgSrc: '/images/Features/featureTwo.svg',
        heading: 'Tech Team',
        subheading: ' Our team of experienced professionals brings a wealth of knowledge to every project, ensuring top-notch results at low cost',
    },
    // {
    //     imgSrc: '/images/Features/featureThree.svg',
    //     heading: ' Best price',
    //     subheading: 'We offer competitive rates without compromising on quality',
    // },
]

const Features = () => {
    return (
        <div className="mx-auto max-w-7xl my-0 md:my-40 pt-36 px-6 relative" id="features-section">
            <div className="radial-bg hidden lg:block"></div>
            <div className="grid lg:grid-cols-2 gap-x-4 gap-y-4">
                {/* Column-1 */}
                <div>
                    <h3 className="feature-font text-lg font-semibold mb-4 text-center md:text-start">FEATURES</h3>
                    <h2 className="text-offwhite text-3xl lg:text-5xl font-semibold leading-snug mb-6 text-center md:text-start">The most trusted Web/App development platform</h2>
                    <p className="lg:text-lg font-normal text-bluish text-center md:text-start"> At TechFusion Squads, we take pride in being the most trusted platform for web and app development. Our commitment to excellence and innovation sets us apart in the industry.

{/* • Expertise: Our team of experienced professionals brings a wealth of knowledge to every project, ensuring top-notch results.
• Custom Solutions: We tailor our services to your unique needs, providing custom web and mobile solutions.
• Collaboration: We believe in a collaborative approach, working closely with you to achieve your goals.
• Trustworthy: Count on us to deliver on time, on budget, and with the highest quality. */}
</p>
                </div>
                {/* Column-2 */}
                <div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-4 lg:-mr-56">
                        {featuresdata.map((items, i) => (
                            <div className="bg-blue py-10 pr-12 pl-6 rounded-lg" key={i}>
                                <div className="rounded-full gg h-16 w-16 flex items-center justify-center mb-10">
                                    <Image src={items.imgSrc} alt={items.imgSrc} width={24} height={30} />
                                </div>
                                <h5 className="text-offwhite text-lg font-medium mb-4">{items.heading}</h5>
                                <p className="text-lightblue text-sm font-normal">{items.subheading}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features;
