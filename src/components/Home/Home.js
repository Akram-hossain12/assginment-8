import './Home.css';
import React, { useEffect, useState } from 'react';
import Class from '../class/Subject';
import Subject from '../class/Subject';

const Home = (props) => {

    const [home, setHome] = useState([]);
    useEffect(()=>{
          fetch('fakeApi.json')
          .then(res => res.json())
          .then(data=> setHome(data))
    }, []);

    return (
        
        <div className='class-container'>
            
           <div className='class-section'>
            
                  {
                    home.map(home=><Subject key={home._id} home={home}></Subject>)
                  }
                
           </div>
           <div className='class-Ditails'>
               <h2> spant time</h2>
           </div>
        </div>
    );
};

export default Home;