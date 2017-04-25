var check = true;
var dataImgBase;
var closeBox = function() {
                  $('.galleryBox').removeClass('showPage');
                  $('.galleryBox').removeClass('showPage2');
                  setTimeout(function(){ 
                      $('.galleryBox').addClass('hidePage2'); 
                      $('.closeBox').removeClass('scrollshow');
                      $('.closeBox').addClass('scrollhide');
                  }, 0);
                  setTimeout(function(){ $('.galleryBox').addClass('hidePage'); }, 500);
                  check = true;
}
var galleryBox = function(e) {
                var ourBoxImg = document.getElementsByTagName("img")[1];
                ourBoxImg.src = dataImgBase.data[e].images[0].source;
                ourBoxImg.setAttribute( 'class', 'ourBoxImg' );
                var imgWidth = dataImgBase.data[e].images[0].width;
                var imgHeight = dataImgBase.data[e].images[0].height;
                var w = window.innerWidth;
                var h = window.innerHeight;

                console.log("szerokosc test " + -imgWidth );
                if(h < imgHeight) {
                    $( ".ourBoxImg" ).css('width','auto');
                    $( ".ourBoxImg" ).css('height',h+'px');
                    $( ".ourBoxImg" ).css('margin-left',-imgWidth/2+'px');
                    console.log(-imgWidth/2);
                    $( ".ourBoxImg" ).css('margin-top',-h/2+'px');
                    console.log("test" + 1);
                } else {
                    $( ".ourBoxImg" ).css('max-width',w+'px');
                    $( ".ourBoxImg" ).css('max-height',h+'px');
                    $( ".ourBoxImg" ).css('margin-left',-imgWidth/2+'px');
                    $( ".ourBoxImg" ).css('margin-top',(-imgHeight)/2+'px');
                    console.log("test" + 2);
                }
                if(check == true) {
                  $('.galleryBox').removeClass('hidePage');
                  $('.galleryBox').removeClass('hidePage2');
                  setTimeout(function(){ 
                    $('.galleryBox').addClass('showPage2');
                    $('.closeBox').removeClass('scrollhide');
                    $('.closeBox').addClass('scrollshow');
                  }, 0);
                  setTimeout(function(){ $('.galleryBox').addClass('showPage'); }, 500);

                  check = false;
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
  /*{"fields":"images"},*/
  function(response) {
      console.log(response);
      var albumId = "17604";
      dataImgBase = response;
      for(var i=0; i<response.data.length;i++) {
          var flag = 0;
          for(var j=0; j<albumId.length;j++) {
            if(response.data[i].id[j] != albumId[j]) {
              flag = 1;
            }
            
          }
          if(flag == 0) {
            console.log(response.data[0].album.name);
            var elem = document.createElement("img");
            document.getElementById("gallery").appendChild(elem);
            elem.src = response.data[i].images[5].source;
            elem.setAttribute('onclick','galleryBox('+i+');');

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


