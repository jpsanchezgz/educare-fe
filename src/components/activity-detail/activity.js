import React, { useState, useEffect } from 'react';
import api from '../../lib/api';
import VideoDetail from './video-detail';
import LecturaDetail from './lectura-detail';
import PDFDetail from './pdf-detail';

export default function Activity(props) {
    const [activity, setActivity] = useState({});
    const token = localStorage.getItem('token')

    useEffect(() => {
        api.getActivityById(token, props.id, setActivity);
    }, []);

    let { _id, title, notes, tags, content, category, content_type, link } = activity
    return (
        <>
        {
            content_type === 'Video musical' 
            ? <VideoDetail 
            title={title}
            notes={notes}
            tags={tags}
            content={content}
            category={category}
            content_type={content_type}
            link={link}
            />
            : content_type === 'Lectura'
            ? <LecturaDetail 
            title={title}
            notes={notes}
            tags={tags}
            content={content}
            category={category}
            content_type={content_type}
            link={link}
            />
            : content_type === 'PDF'
            ? <PDFDetail
            title={title}
            notes={notes}
            tags={tags}
            content={content}
            category={category}
            content_type={content_type}
            link={link}
            />
            : null
        }
        </>
    )
}