import './Navbar.css';

import {React , useState} from 'react'

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const clickHandler = () => {
        setIsOpen((prevState) => {
            return !prevState;
        });
    }
    return (
        <div className={'navigation'}>
            <input checked={isOpen} className='checkbox' type='checkbox' id='nav-toggle' onClick={clickHandler}/>
            <label htmlFor='nav-toggle' className ='nav-button'>
                <span className='nav-icon'>&nbsp; </span>
            </label>
            <nav className="navbar">
                <ul className="nav-list">
                    <li className="nav-list-element"><a href="#home" className="nav-list-link" onClick={clickHandler}>Home</a></li>
                    <li className="nav-list-element"><a href="#blogs" className="nav-list-link" onClick={clickHandler}>Blogs</a></li>
                    <li className="nav-list-element"><a href="#works" className="nav-list-link" onClick={clickHandler}>About</a></li>
                    <li className="nav-list-element"><a href="#contact" className="nav-list-link" onClick={clickHandler}>Contact</a></li>
                </ul>
            </nav>
            <div className="nav-background">&nbsp; </div>
        </div>
    )
}

export default Navbar;
