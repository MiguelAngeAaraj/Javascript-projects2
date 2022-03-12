$(document).on('click', '#main #form #button', function () {
  var check = false
  var comment = $(this).parent('#form').children('#comment').val().toLowerCase()
  var name = $(this).parent('#form').children('#name').val().toLowerCase()
  var email = $(this).parent('#form').children('#email').val().toLowerCase()
  if (name.length == 0 || comment.length == 0 || email.length == 0) {
    $(this)
      .parent('#form')
      .children('#comment')
      .fadeTo('fast', 0.3)
      .fadeTo('fast', 1)
      .fadeTo('fast', 0.3)
      .fadeTo('slow', 1)
      .slideUp('slow')
      .slideDown('slow')
    $(this).parent('#form').children('#comment').css('border', '1px solid red')
    $(this)
      .parent('#form')
      .children('#name')
      .fadeTo('fast', 0.3)
      .fadeTo('fast', 1)
      .fadeTo('fast', 0.3)
      .fadeTo('slow', 1)
      .slideUp('slow')
      .slideDown('slow')
    $(this).parent('#form').children('#name').css('border', '1px solid red')
    $(this)
      .parent('#form')
      .children('#email')
      .fadeTo('fast', 0.3)
      .fadeTo('fast', 1)
      .fadeTo('fast', 0.3)
      .fadeTo('slow', 1)
      .slideUp('slow')
      .slideDown('slow')
    $(this).parent('#form').children('#email').css('border', '1px solid red')
  } else {
    $(this)
      .parent('#form')
      .children('#comment')
      .css('border', '1px solid black')
    $(this).parent('#form').children('#name').css('border', '1px solid black')
    $(this).parent('#form').children('#email').css('border', '1px solid black')
    for (var i = 0; i < email.length; i++) {
      if (
        email.match('@gmail.com') ||
        email.match('@hotmail.com') ||
        email.match('@outlook.com')
      ) {
        check = true
      }
    }
    if (check == true) {
      $('#form #comments').append(
        "<li id='commented'>" +
          "<p id='names'> name: " +
          name +
          '</p>' +
          "<span id='commented_container'>comment: " +
          comment +
          '</span>' +
          '<br>' +
          "<button id='remove_comment' type=button>remove</button>" +
          '</li>',
      )
      $(this).parent('#form').children('#comment').val('')
      $(this).parent('#form').children('#name').val('')
      $(this).parent('#form').children('#email').val('')
    } else {
      window.alert(
        'the email must contains @gmail.com or @hotmail.com or @outlook.com ',
      )
      $(this)
        .parent('#form')
        .children('#comment')
        .css('border', '1px solid black')
      $(this).parent('#form').children('#name').css('border', '1px solid black')
      $(this).parent('#form').children('#email').css('border', '1px solid red')
    }
  }
})
$(document).on('click', '#comments #commented #remove_comment', function () {
  $(this).parent('#commented').remove()
})
