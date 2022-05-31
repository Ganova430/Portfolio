
let sort = document.getElementById("menu");
let menu_deux = document.getElementById("myNav2")
let ferme =document.getElementById("fermer")

let equip = document.getElementById("menu3");
let menu_trois = document.getElementById("myNav3")
let fermer =document.getElementById("fermer2")

function openNav(){
    document.getElementById("myNav").style.height ="50%";

}

function closeNav(){
    document.getElementById("myNav").style.height ="0%";
}

sort.addEventListener("click",() =>{
    menu_deux.style.height ="50%";
})

ferme.addEventListener("click",() =>{
    menu_deux.style.height ="0%";
})

equip.addEventListener("click",() =>{
    menu_trois.style.height ="50%";
})

fermer.addEventListener("click",() =>{
    menu_trois.style.height ="0%";
})