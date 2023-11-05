import React, { useState, useRef, useMemo, useEffect } from 'react'
import { useForm } from 'react-hook-form';
import { notifySuccess, notifyError } from '../../App';
import axios from 'axios';
import JoditEditor from 'jodit-react';
import "jodit";
import "jodit/build/jodit.min.css";
import { constConfig, categories, apiUrl } from '../../constants';
import { useNavigate, useParams } from "react-router-dom";


export default function EditReport() {

    const { reportId } = useParams();

    const navigate = useNavigate();

    const descriptionEditor = useRef(null);
    const tocEditor = useRef(null);
    const methodologyEditor = useRef(null);
    const highlightsEditor = useRef(null);

    const { register, handleSubmit, setValue } = useForm();

    const [description, setDescription] = useState('');
    const [methodology, setMethodology] = useState('');
    const [toc, setToc] = useState('');
    const [highlights, setHighlights] = useState('');

    const config = useMemo(
        () => ({
            ...constConfig
        }),
        []
    );


    useEffect(() => {
        if (reportId) {
            axios.get(`${apiUrl}/reports/${reportId}`)
                .then(response => {
                    const reportData = response.data.data;
                    // Assuming that reportData contains fields like description, methodology, toc, and highlights
                    setDescription(reportData.description);
                    setMethodology(reportData.methodology);
                    setToc(reportData.toc);
                    setHighlights(reportData.highlights);

                    const { title, category, url, meta_title, meta_desc, meta_keyword, pages, created_date } = reportData;
                    setValue('title', title);
                    setValue('category', category);
                    setValue('url', url);
                    setValue('meta_title', meta_title);
                    setValue('meta_desc', meta_desc);
                    setValue('meta_keyword', meta_keyword);
                    setValue('pages', pages);
                    setValue('created_date', created_date);
                })
                .catch(error => {
                    console.error('Error:', error);
                    notifyError('Failed to fetch report data.');
                });
        }
    }, [reportId])

    const onSubmit = (formData) => {
        console.log({
            ...formData,
            description: description,
            methodology: methodology,
            toc: toc,
            highlights: highlights,
        })
        axios.put(`${apiUrl}/reports/${reportId}`, {
            ...formData,
            id: reportId,
            description: description,
            methodology: methodology,
            toc: toc,
            highlights: highlights,
        }, {
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(response => {
                navigate('/report/list')
                notifySuccess("Report updated successfully!");
            })
            .catch(error => {
                console.error('Error:', error);
                notifyError('Something went wrong, please try again!');
            });
    }

    return (
        <div>
            <div className="max-w-6xl px-4 py-2 m-6 mx-auto border rounded-md md:py-12 md:pt-8 sm:px-6">
                <div className='pb-4 text-xl font-semibold'>Edit Report</div>
                <form action="#" onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex flex-col gap-2">
                        <div className="w-full">
                            <label htmlFor="title" className='text-sm'>Title</label>
                            <input {...register('title')} type="text" name="title" id="title" className="bg-gray-50 outline-0 border border-gray-300 text-sm rounded-lg focus:ring-primary-600  block w-full p-2.5 " placeholder="Title" required />
                        </div>
                        <div className='flex justify-between gap-2'>
                            <div className="w-full">
                                <label htmlFor="category" className='text-sm'>Category</label>
                                <select {...register('category')} id="category" className="bg-gray-50 outline-0 border border-gray-300 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 ">
                                    <option value="">Select Category</option>
                                    {categories.map((res, key) => {
                                        return (
                                            <option key={key} value={res.name}>{res.name}</option>
                                        )
                                    })}
                                </select>
                            </div>
                            <div className="w-full">
                                <label htmlFor="url" className='text-sm'>URL / Short Title</label>
                                <input {...register('url')} disabled type="text" name="url" id="url" className="bg-gray-50 outline-0 border border-gray-300 text-sm rounded-lg focus:ring-primary-600  block w-full p-2.5 " placeholder="URL" required />
                            </div>
                        </div>
                        <div className="w-full">
                            <label htmlFor="description" className='text-sm'>Description</label>
                            {/* <input {...register('description')} type="text" name="description" id="description" className="bg-gray-50 outline-0 border border-gray-300 text-sm rounded-lg focus:ring-primary-600  block w-full p-2.5 " placeholder="Description" required /> */}
                            <JoditEditor
                                ref={descriptionEditor}
                                value={description}
                                config={config}
                                tabIndex={1} // tabIndex of textarea
                                onBlur={newContent => setDescription(newContent)} // preferred to use only this option to update the content for performance reasons
                                onChange={(newContent) => { console.log(newContent) }}
                            />



                        </div>
                        <div className="w-full">
                            <label htmlFor="toc" className='text-sm'>Table Of Content</label>
                            {/* <input {...register('toc')} type="text" name="toc" id="toc" className="bg-gray-50 outline-0 border border-gray-300 text-sm rounded-lg focus:ring-primary-600  block w-full p-2.5 " placeholder="Table Of Content" required /> */}
                            <JoditEditor
                                ref={tocEditor}
                                value={methodology}
                                config={config}
                                tabIndex={1} // tabIndex of textarea
                                onBlur={newContent => setMethodology(newContent)} // preferred to use only this option to update the content for performance reasons
                                onChange={(newContent) => { console.log(newContent) }}
                            />
                        </div>
                        <div className="w-full">
                            <label htmlFor="highlights" className='text-sm'>Highlights</label>
                            {/* <input {...register('highlights')} type="text" name="highlights" id="highlights" className="bg-gray-50 outline-0 border border-gray-300 text-sm rounded-lg focus:ring-primary-600  block w-full p-2.5 " placeholder="Highlights" required /> */}

                            <JoditEditor
                                ref={highlightsEditor}
                                value={toc}
                                config={config}
                                tabIndex={1} // tabIndex of textarea
                                onBlur={newContent => setToc(newContent)} // preferred to use only this option to update the content for performance reasons
                                onChange={(newContent) => { console.log(newContent) }}
                            />
                        </div>
                        <div className="w-full">
                            <label htmlFor="methodology" className='text-sm'>Methodology</label>
                            {/* <input {...register('methodology')} type="text" name="methodology" id="methodology" className="bg-gray-50 outline-0 border border-gray-300 text-sm rounded-lg focus:ring-primary-600  block w-full p-2.5 " placeholder="Methodology" required /> */}
                            <JoditEditor
                                ref={methodologyEditor}
                                value={highlights}
                                config={config}
                                tabIndex={1} // tabIndex of textarea
                                onBlur={newContent => setHighlights(newContent)} // preferred to use only this option to update the content for performance reasons
                                onChange={(newContent) => { console.log(newContent) }}
                            />
                        </div>
                        <div className="w-full">
                            <label htmlFor="meta_title" className='text-sm'>Meta Title</label>
                            <input {...register('meta_title')} type="text" name="meta_title" id="meta_title" className="bg-gray-50 outline-0 border border-gray-300 text-sm rounded-lg focus:ring-primary-600  block w-full p-2.5 " placeholder="Meta Title" required />
                        </div>
                        <div className="w-full">
                            <label htmlFor="meta_desc" className='text-sm'>Meta Description</label>
                            <input {...register('meta_desc')} type="text" name="meta_desc" id="meta_desc" className="bg-gray-50 outline-0 border border-gray-300 text-sm rounded-lg focus:ring-primary-600  block w-full p-2.5 " placeholder="Meta Description" required />
                        </div>
                        <div className="w-full">
                            <label htmlFor="meta_keyword" className='text-sm'>Meta Keywords</label>
                            <input {...register('meta_keyword')} type="text" name="meta_keyword" id="meta_keyword" className="bg-gray-50 outline-0 border border-gray-300 text-sm rounded-lg focus:ring-primary-600  block w-full p-2.5 " placeholder="Meta Keywords" required />
                        </div>
                        <div className='flex justify-between gap-2'>
                            <div className="w-full">
                                <label htmlFor="created_date" className='text-sm'>Publish Date</label>
                                <input {...register('created_date')} type="date" name="created_date" id="created_date" className="bg-gray-50 outline-0 border border-gray-300 text-sm rounded-lg focus:ring-primary-600  block w-full p-2.5 " placeholder="Publish Date" required />
                            </div>
                            <div className="w-full">
                                <label htmlFor="pages" className='text-sm'>Pages</label>
                                <input {...register('pages')} type="text" name="pages" id="pages" className="bg-gray-50 outline-0 border border-gray-300 text-sm rounded-lg focus:ring-primary-600  block w-full p-2.5 " placeholder="Pages" required />
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-center'>
                        <button type="submit" className="inline-flex items-center justify-center gap-4 px-8 py-3 mt-6 font-semibold text-white transition-all bg-indigo-500 border border-transparent rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:ring-offset-2">
                            Edit
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-send" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M10 14l11 -11" />
                                <path d="M21 3l-6.5 18a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5" />
                            </svg>

                        </button>
                    </div>
                </form>
            </div>

        </div>
    )
}
