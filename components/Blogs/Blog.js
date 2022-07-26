import './Blog.css';
import { ScatterBoxLoader } from "react-awesome-loaders";
import React, { useEffect, useState } from 'react';
import BlogList from './BlogList/BlogList';

function Blog() {

    const [isSelected, setIsSelected] = useState('1');
    const [currentPage, setCurrentPage] = useState('Goblin');
    const [blogs,setBlogs] = useState(undefined);
    const list = [
        {
            id: '1',
            title: 'Goblin',
        },
        {
            id: '2',
            title: 'Venom',
        },
        {
            id: '3',
            title: 'Sandman',
        },
        {
            id: '4',
            title: 'Octopus',
        },
    ];

    async function get() {
        const response = await fetch(
            'https://react-app-8199f-default-rtdb.firebaseio.com/spider/-MjU6bOY9pLXjl_VDhhl/0.json',
        );
        const data = await response.json();
        const blog = {};
        for (const d in data) {
            blog[d] = data[d];
        }
        setBlogs(blog);
    }
    useEffect(() => {
        get();
    }, []);

    return (
        <section className='blog-section' id='blogs'>
            {blogs!==undefined && <ul className='blog-title-list'>
                {list.map(item => <BlogList key={item.id} setCurrentPage={setCurrentPage} id={item.id} isActive={isSelected === item.id} title={item.title} setIsSelected={setIsSelected}/>)}
            </ul>}
            <div className='blogs'>
                {blogs!== undefined ?
                    <div className='blog-content'>
                        {
                            blogs[currentPage].map(item =>
                                <div className='blog-content-element'>
                                    <img src={item} />
                                    <div><span>ASDsaasdASDasdas Dasd asdasdas ASdasDasD ASDasd ASDas</span></div>
                                </div>
                            )
                        }
                    </div>
                    : <ScatterBoxLoader
                        primaryColor={"#6366F1"}
                        background={'white'}
                    />}
            </div>
        </section>
    )
}

export default Blog