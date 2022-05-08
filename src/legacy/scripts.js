window.onscroll = function() {stickyobj()};
var navbar = document.getElementById("nav");

var body = document.body,
    html = document.documentElement;
var height = Math.max( body.scrollHeight, body.offsetHeight, 
                       html.clientHeight, html.scrollHeight, html.offsetHeight );

var sticky = navbar.offsetTop;

var sticky2 = height - screen.height - 300;

function stickyobj() {
  if (window.pageYOffset >= sticky /* && window.pageYOffset <= sticky2*/) {
    navbar.classList.add("sticky");
  } 
  else {
    navbar.classList.remove("sticky");
  }
  /*
  if (window.pageYOffset > sticky2) {

    navbar.classList.add("sticky2");

    var sticky_scroll = sticky2 - sticky;
    navbar.style.top = sticky_scroll +  "px";
  }
  else {
    navbar.classList.remove("sticky2");
  }
  */
}



/*
document.getElementsByTag('a').onclick = function() {switch_active_page()};

function switch_active_page() {
  var new_page = ('a').classList
  document.getElementsById(new_page).classList.add("active");
  document.getElementsByClassName("active").classList.remove("active");
}


$(document).ready(function() { // check document is ready
  $('li a').click(function() { // catch a click on a list link
      $('li').removeClass('active'); // remove all current instances of active
      $(this).parent().addClass('active'); // add the class active to the item you clicked
  });
});

('li a').click(switch_active_page());
*/
