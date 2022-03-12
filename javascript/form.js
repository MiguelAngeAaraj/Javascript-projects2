const button = document.getElementById('button2')
var email = document.getElementById('email')
var phone = document.getElementById('phone')
var password = document.getElementById('password')
var password2 = document.getElementById('password2')
const email_error = document.getElementById('email_error')
const phone_error = document.getElementById('phone_error')
const password_error = document.getElementById('password_error')
const password2_error = document.getElementById('confirm_pass_error')
var texterea = document.getElementById('texterea')
const character_length = document.getElementById('character_length')

button.addEventListener('click', () => {
  var true_array = [
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
  ]
  var check_array = []
  var email_content = email.value
  var numbers = '0123456789'
  var special_characters = '!%^&*()_+-=~|][{}?/.,<>><\'"'
  var check_form = false
  var phone_content = phone.value
  var password_content = password.value
  var password_confirmation = password2.value
  var texterea_content = texterea.value
  if (email_content.length == 0) {
    email_error.innerHTML = 'the email should contain character'
    email_error.style.color = 'red'
    /// check[0] 0
    check_array[0] = false
  } else {
    email_error.innerHTML = ''
    email_error.style.color = '#fff'
    for (var i = 0; i < email_content.length; i++) {
      if (email_content.substr(i, 1) == '@') {
        check_form = true
        break
      }
    }
    if (check_form == true) {
      /// check 1
      check_array[1] = true
    } else {
      email_error.innerHTML = 'the email should contains @ symbol'
      email_error.style.color = 'red'
      /// check 0
      check_array[1] = false
    }
  }
  ///
  check_form = false
  if (phone_content.length == 0) {
    phone_error.innerHTML = 'the phone number is empty'
    phone_error.style.color = 'red'
    //check[2] 0
    check_array[2] = false
  } else {
    phone_error.style.color = '#fff'
    phone_error.innerHTML = ''
    for (i = 0; i < phone_content.length; i++) {
      if (numbers.indexOf(phone_content.substr(i, 1)) == -1) {
        check_form = true
        break
      }
    }
    if (check_form == false) {
      //check[3] = 1
      check_array[3] = true
    } else {
      phone_error.innerHTML = 'the phone field should contains only numbers'
      phone_error.style.color = 'red'
      // check[3] = 0
      check_array[3] = false
    }
  }
  if (password_content.length == 0) {
    password_error.innerHTML = 'the password field is empty'
    password_error.style.color = 'red'
    //check[4] 0
    check_array[4] = false
  } else {
    password_error.innerHTML = ''
    password_error.style.color = '#fff'
    check_form = false
    for (var i = 0; i < password_content.length; i++) {
      if (isNaN(password_content.substr(i, 1))) {
        check_form = true
        break
      }
    }
    if (check_form == false) {
      document.getElementById('password_letter').style.color = 'red'
      // check[5] 0
      check_array[5] = false
    } else {
      document.getElementById('password_letter').style.color = '#fff'
      // check[5] 1
      check_array[5] = true
    }
    check_form = false
    if (password_content.length >= 8) {
      document.getElementById('password_character_long').style.color = '#fff'
      // check[6] 1
      check_array[6] = true
    } else {
      document.getElementById('password_character_long').style.color = 'red'
      //check[6] 0
      check_array[6] = false
    }
    for (var i = 0; i < password_content.length; i++) {
      if (
        password_content.substr(i, 1) == '@' ||
        password_content.substr(i, 1) == '#' ||
        password_content.substr(i, 1) == '$'
      ) {
        check_form = true
        break
      }
    }
    if (check_form == true) {
      document.getElementById('password_specific').style.color = '#fff'
      // check[7] 1
      check_array[7] = true
    } else {
      document.getElementById('password_specific').style.color = 'red'
      // check [7] 0
      check_array[7] = false
    }
    check_form = false
    for (var i = 0; i < password_content.length; i++) {
      if (special_characters.indexOf(password_content.substr(i, 1)) != -1) {
        check_form = true
        break
      }
    }
    if (check_form == true) {
      document.getElementById('password_special').style.color = 'Red'
      // check[8] 0
      check_array[8] = false
    } else {
      document.getElementById('password_special').style.color = '#fff'
      // check[8] 1
      check_array[8] = true
    }
  }
  if (password_confirmation.length == 0) {
    password2_error.innerHTML = 'the confirm pass is empty'
    password2_error.style.color = 'red'
    // check [9] 0
    check_array[9] = false
  } else {
    password2_error.innerHTML = ''
    password2_error.style.color = '#fff'
    var sizes = 0
    for (var i = 0; i < password_confirmation.length; i++) {
      if (password_confirmation.substr(i, 1) == password_content.substr(i, 1)) {
        sizes++
      } else {
        sizes--
      }
    }
    if (password_content.length == sizes) {
      document.getElementById('confirm_pass').innerHTML = ''
      document.getElementById('confirm_pass').style.color = '#fff'
      sizes = 0
      // check[10] 1
      check_array[10] = true
    } else {
      document.getElementById('confirm_pass').innerHTML =
        'the password entered is false'
      document.getElementById('confirm_pass').style.color = 'red'
      sizes = 0
      // check[10] 0
      check_array[10] = false
    }
  }

  if (texterea_content.length == 0) {
    document.getElementById('texterea_error').innerHTML =
      'the texterea is empty'
    document.getElementById('texterea_error').style.color = 'red'
    //check[11] 0
    check_array[11] = false
  } else {
    document.getElementById('texterea_error').style.color = '#fff'
    document.getElementById('texterea_error').innerHTML = ''
    // check[11] 1
    check_array[11] = true
  }
  check_form = false
  if (password_content.length != 0) {
    for (var i = 0; i < password_content.length; i++) {
      if (numbers.indexOf(password_content.substr(i, 1)) != -1) {
        check_form = true
        break
      }
    }
    if (check_form == true) {
      document.getElementById('number_check').style.color = '#fff'
      check_array[12] = true
    } else {
      document.getElementById('number_check').style.color = 'red'
      check_array[12] = false
    }
  }
  var true_size = -1
  for (var i = 0; i < true_array.length; i++) {
    if (true_array[i] == check_array[i]) {
      true_size++
    }
  }
  if (true_size == 8) {
    alert(
      'email: ' +
        email_content +
        ' telephone number: ' +
        phone_content +
        ' password: ' +
        password_content +
        ' password confirmation' +
        password_confirmation +
        ' texterea: ' +
        texterea_content,
    )
  }
  check_array.length = 0
  console.log(check_array)
})
/* form validation */
texterea.addEventListener('keyup', () => {
  var length_Count = document.getElementById('texterea').value
  character_length.innerHTML = length_Count.length
})
