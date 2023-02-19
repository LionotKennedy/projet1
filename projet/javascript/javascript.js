var img_sldr = document.getElementsByClassName("img_sldr");
var img_sldr2 = document.getElementsByClassName("img_sldr2")
let etape = 0;
let etape2 = 0
let nbr_img = img_sldr.length;
let nbr_img2 = img_sldr2.length

let previous = document.querySelector('.previous');
let next = document.querySelector('.next');

function removeActiveimages(){
    for(let i = 0 ; i < nbr_img ; i++)
    {
        img_sldr[i].classList.remove('active');
    }
}
function removeActiveimages2(){
    for(let i = 0 ; i < nbr_img2 ; i++)
    {
        img_sldr2[i].classList.remove('active');
    }
}
next.addEventListener("click", function(){
    etape++;
    if(etape > nbr_img-1)
    {
        etape = 0;
    }
    removeActiveimages2()
    removeActiveimages();
    img_sldr[etape].classList.add('active');
    img_sldr2[etape].classList.add('active');
});
previous.addEventListener("click", function(){
    etape--;
    if(etape < 0)
    {
        etape = nbr_img - 1;
    }
    removeActiveimages2()
    removeActiveimages();
    img_sldr[etape].classList.add('active');
    img_sldr2[etape].classList.add('active');
});
setInterval(function(){
    etape++;
    if(etape > nbr_img-1)
    {
        etape = 0;
    }
    removeActiveimages();
    img_sldr[etape].classList.add('active');

},2000);
setInterval(function(){
    etape2++;
    if(etape2 > nbr_img-1)
    {
        etape2 = 0;
    }
    removeActiveimages2();
    img_sldr2[etape].classList.add('active');

},2000);
// var move = document.querySelector("50%");
// function leave(){
    // move.style.transform = 'translate(0%)';
// }
// window.onload = leave;