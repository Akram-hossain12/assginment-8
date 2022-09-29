import React from 'react';
import './class.css'

const Subject = (props) => {
   const {name,picture,time,discription} = props.home;
    return (
        <div className='subject-text'>
           
           <img src={picture} ></img>
           <div className='course'>
             <h3>Course title:{name}</h3>
            <p>Ditails:  {discription}</p>
            <p>Time: {time}:00h</p>
            </div>
        </div>
    );
};

export default Subject;