import React from 'react';
import './ans.css';

const Ans = () => {
    return (
        <div>
          <h2> More Know about React</h2>
          <div className='Ans-section'>
          <div className='ans-one'>
            <h3>How Dose React Works?</h3>
            <p>introduction to ReactJS: Let us understand this with a practical example.

            Let’s say one of your friends posted a photograph on Facebook. Now you go and like the image and then you started checking out the comments too. Now while you are browsing over comments you see that the likes count has increased by 100, since you liked the picture, even without reloading the page. This magical count change is because of ReactJS. </p>
          </div>
          <div>
            <h3>What are the different props and state?</h3>
            <p>Have you ever wondered how can we pass the data between the components in ReactJS? We can pass the data between the components using Props and State. So, let us know how we can pass the data using props and state and understand the difference between the two.</p>
          </div>
          </div>
        </div>
    );
};

export default Ans;