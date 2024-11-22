/*toggle menu*/

document.addEventListener("DOMContentLoaded", function() {
    var MenuItems = document.getElementById("MenuItems");

    MenuItems.style.maxHeight = "0px";

    window.menutoggle = function menutoggle(){
        if(MenuItems.style.maxHeight == "0px"){
            MenuItems.style.maxHeight = "200px";
        }
        else{
            MenuItems.style.maxHeight = "0px";
        }
    };
});

/*product gallery*/

document.addEventListener("DOMContentLoaded", function() {
    var ProductImg = document.getElementById("ProductImg");
    var SmallImg = document.getElementsByClassName("small-img");

    SmallImg[0].onclick = function(){
        ProductImg.src = SmallImg[0].src;
    }

    SmallImg[1].onclick = function(){
        ProductImg.src = SmallImg[1].src;
    }

    SmallImg[2].onclick = function(){
        ProductImg.src = SmallImg[2].src;
    }
});

/*toggle form*/

document.addEventListener("DOMContentLoaded", function() {
    var LoginForm = document.getElementById("LoginForm");
    var RegForm = document.getElementById("RegForm");
    var Indicator = document.getElementById("Indicator");

    window.register = function(){
        RegForm.style.transform = "translateX(0px)";
        LoginForm.style.transform = "translateX(0px)";
        Indicator.style.transform = "translateX(100px)";
    }

    window.login = function(){
        RegForm.style.transform = "translateX(300px)";
        LoginForm.style.transform = "translateX(300px)";
        Indicator.style.transform = "translateX(0px)";
    }
});