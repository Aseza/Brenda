
$(document).ready(function () {
    $('.parallax').parallax();
    $(".leftNav").sideNav();
    $(".sidenav").sideNav();

    $('.rightNav').sideNav({
      menuWidth: 300, // Default is 300
      edge: 'right', // Choose the horizontal origin
      closeOnClick: false, // Closes side-nav on <a> clicks, useful for Angular/Meteor
      draggable: true // Choose whether you can drag to open on touch screens,
    }
  );
        
	  $('.modal').modal();
    $('.collapsible').collapsible();
    $('.scrollspy').scrollSpy();
    $('select').material_select();
      
      $('.dropdown-button').dropdown({
        constrainWidth: false, // Does not change width of dropdown to that of the activator r
        closeOnClick: false
      }
    );
     
    });
