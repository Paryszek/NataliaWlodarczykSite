var check = true;
var dataImgBase;
var galleryBox = function(e) {
                console.log(e);
                console.log(dataImgBase);
                /*var boxImg = document.createElement("img");
                $( boxImg ).appendTo( ".galleryBox" );
                //document.getElementById("galleryBox").appendChild(boxImg);
                boxImg.src = dataImgBase.data[e].images[0].source;*/
                var ourBoxImg = document.getElementsByTagName("img")[1];
                ourBoxImg.src = dataImgBase.data[e].images[0].source;
                ourBoxImg.setAttribute( 'class', 'ourBoxImg' );
                var imgWidth = dataImgBase.data[e].images[0].width;
                var imgHeight = dataImgBase.data[e].images[0].height;
                var w = window.innerWidth;
                var h = window.innerHeight;
                console.log("szerokosc test " + -imgWidth );

                $( ".ourBoxImg" ).css('margin-left',-imgWidth/2+'px');
                $( ".ourBoxImg" ).css('margin-top',-imgHeight/2+'px');
                $( ".ourBoxImg" ).css('max-width',w+'px');
                $( ".ourBoxImg" ).css('max-height',h+'px');

                if(check == true) {
                  $('.galleryBox').removeClass('hidePage');
                  $('.galleryBox').removeClass('hidePage2');
                  setTimeout(function(){ $('.galleryBox').addClass('showPage'); }, 500);
                  setTimeout(function(){ $('.galleryBox').addClass('showPage2'); }, 1000);
                  check = false;
                } else {
                  $('.galleryBox').removeClass('showPage');
                  $('.galleryBox').removeClass('showPage2');
                  setTimeout(function(){ $('.galleryBox').addClass('hidePage'); }, 500);
                  setTimeout(function(){ $('.galleryBox').addClass('hidePage2'); }, 1000);
                  check = true;
                }
                /*$( ".ourBoxImg" ).css('margin-left',ourBoxImg.width/2+'px');
                $( ".ourBoxImg" ).css('margin-top',$( ".ourBoxImg" ).height()/2+'px');*/
                /*margin-top: -87.5px;
        margin-left: -87.5px;*/


}

window.fbAsyncInit = function() {
    FB.init({
      appId      : '1651296401564941',
      xfbml      : true,
      version    : 'v2.9'

    });
    FB.AppEvents.logPageView();
    FB.api(
  '1758384481103227/photos/uploaded?fields=album&access_token=EAACEdEose0cBAKJC97ZAhtXwfGdNhfRNguCL5ZAy4uW1dzAamj8yGJldxqlFuQbTlXQZCEKiK8mZCmZClvH0GZB50OeMlnlChkYQkvDaZBWsZBu1OEIffkSWDcFB5r53Df7K5Oj4L1SmkQukYbARSiLlspZCW2qrhrPEzdzbyVrbSMTYxKMtWwtfzrF0coRzkURQZD',
  'GET',
  {"fields":"images"},
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
            var elem = document.createElement("img");
            document.getElementById("gallery").appendChild(elem);
            elem.src = response.data[i].images[5].source;
            //elem.onclick = function() { galleryBox(response.data[i].images[0].source); };
            elem.setAttribute('onclick','galleryBox('+i+');');

          }
        /*document.getElementsByTagName("img")[1].src = response.data[1].images[1].source;
        document.getElementsByTagName("img")[2].src = response.data[2].images[2].source;*/
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


