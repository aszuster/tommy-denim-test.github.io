const video = document.querySelector('.video');
const btn = document.getElementById('play-pause');
const overlay = document.getElementById('c-overlay');

//Play-pause button and overlay

function togglePlayPause(){
    if(video.paused){
        btn.className= 'pause';
        video.play();
        overlay.removeChild(overlay.lastElementChild);
    }else{
        btn.className = 'play';
        video.pause();
        const div = document.createElement('div');
        div.className = 'overlay'
        overlay.appendChild(div);
    }
}

btn.onclick = function (){
    togglePlayPause();
}

//Video play again when reach the end

video.addEventListener('timeupdate', function(){
    if(video.ended){
        btn.className = "play";
        video.currentTime=0;
        togglePlayPause();
    }
})

//Animations triggered by scrolling

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('gray-anim');
        }
      });
  });

  observer.observe(document.querySelector('.gray'));

const observerSec = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('gray2-anim');
        }
      });
  });

  observerSec.observe(document.querySelector('.gray2'));