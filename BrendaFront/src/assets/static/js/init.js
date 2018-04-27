
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
      $('select').material_select();});
