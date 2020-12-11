import React from 'react';
import '../App.css';
import './HeroSection.css';
import logo from '../images/ProfilePic.jpg';

var TxtType = function (el, toRotate, period) {
	this.toRotate = toRotate;
	this.el = el;
	this.loopNum = 0;
	this.period = parseInt(period, 10) || 2000;
	this.txt = '';
	this.tick();
	this.isDeleting = false;
};

TxtType.prototype.tick = function () {
	var i = this.loopNum % this.toRotate.length;
	var fullTxt = this.toRotate[i];

	if (this.isDeleting) {
		this.txt = fullTxt.substring(0, this.txt.length - 1);
	} else {
		this.txt = fullTxt.substring(0, this.txt.length + 1);
	}

	this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

	var that = this;
	var delta = 60; 

	if (this.isDeleting) {
		delta /= 2;
	}

	if (!this.isDeleting && this.txt === fullTxt) {
		delta = this.period;
		this.isDeleting = true;
	} else if (this.isDeleting && this.txt === '') {
		this.isDeleting = false;
		this.loopNum++;
		delta = 500;
	}

	setTimeout(function () {
		that.tick();
	}, delta);
};

window.onload = function () {
	var elements = document.getElementsByClassName('typewrite');
	for (var i = 0; i < elements.length; i++) {
		var toRotate = elements[i].getAttribute('data-type');
		var period = elements[i].getAttribute('data-period');
		if (toRotate) {
			new TxtType(elements[i], JSON.parse(toRotate), period);
		}
	}
};
function HeroSection() {
    return (
        <div className = 'hero-container'>
            <p1>Nam Truong</p1>
            {/*<p>Class of 2020 - B.S. in Computer Science</p>*/}
            <p>
				<span href="#" class="typewrite typeBlink" data-period="2500"
					data-type='["Student at the University of Texas at Dallas", "B.S. in Computer Science", "Ardent explorer and hiker", "Dedicated powerlifter", "Açaí enthusiast", "Thanks for reading!"]'>
				</span>
			</p>
            <img src={logo} alt="Avatar" class="avatar"/>
        </div>
    )
}

export default HeroSection;
