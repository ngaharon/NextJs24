'use client'

import React, { useState, useEffect, ReactNode, Key } from 'react'
import { useRouter } from 'next/navigation';
import './posts.css'

export default function Posts() {
  const router = useRouter();
  const [items, setItems] = useState<any | []>([]);

  const getItemsData = () => {
    fetch(`/api/postitems`)
    .then(res => res.json())
    .then(data => setItems(data))
    .catch(err => console.log(err.message))
  };

  useEffect(() => {
    getItemsData();
  }, []);

  return (
    <section id="posts" className='posts'>
      <div className="container" data-aos='fade-up'>
        {items && items.length > 0 && items.map((item: {
          title: ReactNode;
          _id: Key | null | undefined; item: { id: string; title: string } 
}) => (
          <p key={item._id}>{item.title}</p>
        ))}
      </div>

    </section>
  )
}
