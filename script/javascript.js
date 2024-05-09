var check = function() {
    if (document.getElementById('password').value ==
      document.getElementById('re_password').value) {
      document.getElementById('message').style.color = '#688548';
      document.getElementById('message').innerHTML = 'matching';
    } else {
      document.getElementById('message').style.color = 'rgb(206, 30, 30)';
      document.getElementById('message').innerHTML = 'not matching';
    }
  }