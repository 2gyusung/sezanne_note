setInterval(() => {
  $(".slide__container").animate(
    {
      left: "-1200px"
    },
    600,
    function () {
      $(".slide__container").append($(".slide__container li").eq(0));
      $(".slide__container").css({left : 0});
    });
}, 3000);

$('.slide__container li button').on('click', ()=> {
  // $('#popup').toggleClass('show')
  $('#popup').addClass('show')
})

$('#popup .popup__btn').click(()=> {
  $('#popup').removeClass('show')
})