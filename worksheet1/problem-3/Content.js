//Problem 3:

//array of images
let virusImages = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7AlyM5jgALjSSGZsiQpq3pC0u6QoCm0TivQ&usqp=CAU",
    "https://www.pdsigns.ie/contentFiles/productImages/Large/Remember-Social-Distancing1000x1000.jpg",
    "https://i.pinimg.com/originals/eb/5a/d7/eb5ad781e7beb3faf5c614826e21759b.gif",
    "https://i.pinimg.com/originals/4d/50/39/4d50398facea176386267f7f28cf59bc.gif",
	"https://acegif.com/wp-content/uploads/gif/social-distancing-4.gif"
];

//reverse through array of images
//getting random image from the array we created before (we use math.floor and math.random to grab a random index in the array)
const imgs = document.getElementsByTagName("img");
for(let i = 0; i < imgs.length; i++) {
    const randomImg = Math.floor(Math.random() * virusImages.length)
    imgs[i].src = virusImages[randomImg]
}

//for h1 and h2 elements the text and colour is changed 
const headers = document.getElementsByTagName("h1");
const headers2 = document.getElementsByTagName("h2");
for (let i = 0; i < headers.length; i++){
    headers[i].innerText = "WARNING YOUR COMPUTER HAS CORONAVIRUS!!!!";
    headers[i].style.color = "orange";
    headers2[i].innerText = "WARNING YOUR COMPUTER HAS CORONAVIRUS!!!!";
    headers2[i].style.color = "orange";
}

//for p elements the text and colour is changed
const p = document.getElementsByTagName("p");
for (let i = 0; i < p.length; i++){
    p[i].innerText = "All text please self isolate!";
    p[i].style.color = "red";
}

//both p and list elements have increased padding (SOCIAL DISTANCING)
const l = document.getElementsByTagName("li")
for (let i = 0; i < p.length; i++){
    p[i].style.padding = "50px 50px 50px 50px";
    l[i].style.padding = "50px 50px 50px 50px";
}

//once a p element is clicked an audio plays - COVID SIREN
var audioO = new Audio('https://upload.wikimedia.org/wikipedia/commons/9/97/Siren.ogg');
for (let i = 0; i < p.length; i++){
    p[i].innerText = "All text please self isolate!";
    p[i].style.color = "red";
    p[i].addEventListener("click", audioO.play() );
}