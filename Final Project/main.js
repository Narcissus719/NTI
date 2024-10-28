document.addEventListener("DOMContentLoaded", function(){
    // make it as accordion for smaller screens
    if (window.innerWidth > 992) {
    
        document.querySelectorAll('.navbar .nav-item').forEach(function(everyitem){
    
            everyitem.addEventListener('mouseover', function(e){
    
                let el_link = this.querySelector('a[data-bs-toggle]');
    
                if(el_link != null){
                    let nextEl = el_link.nextElementSibling;
                    el_link.classList.add('show');
                    nextEl.classList.add('show');
                }
    
            });
            everyitem.addEventListener('mouseleave', function(e){
                let el_link = this.querySelector('a[data-bs-toggle]');
    
                if(el_link != null){
                    let nextEl = el_link.nextElementSibling;
                    el_link.classList.remove('show');
                    nextEl.classList.remove('show');
                }
    
    
            })
        });
    
    }
    // end if innerWidth
    }); 

// let target = 8000
// for(let i = 0;i<=target;){
//    if (i<target){  
//        i++ 
//         document.querySelector(".text-8000").textContent = i
// }
    
// }




let counter = 0;
let counter2 = 0;
let counter3 = 0;
let counter4 = 0;
    const target = 8000;
    const target2 = 810;
    const target3 = 2000;
    const target4 = 20;
    const increment = 1;
    const interval = 300; // milliseconds

function updateCounter() {

    
    if (counter < target) {
        counter += increment;
        document.getElementById("text-8000").innerText = counter;
        setTimeout(updateCounter, interval);
    }
    if (counter2 < target2) {
        counter2 += increment;
        document.getElementById("text-810").innerText = counter2;
        setTimeout(updateCounter, interval);
    }
    if (counter3 < target3) {
        counter3 += increment;
        document.getElementById("text-2000").innerText = counter3;
        setTimeout(updateCounter, interval);
    }
    if (counter4 < target4) {
        counter4 += increment;
        document.getElementById("text-20").innerText = counter4;
        setTimeout(updateCounter, interval);
    }
}
updateCounter();








   



   
