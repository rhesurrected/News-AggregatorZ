import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import NewsCard from './NewsCard.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <NewsCard/>
    </React.StrictMode>
);
