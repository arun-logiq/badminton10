import React from 'react'
import Page1 from "../../assets/images/Page1.png";
import Page2 from "../../assets/images/Page2.png";
import Page3 from "../../assets/images/Page3.png";
import Page4 from "../../assets/images/Page4.png";
import Page5 from "../../assets/images/Page5.png";
import "./Home.css"
import NavBar from "../../components/navBar";
const Home=() =>{
    return (
        <div className='Home'>
            <NavBar/>
            <img src={Page1}/>
            <img src={Page2}/>
            aa
            <img src={Page3}/>
            <img src={Page4}/>
            <img src={Page5}/>
        </div>
    )
}

export default Home;
