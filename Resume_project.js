//for nav nav menu
var navMenuAnchorTag = document.querySelectorAll('.nav-menu a');
for(var i = 0; i < navMenuAnchorTag.length; i++){
    navMenuAnchorTag[i].addEventListener('click', function(event){
        event.preventDefault();
        var targetSectionID = this.textContent.trim().toLowerCase();
        if(targetSectionID == 'home')
            return;
        var targetSection = document.getElementById(targetSectionID);
        // console.log(targetSection);
        var interval = setInterval(function(){
            var targetSectionCoodinates = targetSection.getBoundingClientRect();
            if(targetSectionCoodinates.top <= 100){
                clearInterval(interval);
                return;
            }
            window.scrollBy(0,200);
        }, 50);
    })
}
//till here 
// auto fill skills

var progressBars = document.querySelectorAll('.skill-progress > div');
var skillContainer = document.getElementById('skill-container');

window.addEventListener('scroll',checkScroll);



function initaliseBars(bar){
    bar.setAttribute("data-visited", false);
    bar.style.width = 0 + '%';
}
for (var bar of progressBars) {
    initialiseBar(bar);
}
function fillBars(bar){
        var targetWidht = bar.getAttribute('data-skill-length');
        var currentWidth = 0;
        var interval = setInterval(function(){
            if(currentWidth >= targetWidht){
                clearInterval(interval);
                return;
            }
            bar.style.width = currentWidth + '%';
            currentWidth += 1;
        },5);
}

function checkScroll(){
    for(let bar of progressBars){
        var barCoordinates = bar.getBoundingClientRect();

        if((bar.getAttribute("data-visited") == "false") &&(barCoordinates.top <= (window.innerHeight - barCoordinates.height))) {
            bar.setAttribute("data-visited", true);
            fillBars(bar);
        }
        else if(barCoordinates.top > window.innerHeight){
            bar.setAttribute("data-visited", false);
            initaliseBars(bar);
        }
    }
}




//  percentage Scroll

