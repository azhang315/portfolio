import React from 'react';
import {useRef} from 'react';
import './Resume.css';

import Resume_img from '../Assets/Zhang_Alex_Resume.png';

const Resume = () => {
    const myRef = useRef(null);
    function openInNewTab() {
        console.log('bruh');
        window.open('/Zhang_Alex_Resume.pdf');
    }
    return (
        <div className="resume">
            <div id="caption">
                <h1 id="resume_header">Resume</h1>
                <button onClick={openInNewTab} ref={myRef}>Download PDF⇓</button>
            </div>
            <img id="resume_img" src={Resume_img} width="600" height="825" alt="Resume" />
        </div>

    );
    
  };
  
  export default Resume;
  