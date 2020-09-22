// Splash screen - source: https://www.youtube.com/watch?v=xuA83OYTE7I&ab_channel=dcode //
window.addEventListener("load", function () {
    const splash = document.querySelector(".splash");
    splash.className += " hidden";
    setTimeout(() => {
        splash.style.display = "none";
    }, 3000)


});


// Single page application content //


//opening details 

function goDetails() {
    document.getElementById('details-going-up').style.top = '-40vh';
}

function goMap() {
    document.getElementById('details-going-up').style.top = '100vh';
}

//toggle button
// source: https: //www.w3schools.com/howto/howto_js_toggle_hide_show.asp

function toggleNotifications() {
    var x = document.getElementById("toggleBtn1");
    var y = document.getElementById("toggleBG1");
    if (x.style.margin === "5px auto 5px 5px") {
        x.style.margin = "5px 5px 5px auto";
        y.style.background = "#27d07d";
    } else {
        x.style.margin = "5px auto 5px 5px";
        y.style.background = "#ff5959";
    }
}

function toggleFav() {
    var x = document.getElementById("toggleBtn2");
    var y = document.getElementById("toggleBG2");
    if (x.style.margin === "5px auto 5px 5px") {
        x.style.margin = "5px 5px 5px auto";
        y.style.background = "#27d07d";
    } else {
        x.style.margin = "5px auto 5px 5px";
        y.style.background = "#ff5959";
    }

}
// Onboarding mechanic

const onBoardingButtons = document.querySelectorAll("#onboarding > div > button.next");
const onBoardingSkip = document.querySelectorAll("#onboarding .top_part .skip");
const onBoardingContainers = document.querySelectorAll("#onboarding > div");


for (let i = 0; i < 5; i++) {
    onBoardingButtons[i].addEventListener('click', () => {
        onBoardingContainers[i].style.display = "none";
    })
}
for (let j = 0; j < 5; j++) {
    onBoardingSkip[j].addEventListener('click', () => {
        for (let i = 0; i < 5; i++) {
            onBoardingContainers[i].style.display = "none";
        }
    })

}

function iocnChange() {
    const tabIcons = document.querySelectorAll('.tabs a img:nth-of-type(2)');
    const tabs = document.querySelectorAll('.tabs a ');
    tabIcons[1].style.display = 'none';
    tabs[0].addEventListener('click', () => {
        tabIcons[0].style.display = 'none';
        tabIcons[1].style.display = 'block';
        tabIcons[2].style.display = 'block';
    })
    tabs[1].addEventListener('click', () => {
        tabIcons[1].style.display = 'none';
        tabIcons[2].style.display = 'block';
        tabIcons[0].style.display = 'block';
    })
    tabs[2].addEventListener('click', () => {
        tabIcons[2].style.display = 'none';
        tabIcons[1].style.display = 'block';
        tabIcons[0].style.display = 'block';
    })
}
iocnChange();

// Swipe functionality - source: https://codepen.io/jakeave/pen/GRJyxex//
document.querySelector("ul").addEventListener("click", e => {
    const li = e.target.closest("li");
    const btn = e.target.closest("button");
    if (li && li.scrollLeft === 0) {
        li.scrollBy({
            left: 1,
            behavior: "smooth"
        });
    } else if (!btn && li) {
        li.scrollBy({
            left: -1,
            behavior: "smooth"
        });
    } else if (btn && li) {
        li.remove();
    }
});