import React from 'react';
import '../../App.css';
import logo from '../../images/resume.jpg';
import Pdf from '../../images/NamTruongResume.pdf';

export default function Resume(){
    return (
        <div className="overall" background-color= "#d8dfcd">
        <div class="container text-center my-4" data-aos="fade-up">
            <a href={Pdf} target="_blank" rel="noopener" >
			    <img class="img-fluid hoverable" src={logo}  data-tilt data-tilt-max="0" data-tilt-scale="1.04" data-tilt-speed="300" class="resume1"/>
		    </a>
        </div>
        </div>
    )
}