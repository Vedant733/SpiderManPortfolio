import React, { useState } from 'react'
import './Sidebar.css'

function Sidebar() {
    const [isLiked, setIsLiked] = useState(false);
    return (
        <aside className='sidebar'>
            <span><i className="fa fa-user"></i></span>
            <span><i className="gg-instagram"></i></span>
            <span><i className="fa fa-google"></i></span>
            <span><i className="fa fa-envelope"></i></span>
            <span><i className="fa fa-folder-open"></i></span>
            {
                isLiked
                    ? <span onClick={() => setIsLiked(false)}><i className="fa fa-thumbs-up"></i></span>
                    : <span onClick={() => setIsLiked(true)}><i className="fa fa-thumbs-o-up"></i></span>
            }
        </aside>
    )
}

export default Sidebar
