let div = document.querySelector(".hero-section"); 
function change (){ 
    setTimeout(()=>{ 
        div.classList.add("one") 
    },1000), 
    setTimeout(()=>{ 
        div.classList.remove("one") 
    },3000) 
    console.log("1"); 
 
    setTimeout(()=>{ 
        div.classList.add("two") 
    },2000), 
    setTimeout(()=>{ 
        div.classList.remove("two") 
    },4000) 
    console.log("2"); 
 
    setTimeout(()=>{ 
        div.classList.add("three") 
    },3000) 
    setTimeout(()=>{ 
        div.classList.remove("three") 
    },5000) 
    console.log("3"); 
 
    setTimeout(()=>{ 
        div.classList.add("four") 
    },4000) 
    setTimeout(()=>{ 
        div.classList.remove("four") 
    },6000) 
    console.log("4") 
}; 
change() 
setInterval(()=>{ 
    change(); 
},5000)