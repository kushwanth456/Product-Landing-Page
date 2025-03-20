let state=true
function changecolor(){
let b=document.getElementById("color")
let hi=document.getElementById("imghero")
let img=document.getElementById("imgf")
if(state==true){
    b.style.backgroundColor="white"
    b.style.color="black"
    b.innerText="white"
    hi.src=`/images/white.png`
    img.src=`/images/white.png`
    state=false
}else{
    b.style.backgroundColor="black"
    b.style.color="white"
    b.innerText="black"
    hi.src=`/images/rog allyx(2024).png`
    img.src=`/images/rog allyx(2024).png`
    state=true
}
}