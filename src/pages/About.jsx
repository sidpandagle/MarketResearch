import React, { Component } from 'react'

export default class About extends Component {
    render() {
        return (

            <div>
                <div className="p-4 mx-auto max-w-7xl sm:px-6">
                    <section>
                        <div className="max-w-screen-xl px-4 py-8 mx-auto space-y-12 lg:space-y-20 lg:py-12 lg:px-6">
                            <div className='md:text-center'>
                                <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 ">About Us</h2>
                                <div className="flex justify-center mb-2 text-xl font-light">
                                    <div className='text-gray-600 md:p-6'>
                                        Welcome to <span className='font-semibold'>Congruence Market Insights</span>, where knowledge meets innovation and insight transforms industries. We are not just another market research company; we are your strategic partners in decoding the complexities of the market landscape and uncovering hidden opportunities that drive your business forward.
                                    </div>
                                </div>
                            </div>
                            <div className="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
                                <div className="text-gray-600">
                                    <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-right text-gray-900 md:text-left">Who We Are</h2>
                                    <div className="mb-2 text-lg font-light text-right lg:text-xl md:text-left">At Congruence Market Insights, we are a team of passionate researchers, analysts, and strategists who are dedicated to providing unparalleled market intelligence. With a blend of experience and expertise, we delve deep into market trends, consumer behavior, and industry dynamics to deliver insights that matter. Our commitment goes beyond numbers; we aim to empower businesses with actionable insights that lead to informed decision-making.</div>
                                </div>
                                <img className="hidden w-full h-64 mb-4 rounded-lg lg:mb-0 lg:flex" src={'/gray-back.png'} alt="dashboard feature image" />
                            </div>
                            <div className="items-center gap-8 xl:gap-16">
                                <div className="text-gray-700">
                                    <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-center text-gray-900">Why Choose Us</h2>
                                    <div className="mb-2 font-light ">
                                        <div className='flex-wrap justify-center py-2 md:flex'>
                                            <div className='px-8 py-10 text-lg border-t border-l border-r md:w-1/3'>
                                                <div className='mb-2 font-semibold'>Comprehensive Insights</div>
                                                <div>

                                                    Our research goes beyond the surface, providing in-depth analyses that uncover hidden trends and market drivers, enabling you to stay ahead of the curve.
                                                </div>
                                            </div>
                                            <div className='px-8 py-10 text-lg border-t border-l border-r md:border-l-0 md:w-1/3'>
                                                <div className='mb-2 font-semibold'>Global Perspective</div>
                                                <div>

                                                    In today's interconnected world, we offer a global viewpoint with a keen understanding of local markets. Our insights are enriched by a deep appreciation for cultural nuances and regional influences.
                                                </div>
                                            </div>
                                            <div className='px-8 py-10 text-lg border-t border-l border-r md:border-l-0 md:w-1/3'>
                                                <div className='mb-2 font-semibold'>Innovation at its Core</div>
                                                <div>

                                                    We embrace innovation in both our methodologies and thinking. By staying at the forefront of technological advancements, we deliver insights that are not only accurate but also forward-looking.
                                                </div>
                                            </div>
                                            <div className='px-8 py-10 text-lg border-t border-b border-l border-r md:w-1/2'>
                                                <div className='mb-2 font-semibold'>Client-Centric Approach</div>
                                                <div>

                                                    Your success is our priority. We foster strong client relationships built on trust, transparency, and collaboration. We listen to your challenges and work closely with you to develop tailored solutions that address your specific needs.
                                                </div>
                                            </div>
                                            <div className='px-8 py-10 text-lg border-t border-b border-l border-r md:border-l-0 md:w-1/2'>
                                                <div className='mb-2 font-semibold'>Integrity and Ethics</div>
                                                <div>

                                                    We uphold the highest standards of integrity and ethics in our work. Our clients rely on us for unbiased, reliable, and credible insights that they can trust when making critical business decisions.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
                                <img className="hidden w-full h-64 mb-4 rounded-lg lg:mb-0 lg:flex" src={'/gray-back.png'} alt="dashboard feature image" />
                                <div className="text-gray-600">
                                    <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 ">Our Approach</h2>
                                    <div className="mb-2 text-lg font-light lg:text-xl">We pride ourselves on our innovative approach to market research. We integrate advanced technologies into our analysis, ensuring that our approach not only captures data but also delves into the core of consumer preferences and industry trends. Our customized solutions are tailored to meet the unique needs of each client, offering a comprehensive understanding of their specific market drivers, trends, challenges and opportunities.</div>
                                </div>
                            </div>
                            <div className='text-right md:text-center'>
                                <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900">Our Promise</h2>
                                <div className="flex justify-center mb-2 text-xl font-light">
                                    <div className='text-gray-600  md:p-6'>
                                        When you partner with Congruence Market Insights, you embark on a journey of discovery and growth. We are dedicated to providing you with insights that inspire confidence and drive meaningful outcomes. Our commitment to excellence, coupled with our passion for unraveling market intricacies, ensures that you receive not just data, but actionable intelligence that propels your business toward success.
                                        Thank you for considering Congruence Market Insights as your trusted research partner. Together, let’s explore the endless possibilities and chart a course for your business’s prosperous future.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        );
    }
};    