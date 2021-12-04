import React from "react";
import image1 from "./image1.jpg"
import './Homepage.css'


const Homepage =() => {
    return (

        <div className='homepage'>
           {/* <div style={{ backgroundImage:`url(${image1})` }}>*/}


        <h4>Discover our movies</h4>

            <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
             </span>

            <div className='homepage_buttons'>
                <button className='homepage_btn-services'>Services</button>
                <button className='homepage_btn-about'>About Us</button>
            </div>
       {/* </div>*/}
        </div>
    )
}
export default Homepage;