import React from 'react';
import './class.css'

const Subject = (props) => {
   const {name,picture,time,discription} = props.home;
    return (
        <div className='subject-text'>
           
           <img src={picture} ></img>
           <div className='course'>
             <h3>Activity : {name}</h3>
            <p>Ditails:  {discription}</p>
            <p>Time Spant: {time}:00h</p>

           
            </div>
            <button className='btn-cart'>
                <p>Add to Done list</p>
            </button>
        </div>
    );
};

export default Subject;