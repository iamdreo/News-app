import React from 'react'
import Background from '../images/background.jpg';
import Search from './Search';

/*
handles background image on homepage and app bar 
*/
const Banner = () => {
    return (
        <div style={{backgroundImage: `url(${Background})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: 400}}>

       <Search/>
       
        </div>
    )
}
export default Banner;