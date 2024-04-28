let container2 = document.getElementsByClassName('container2')[0];
let container3 = document.getElementsByClassName('container3')[0];
let checkIcon = document.getElementById('check-icon');
let xIcon = document.getElementById('x-icon');
let i = 0;

xIcon.addEventListener('click', function(){
  typeNote();
})

checkIcon.addEventListener('click', function(){
  createNote();
})

function typeNote(){
  if(container3.style.display == 'none'){
      container3.style.display = 'block';
  }
  else{
      container3.style.display = 'none'
  }
}

function createNote(){
  let noteText = document.getElementById('note-text').value;
  let node0 = document.createElement('div');
  let node1 = document.createElement('h1');
  node1.innerHTML = noteText;
  node1.setAttribute('style', 'width:15.6rem; height:15.6rem; font-size:1.6rem; padding:1.5rem; margin-top:0.6rem; overflow:hidden; box-shadow: 0px 10px 24px rgba(0, 0, 0, 0.75);');

  node1.style.margin = margin();
  node1.style.transform = rotate();
  node1.style.backgroundColor = color(); // Update this line

  node0.appendChild(node1);

  container2.insertAdjacentElement('beforeend', node0);

  node0.addEventListener('mouseenter', function(){
      node0.style.transform = 'scale(1.1)';
  })

  node0.addEventListener('mouseleave', function(){
      node0.style.transform = 'scale(1)';
  })

  node0.addEventListener('dblclick', function(){
      node0.remove();
  })

  document.getElementById('note-text').value = '';
}

function margin (){
  let random_margin = ['5px', '1px', '5px', '10px', '15px', '20px'];

  return random_margin[Math.floor(Math.random() * random_margin.length)]
}

function rotate(){
  let random_rotate = ['rotate(3deg)','rotate(1deg)','rotate(-1deg)','rotate(-3deg)','rotate(-5deg)','rotate(-10deg)',]

  return random_rotate[Math.floor(Math.random() * random_rotate.length)]
}

function color(){
  let random_color = ['#FFB800', '#1BE7FF', '#F564A9', '#008148', '#CBBAED', '#5D5D81', '#FFFC31', '#FF1B1C']

  if(i > random_color.length - 1){
      i = 0;
  }
  return random_color[i++]
}