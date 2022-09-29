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
               <img src='./photo/images (1).jpg' ></img>
               
                <div className='parsonal-ditail'>
                  <div>
                      <h2>75 <span>kg</span></h2>
                  </div>
                  <div>
                      <h2>5.8 <span>ft</span></h2>   
                  </div>
                  <div>
                      <h2>24 <span>yr</span></h2>  
                  </div> 
               </div>

               <h2>Take a Brake</h2>
               <div className='take-brak'>
                  <ul>
                    <li>2m</li>
                    <li>5m</li>
                    <li>10m</li>
                    <li>15m</li>
                  </ul>
               </div>
            </div>
        </div>
    );
};

export default Home;