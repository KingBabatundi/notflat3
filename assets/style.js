

function displayProjectDescription(imageid) {
  var projectDescriptionDivId = "#1" + imageid + ", #2" + imageid + ", #3" + imageid; // "#101, #201"
  $(projectDescriptionDivId).toggleClass('current');
}

// function turnOffMany(arrayofIds) {
//   for (var id in arrayOfIds) {
//   var projectDescriptionDivId = "#1" + arrayofIds[id] + ", #2" + arrayofIds[id] + ", #3" + arrayofIds[id]; // "#101, #201"
//   $(projectDescriptionDivId).removeClass('current');
//   }
// }


var main = function () {



  $(document).ready(function () {
    $('body').removeClass('preload');
  });

  $('a').click(function () {
    $('body').toggleClass('threedeg');
  });

  $("a[target='_blank']").click(function () {
    setTimeout(
      function () {
        $('body').toggleClass('threedeg');
      },
      1800);
  });

  $("a[href^='mailto:']").click(function () {
    setTimeout(
      function () {
        $('body').toggleClass('threedeg');
      },
      1800);
  });

  $(".slide-carousel ul li").on({
    click: function () {
      $(this).removeClass('current');
      $(this).next().addClass('current');
    }
  });

  $(".slide-carousel ul li:last-child").on({
    click: function () {
      $(this).removeClass('current');
      $(this).parent().parent().children().children(':first-child').addClass('current');
    }
  });

  $('.info').on({
    mouseenter: function () {
      $('.info-description').toggleClass('current');
    },
    mouseleave: function () {
      $('.info-description').toggleClass('current');
    }
  });

  /* Show Project */
  $(".projects ul li:nth-child(1)").on({
    click: function () {
      $('.project-images ul li:nth-child(1)').toggleClass('current');
      $(this).toggleClass('active');
    }
  });

  /* Show Project Gifs */

  $(".projects ul li .project-title a").on({
    mouseenter: function () {
      displayProjectDescription(this.id);
    },
    mouseleave: function () {
      displayProjectDescription(this.id);
    }
  });

  /* Show Member Gifs */
  $(".index-page #typed4").on({
    mouseenter: function () {
      $('.member-gifs ul li:nth-child(1)').show();
      $('#membervideo').hide();
      $('#membervideodelay').hide();
    },
    mouseleave: function () {
      $('.member-gifs ul li:nth-child(1)').hide();
      $('#membervideo').show();
      $('#membervideodelay').show();
    }
  });

  $(".index-page #typed5").on({
    mouseenter: function () {
      $('.member-gifs ul li:nth-child(2)').show();
      $('#membervideo').hide();
      $('#membervideodelay').hide();
    },
    mouseleave: function () {
      $('.member-gifs ul li:nth-child(2)').hide();
      $('#membervideo').show();
      $('#membervideodelay').show();
    }
  });

  $(".index-page #typed6").on({
    mouseenter: function () {
      $('.member-gifs ul li:nth-child(3)').show();
      $('#membervideo').hide();
      $('#membervideodelay').hide();
    },
    mouseleave: function () {
      $('.member-gifs ul li:nth-child(3)').hide();
      $('#membervideo').show();
      $('#membervideodelay').show();
    }
  });

  $(".index-page #typed7").on({
    mouseenter: function () {
      $('.member-gifs ul li:nth-child(4)').show();
      $('#membervideo').hide();
      $('#membervideodelay').hide();
    },
    mouseleave: function () {
      $('.member-gifs ul li:nth-child(4)').hide();
      $('#membervideo').show();
      $('#membervideodelay').show();
    }
  });

  $(".index-page #typed8").on({
    mouseenter: function () {
      $('.member-gifs ul li:nth-child(5)').show();
      $('#membervideo').hide();
      $('#membervideodelay').hide();
    },
    mouseleave: function () {
      $('.member-gifs ul li:nth-child(5)').hide();
      $('#membervideo').show();
      $('#membervideodelay').show();
    }
  });

  /* Delay-video on index */

  $(function () {
    // setTimeout() function will be fired after page is loaded
    // it will wait for 5 sec. and then will fire
    // $("#successMessage").hide() function
    setTimeout(function () {
      $("#membervideodelay").show('blind', {}, 500)
    }, 30000);
  });

  setTimeout(function () {
    document.getElementById("membervideodelay").play();
  }, 30100);

  /* Project-description/name toggle */
}


