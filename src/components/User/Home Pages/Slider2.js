import React from 'react'
import './Slider2.css'

export default function Slider2() {
    React.useEffect(() => {
        const $app = document.querySelector('.app');
        const $img = document.querySelector('.app__img');
        const $pageNav1 = document.querySelector('.pages__item--1');
        const $pageNav2 = document.querySelector('.pages__item--2');
        let animation = true;
        let curSlide = 1;
        let scrolledUp, nextSlide;

        let pagination = function(slide, target) {
            animation = true;
            if (target === undefined) {
                nextSlide = scrolledUp ? slide - 1 : slide + 1;
            } else {
                nextSlide = target;
            }

            document.querySelector('.pages__item--' + nextSlide).classList.add('page__item-active');
            document.querySelector('.pages__item--' + slide).classList.remove('page__item-active');

            $app.classList.toggle('active');
            setTimeout(function() {
                animation = false;
            }, 3000)
        }

        let navigateDown = function() {
            if (curSlide > 1) return;
            scrolledUp = false;
            pagination(curSlide);
            curSlide++;
        }

        let navigateUp = function() {
            if (curSlide === 1) return;
            scrolledUp = true;
            pagination(curSlide);
            curSlide--;
        }

        setTimeout(function() {
            $app.classList.add('initial');
        }, 1500);

        setTimeout(function() {
            animation = false;
        }, 4500);

        document.addEventListener('mousewheel', function(e) {
            var delta = e.wheelDelta;
            if (animation) return;
            if (delta > 0 || e.detail < 0) {
                navigateUp();
            } else {
                navigateDown();
            }
        });

        document.addEventListener('DOMMouseScroll', function(e) {
            var delta = e.detail * -40;
            if (animation) return;
            if (delta > 0) {
                navigateUp();
            } else {
                navigateDown();
            }
        });

        document.querySelectorAll(".pages__item:not(.page__item-active)").forEach(page => {
            page.addEventListener('click', function() {
                if (animation) return;
                let target = +this.dataset.target;
                pagination(curSlide, target);
                curSlide = target;
            });
        });
    }, []);
  return (
    <>
    <br/>
      <div class="cont">
	<div class="mouse"></div>
	<div class="app">
		<div class="app__bgimg">
			<div class="app__bgimg-image app__bgimg-image--1">
			</div>
			<div class="app__bgimg-image app__bgimg-image--2">
			</div>
		</div>
		<div class="app__img">
			<img onmousedown="return false" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/537051/whiteTest4.png" alt="city" />
		</div>
		
		<div class="app__text app__text--1">
			<div class="app__text-line app__text-line--4">WE ARE</div>
			<div class="app__text-line app__text-line--3">HEART</div>
			<div class="app__text-line app__text-line--2">EXPERTISE </div>
			<div class="app__text-line app__text-line--1"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/537051/opus-attachment.png" alt="" /></div>
		</div>
		
		<div class="app__text app__text--2">
			<div class="app__text-line app__text-line--4">Neurosciences</div>
			<div class="app__text-line app__text-line--3">Expertise</div>
			<div class="app__text-line app__text-line--2">A legacy of innovation and<br/> excellence.</div>
			<div class="app__text-line app__text-line--1"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/537051/opus-attachment.png" alt="" /></div>
		</div>
        
	</div>
	<div class="pages">
		<ul class='pages__list'>
			<li data-target='1' class='pages__item pages__item--1 page__item-active'></li>
			<li data-target='2' class='pages__item pages__item--2'></li>
		</ul>
	</div>
</div>

</>
  )
}
