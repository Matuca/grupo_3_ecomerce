function openNav() {
    document.getElementById("mySidenav").style.animation = "expand 0.3s forwards";
    //closeBtn
    document.getElementById("closeBtn").style.display = "block";
    document.getElementById("closeBtn").style.animation = "show 0.3s";
    //Overlay
    document.getElementById("overlay").style.display = "block";
    document.getElementById("overlay").style.animation = "show 0.3s";

}

function closeNav() {
    document.getElementById("mySidenav").style.animation = "collapse 0.3s forwards";
    //closeBtn
    document.getElementById("closeBtn").style.animation = "hide 0.3s";
    //Overlay
    document.getElementById("overlay").style.animation = "hide 0.3s";

    setTimeout(() => {
        document.getElementById("closeBtn").style.display = "none";
        document.getElementById("overlay").style.display = "none";
        //Reset Menus
        document.getElementById("main-container").style.animation = "";
        document.getElementById("main-container").style.transform = "translateX(0px)";
        document.getElementById("sub-container").style.animation = "";
        document.getElementById("sub-container").style.transform = "translateX(380px)";
    }, 300)
}

var firstDropdownOpen = false;

function firstDropDown() {
    firstDropdownOpen = !firstDropdownOpen;
    if(firstDropdownOpen) {
        document.querySelector("#firstDropDown i").setAttribute("class", "fas fa-chevron-up");
        document.querySelector("#firstDropDown div").innerHTML = "Ver menos";
        //Handle Container
        document.getElementById("firstContainer").style.display = "block";
        document.getElementById("firstContainer").style.animation = "expandDropDown 0.3s forwards";
        document.getElementById("firstContainer").style.transition = "height 0.3s";
        document.getElementById("firstContainer").style.height = "320px";
    }else{
        document.querySelector("#firstDropDown i").setAttribute("class", "fas fa-chevron-down");
        document.querySelector("#firstDropDown div").innerHTML = "Ver más";
        //Handle Container
        document.getElementById("firstContainer").style.animation = "collapseDropDown 0.2s forwards";
        document.getElementById("firstContainer").style.transition = "height 0.2s";
        document.getElementById("firstContainer").style.height = "0px";
        setTimeout(() => {
            document.getElementById("firstContainer").style.display = "none";
        }, 200)
        
    }
}

var secondDropDownOpen = false;

function secondDropDown() {
    secondDropDownOpen = !secondDropDownOpen;

    if(secondDropDownOpen) {
        document.querySelector("#secondDropDown i").setAttribute("class", "fas fa-chevron-up");
        document.querySelector("#secondDropDown div").innerHTML = "Ver menos";
        //Handle Container
        document.getElementById("secondContainer").style.display = "block";
        document.getElementById("secondContainer").style.animation = "expandDropDown 0.3s forwards";
        document.getElementById("secondContainer").style.transition = "height 0.3s";
        document.getElementById("secondContainer").style.height = "260px";
    }else{
        document.querySelector("#secondDropDown i").setAttribute("class", "fas fa-chevron-down");
        document.querySelector("#secondDropDown div").innerHTML = "Ver más";
        //Handle Container
        document.getElementById("secondContainer").style.animation = "collapseDropDown 0.2s forwards";
        document.getElementById("secondContainer").style.transition = "height 0.2s";
        document.getElementById("secondContainer").style.height = "0px";
        setTimeout(() => {
            document.getElementById("secondContainer").style.display = "none";
        }, 200)
        
    }
}

document.querySelectorAll(".sidenavRow").forEach(row => {
    row.addEventListener("click", () => {
        document.getElementById("main-container").style.animation = "mainAway 0.3s forwards";
        document.getElementById("sub-container").style.animation = "subBack 0.3s forwards";
    });
});

document.getElementById("mainMenu").addEventListener("click", () => {
    document.getElementById("main-container").style.animation = "mainBack 0.3s forwards";
    document.getElementById("sub-container").style.animation = "subPush 0.3s forwards";
})

//subNavContent

function openAmazonMusic() {
    document.getElementById("sub-container-content").innerHTML = `<div class="sidenavContentHeader">Prime Video</div>
    <a href="#"><div class="sidenavContent">All Videos</div></a>`;
}

function openTecno() {
    document.getElementById("sub-container-content").innerHTML = `
        <div class="sidenavContentHeader">Tecnología</div>
            <a href="#">
                <div class="sidenavContent">Televisores</div>
            </a>
            <a href="#">
                <div class="sidenavContent">Proyectores</div>
            </a>
            <a href="#">
                <div class="sidenavContent">Laptops</div>
            </a>
            <a href="#">
                <div class="sidenavContent">Celulares</div>
            <a href="#">
                <div class="sidenavContent">Tablets</div>
            </a>
            
            `;
}
function openIndu() {
    document.getElementById("sub-container-content").innerHTML = `
        <div class="sidenavContentHeader">Indumentaria</div>
            <a href="#">
                <div class="sidenavContent">Temporada</div>
            </a>
            <a href="#">
                <div class="sidenavContent">Estilo Urbano</div>
            </a>
            <a href="#">
                <div class="sidenavContent">Estilo Clasico</div>
            </a>
            <a href="#">
                <div class="sidenavContent">Tendencias</div>
            <a href="#">
                <div class="sidenavContent">Outlet</div>
            </a>
            
            `;
}
function openGaming() {
    document.getElementById("sub-container-content").innerHTML = `
        <div class="sidenavContentHeader">Gaming</div>
            <a href="#">
                <div class="sidenavContent">Consolas</div>
            </a>
            <a href="#">
                <div class="sidenavContent">Computadoras</div>
            </a>
            <a href="#">
                <div class="sidenavContent">Placas de video</div>
            </a>
            <a href="#">
                <div class="sidenavContent">Accesorios</div>
            <a href="#">
                <div class="sidenavContent">Sillas</div>
            </a>
            
            `;
}
