import React from 'react';


function NewsModal({modalIsOpen, closeModal, contents}) {
    return (
        <>
            {modalIsOpen && (<div className="page">
                <div className="relative h-120 m-2.5 overflow-hidden text-white rounded-md">
                    <img
                        className="transition-transform duration-500 ease-[cubic-bezier(0.25, 1, 0.5, 1)] transform group-hover:scale-110"
                        src={contents.image}
                        alt="investment-seed-round"/>
                </div>
                <div className="p-4">
                    <h6 className="mb-2 text-slate-800 text-xl font-semibold">
                        {contents.headline}
                    </h6>
                    <p className="text-slate-600 leading-normal font-light">
                        {contents.text}
                    </p>
                </div>
                <div className="px-4 pb-4 pt-0 mt-2">
                    <button
                        className="mr-2 rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        type="button" onClick={closeModal}>
                        Back
                    </button>
                    <button
                        className="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        type="button">
                        Read article
                    </button>
                </div>
            </div>)}
        </>
    )
}

export {NewsModal}