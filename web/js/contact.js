
document.addEventListener('DOMContentLoaded', function() {


var currentSlide = '1'; 

document.getElementById('dot1').addEventListener('click', function() {
    showSlide('slide1');
});
document.getElementById('dot2').addEventListener('click', function() {
    showSlide('slide2');
});
document.getElementById('dot3').addEventListener('click', function() {
    showSlide('slide3');
});
function showSlide(id) {
    var slides = document.querySelectorAll('.slide, .slide2, .slide3');
    var dots = document.querySelectorAll('.dot');
    var newSlideIndex = parseInt(id.charAt(id.length - 1));
    var direction = newSlideIndex > currentSlide ? 'Right' : 'Left';

    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';  
        dots[i].classList.remove('active'); 
    }

    var slide = document.getElementById(id);
    slide.style.display = 'flex';  
    slide.style.animationName = 'slideInFrom' + direction;

    document.getElementById('dot' + newSlideIndex).classList.add('active'); 

    currentSlide = newSlideIndex;  e
}



var targets = [1000, 98, 950, 4.7];
var elements = [
    document.getElementById('num1'),
    document.getElementById('num2'),
    document.getElementById('num3'),
    document.getElementById('num4')
];
var hasAnimated = [false, false, false, false];

function animateValue(element, target, duration, suffix = '') {
    var start = 0;
    var end = target;
    var range = end - start;
    var minTimer = 50;
    var stepTime = Math.abs(Math.floor(duration / range));
    stepTime = Math.max(stepTime, minTimer);
    var startTime = new Date().getTime();
    var endTime = startTime + duration;
    var timer;

    function run() {
        var now = new Date().getTime();
        var remaining = Math.max((endTime - now) / duration, 0);
        var value = Math.round(end - (remaining * range));
        element.innerHTML = value + (value == end ? suffix : '');
        if (value == end) {
            clearInterval(timer);
        }
    }

    timer = setInterval(run, stepTime);
    run();
}

var observer = new IntersectionObserver(function(entries) {
    if (entries[0].isIntersecting && !hasAnimated[0]) {
        elements.forEach(function(element, i) {
            if (!hasAnimated[i]) {
                animateValue(element, targets[i], 2000, i === 0 ? '+' : i === 1 ? '%' : i === 2 ? 'K' : '');
                hasAnimated[i] = true;
            }
        });
    }
}, { threshold: 0.0, rootMargin: '100px' });

elements.forEach(function(element) {
    observer.observe(element);
});




window.onload = function() {
    var listItems = document.querySelectorAll('.list-rec li');
    var parts = Array.from({length: 8}, (_, i) => document.querySelector('.par' + (i + 1) + '-rec'));

    function removeActiveClass(elements) {
        elements.forEach(function(element) {
            element.classList.remove('active');
        });
    }

    function hideElements(elements) {
        elements.forEach(function(element) {
            element.style.display = 'none';
        });
    }

    removeActiveClass(parts);
    hideElements(parts);
    listItems[0].classList.add('active');

    parts[0].style.display = 'flex';
    parts[0].classList.add('active');

    listItems.forEach(function(li, index) {
        li.addEventListener('click', function() {
            removeActiveClass(listItems);
            hideElements(parts);
            this.classList.add('active');
            parts[index].style.display = 'flex';
            parts[index].classList.add('active');
        });
    });
};

});