function openTab(tabName) {
    let i, tabContent;

    tabContent = document.getElementsByClassName("tabContent");
    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }

    let tabs = document.getElementsByClassName("tab");
    for (i = 0; i < tabs.length; i++) {
        tabs[i].classList.remove("active");
    }

    document.getElementById(tabName).style.display = "block";

    event.currentTarget.classList.add("active");
}

var dropdown = document.getElementById("myDropdown");

dropdown.addEventListener("change", function () {
    var selectedOption = dropdown.options[dropdown.selectedIndex].value;
    console.log("Selected option: " + selectedOption);
});

document.body.addEventListener("click", () => {
    const btn = document.querySelector(".btn-check");
    if ((btn.style.cursor = "progress")) {
        setTimeout(() => {
            btn.style.cursor = "auto";
        }, 500);
    }
});

function calcu() {
    const input = document.querySelector(".hourly1");
    let cost = Number(input.value) * 100;
    const btn = document.querySelector(".btn-check");
    setTimeout(() => {
        btn.style.cursor = "progress";
    }, 100);

    if (cost) {
        cost = cost * 25;
    }

    document.querySelector(".hourly2-text").innerHTML = "Loading...";
    setTimeout(() => {
        document.querySelector(".hourly2-text").innerHTML = `Checkout $${
            cost / 100
        }`;
    }, 500);
}

function fleetTab(fleetName) {
    let i, tabContent;

    tabContent = document.getElementsByClassName("fleetContent");
    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }

    let tabs = document.getElementsByClassName("fleet");
    for (i = 0; i < tabs.length; i++) {
        tabs[i].classList.remove("active");
    }

    document.getElementById(fleetName).style.display = "flex";

    event.currentTarget.classList.add("active");
}

function toggleDropdown() {
    var deviceWidth = window.innerWidth;
    if (deviceWidth < 800) {
        var dropdownContent = document.getElementById("myDropdown1");
        dropdownContent.classList.toggle("show");
    }
}

window.onclick = function (event) {
    if (!event.target.matches(".dropbtn")) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains("show")) {
                openDropdown.classList.remove("show");
            }
        }
    }
};

function googleTranslateInit() {
    new google.translate.TranslateElement(
        {
            pageLanguage: "en",
            layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
        },
        "google_translate_element"
    );
}

AOS.init({
    duration: 1000, // Set the animation duration to 1000 milliseconds (1 second)
});
