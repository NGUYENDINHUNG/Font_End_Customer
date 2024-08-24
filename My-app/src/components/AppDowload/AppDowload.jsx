import React from 'react';
import "./AppDowload.css"
import { assets } from '../../assets/asset';



function AppDowload (props) {
    return (
        <div className='app-download' id='app-download'>
           <p>For Better Experience Download <br /> Tomato</p>
           <div className="app-download-platforms">
            <img src={assets.play_store} alt="" />
            <img src={assets.app_store} alt="" />
           </div>
        </div>
    );
}

export default AppDowload ;