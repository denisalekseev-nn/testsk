$(document).ready(function(){
	$('.fly-element_brace-name').addClass('active__one');
	$('.fly-element_grille-name').addClass('active__two');
	$('.fly-element_slash-name').addClass('active__three');
	$('.fly-element_block-name').addClass('active__four');
	$('.fly-element_block-bk-name').addClass('active__five');
  $('.fly-element_slash-name-two').addClass('active__slash');

	$('nav a').on ('click', function(e){
		event.preventDefault();

		let href = $(this).attr('href');

    let header = $('header').height();

		let offset = $(href).offset().top - header + 80;

    let hideMenuItem = $(this).parents('header').find('.menu__list');
    if($(window).width()<1700){
      $('.menu__list').hide(800)
    };
    $('body').removeClass('fixed');  
	$('body,html').animate({
		scrollTop: offset,
		},1000);
    console.log(header);
	});




  

	$('input[type="tel"]').inputmask({"mask": "+7(999) 999-99-99"});
  $('form').each(function(){
    $(this).validate({
      errorPlacement(error, element) {
        return true;
      },
      focusInvalid: false,
      rules: {
      телефон:{
        required: true,
      },
      Имя: {
        required: true,
      },
      почта: {
        required: true,
      },
      },
      submitHandler(form) {
        let th = $(form);
        $.ajax({
          type: 'POST',
          url: 'mail.php',
          data: thserialize(),
        }).done(()=>{
          th.trigger('reset');
        });
        return false;
      }
    });
  });

   $('.form__btn-close, .form').on('click', function(){
      let validator = $('form').validate();
          validator.resetForm()
      });

  $('.btn-callback').on('click', function(){
    $('body').toggleClass('fixed');
        $('.form').show(800);

  $('.form__btn-close').on('click', function(e){
      $('body').removeClass('fixed');
    event.preventDefault();
        $('.form').hide(800);
      });

  });

  $('.form').click (function(e){
      if(event.target == this) {
        $(this).hide(800);
      }
  });



  $('.burger').on('click', function(){
      let hideMenuItem = $(this).parents('header').find('.menu__list')
      hideMenu(hideMenuItem);
      $('body').toggleClass('fixed');
  });

  function hideMenu(hideMenuItem){

    if(hideMenuItem.is(':visible')){
      hideMenuItem.hide(400);
    }else{
      hideMenuItem.show(400);
    };
  };



  if($(window).width()<469){$('.fa-envelope-o').toggleClass('fa-envelope')};
  if($(window).width()>469){$('.fa-envelope').toggleClass('fa-envelope-o')};
});

