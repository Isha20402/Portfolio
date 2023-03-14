//header toggle
let MenuBtn = document.getElementById('MenuBtn')

MenuBtn.addEventListener('click',function(e){
    document.querySelector('body').classList.toggle('mobile-nav-active');
    this.classList.toggle('fa-xmark');
})

//Typinf effect  

let typed = new Typed('.auto-input',{
    string : ['Front-End Developer','Web Developer'],
    typeSpeed: 100,
    backSpeed:100,
    backDelay:2000,
    loop: true,
})


//Get all links
let navlinks=document.querySelector('nav ul li a')
//Get all section
let section =document.querySelectorAll('section')
console.long(sections)

window.addEventListener('scroll',function(){
    const scrollPos=window.scrollY +20
    section.forEach(section=>{
        if(scrollPos>section.offsetTop && scrollPos<(section.offsetTop +section.offsetHeight)){
            navlinks.forEach(link=>{
                link.classList.remove('active');
                if(section.getAttribute(id)=== link.getAttribute('href').substring(1)){
                    link.classList.add('active')
                }

            });
        }
    });

});