function turnOffMany(arrayOfIds) {

  for (var id in arrayOfIds) {
    // alert("turningoff["+arrayOfIds[id]+"]")
    var projectDescriptionDivId = "#1" + arrayOfIds[id];
    $(projectDescriptionDivId).removeClass('current');

    var projectNameDivId = "#2" + arrayOfIds[id];
    $(projectNameDivId).removeClass('current');


    var projectSlideDivId = "#3" + arrayOfIds[id];
    $(projectSlideDivId).removeClass('current');
    console.log("completedturningoff["+arrayOfIds[id]+"]")
  }
}

/* Nada */

$(".authenticity-question").on({
  mouseenter: function () {
    $(this).children('.question').hide();
    $(this).children('.answer').show();
  },
  mouseleave: function () {
    $(this).children('.answer').hide();
    $(this).children('.question').show();
  }
});

/* Jonathan */


/* Show fullbio */
$('.show-fullbio').click(function () {
  $('.fullbio').show();
  $('.show-fullbio').hide();
  $('.hide-fullbio').show();
});
$('.hide-fullbio').click(function () {
  $('.fullbio').hide();
  $('.show-fullbio').show();
  $('.hide-fullbio').hide();
});


function toggleReadMore(imageid) {

  var toggleReadMore = "#" + imageid;
  $(toggleReadMore).toggleClass('current');

  var toggleReadMore = "#" + 1 + imageid;
  $(toggleReadMore).toggleClass('current');

  var toggleReadMore = "#" + 2 + imageid;
  $(toggleReadMore).toggleClass('current');


  document.getElementById(imageid).id = (4 + imageid);
  document.getElementById(2 + imageid).id = (imageid);
  document.getElementById(4 + imageid).id = (2 + imageid);

}


$('.read-project').click(function () {
  toggleReadMore(this.id);
});
$('.hide-project').click(function () {
  toggleReadMore(this.id);
});


$(document).ready(function () {
  setTimeout(function () {
    $('.guide-leftportfolio').hide();
    $('.guide-rightjournal').hide();
  }, 2000);
});



$(".guide-left").on({
  mouseenter: function () {
    $('.circle-left').children("img").show();
    $('.info').css("z-index", "-100");

  },
  mouseleave: function () {
    $('.circle-left').children("img").hide();
    $('.info').css("z-index", "0");
  }
});

$(".guide-right").on({
  mouseenter: function () {
    $('.circle-right').children("img").show();
  },
  mouseleave: function () {
    $('.circle-right').children("img").hide();
  }
});


function circleResizeR() {
  var rw = (window.innerWidth - (window.innerWidth / 1.78));
  $('.circle-left').css("right", rw);
}

function circleResizeL() {
  var lw = (window.innerWidth - (window.innerWidth / 1.78));
  $('.circle-right').css("left", lw);
}

window.setInterval(function () {
  circleResizeR();
  circleResizeL();
}, 325);

//$(document).ready(function() {
//  $('.guide-leftportfolio').show();
//  $('.circle-portfolio').css("z-index", "99");
//  $('.circle-portfolio').css("background", "#fff");
//  $('.guide-rightjournal').show();
//$('.circle-journal').css("z-index", "99");
//$('.circle-journal').css("background", "#fff");
//setTimeout(function() {
//$('.guide-leftportfolio').hide();
//$('.circle-portfolio').css("z-index", "-3");
//$('.circle-portfolio').css("background", "none");
//$('.guide-rightjournal').hide();
//$('.circle-journal').css("z-index", "-3");
//$('.circle-journal').css("background", "none");
//}, 1000);
//}); 

$(".jonathan-portfolio").on("mousemove", function (event) {
  if (event.pageX / $(document).width() > 0.95) {
    $('.guide-leftportfolio').css("opacity", "1");
    $('.guide-leftportfolio').show();
    $('.circle').css("z-index", "99");
    $('.circle').css("background", "#fff");
  }
  else {
    $('.guide-leftportfolio').css("opacity", "0.06");
    $('.guide-leftportfolio').show();
    $('.circle').css("z-index", "-3");
    $('.circle').css("background", "none");
  }
});

$(".jonathan-journal").on("mousemove", function (event) {
  if (event.pageX / $(document).width() < 0.05) {
    $('.guide-rightjournal').css("opacity", "1");
    $('.guide-rightjournal').show();
    $('.circle').css("z-index", "99");
    $('.circle').css("background", "#fff");
  }
  else {
    $('.guide-rightjournal').css("opacity", "0.06");
    $('.guide-rightjournal').show();
    $('.circle').css("z-index", "-3");
    $('.circle').css("background", "none");
  }
});

