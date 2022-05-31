let intro = document.querySelector('#intro');
let note = document.querySelector('#note');
let cv = document.querySelector('#cv');
let iloi = document.querySelector('#iloi');
let perso = document.querySelector('#perso');
let merci = document.querySelector('#merci');
let audio =document.querySelector('audio')







console.log(intro.classList.contains('survole'));//est ce que la classe survole est sur l'objet = oui


// fonction pour changer la classe---------------------------------------------//

function changeRed (){
    intro.classList.remove("fond");
    intro.classList.add("survole");
}

function changeBlue (){
    intro.classList.remove("survole");
    intro.classList.add("fond");
}
//-----------------------------------------------------------------------------

console.log(intro.classList.contains('fond'));
intro.classList.remove("survole")
intro.addEventListener('mouseover',() =>{
console.log(intro.classList.contains('survole'));//est ce que la classe survole est sur l'objet = non
    if(intro.classList.contains("fond"))
    {
        changeRed();
        console.log(intro.classList.contains('survole'));
        console.log(intro.classList.contains('fond'));
   

    }
    audio.play();

});


intro.addEventListener('mouseout',() =>{
    changeBlue();
    audio.pause();

})






//------------------------NOTE-----------------------------------------------------

function changeNRed (){
    note.classList.remove("fond");
    note.classList.add("survole");
}

function changeNBlue (){
    note.classList.remove("survole");
    note.classList.add("fond");
}
//-----------------------------------------------------------------------------

console.log(note.classList.contains('fond'));
note.classList.remove("survole")
note.addEventListener('mouseover',() =>{
console.log(note.classList.contains('survole'));//est ce que la classe survole est sur l'objet = non
    if(note.classList.contains("fond"))
    {
        changeNRed();
        console.log(note.classList.contains('survole'));
        console.log(note.classList.contains('fond'));
        audio.play();
    }

});


note.addEventListener('mouseout',() =>{
    changeNBlue();
    audio.pause();

})


//------------------------CV-----------------------------------------------------

function changeCRed (){
    cv.classList.remove("fond");
    cv.classList.add("survole");
}

function changeCBlue (){
    cv.classList.remove("survole");
    cv.classList.add("fond");
}
//-----------------------------------------------------------------------------

console.log(cv.classList.contains('fond'));
cv.classList.remove("survole")
cv.addEventListener('mouseover',() =>{
console.log(cv.classList.contains('survole'));//est ce que la classe survole est sur l'objet = non
    if(cv.classList.contains("fond"))
    {
        changeCRed();
        console.log(cv.classList.contains('survole'));
        console.log(cv.classList.contains('fond'));
        audio.play();
    }

});


cv.addEventListener('mouseout',() =>{
    changeCBlue();
    audio.pause();

})


//------------------------iloi-----------------------------------------------------

function changiloiRed (){
    iloi.classList.remove("fond");
    iloi.classList.add("survole");
}

function changiloiBlue (){
    iloi.classList.remove("survole");
    iloi.classList.add("fond");
}
//-----------------------------------------------------------------------------

console.log(iloi.classList.contains('fond'));
iloi.classList.remove("survole")
iloi.addEventListener('mouseover',() =>{
console.log(iloi.classList.contains('survole'));//est ce que la classe survole est sur l'objet = non
    if(iloi.classList.contains("fond"))
    {
        changiloiRed();
        console.log(iloi.classList.contains('survole'));
        console.log(iloi.classList.contains('fond'));
        audio.play();
    }

});


iloi.addEventListener('mouseout',() =>{
    changiloiBlue();
    audio.pause();

})



//------------------------perso-----------------------------------------------------

function changePRed (){
    perso.classList.remove("fond");
    perso.classList.add("survole");
}

function changePBlue (){
    perso.classList.remove("survole");
    perso.classList.add("fond");
}
//-----------------------------------------------------------------------------

console.log(perso.classList.contains('fond'));
perso.classList.remove("survole")
perso.addEventListener('mouseover',() =>{
console.log(perso.classList.contains('survole'));//est ce que la classe survole est sur l'objet = non
    if(cv.classList.contains("fond"))
    {
        changePRed();
        console.log(perso.classList.contains('survole'));
        console.log(perso.classList.contains('fond'));
        audio.play();
    }

});


perso.addEventListener('mouseout',() =>{
    
    changePBlue();
    audio.pause();

})



//------------------------perso-----------------------------------------------------

function changeRRed (){
    merci.classList.remove("fond");
    merci.classList.add("survole");
}

function changeRBlue (){
    merci.classList.remove("survole");
merci.classList.add("fond");
}
//-----------------------------------------------------------------------------

console.log(merci.classList.contains('fond'));
merci.classList.remove("survole")
merci.addEventListener('mouseover',() =>{
console.log(merci.classList.contains('survole'));//est ce que la classe survole est sur l'objet = non
    if(cv.classList.contains("fond"))
    {
        changeRRed();
        console.log(merci.classList.contains('survole'));
        console.log(merci.classList.contains('fond'));
        audio.play();
    }

});


merci.addEventListener('mouseout',() =>{
    
    changeRBlue();
    audio.pause();

})