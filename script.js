$(document).ready(function(){
  $('.navbar a.nav-link, .navbar-brand, a[href="#about"], a[href="#register"]').on('click',function(e){
    var target=$(this).attr('href');
    if(target && target.startsWith('#') && $(target).length){
      e.preventDefault();
      $('html, body').animate({scrollTop:$(target).offset().top-70},500);
      $('.navbar-collapse').collapse('hide');
    }
  });
  $('#consultForm').on('submit',function(e){
    e.preventDefault();
    if(this.checkValidity()){
      $('#formMessage').removeClass('d-none').hide().fadeIn();
      this.reset();
      $('.md-form input').trigger('blur');
    }
  });
});
