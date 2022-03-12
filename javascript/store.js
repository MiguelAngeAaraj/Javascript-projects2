const input = document.getElementById('input')
const ul = document.getElementById('search_input')
var li = ul.querySelectorAll('#search_box')
var a = ul.querySelectorAll('#search_item')
const input1 = document.getElementById('input1')
const container_cart = document.querySelectorAll('.container_cart')
input.addEventListener('keyup', () => {
  var input_content = document.getElementById('input').value.toLowerCase()
  for (var i = 0; i < a.length; i++) {
    if (a[i].innerHTML.indexOf(input_content) > -1) {
      li[i].style.display = 'block'
    } else {
      li[i].style.display = 'none'
    }
  }
  if (input_content.length == 0) {
    for (var i = 0; i < a.length; i++) {
      li[i].style.display = 'none'
    }
    ul.style.display = 'none'
  } else {
    ul.style.display = 'block'
  }
})
input1.addEventListener('keyup', () => {
  var input_content1 = document.getElementById('input1').value.toLowerCase()
  for (var i = 0; i < a.length; i++) {
    if (a[i].innerHTML.indexOf(input_content1) > -1) {
      li[i].style.display = 'block'
    } else {
      li[i].style.display = 'none'
    }
  }
  if (input_content1.length == 0) {
    for (var i = 0; i < a.length; i++) {
      li[i].style.display = 'none'
    }
    ul.style.display = 'none'
  } else {
    ul.style.display = 'block'
  }
})
ul.addEventListener('click', () => {
  ul.style.display = 'none'
})
$(document).ready(function () {
  document.querySelector('#mercedes').addEventListener('change', (evt) => {
    select_categorie('mercedes', evt.target.checked)
  })
  document.querySelector('#tesla').addEventListener('change', (evt) => {
    select_categorie('tesla', evt.target.checked)
  })
  document.querySelector('#renault').addEventListener('change', (evt) => {
    select_categorie('renault', evt.target.checked)
  })
  document.querySelector('#kia').addEventListener('change', (evt) => {
    select_categorie('kia', evt.target.checked)
  })
  function select_categorie(categorie, bvisible) {
    var categorieSelected = ''
    console.log(categorie)
    switch (categorie) {
      case 'mercedes':
        categorieSelected = 'h2[data-type=mercedes]'
        break
      case 'renault':
        categorieSelected = 'h2[data-type=renault]'
        break
      case 'tesla':
        categorieSelected = 'h2[data-type=tesla]'
        break
      case 'kia':
        categorieSelected = 'h2[data-type=kia]'
        break
    }
    $('.container_cart')
      .has(categorieSelected)
      .css('display', bvisible ? 'none' : 'block')
  }

  /* basket  */
})

$(document).on('click', '#basket', function () {
  var img_src = $(this).parent('li').children('img').attr('src')
  var price = $(this).parent('li').children('div').children('p').text()
  var title = $(this).parent('li').children('h2').text()
  $(this).css('pointer-events', 'none')
  var total_price =
    parseInt($('#total_price').children('span').text()) + parseInt(price)
  $('#total_price').children('span').text(total_price)
  $('#total_price').children('#sum_price').attr('data_price', total_price)
  localStorage.setItem(
    title,
    JSON.stringify({
      titles: title,
      IMGSrc: img_src,
      prices: price,
      input: '<input type=number  id=input_num min=1 max=9>',
      value: 1,
    }),
  )
  localStorage.setItem(
    'TotalPrice',
    $('#total_price').children('#sum_price').attr('data_price'),
  )
  localStorage.setItem(
    'essential_price',
    $('#total_price').children('#sum_price').attr('data_price'),
  )
  $('#basket_container').append(
    '<li id=basket_contain>' +
      '<img id=basket_img src =' +
      img_src +
      '>' +
      '<h2 id=basket_names>' +
      title +
      '</h2>' +
      '$<span id=basket_price>' +
      price +
      '</span><br>' +
      '<input type=number id=input_num  value=1 min=1 max=100/>' +
      '<button id=remove>remove</button>' +
      '</li>',
  )
})
$(document).on('change', '#input_num', function (e) {
  let counter_price = 0
  const price = parseInt($(this).parent('li').children('#basket_price').text())
  const basket_container = document.querySelector('#basket_container')
  const li_container = basket_container.querySelectorAll('#basket_contain')
  if ($(this).val() >= 1 && $(this).val() <= 100) {
    const actual_price = ($(this).val() - 1) * price
    $(this).parent('li').attr('actual_price', actual_price)
    li_container.forEach((contain) => {
      if (contain.getAttribute('actual_price') != null) {
        counter_price += parseInt(contain.getAttribute('actual_price'))
      }

      let data = JSON.parse(
        localStorage.getItem(contain.querySelector('h2').innerHTML),
      )
      data.value = contain.querySelector('input').value
      localStorage.setItem(
        contain.querySelector('h2').innerHTML,
        JSON.stringify(data),
      )
    })
    counter_price += parseInt(
      $('#total_price').children('span').attr('data_price'),
    )
    $('#total_price').children('span').text(counter_price)
    $('#total_price').children('span').attr('change_price', counter_price)
    localStorage.setItem(
      'TotalPrice',
      $('#total_price').children('#sum_price').attr('change_price'),
    )
  }
})
$(document).on('click', ' #remove', function () {
  var sub_price = $(this).parent('li').children('#basket_price').text()
  const title = $(this).parent('li').children('h2').text()
  var sum_price = $('#total_price').children('#sum_price').text()
  const actual_price = parseInt($(this).parent('li').attr('actual_price'))
  if (!isNaN(actual_price)) {
    var subs_price = Math.abs(
      parseInt(sum_price) - parseInt(sub_price) - actual_price,
    )
  } else {
    var subs_price = Math.abs(parseInt(sum_price) - parseInt(sub_price))
  }
  localStorage.setItem('TotalPrice', subs_price)
  $('#total_price').children('#sum_price').text(subs_price)
  $('#total_price').children('#sum_price').attr('data_price', subs_price)
  const container = document
    .querySelector('#container')
    .querySelectorAll('.container_cart')
  for (let i = 0; i < container.length; i++) {
    const titleName = container[i].querySelector('h2').innerHTML
    if (title == titleName) {
      container[i].querySelector('#basket').style.pointerEvents = 'auto'
      break
    }
  }
  localStorage.removeItem(title)
  $(this).parent('li').remove()
})
/* basket */

