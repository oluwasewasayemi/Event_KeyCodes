// a window is a top level object
const insert = document.getElementById('insert')

window.addEventListener('keydown', (event) => {
  insert.innerHTML =  
  `
  <div class="key">
  ${event.key === ' ' ? 'Space' : event.key} 
  <small>event.key</small>
</div>

<div class="key">
  ${event.keyCode}
  <small>event.keyCode</small>
</div>

<div class="key">
  ${event.code}
  <small>event.code</small>
</div>
  `
})

// deprecated
// <div class="key">
//     ${event.keyCode}
//     <small>event.keyCode</small>
// </div>