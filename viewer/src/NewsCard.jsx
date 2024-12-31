import './App.css';
import data from './data.json';
import {NewsModal} from "./NewsModal.jsx";
import React from 'react';

const NewsCard = () => {
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const [contents, setContents] = React.useState({image: '', text: '', headline: ''});

    function setNewsContents(image, text, headline) {
        setContents({image, text, headline})
        document.body.scrollIntoView();
        setIsOpen(true)
    }

    function closeModal() {
        setIsOpen(false)
        document.body.scrollIntoView();
    }

    return (
        <>
            <NewsModal modalIsOpen={modalIsOpen} contents={contents} closeModal={closeModal}/>
            {!modalIsOpen && (<div className="parent">
                {data.map(entry => (
                    <div
                        className="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-96">
                        <div className="relative h-56 m-2.5 overflow-hidden text-white rounded-md">
                            <img src={entry.contents.image ?? entry.pic} alt="card-image"/>
                        </div>
                        <div className="p-4">
                            <h6 className="mb-2 text-slate-800 text-xl font-semibold">
                                {entry.headline}
                            </h6>
                        </div>
                        <div className="px-4 pb-4 pt-0 mt-2">
                            <button
                                className="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                type="button"
                                onClick={() => setNewsContents(entry.contents.image, entry.contents.text, entry.headline)}>
                                Read more
                            </button>
                        </div>
                    </div>
                ))}
            </div>)}
        </>
    );
};

export default NewsCard;
