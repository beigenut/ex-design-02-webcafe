$(document).ready(function () {
  var navMobile = $('.navigation');
  var btnMobile = $('.btn-menubar');
  // var spanMobile = $('.menubar');
  var menuMobile = $('.menu');
  var sloganMobile = $('.slogan-heading');

  var menuLists = $('.menu-list');
  var menuItems = $('.menu-item');
  var subMenus = $('.sub-menu');
  var offGrid = $('.btn-grid');

  /* matchmedia 를 이용해서 원하는 뷰포트에만 클래스 삽입 */
  var viewport = window.matchMedia('(max-width: 999px)');
  if (viewport.matches) {
    menuItems.addClass('icon-plus');
    menuItems.attr('role', 'button');
    menuItems.attr('aria-expanded', 'false');
    menuItems.attr('aria-haspopup', 'true');
    menuItems.attr('tabindex', '0');
    sloganMobile.css({
      'display': 'none'
    });

    btnMobile.on('click', function (event) {
      event.preventDefault();
      console.log('button clicked');
      navMobile.toggleClass('is-act');
      menuMobile.css({
        'transition-property': 'all',
        'transition-duration': '0.2s'
      });
      if (navMobile.hasClass('is-act')) {
        btnMobile.attr('aria-label', 'a button to close menu');

      } else {
        btnMobile.attr('aria-label', 'a button to open menu')

      }
    });

    menuItems.on('click keydown', function (event) {
      /* click 이 되거나 ||  `키보드가 눌렸을 때` 이면서 'enter' 키가 눌렸을 때 */
      if (event.type === 'click' || (event.type === 'keydown' && event.keyCode === 13)) {
        menuLists.removeClass('menu-act');
        menuItems.addClass('icon-plus');
        subMenus.css({
          'display': 'none'
        })
        menuItems.attr('tabindex', '0');

        $(this).parent().addClass('menu-act');
        if ($(this).parent().hasClass('menu-act')) {
          $(this).addClass('icon-minus');
          $(this).removeClass('icon-plus');
          $(this).attr('aria-expanded', 'true');
          $(this).attr('aria-haspopup', 'true');
          $(this).siblings().css({
            'display': 'block'
          })
        } else {
          $(this).attr('aria-expanded', 'false');
        }
      }

      menuMobile.on('focusout', function () {
        navMobile.removeClass('is-act');
      });

      menuMobile.on('focusin', function () {
        navMobile.addClass('is-act');
      });



      // if(event.type === 'click' || (event.type === 'keydown'&&event.keyCode === 13)){
      //     menuLists.removeClass('menu-act');
      //     /* html 해당 요소에 클래스 class="" 를 삽입 */
      //     menuItems.addClass('icon-plus');
      //     subMenus.css(
      //         { "display":"none"}
      //     );
      //     $(this).parent().addClass('menu-act');
      //     if ($(this).parent().hasClass('menu-act')) {
      //         /* html 요소 삽입 title="title" */
      //         $(this).attr('aria-expanded', 'true');  
      //         $(this).addClass('icon-minus');
      //         $(this).removeClass('icon-plus');
      //         /* 해당 요소의 css 에 속성을 삽입 */
      //         $(this).siblings().css(
      //             { 'display':'block'}
      //         );
      //     } else {
      //         $(this).attr('aria-expanded','false');
      //     }
      // }
    });
  }


  var container = $('.container');
  var grid = $('.btn-grid');
  var video = $('.news-video');
  // video.get(0).volume = 0; html 에 muted 안 넣고 js 에서 선언

  /* mouseover 와 (pointer)focusin 두 상황 모두 적용되도록 .on 이 for 생성 */
  video.on('mouseover focusin', function () {
    /* this.play() - 여러개 중에서 머우스오버가 일어난 비디오만 || $(this).play() - video 안에 선언된 모든 비디오에 적용 */
    this.volume = 1.0;
    this.play();
    $(this).prop('muted', false);
    $(this).attr('autoplay', 'autoplay');
  });

  video.on('mouseleave focusout', function () {
    this.pause();
    this.volume = 0;
    $(this).attr('autoplay', 'false');
  });

  grid.click(function () {
    container.toggleClass('apha-grid');
  });
});



// var container = document.querySelector('.container');
// var grid = document.querySelector('.btn-grid');

// grid.addEventListener('click', function(){
//     console.log('ok');
//     container.classList.toggle('apha-grid');
// });


// native method 
// var video = document.querySelector('.news-video');

// video.addEventListener('mouseenter focusin', function () {
//   this.setAttribute('autoplay');
// });
// video.addEventListener('mouseleave focusout', function () {
//   this.removeAttribute('autoplay');
// });