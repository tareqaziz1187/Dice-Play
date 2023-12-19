var randomnumber1 = Math.floor(Math.random() *6) +1;
var randomimage = "dice" +randomnumber1+".png" ;
var randomimagesource = "./"+ randomimage;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",randomimagesource);

var randomnumber2 = Math.floor(Math.random() *6) +1;
var randomimage2 = "dice" +randomnumber2+".png" ;
var randomimagesource2 = "./"+ randomimage2;
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",randomimagesource2);


if(randomnumber1>randomnumber2){
document.querySelector("h1").innerHTML = "Player1 Win";

}
else if(randomnumber2>randomnumber1){

    document.querySelector("h1").innerHTML = "Player2 Win";
}
else{
    document.querySelector("h1").innerHTML= "Draw!"
}