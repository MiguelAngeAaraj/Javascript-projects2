/* variables */
const toggle = document.getElementById('navbar_toggle')
var navbar = document.getElementById('navbar')

var checks = true
const caroussel = document.getElementById('caroussel')
var carousel_img = document.querySelectorAll('#carousel_img')
var i = 0
const read_more = document.getElementById('read_more')
const show_less = document.getElementById('show_less')
const continue_Reading = document.getElementById('continue_read')
/* variables */

/*drop down menu*/

var check = true
const dropdown = document
  .querySelector('.item')
  .addEventListener('click', () => {
    if (check == true) {
      document.querySelector('#dropdwn_menu').style.display = 'block'
      check = false
    } else {
      document.querySelector('#dropdwn_menu').style.display = 'none'
      check = true
    }
  })
var dropdownList = document
  .getElementById('dropdwn_menu')
  .addEventListener('click', () => {
    document.querySelector('#dropdwn_menu').style.display = 'none'
    navbar.style.transition = '0.5s'
    navbar.style.top = '-400px'
  })
const home = document.getElementById('home')
home.addEventListener('click', () => {
  document.querySelector('#dropdwn_menu').style.display = 'none'
})
/*drop down menu*/
/*toggle menu*/

toggle.addEventListener('click', () => {
  if (checks) {
    navbar.style.transition = '0.5s'
    navbar.style.top = '50px'
    checks = false
  } else {
    navbar.style.transition = '0.5s'
    navbar.style.top = '-400px'
    checks = true
  }
})

/*toggle menu*/
/* caroussel */

function CarousselEngine() {
  carousel_img[i].style.display = 'none'
  i++

  if (i >= carousel_img.length) {
    i = 0
  }
  carousel_img[i].style.display = 'block'
}
setInterval(() => {
  CarousselEngine()
}, 3000)

read_more.addEventListener('click', () => {
  continue_Reading.style.display = 'block'
  read_more.style.display = 'none'
})
show_less.addEventListener('click', () => {
  continue_Reading.style.display = 'none'
  read_more.style.display = 'block'
})
document.getElementById('read_more1').addEventListener('click', () => {
  document.getElementById('continue_read1').style.display = 'block'
  document.getElementById('read_more1').style.display = 'none'
})
document.getElementById('show_less1').addEventListener('click', () => {
  document.getElementById('continue_read1').style.display = 'none'
  document.getElementById('read_more1').style.display = 'block'
})
document.getElementById('read_more2').addEventListener('click', () => {
  document.getElementById('continue_read2').style.display = 'block'
  document.getElementById('read_more2').style.display = 'none'
})
document.getElementById('show_less2').addEventListener('click', () => {
  document.getElementById('continue_read2').style.display = 'none'
  document.getElementById('read_more2').style.display = 'block'
})
document.getElementById('read_more3').addEventListener('click', () => {
  document.getElementById('continue_read3').style.display = 'block'
  document.getElementById('read_more3').style.display = 'none'
})
document.getElementById('show_less3').addEventListener('click', () => {
  document.getElementById('continue_read3').style.display = 'none'
  document.getElementById('read_more3').style.display = 'block'
})

var map
var mappoint = { lat: 33.74855, lng: -84.3915 }
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: mappoint,
    zoom: 8,
  })
  var marker = new google.maps.Marker({ position: mappoint, map: map })
}
document.getElementById('scrollTo').addEventListener('click', () => {
  window.scrollTo(0, 0)
})
