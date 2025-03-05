import React from 'react'
import './PostItemOne.css'
import Link from 'next/link';
export default function PostItemOne({large, item} : {
    large: boolean;
    item: {
        _id: string;
        img: string;
        category: string;
        title: string;
        date: string;
        brief: string;
        avator: string;
        author: string;
    }
}) {
  return (
    <div className={`post-entry-1 ${large ? 'lg' : undefined}`}>
        <Link href={`/post/${item._id}`}>
        <img src={`/${item.img}`} alt="" className="img-fluid"/>
        </Link>
        <div className="post-meta">
            <span className="date">{item.category}</span>
            <span className="mx-1">
                <i className='bi bi-dot'></i>{' '}
            </span>
            <span>{ new Date(item.date).toLocaleDateString('en-US')}</span>
        </div>
        <h2>
            <Link href={`/post/${item._id}`}>
            </Link>
        </h2>
        {large ? (
            <>
            <p className="mb-4 d-block">{item.brief}</p>
            <div className="d-flex align-items-center author">
                <div className="photo">
                    <img src={item.avator} alt="" className='img-fluid'/>
                </div>
                <div className="name">
                    <h3 className='m-0 p-0'>{item.author}</h3>
                </div>
            </div>
            </>
        ) : null}
    </div>
  )
}
