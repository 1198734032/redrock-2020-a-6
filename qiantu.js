function lunbo(){
    let items=document.getElementsByClassName("bg-wrap");
    let dots = document.getElementsByClassName("dot");
    let odiv=document.getElementById("big-title");
    let left=document.getElementById("left-button");
    let right = document.getElementById("right-button");
    let index = 0;
    let time = 0;

    let classnameClear =  ()=> {
        for (let i = 0; i < items.length; i++) {
            items[i].className = "bg-wrap";
            dots[i].className = "dot";
        }
    };
    let goto =  ()=> {
        classnameClear();
        items[index].className = "bg-wrap active";
        dots[index].className = "dot active";
    };

    let golast=()=>{
        if (index > 0) {
            index--;
        } else {
            index = dots.length-1;
        }
        goto(); 
    };

    let gonext = ()=> {
        if (index < dots.length - 1) {
            index++;
        } else {
            index = 0;
        }
        goto();
    }
    for (let i = 0; i < items.length; i++) {
        dots[i].addEventListener('click',  function() {
            let data = this.getAttribute('data-index');
            index = data;
            goto();
        })
    }
    let timer = function () {
        time++;
        if (time == 30) {
            gonext();
            time = 0;
        }
    };
    let t = setInterval(timer, 100);
    odiv.addEventListener('mouseout',()=> {
        t = setInterval(timer, 100);
        left.className="lr-button";
        right.className="lr-button";
    });
    odiv.addEventListener('mouseover',()=> {
        clearInterval(t);
        left.className="lr-button active";
        right.className="lr-button active";
    })
    left.addEventListener('click',_=>{golast();  clearInterval(t);})
    right.addEventListener("click",_=>{gonext();  clearInterval(t);})
}
lunbo()

function toTop(){
    
    window.addEventListener('scroll',()=>{
        let top = document.getElementById("top")
        let winScroll = document.documentElement.scrollTop;
       if(winScroll>400) {
           top.style.opacity=.6
       }else {
           top.style.opacity=0
       }
    })
}
toTop()

function lazyimg() {
    let img = document.getElementsByTagName('img')
    for (let i = 0; i < img.length; i++) {
        if (img[i].getBoundingClientRect().top < window.innerHeight) {
            img[i].src = img[i].dataset.src
        }
    }
}
lazyimg()
let scoll = document.addEventListener('scroll', function () {
    lazyimg()
})