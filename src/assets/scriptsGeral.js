import $ from 'jquery';




window.doFacebook = (idapp) => {
  (function (d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) { return; }
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/pt_BR/sdk.js#xfbml=1&version=v3.0&appId=" + idapp;
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));
}
$(function () {

  $(window).scroll(function () {
    let sidebarmenu = $('.sidebarmenu');
    let topbarsearchcategoria = $('.topbarsearchcategoria');
    if ($(this).scrollTop() > 650) {
      sidebarmenu.css({
        'position': 'sticky',
        top: 0,
        bottom: 0,
        "overflow-y": "scroll",
        'overflow-x': "hidden",

      });

      topbarsearchcategoria.css({
        'position': 'fixed',
        top: 0,
        "overflow-y": "scroll",
        'overflow-x': "hidden",
        "z-index": 30,
      });

    } else {

      topbarsearchcategoria.css({
        'position': 'relative',
        'top': 'auto',
        "overflow-y": "hidden",
        'overflow-x': "hidden"
      });


      sidebarmenu.css({
        'position': 'relative',
        'top': 'auto',
        "overflow-y": "hidden",
        'overflow-x': "hidden"
      });
    }
  });

})
