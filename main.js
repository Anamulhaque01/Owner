function homepageAnimation(){
    gsap.set(".div1",{
        scale:5
    })
    
    var tl=gsap.timeline({
        scrollTrigger:{
            trigger:".home",
            start:"top top",
            end:"bottom bottom",
            // markers:true,
            
            scrub:3,
        },
    })
    
    
    
    
    
    tl.to(".vdodiv",{
        
        '--clip':"0%",
        ease:Power2,
        
    },'a')
    
    tl.to(".div1",{
        scale:1,
        ease:Power2,
        
    },'a')
    
    
    
    tl.to(".lft",{
        xPercent:-10,
        stagger:.03,
        ease:Power4,
        
    },'b')
    
    tl.to(".rgt",{
        xPercent:10,
        stagger:.03,
        ease:Power4,
        
    },'b')
}

function  realPageAnimation(){
    gsap.to(".slide",{
    scrollTrigger:{
        trigger:".real",
        start:"top top",
        end:"bottom bottom",
        
        scrub:1
    },
    xPercent:-300,
    ease:Power4
})

}








(function () {
    const locomotiveScroll = new LocomotiveScroll();
})();


document.querySelectorAll(".section")
.forEach(function(e){
    ScrollTrigger.create({
        trigger:e,
        start:"top 50%",
        end:"bottom 50%",
        onEnter: function(){
            document.body.setAttribute("theme",e.dataset.color)
        },
        onEnterBack: function(){
            document.body.setAttribute("theme",e.dataset.color)
        }
    })
})


// work-image

var elemC = document.querySelector("#elem-container");
var fixed = document.querySelector("#fixed-image");
elemC.addEventListener("mouseenter",function(){
    fixed.style.display="block"
})

elemC.addEventListener("mouseleave",function(){
    fixed.style.display="none"
})

var elems = document.querySelectorAll(".elem1")
elems.forEach(function(e){
    e.addEventListener("mouseenter",function(){
        var image = e.getAttribute("data-image")
        fixed.style.backgroundImage=`url(${image})`
    })
})

const text = document.querySelector('.text p');
text.innerHTML = text.innerText.split('').map(
    (char,i) =>
        `<span style="transform:rotate(${i*8.3}deg)">${char}</span>`
).join('');


var tl = gsap.timeline()
tl.from(".loader h3",{
    x:40,
    opacity:0,
    duration:1,
    stagger:0.1
})

tl.to(".loader h3",{
    x:-10,
    opacity:0,
    duration:2,
    stagger:0.1,
    
})

tl.to(".loader",{
    opacity:0
})

tl.from(".page1-content h1 span",{
    y:100,
    opacity:0,
    stagger:0.1,
    duration:0.5,
    delay:-0.5
})

tl.to(".loader",{
    display:"none"
})

const menuLinks = document.querySelectorAll('.menu a');

menuLinks.forEach(link => {
    link.addEventListener('mousemove', (event) => {
        const rect = link.getBoundingClientRect();
        const mouseX = event.clientX - rect.left;
        const mouseY = event.clientY - rect.top;

        link.style.transform = `translate(${mouseX - rect.width / 2}px, ${mouseY - rect.height / 2}px)`;
    });

    link.addEventListener('mouseleave', () => {
        link.style.transform = 'translate(0, 0)';
    });
});

homepageAnimation();
realPageAnimation();


