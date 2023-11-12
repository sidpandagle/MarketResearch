import React, { Component } from 'react'

export default class About extends Component {
    render() {
        return (

            <div>
                <div className="max-w-6xl p-4 mx-auto sm:px-6">
                    <section>
                        <div className="max-w-screen-xl px-4 py-8 mx-auto space-y-12 lg:space-y-20 lg:py-12 lg:px-6">
                            <div className='md:text-center'>
                                <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 ">About Us</h2>
                                <div className="flex justify-center mb-2 text-xl font-light">
                                    <div className='text-lg text-gray-600 md:p-6'>
                                        Welcome to <span className='font-semibold'>Congruence Market Insights</span>, where knowledge meets innovation and insight transforms industries. We are not just another market research company; we are your strategic partners in decoding the complexities of the market landscape and uncovering hidden opportunities that drive your business forward.
                                    </div>
                                </div>
                            </div>
                            <div className="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
                                <div className="text-gray-600">
                                    <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-right text-gray-900 md:text-left">Who We Are</h2>
                                    <div className="mb-2 text-lg font-light text-right md:text-left">At Congruence Market Insights, we are a team of passionate researchers, analysts, and strategists who are dedicated to providing unparalleled market intelligence. With a blend of experience and expertise, we delve deep into market trends, consumer behavior, and industry dynamics to deliver insights that matter. Our commitment goes beyond numbers; we aim to empower businesses with actionable insights that lead to informed decision-making.</div>
                                </div>
                                <img className="hidden w-full h-64 mb-4 rounded-lg lg:mb-0 lg:flex" src={'/gray-back.png'} alt="dashboard feature image" />
                            </div>
                            <div className="items-center gap-8 xl:gap-16">
                                <div className="text-gray-700">
                                    <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-center text-gray-900">Why Choose Us</h2>
                                    <div className="mb-2 font-light ">
                                        <div className='flex-wrap justify-center py-2 md:flex'>
                                            <div className='px-8 py-8 text-lg text-center md:w-1/3'>
                                                <div className='flex justify-center mb-4'><svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" viewBox="0 0 24 24" width="2em"><path className="uim-tertiary" d="M11.4978,22c-0.26527,0.0003-0.51971-0.10515-0.707-0.293l-2.5-2.5c-0.39048-0.39029-0.39064-1.02322-0.00036-1.4137c0.00012-0.00012,0.00024-0.00024,0.00036-0.00036l2.5-2.5c0.39214-0.38882,1.02523-0.38613,1.41405,0.00601c0.38649,0.38979,0.38648,1.01827-0.00002,1.40805l-1.793,1.793l1.793,1.793c0.39047,0.39058,0.39037,1.02375-0.00021,1.41421C12.01713,21.89464,11.7629,21.99995,11.4978,22z" /><path className="uim-tertiary" d="M21,4.5h-2c-0.55228,0-1,0.44772-1,1s0.44772,1,1,1h1v11h-8.58813l-1,1l1,1H21c0.55214,0.00014,0.99986-0.44734,1-0.99948c0-0.00017,0-0.00035,0-0.00052v-13c0.00014-0.55214-0.44734-0.99986-0.99948-1C21.00035,4.5,21.00017,4.5,21,4.5z" /><path className="uim-primary" d="M12.5,2c0.26527-0.0003,0.51971,0.10515,0.707,0.293l2.5,2.5c0.39048,0.39027,0.39065,1.02319,0.00038,1.41368C15.70726,6.2068,15.70713,6.20693,15.707,6.20706l-2.5,2.5c-0.39296,0.38799-1.02604,0.38396-1.41403-0.009C11.40846,8.30862,11.40847,7.68242,11.793,7.293L13.586,5.5l-1.793-1.793c-0.39047-0.39058-0.39037-1.02375,0.00021-1.41421C11.98069,2.10537,12.23491,2.00006,12.5,2z" /><path className="uim-primary" d="M5,17.5H4v-11h8.58594l1-1l-1-1H3C2.44786,4.49986,2.00014,4.94734,2,5.49948C2,5.49965,2,5.49983,2,5.5v13c-0.00014,0.55214,0.44734,0.99986,0.99948,1c0.00017,0,0.00035,0,0.00052,0h2c0.55228,0,1-0.44772,1-1S5.55228,17.5,5,17.5z" /></svg>
                                                </div>
                                                <div className='mb-2 font-semibold'>Comprehensive Insights</div>
                                                <div className='text-sm '>

                                                    Our research goes beyond the surface, providing in-depth analyses that uncover hidden trends and market drivers, enabling you to stay ahead of the curve.
                                                </div>
                                            </div>
                                            <div className='px-8 py-8 text-lg text-center md:w-1/3'>
                                                <div className='flex justify-center mb-4'><svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" viewBox="0 0 24 24" width="2em"><path className="uim-tertiary" d="M11.4978,22c-0.26527,0.0003-0.51971-0.10515-0.707-0.293l-2.5-2.5c-0.39048-0.39029-0.39064-1.02322-0.00036-1.4137c0.00012-0.00012,0.00024-0.00024,0.00036-0.00036l2.5-2.5c0.39214-0.38882,1.02523-0.38613,1.41405,0.00601c0.38649,0.38979,0.38648,1.01827-0.00002,1.40805l-1.793,1.793l1.793,1.793c0.39047,0.39058,0.39037,1.02375-0.00021,1.41421C12.01713,21.89464,11.7629,21.99995,11.4978,22z" /><path className="uim-tertiary" d="M21,4.5h-2c-0.55228,0-1,0.44772-1,1s0.44772,1,1,1h1v11h-8.58813l-1,1l1,1H21c0.55214,0.00014,0.99986-0.44734,1-0.99948c0-0.00017,0-0.00035,0-0.00052v-13c0.00014-0.55214-0.44734-0.99986-0.99948-1C21.00035,4.5,21.00017,4.5,21,4.5z" /><path className="uim-primary" d="M12.5,2c0.26527-0.0003,0.51971,0.10515,0.707,0.293l2.5,2.5c0.39048,0.39027,0.39065,1.02319,0.00038,1.41368C15.70726,6.2068,15.70713,6.20693,15.707,6.20706l-2.5,2.5c-0.39296,0.38799-1.02604,0.38396-1.41403-0.009C11.40846,8.30862,11.40847,7.68242,11.793,7.293L13.586,5.5l-1.793-1.793c-0.39047-0.39058-0.39037-1.02375,0.00021-1.41421C11.98069,2.10537,12.23491,2.00006,12.5,2z" /><path className="uim-primary" d="M5,17.5H4v-11h8.58594l1-1l-1-1H3C2.44786,4.49986,2.00014,4.94734,2,5.49948C2,5.49965,2,5.49983,2,5.5v13c-0.00014,0.55214,0.44734,0.99986,0.99948,1c0.00017,0,0.00035,0,0.00052,0h2c0.55228,0,1-0.44772,1-1S5.55228,17.5,5,17.5z" /></svg>
                                                </div>
                                                <div className='mb-2 font-semibold'>Global Perspective</div>
                                                <div className='text-sm '>

                                                    In today's interconnected world, we offer a global viewpoint with a keen understanding of local markets. Our insights are enriched by a deep appreciation for cultural nuances and regional influences.
                                                </div>
                                            </div>
                                            <div className='px-8 py-8 text-lg text-center md:w-1/3'>
                                                <div className='flex justify-center mb-4'><svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" viewBox="0 0 24 24" width="2em"><path className="uim-tertiary" d="M11.4978,22c-0.26527,0.0003-0.51971-0.10515-0.707-0.293l-2.5-2.5c-0.39048-0.39029-0.39064-1.02322-0.00036-1.4137c0.00012-0.00012,0.00024-0.00024,0.00036-0.00036l2.5-2.5c0.39214-0.38882,1.02523-0.38613,1.41405,0.00601c0.38649,0.38979,0.38648,1.01827-0.00002,1.40805l-1.793,1.793l1.793,1.793c0.39047,0.39058,0.39037,1.02375-0.00021,1.41421C12.01713,21.89464,11.7629,21.99995,11.4978,22z" /><path className="uim-tertiary" d="M21,4.5h-2c-0.55228,0-1,0.44772-1,1s0.44772,1,1,1h1v11h-8.58813l-1,1l1,1H21c0.55214,0.00014,0.99986-0.44734,1-0.99948c0-0.00017,0-0.00035,0-0.00052v-13c0.00014-0.55214-0.44734-0.99986-0.99948-1C21.00035,4.5,21.00017,4.5,21,4.5z" /><path className="uim-primary" d="M12.5,2c0.26527-0.0003,0.51971,0.10515,0.707,0.293l2.5,2.5c0.39048,0.39027,0.39065,1.02319,0.00038,1.41368C15.70726,6.2068,15.70713,6.20693,15.707,6.20706l-2.5,2.5c-0.39296,0.38799-1.02604,0.38396-1.41403-0.009C11.40846,8.30862,11.40847,7.68242,11.793,7.293L13.586,5.5l-1.793-1.793c-0.39047-0.39058-0.39037-1.02375,0.00021-1.41421C11.98069,2.10537,12.23491,2.00006,12.5,2z" /><path className="uim-primary" d="M5,17.5H4v-11h8.58594l1-1l-1-1H3C2.44786,4.49986,2.00014,4.94734,2,5.49948C2,5.49965,2,5.49983,2,5.5v13c-0.00014,0.55214,0.44734,0.99986,0.99948,1c0.00017,0,0.00035,0,0.00052,0h2c0.55228,0,1-0.44772,1-1S5.55228,17.5,5,17.5z" /></svg>
                                                </div>
                                                <div className='mb-2 font-semibold'>Innovation at its Core</div>
                                                <div className='text-sm '>

                                                    We embrace innovation in both our methodologies and thinking. By staying at the forefront of technological advancements, we deliver insights that are not only accurate but also forward-looking.
                                                </div>
                                            </div>
                                            <div className='px-8 py-8 text-lg text-center md:w-1/3'>
                                                <div className='flex justify-center mb-4'><svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" viewBox="0 0 24 24" width="2em"><path className="uim-tertiary" d="M11.4978,22c-0.26527,0.0003-0.51971-0.10515-0.707-0.293l-2.5-2.5c-0.39048-0.39029-0.39064-1.02322-0.00036-1.4137c0.00012-0.00012,0.00024-0.00024,0.00036-0.00036l2.5-2.5c0.39214-0.38882,1.02523-0.38613,1.41405,0.00601c0.38649,0.38979,0.38648,1.01827-0.00002,1.40805l-1.793,1.793l1.793,1.793c0.39047,0.39058,0.39037,1.02375-0.00021,1.41421C12.01713,21.89464,11.7629,21.99995,11.4978,22z" /><path className="uim-tertiary" d="M21,4.5h-2c-0.55228,0-1,0.44772-1,1s0.44772,1,1,1h1v11h-8.58813l-1,1l1,1H21c0.55214,0.00014,0.99986-0.44734,1-0.99948c0-0.00017,0-0.00035,0-0.00052v-13c0.00014-0.55214-0.44734-0.99986-0.99948-1C21.00035,4.5,21.00017,4.5,21,4.5z" /><path className="uim-primary" d="M12.5,2c0.26527-0.0003,0.51971,0.10515,0.707,0.293l2.5,2.5c0.39048,0.39027,0.39065,1.02319,0.00038,1.41368C15.70726,6.2068,15.70713,6.20693,15.707,6.20706l-2.5,2.5c-0.39296,0.38799-1.02604,0.38396-1.41403-0.009C11.40846,8.30862,11.40847,7.68242,11.793,7.293L13.586,5.5l-1.793-1.793c-0.39047-0.39058-0.39037-1.02375,0.00021-1.41421C11.98069,2.10537,12.23491,2.00006,12.5,2z" /><path className="uim-primary" d="M5,17.5H4v-11h8.58594l1-1l-1-1H3C2.44786,4.49986,2.00014,4.94734,2,5.49948C2,5.49965,2,5.49983,2,5.5v13c-0.00014,0.55214,0.44734,0.99986,0.99948,1c0.00017,0,0.00035,0,0.00052,0h2c0.55228,0,1-0.44772,1-1S5.55228,17.5,5,17.5z" /></svg>
                                                </div>
                                                <div className='mb-2 font-semibold'>Client-Centric Approach</div>
                                                <div className='text-sm '>

                                                    Your success is our priority. We foster strong client relationships built on trust, transparency, and collaboration. We listen to your challenges and work closely with you to develop tailored solutions that address your specific needs.
                                                </div>
                                            </div>
                                            <div className='px-8 py-8 text-lg text-center md:w-1/3'>
                                                <div className='flex justify-center mb-4'><svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" viewBox="0 0 24 24" width="2em"><path className="uim-tertiary" d="M11.4978,22c-0.26527,0.0003-0.51971-0.10515-0.707-0.293l-2.5-2.5c-0.39048-0.39029-0.39064-1.02322-0.00036-1.4137c0.00012-0.00012,0.00024-0.00024,0.00036-0.00036l2.5-2.5c0.39214-0.38882,1.02523-0.38613,1.41405,0.00601c0.38649,0.38979,0.38648,1.01827-0.00002,1.40805l-1.793,1.793l1.793,1.793c0.39047,0.39058,0.39037,1.02375-0.00021,1.41421C12.01713,21.89464,11.7629,21.99995,11.4978,22z" /><path className="uim-tertiary" d="M21,4.5h-2c-0.55228,0-1,0.44772-1,1s0.44772,1,1,1h1v11h-8.58813l-1,1l1,1H21c0.55214,0.00014,0.99986-0.44734,1-0.99948c0-0.00017,0-0.00035,0-0.00052v-13c0.00014-0.55214-0.44734-0.99986-0.99948-1C21.00035,4.5,21.00017,4.5,21,4.5z" /><path className="uim-primary" d="M12.5,2c0.26527-0.0003,0.51971,0.10515,0.707,0.293l2.5,2.5c0.39048,0.39027,0.39065,1.02319,0.00038,1.41368C15.70726,6.2068,15.70713,6.20693,15.707,6.20706l-2.5,2.5c-0.39296,0.38799-1.02604,0.38396-1.41403-0.009C11.40846,8.30862,11.40847,7.68242,11.793,7.293L13.586,5.5l-1.793-1.793c-0.39047-0.39058-0.39037-1.02375,0.00021-1.41421C11.98069,2.10537,12.23491,2.00006,12.5,2z" /><path className="uim-primary" d="M5,17.5H4v-11h8.58594l1-1l-1-1H3C2.44786,4.49986,2.00014,4.94734,2,5.49948C2,5.49965,2,5.49983,2,5.5v13c-0.00014,0.55214,0.44734,0.99986,0.99948,1c0.00017,0,0.00035,0,0.00052,0h2c0.55228,0,1-0.44772,1-1S5.55228,17.5,5,17.5z" /></svg>
                                                </div>
                                                <div className='mb-2 font-semibold'>Integrity and Ethics</div>
                                                <div className='text-sm '>

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
                                    <div className="mb-2 text-lg font-light ">We pride ourselves on our innovative approach to market research. We integrate advanced technologies into our analysis, ensuring that our approach not only captures data but also delves into the core of consumer preferences and industry trends. Our customized solutions are tailored to meet the unique needs of each client, offering a comprehensive understanding of their specific market drivers, trends, challenges and opportunities.</div>
                                </div>
                            </div>
                            <div className='text-right md:text-center'>
                                <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900">Our Promise</h2>
                                <div className="flex justify-center mb-2 text-lg font-light">
                                    <div className='text-gray-600 md:p-6'>
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