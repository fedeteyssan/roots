
//Navbar responsive
function responsiveNav() {
  var x = document.getElementById("my-nav");
  if (x.className === "topnav") {
     x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}


//Botones links
const btnContacto = document.getElementById('btn-contacto');
const contacto = document.getElementById("footer")

btnContacto.addEventListener('click', () => contacto.scrollIntoView({
  behavior: 'smooth',
}));

let video = document.getElementById('background-video');
let button = document.getElementById('toggle-music');

function toggleMute() {
    video.muted = !video.muted;
}

button.addEventListener('click', toggleMute);


//Column speed
window.addEventListener('scroll', function() {
  // Calculate the scroll position
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
  // Adjust the position of each column based on the scroll position
  var columns = document.getElementsByClassName('column');
  Array.prototype.forEach.call(columns, function(column, index) {
    var speed = index + 0; // Adjust the speed for each column
    var translateY = scrollTop / speed;
    column.style.transform = 'translateY(' + translateY + 'px)';
  });
});


//Rellax

(function(h,f){"function"===typeof define&&define.amd?define([],f):"object"===typeof module&&module.exports?module.exports=f():h.Rellax=f()})(this,function(){var h=function(f,l){var b=Object.create(h.prototype),g=0,k=0,c=[],p=!1,u=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame||window.oRequestAnimationFrame||function(a){setTimeout(a,1E3/60)},m=function(a,b,d){return a<=b?b:a>=d?d:a};b.options={speed:-2,center:!1};l&&
Object.keys(l).forEach(function(a){b.options[a]=l[a]});b.options.speed=m(b.options.speed,-10,10);f||(f=".rellax");var q=document.querySelectorAll(f);if(0<q.length)b.elems=q;else throw Error("The elements you're trying to select don't exist.");var v=function(a){var e=a.getAttribute("data-rellax-percentage"),d=a.getAttribute("data-rellax-speed"),c=e||b.options.center?window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop:0,f=c+a.getBoundingClientRect().top,h=a.clientHeight||
a.offsetHeight||a.scrollHeight,g=e?e:(c-f+k)/(h+k);b.options.center&&(g=.5);c=d?m(d,-10,10):b.options.speed;if(e||b.options.center)c=m(d||b.options.speed,-5,5);e=Math.round(100*c*(1-g));a=a.style.cssText;d="";0<=a.indexOf("transform")&&(d=a.indexOf("transform"),d=a.slice(d),d=(g=d.indexOf(";"))?" "+d.slice(11,g).replace(/\s/g,""):" "+d.slice(11).replace(/\s/g,""));return{base:e,top:f,height:h,speed:c,style:a,transform:d}},r=function(){var a=g;g=void 0!==window.pageYOffset?window.pageYOffset:(document.documentElement||
document.body.parentNode||document.body).scrollTop;return a!=g?!0:!1},t=function(){r()&&!1===p&&n();u(t)},n=function(){for(var a=0;a<b.elems.length;a++){var e=" translate3d(0,"+(Math.round(100*c[a].speed*(1-(g-c[a].top+k)/(c[a].height+k)))-c[a].base)+"px,0)"+c[a].transform;b.elems[a].style.cssText=c[a].style+"-webkit-transform:"+e+";-moz-transform:"+e+";transform:"+e+";"}};b.destroy=function(){for(var a=0;a<b.elems.length;a++)b.elems[a].style.cssText=c[a].style;p=!0};(function(){k=window.innerHeight;
r();for(var a=0;a<b.elems.length;a++){var e=v(b.elems[a]);c.push(e)}window.addEventListener("resize",function(){n()});t();n()})();return b};return h});


/*setInterval(function() {
  var words = ['Ready', 'Creativity', 'Design', 'Experience', 'Agility', 'Efficient']; // Array of words to rotate
  var changingWord = document.getElementById('changing-word');
  var currentWord = changingWord.textContent;
  var currentIndex = words.indexOf(currentWord);
  var nextIndex = (currentIndex + 1) % words.length; // Calculate the index of the next word. The modulo returns the value on the left until it reaches the words array lenght, returning 0 and starting again.
  changingWord.textContent = words[nextIndex];
}, 2000); // Update every 2 seconds (adjust the interval as needed)*/