$(".expander-portfolio").on({
  click: function () {
    $('.jonathan .right').toggleClass('maximise');
    $('.jonathan .info').toggleClass('off');
    $('.jonathan .padder').toggleClass('off');
    $('.jonathan .project-info').toggleClass('on');
    $(this).toggleClass('flip');
  }
});

$(".expander-journal").on({
  click: function () {
    $('.jonathan .padder').fadeToggle(500);
    $('.jonathan .scoll-indicator').fadeToggle(500);
    $('.jonathan .indicator').fadeToggle(500);
    $('.jonathan .right').slideToggle();
    $('.jonathan .journal-entries').toggleClass('maximise');
    $('.jonathan .journal-entries').children().toggleClass('grid-12');

    $(this).toggleClass('flip');
    $('.jonathan .journal-entries h4').toggleClass('comfortable-read');
  }
});

$(".expander-journal").on({
  click: function () {
    if (!$('.jonathan .padder').hasClass("noncurrent")) {
      $('.jonathan .padder').fadeToggle(500);
    }
  }
});

$(".closer-journal").on({
  click: function () {
    $(this).slideToggle(500);
    $('.jonathan .left').toggleClass('off');
    $('.jonathan .padder').removeClass('noncurrent');
    $('.jonathan .journal-entries').toggleClass('current');
    turnOffMany(["01","02","03","04","05","06","07","08","09","10","11","12", "13"]);
    $(".bold").removeClass('bold');
    $(".pause").removeClass('pause');
    $(".active").removeClass('active');
    $(".true").removeClass('true');


  }
});

$(".journal-list ul li .title").on({
  click: function () {
    if ($(this).hasClass("pause")) {
      $('.left').animate({
        scrollTop: 0
      }, 450);
      console.log("PAUSE:" + this.className);
      turnOffMany(["01","02","03","04","05","06","07","08","09","10","11","12","13"]);
      $(".bold").removeClass('bold')
      $(this).parent().parent().siblings().children().children().removeClass('true').removeClass('active').addClass('pause');
      $(this).toggleClass('active').addClass('true').removeClass('pause');
      $(this).children().toggleClass('bold');
      $(this).parent().parent().children().children().toggleClass('bold').addClass('true');
      $(this).next().children().toggleClass('bold');
      displayProjectDescription(this.id);

      $(".closer-journal").show(500);

    }
    else if ($(this).hasClass("bold")) {
      $('.left').animate({
        scrollTop: 0
      }, 450);
      console.log("BOLD:" + this.className);
      $('.jonathan .left').toggleClass('off');
      $('.jonathan .padder').toggleClass('noncurrent');
      $('.jonathan .journal-entries').toggleClass('current');
      turnOffMany(["01","02","03","04","05","06","07","08","09","10","11","12","13"]);
      $(".bold").removeClass('bold');
      $(".pause").removeClass('pause');
      $(".active").removeClass('active');
      $(".closer-journal").slideToggle();


    }
    else {
      $('.left').animate({
        scrollTop: 0
      }, 450);
      console.log("NOTHING:" + this.className);
      $(this).parent().parent().siblings().children().children().addClass('pause');
      $(this).toggleClass('active');
      $(this).children().addClass('bold');
      $(this).parent().parent().children().children().addClass('bold');
      $(this).next().toggleClass('current').toggleClass('true');
      $(this).next().children().addClass('bold');

      $('.jonathan .left').toggleClass('off');
      $('.jonathan .padder').toggleClass('noncurrent');
      $('.jonathan .journal-entries').toggleClass('current');
      turnOffMany(["01","02","03","04","05","06","07","08","09","10","11","12","13"]);
      displayProjectDescription(this.id);
      $(this).parent().parent().children().children().removeClass('pause');

      $(".closer-journal").slideToggle();
    }
  }
});

$(function () {
  $(window).resize(function () {
    console.log($(this).width())
    if ($(this).width() < 700) {
      $(".journal-entries li:first-child").addClass('current')
    }
  }).resize();//trigger the event manually when the page is loaded
})