window.onload = () => {
  if (localStorage.length != 0) {
    for (let i = 0; i < localStorage.length; i++) {
      if (
        localStorage.key(i) !== 'TotalPrice' &&
        localStorage.key(i) !== 'essential_price'
      ) {
        const data = JSON.parse(localStorage.getItem(localStorage.key(i)))
        $('#basket_container').append(
          '<li id=basket_contain data_src=' +
            data.titles +
            '>' +
            '<img id=basket_img src=' +
            data.IMGSrc +
            '>' +
            '<h2 id=basket_names>' +
            data.titles +
            '</h2>' +
            '$<span id=basket_price>' +
            data.prices +
            '</span><br>' +
            data.input +
            '<button id=remove>remove</button>' +
            '</li>',
        )
      }
    }
    const InputData = document.querySelectorAll(
      '#basket_container > li > input',
    )
    let j = 0
    for (let i = 0; i < localStorage.length; i++) {
      if (
        localStorage.key(i) !== 'TotalPrice' &&
        localStorage.key(i) !== 'essential_price'
      ) {
        const data = JSON.parse(localStorage.getItem(localStorage.key(i)))
        InputData[j].setAttribute('value', data.value)
        j++
      }
    }
    j = 0
    for (let i = 0; i < localStorage.length; i++) {
      if (
        localStorage.key(i) !== 'TotalPrice' &&
        localStorage.key(i) !== 'essential_price'
      ) {
        const data = JSON.parse(localStorage.getItem(localStorage.key(i)))
        const price_li = parseInt(
          InputData[j].parentElement.querySelector('#basket_price').innerHTML,
        )
        const product = (data.value - 1) * price_li
        InputData[j].parentElement.setAttribute('actual_price', product)
        j++
      }
    }
    const container = document
      .querySelector('#container')
      .querySelectorAll('.container_cart')
    for (let i = 0; i < localStorage.length; i++) {
      if (
        localStorage.key(i) !== 'TotalPrice' &&
        localStorage.key(i) !== 'essential_price'
      ) {
        const data = JSON.parse(localStorage.getItem(localStorage.key(i)))
          .titles
        for (let k = 0; k < container.length; k++) {
          const titleName = container[k].querySelector('h2').innerHTML
          if (titleName == data) {
            container[k].querySelector('#basket').style.pointerEvents = 'none'
            break
          }
        }
      }
    }
  }
  $('#total_price')
    .children('#sum_price')
    .text(localStorage.getItem('TotalPrice'))
  $('#total_price')
    .children('#sum_price')
    .attr('data_price', localStorage.getItem('essential_price'))
  //.attr('data_price', localStorage.getItem('essential_price')
  if (localStorage.length == 0 || localStorage.length == 2) {
    $('#total_price').children('#sum_price').text(0)
  }
}
//texte =
//'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab nemo optio aperiam tempora quos veniam eveniet sunt, expedita pariatur, hic aut, distinctio fugit consequatur earum eligendi reprehenderit? Omnis, sint a.'
//const text = texte.replace(/\S/g, '<span>$&</span>')
