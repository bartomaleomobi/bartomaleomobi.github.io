var myImage=document.getElementById("myPhoto");
var imageArray=["http://media.t3.com/img/resized/ad/xxl_adidas-Ultra-BOOST-running-shoe-1200-80.jpg","http://colgansports.com/uploads/adidas_cloudfoam_groove_2016_2_adidas_cloudfoam_groove_mens_2016.jpg", 
"http://www.topbrandtrade.com/images/picture20160605/Adidas%20Originals%20NMD15%2036-44/Adidas%20Originals%20NMD15_4.jpg",
"http://www.torsionuk.com/images/ZX%2010000%20Adidas%20Womens%20Anthracite%20Black%20White_01.jpg"]
var imageIndex=0;
function chahgeImage() {
myPhoto.setAttribute("src", imageArray [imageIndex]);
imageIndex++;
if (imageIndex>=imageArray.length){
imageIndex=0;
}


}
var intervalHandle = setInterval(chahgeImage,2000);
myPhoto.onlick=function(){
clearInterval(intervaHandle);
}