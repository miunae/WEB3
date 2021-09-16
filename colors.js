var Body = {
    setColor: function (color) {
      $('body').css('color',color);
    },
    setBackgroundColor: function (color) {
      $('body').css('backgroundColor',color);
    }
  }

  var Links = {
    setColor: function (color) {
    $('a').css('color',color);
    }
  }

  function nightdayHandler(self) {
    var target = document.querySelector('body');

    if (self.value === 'night') {
      Body.setBackgroundColor('white');
      Body.setColor('black');
      self.value = 'day';
      Links.setColor('blue');
    }

    else {
      Body.setBackgroundColor('black');
      Body.setColor('white');
      self.value = 'night';
      Links.setColor('powderblue');
    }
  }