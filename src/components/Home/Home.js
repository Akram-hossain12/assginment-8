import './Home.css';
import React, { useEffect, useState } from 'react';
import Class from '../class/Subject';
import Subject from '../class/Subject';

const Home = (props) => {

    const [home, setHome] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(()=>{
          fetch('fakeApi.json')
          .then(res => res.json())
          .then(data=> setHome(data))
    }, []);

    const AddtoList = (home)=>{
        const newCart = [...cart, home];
       setCart(newCart)
    }

    return (
        
        <div className='class-container'>
            
           <div className='class-section'>
            
                  {
                    home.map(home=><Subject 
                        key={home.index}
                         home={home} 
                        AddtoList={AddtoList}></Subject>)
                  }
                
           </div>
           <div className='class-Ditails'>
               <h2> spant time</h2>
               <p>selected item:{cart.length}</p>
               
           </div>
        </div>
    );
};

export default Home;