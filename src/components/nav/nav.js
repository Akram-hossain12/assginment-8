import "./nav.css";
import React from 'react';

const Nav = (props) => {
    return (
        <div className="nav-container">
         <div className="nav-text"> Active Class Room</div>
         <div className="ul-text">
            <ul>

                <li>Home</li>
                <li>Blog</li>
                <li>Science</li>
                <li>Arts</li>
                
            </ul>
         </div>
        </div>
    );
};

export default Nav;