let box= document.querySelector(".box");

function change(){
    let red=Math.floor(Math.random()*255);
    let green=Math.floor(Math.random()*255);
    let blue=Math.floor(Math.random()*255);

    let randomcolor=`${red},${green},${blue}`;
    console.log(randomcolor);

    document.querySelector("h1").innerText=randomcolor;

    console.dir(box);
    box.style.backgroundColor=`rgb(${red},${green},${blue})`;
}
box.addEventListener("click",change);

