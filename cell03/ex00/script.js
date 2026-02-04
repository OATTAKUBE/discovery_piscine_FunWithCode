const btn = document.getElementById('Chang-Color');

function randomColor(){
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);

  return `rgb(${r}, ${g}, ${b})` ;
}

  btn.addEventListener('click', function() {
    document.body.style.backgroundColor = randomColor() ;
  });