$('.next-entry').on({
  click: function () {
    $('.left').animate({
      scrollTop: 0
    }, 250);
    $(this).parent().parent().parent().toggleClass('current');
    $(this).parent().parent().parent().next().toggleClass('current');
    $('.tags').removeClass('current');

    $('.slide.title.active').parent().parent().next().addClass('selected1');
    $('.selected1 .slide.title.pause').addClass('selected');

    $('.selected').parent().parent().siblings().children().children().removeClass('true').removeClass('active').addClass('pause');
    $('.selected').toggleClass('active').addClass('true').removeClass('pause');
    $('.selected').children().toggleClass('bold');
    $('.selected').parent().parent().children().children().toggleClass('bold').addClass('true');
    $('.selected').next().children().toggleClass('bold');
    $('.selected').next().toggleClass('current');

    $('.selected').removeClass('selected');
    $('.selected1').removeClass('selected1');

  }
});

$('.previous-entry').on({
  click: function () {
    $('.left').animate({
      scrollTop: 0
    }, 250);
    $(this).parent().parent().parent().parent().toggleClass('current');
    $(this).parent().parent().parent().parent().prev().toggleClass('current');
    $('.tags').removeClass('current');

    $('.slide.title.active').parent().parent().prev().addClass('selected1');
    $('.selected1 .slide.title.pause').addClass('selected');

    $('.selected').parent().parent().siblings().children().children().removeClass('true').removeClass('active').addClass('pause');
    $('.selected').toggleClass('active').addClass('true').removeClass('pause');
    $('.selected').children().toggleClass('bold');
    $('.selected').parent().parent().children().children().toggleClass('bold').addClass('true');
    $('.selected').prev().children().toggleClass('bold');
    $('.selected').next().toggleClass('current');

    $('.selected').removeClass('selected');
    $('.selected1').removeClass('selected1');
  }
});

