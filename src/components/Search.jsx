import React, { Component } from 'react'

export default class Search extends Component {
    render() {
        return (
            // <div className={`mx-auto h-[90vh] bg-cover bg-bottom flex justify-center items-center`} style={{ backgroundImage: `url(/world-background.jpg)` }}>
            <div className={`mx-auto h-[90vh] bg-cover bg-bottom flex justify-center items-center bg-gradient-to-br from-blue-300 to-purple-300`}>
                <div className="relative flex items-center w-1/2 h-12 overflow-hidden bg-white border rounded-lg focus-within:shadow-lg">
                    <div className="grid w-12 h-full text-gray-300 place-items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>

                    <input
                        className="w-1/2 h-full pr-2 text-sm text-gray-700 outline-none peer"
                        type="text"
                        id="search"
                        placeholder="Search something.." />
                </div>
            </div>
        )
    }
}
