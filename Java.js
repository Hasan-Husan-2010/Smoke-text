const text = document.querySelector('.text');
text.innerHTML = text.textContent.replace(/\S/g,"<span>$&</span>");
const latters = document.querySelectorAll('span');
for(let i=0; i < latters.length;i++){
    latters[i].addEventListener('mouseover',function(){
        latters[i].classList.add('active')
    })
}