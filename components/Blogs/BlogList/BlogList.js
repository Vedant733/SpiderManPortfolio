import React from 'react'
import './BlogList.css'
function BlogList(props) {
    return (
        <l1 className={props.isActive ? "blogElement active" : "blogElement"} onClick={
            () => {
                props.setIsSelected(props.id)
                props.setCurrentPage(props.title);
            }   
        }> 
            {props.title}
        </l1>
    )
}

export default BlogList;