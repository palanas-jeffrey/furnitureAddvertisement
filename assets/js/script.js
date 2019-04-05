var images,
    loadedImage = 0;


function preload() {
   images = new Array(      
       "assets/images/bg.png",
       "assets/images/headline1.png",
       "assets/images/line.png",
       "assets/images/headline2.png",
       "assets/images/headline3.png",
       "assets/images/shopnow.png",
       "assets/images/prod1.png",
       "assets/images/prod2.png",
       "assets/images/btnleft.png",
       "assets/images/btnRight.png"    
   );

   for (var i = 0; i < images.length; i++) {
       var imageObj = new Image();
       imageObj.src = images[i];
       imageObj.addEventListener("load",imageLoad, false);
    }
}

preload();


function imageLoad() {
    loadedImage++;
    if (images.length == loadedImage){
   
    document.getElementById("bgImage").style.background ='url('+images[0]+')';
    document.getElementById("head1").style.background ='url('+images[1]+')';
    document.getElementById("line").style.background ='url('+images[2]+')';
    document.getElementById("head2").style.background ='url('+images[3]+')';
    document.getElementById("head3").style.background ='url('+images[4]+')';
    document.getElementById("shopNow").style.background ='url('+images[5]+')';
    document.getElementById("prod1").style.background ='url('+images[6]+')';
    document.getElementById("prod2").style.background ='url('+images[7]+')';


    //fadeIn line
    document.getElementById('line').classList.add("fadeIn");

    setTimeout(slide, 1000);
 
    setTimeout(fadeOut,5000);

    setTimeout(fadeInH3Shopn, 5000);

    setTimeout(fadeInProd1Btn, 6000);


    } 
}


document.onreadystatechange = function () {
  if (document.readyState === 'complete') {
     document.getElementById("bgImage").style.visibility = "visible";
  }
}

function slide(){     
    //slideLeft
    document.getElementById('head1').classList.add("slideLeft");
    //slideRight
    document.getElementById('head2').classList.add("slideRight");
}

function fadeOut(){
   document.getElementById('line').classList.add("fadeOut");
   document.getElementById('head1').classList.add("fadeOut");
   document.getElementById('head2' ).classList.add("fadeOut");
}

function fadeInH3Shopn(){
  document.getElementById('head3').classList.add("fadeInH3Shopn");
  document.getElementById("shopNow").classList.add("fadeInH3Shopn");
}

function fadeInProd1Btn(){
  document.getElementById('prod1').classList.add("fadeInProd1Btn");
  document.getElementById('prod2').classList.add("fadeInProd1Btn");
  document.getElementById('arrContainer').classList.add("fadeInProd1Btn");
  document.getElementById('arrowRight').classList.add("fadeInProd1Btn");
}


document.getElementById('arrowRight').addEventListener("click",carouselSlideLeft) ;
document.getElementById('arrowLeft').addEventListener("click",carouselSlideRight) ;

function carouselSlideLeft(){
  showHideBtn()
  document.getElementById("carousel").classList.add("carouselSlideLeft");
  document.getElementById("carousel").style.transform = "translateX(-300px)";


}
function carouselSlideRight(){
  showHideBtn()
  document.getElementById("carousel").classList.add("carouselSlideRight");
  document.getElementById("carousel").style.transform = "translateX(0px)";
 
}

function showHideBtn(){

var arrowLeft = document.getElementById("arrowLeft").style
var arrowRight = document.getElementById("arrowRight").style
  if(arrowLeft.visibility === "visible"){
    arrowRight.visibility = "visible";
    arrowLeft.visibility = "hidden";
  }else{
    arrowLeft.visibility = "visible";
    arrowRight.visibility = "hidden";
  }

}
