import React from 'react'
import { useForm } from 'react-hook-form';
import ReCAPTCHA from "react-google-recaptcha";
import { reCaptchaKey } from '../constants';

export default function BuyNowForm({ onSubmit }) {

    const {
        register,
        handleSubmit
        // formState: { errors },
    } = useForm();

    function onChange() {

    }

    return (
        <section className="">
            <div className="">
                <div className='pb-2 text-xl font-semibold '>Buy Now Form</div>
                <form action="#" onSubmit={handleSubmit((data) => console.log(data))}>
                    <div className="grid gap-4 sm:grid-cols-2 sm:gap-4">
                        <div className="w-full">
                            <input {...register('name')} type="text" name="name" id="name" className="bg-gray-50 outline-0 border border-gray-300 text-sm rounded-lg focus:ring-primary-600  block w-full p-2.5 " placeholder="Full Name" required />
                        </div>
                        <div className="w-full">
                            <input {...register('brand')} type="text" name="brand" id="brand" className="bg-gray-50 outline-0 border border-gray-300 text-sm rounded-lg focus:ring-primary-600  block w-full p-2.5 " placeholder="Business Email" required />
                        </div>
                        <div>
                            <input {...register('designation')} type="text" name="designation" id="designation" className="bg-gray-50 outline-0 border border-gray-300 text-sm rounded-lg focus:ring-primary-600  block w-full p-2.5 " placeholder="Designation" required />
                        </div>
                        <div>
                            <select {...register('country')} id="country" defaultValue='Select Country' className="bg-gray-50 outline-0 border border-gray-300 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 ">
                                <option>Select Country</option>
                                <option value="India">India</option>
                                <option value="US">US</option>
                                <option value="UK">UK</option>
                                <option value="Australia">Australia</option>
                            </select>
                        </div>
                        <div>
                            <input {...register('phone')} type="text" placeholder='Phone Number' name="item-weight" id="item-weight" className="bg-gray-50 outline-0 border border-gray-300 text-sm rounded-lg focus:ring-primary-600  block w-full p-2.5 " required />
                        </div>
                        <div className="w-full">
                            <input {...register('price')} type="text" name="price" id="price" className="bg-gray-50 outline-0 border border-gray-300 text-sm rounded-lg focus:ring-primary-600  block w-full p-2.5 " placeholder="Company" required />
                        </div>
                        <div className="sm:col-span-2">
                            <textarea {...register('description')} id="description" rows={8} className="block p-2.5 w-full text-sm bg-gray-50 rounded-lg outline-0 border border-gray-300 focus:ring-primary-500 focus:border-primary-500 " placeholder="Your description here" defaultValue={""} />
                        </div>
                        <div className="flex items-center justify-center sm:col-span-2">
                            <ReCAPTCHA
                                sitekey={reCaptchaKey}
                                onChange={onChange}
                            />
                        </div>
                    </div>
                    <div className='flex justify-center'>
                        <button type="button" onClick={handleSubmit((data) => { console.log(data); onSubmit() })} className="inline-flex items-center justify-center gap-2 px-8 py-3 mt-6 font-semibold text-white transition-all bg-indigo-500 border border-transparent rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:ring-offset-2">
                            Submit Request <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-send" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M10 14l11 -11" />
                                <path d="M21 3l-6.5 18a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5" />
                            </svg>

                        </button>
                    </div>
                </form>
            </div>
        </section>
    )
}