// Scroller
(function () {

  var indicator = $('#indicator');
  var counter = indicator.find('span');

  var win = jQuery('.right');
  if (indicator.height) {
    var moveIndicator = debounce(function () {
      var viewportHeight = $('.right').height(); //window
      // alert("viewport Height"+viewportHeight);
      var documentHeight = $('.right')[0].scrollHeight; //document
      console.log("Document Height" + documentHeight);
      var hasScrolled = $('.right').scrollTop(); //window

      var percent = (hasScrolled / ((documentHeight) - viewportHeight)) * 100;
      indicator.css("top", percent + "%");
      counter.html(Math.ceil(percent) + "%");

    }, 10);

  }

  win.on("resize scroll", moveIndicator);

  function debounce(func, wait, immediate) {
    var timeout;

    return function () {
      var context = this,
        args = arguments;
      var later = function () {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  };

}());

// Scroller2
(function () {

  var indicator = $('#indicator2');
  var counter = indicator.find('span');

  var win = jQuery('.journal-entries');
  if (indicator.height) {
    var moveIndicator = debounce(function () {
      var viewportHeight = $('.journal-entries').height(); //window
      // alert("viewport Height"+viewportHeight);
      var documentHeight = $('.journal-entries')[0].scrollHeight; //document
      console.log("Document Height" + documentHeight);
      var hasScrolled = $('.journal-entries').scrollTop(); //window

      var percent = (hasScrolled / ((documentHeight) - viewportHeight)) * 100;
      indicator.css("top", percent + "%");
      counter.html(Math.ceil(percent) + "%");

    }, 10);

  }

  win.on("resize scroll", moveIndicator);

  function debounce(func, wait, immediate) {
    var timeout;

    return function () {
      var context = this,
        args = arguments;
      var later = function () {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  };

}());

$(".journal-entries.left li").on({
  mouseenter: function () {
    $('.indicator2').toggleClass('current');
    $('.scroll-indicator2').toggleClass('current');
    $('.indicator').toggleClass('noncurrent');
    $('.scroll-indicator').toggleClass('noncurrent');
  },
  mouseleave: function () {
    $('.indicator2').toggleClass('current');
    $('.scroll-indicator2').toggleClass('current');
    $('.indicator').toggleClass('noncurrent');
    $('.scroll-indicator').toggleClass('noncurrent');
  }
});

// Opens Theftpt? Process as jump link
function offsetAnchor() {
  if (window.location.hash == '#identitytheft') {
    console.log("NOTHING:" + window.location.hash);
    $('#identitytheft').parent().parent().parent().siblings().children().children().addClass('pause');
    $('#identitytheft').parent().toggleClass('active');
    $('#identitytheft').parent().children().addClass('bold');
    $('#identitytheft').parent().parent().parent().children().children().addClass('bold');
    $('#identitytheft').parent().next().toggleClass('current').toggleClass('true');
    $('#identitytheft').parent().next().children().addClass('bold');

    $('.jonathan .left').toggleClass('off');
    $('.jonathan .padder').toggleClass('noncurrent');
    $('.jonathan .journal-entries').toggleClass('current');
    turnOffMany(["01","02","03","04","05","06","07","08","09","10","11","12","13"]);
    $("#302").toggleClass('current');
    $("#102").toggleClass('current');
    $('#identitytheft').parent().parent().parent().children().children().removeClass('pause');

    $(".closer-journal").slideToggle(500);
    window.clearTimeout(offsetAnchor2);
  }
}

// Captures click events of all a elements with href starting with #
$(document).on('h4[id="#identitytheft"]', function () {
  // Click events are captured before hashchanges. Timeout
  // causes offsetAnchor to be called after the page jump.
  window.setTimeout(function () {
    offsetAnchor();
  }, 0);
});

// Opens Disclaimer Process as jump link
function offsetAnchor2() {
  if (window.location.hash == '#disclaimer') {
    $('#disclaimer').parent().parent().parent().siblings().children().children().addClass('pause');
    $('#disclaimer').parent().toggleClass('active');
    $('#disclaimer').parent().children().addClass('bold');
    $('#disclaimer').parent().parent().parent().children().children().addClass('bold');
    $('#disclaimer').parent().next().toggleClass('current').toggleClass('true');
    $('#disclaimer').parent().next().children().addClass('bold');

    $('.jonathan .left').toggleClass('off');
    $('.jonathan .padder').toggleClass('noncurrent');
    $('.jonathan .journal-entries').toggleClass('current');
    turnOffMany(["01","02","03","04","05","06","07","08","09","10","11","12","13"]);
    $("#303").toggleClass('current');
    $("#103").toggleClass('current');
    $('#disclaimer').parent().parent().parent().children().children().removeClass('pause');

    $(".closer-journal").slideToggle(500);
    window.clearTimeout(offsetAnchor);
  }
}

// Opens Peter Hall Interview as jump link
$(document).on('h4[id^="#peterhall"]', function () {
  window.setTimeout(function () {
    offsetAnchor3();
  }, 0);
});

function offsetAnchor3() {
  if (window.location.hash == '#peterhall') {
    $('#peterhall').parent().parent().parent().siblings().children().children().addClass('pause');
    $('#peterhall').parent().toggleClass('active');
    $('#peterhall').parent().children().addClass('bold');
    $('#peterhall').parent().parent().parent().children().children().addClass('bold');
    $('#peterhall').parent().next().toggleClass('current').toggleClass('true');
    $('#peterhall').parent().next().children().addClass('bold');

    $('.jonathan .left').toggleClass('off');
    $('.jonathan .padder').toggleClass('noncurrent');
    $('.jonathan .journal-entries').toggleClass('current');
    turnOffMany(["01","02","03","04","05","06","07","08","09","10","11","12","13"]);
    $("#309").toggleClass('current');
    $("#109").toggleClass('current');
    $('#peterhall').parent().parent().parent().children().children().removeClass('pause');

    $(".closer-journal").slideToggle(500);
    window.clearTimeout(offsetAnchor);
  }
}

// Set the offset when entering page with hash present in the url
window.setTimeout(offsetAnchor, 0);
window.setTimeout(offsetAnchor2, 0);
window.setTimeout(offsetAnchor3, 0);

/* Nada */

$(".menu-button").on({
  click: function () {
    $('#menu').slideToggle(800);
    $('.burger').toggleClass('burger-close');
  }
});

/* Ella */

$(".thumbnail").on({
  mouseenter: function () {
    $('.ella-name').toggleClass('off');
    $('.ella-description').toggleClass('off');
    displayProjectDescription(this.id);
  },
  mouseleave: function () {
    $('.ella-name').toggleClass('off');
    $('.ella-description').toggleClass('off');
    displayProjectDescription(this.id);
  }
});

$(".thumbnail").on({
  click: function () {
    $('.ella-projects').toggleClass('off');
    $('.slideshows').fadeIn(1000);
    $('.ella-name').toggleClass('off');
    $('.ella-description').toggleClass('off');
    displayProjectDescription(this.id);
  }
});

$(".ella .slideshows").on({
  mouseenter: function () {
    $('.project-name').css("z-index", "-100");
  },
  mouseleave: function () {
    $('.project-name').css("z-index", "5");
  }
});

$(".slideshows-return").on({
  click: function () {
    $('.ella-projects').toggleClass('off');
    $('.slideshows').fadeOut(1000);
    $('.ella-name').toggleClass('off');
    $('.ella-description').toggleClass('off');
    turnOffMany("01","02", "03", "04", "05");
  }
});



$(document).ready(main);   