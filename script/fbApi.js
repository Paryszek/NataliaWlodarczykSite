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
  '1758384481103227/photos/uploaded?fields=album,images&access_token=EAAXd2GdvJQ0BAJozt0MtDNFVZCExwk9F18Ox8fVWlZANHSCRLZCIRITvd33C1pXrGoLBAAvGwne9izjkpAMQqsQUL3ZAeQlljmAWKERJzW3D9UgVuDMP4mXsHxy610qqOcEqQm95OgrOQU5JJuqsG8DRJREMPj9VDw0CBC7WHwZDZD',
  'GET',
  function(response) {
      dataImgBase = response;
      console.log(response);
      var NUMBER_OF_IMAGES_IN_GALLERY = 0;
      for(var i=0; i<response.data.length;i++) {
        if((response.data[i].album.id != "1772774519664223") && (response.data[i].album.id != "1758389271102748")) {
          var elem = document.createElement("div");
          document.getElementById("gallery").appendChild(elem);
          var length = response.data[i].images.length;
          elem.style.backgroundImage="url("+response.data[i].images[length-1].source+")";
          elem.style.backgroundRepeat = "no-repeat";
          elem.style.backgroundPosition = "center center";
          elem.style.marginRight = "5px";
          elem.setAttribute('onclick','galleryBox('+i+');');
          NUMBER_OF_IMAGES_IN_GALLERY++;
          if(NUMBER_OF_IMAGES_IN_GALLERY % 3 === 0) {
            elem.style.marginRight = "0px";
            var clearBoth = document.createElement("span");
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


