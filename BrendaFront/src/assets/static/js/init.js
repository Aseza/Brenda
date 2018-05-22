
$(document).ready(function () {
    $('.parallax').parallax();
    $(".dropdown-button").dropdown();
    $(".button-collapse").sideNav();
	$('.modal').modal();
    $('.collapsible').collapsible();
    $('.scrollspy').scrollSpy();

    $('.datepicker').pickadate({
        selectMonths: true, 
        selectYears: 15,
        today: 'Today',
        clear: 'Clear',
        close: 'Ok',
        formatSubmit: 'yyyy-mm-d',
        closeOnSelect: true, 
        container: undefined, 
      });

      $('select').material_select();
      
      $('.dropdown-button').dropdown({
        inDuration: 300,
        outDuration: 225,
        constrainWidth: false, // Does not change width of dropdown to that of the activator
        hover: false, // Activate on hover
        gutter: 0, // Spacing from edge
        belowOrigin: false, // Displays dropdown below the button
        alignment: 'left', // Displays dropdown with edge aligned to the left of button
        stopPropagation: false // Stops event propagation        
      }
    );
     
    });
