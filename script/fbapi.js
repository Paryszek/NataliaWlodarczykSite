var isActive = false;
var dataImgBase;
var closeBox = function() {
  $('.galleryBox').removeClass('showBox');
  $('.galleryBox').addClass('hideBox'); 
  $('.closeBox').removeClass('scrollshow');
  $('.closeBox').addClass('scrollhide');
  isActive = false;
}
var galleryBox = function(e) {
  console.log(e);
  var ourBoxImg = document.getElementsByTagName("img")[1];
  ourBoxImg.src = dataImgBase.data[e].images[0].source;
  ourBoxImg.setAttribute( 'class', 'ourBoxImg' );
  var imgWidth = dataImgBase.data[e].images[0].width;
  var imgHeight = dataImgBase.data[e].images[0].height;
  var w = window.innerWidth;
  var h = window.innerHeight;
  if(h < imgHeight) {
      $( ".ourBoxImg" ).css('width','auto');
      $( ".ourBoxImg" ).css('height',h+'px');
      $( ".ourBoxImg" ).css('margin-left',-imgWidth/2+'px');
      $( ".ourBoxImg" ).css('margin-top',-h/2+'px');
  } else {
      $( ".ourBoxImg" ).css('max-width',w+'px');
      $( ".ourBoxImg" ).css('max-height',h+'px');
      $( ".ourBoxImg" ).css('margin-left',-imgWidth/2+'px');
      $( ".ourBoxImg" ).css('margin-top',(-imgHeight)/2+'px');
  }
  if(isActive == false) {
    $('.galleryBox').removeClass('hideBox');
    $('.galleryBox').addClass('showBox');
    $('.closeBox').removeClass('scrollhide');
    $('.closeBox').addClass('scrollshow');
    isActive = true;
  }                              
}

window.fbAsyncInit = function() {
    FB.init({
      appId      : '1651296401564941',
      xfbml      : true,
      version    : 'v2.9'

    });
    FB.AppEvents.logPageView();
    FB.api(
  '1758384481103227/photos/uploaded?fields=album,images&access_token=EAAXd2GdvJQ0BACmv7HBwkBiekDu0rdTZCFIV8wzGHtnQut1UiuQ94f0wSwOYrb5lSt0ouGwT2HrE93FdLNaGy7DcgooLZAlIUDN35TLa5DmIm1PvXUxsh3FXIjJuAY7nY01T4Hq47GNDrqrN9HmTqTnGZCWb3oHDWZA28lZA7IgZDZD',
  'GET',
  function(response) {
      dataImgBase = response;
      for(var i=0; i<response.data.length;i++) {
          if(response.data[i].album.id == "1760407550900920") {
            var elem = document.createElement("img");
            document.getElementById("gallery").appendChild(elem);
            elem.src = response.data[i].images[5].source;
            elem.setAttribute('onclick','galleryBox('+i+');');
            if((i+1) % 3 === 0) {
              var clearBoth = document.createElement("div");
              document.getElementById("gallery").appendChild(clearBoth);
              clearBoth.style.clear = "both";
            }
          }
      }
  }
);
};

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "//connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));


