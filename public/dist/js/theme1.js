'use strict'
//variables
const bntMenu = document.getElementById('btnMenu')
const BtnCategorieWeb = document.getElementById('web')
const BtnCategorieAweb = document.getElementById('Aweb')
const BtnCategorieRecursos = document.getElementById('rec')
const BtnCategorieTutorials = document.getElementById('tutorial')
// action
bntMenu.addEventListener("click", CtrBtnMenu)
scroll();
scroll("on");

function scroll(option) {
  if (option == undefined) {
    var $win = $(window);
    var $pos = 25;
    $win.scroll(function () {
      if ($win.scrollTop() > $pos) {
        $("nav").addClass("bg-light");
        $("nav").addClass("navbar-light");
        $("nav").addClass("shadow-nav");
        $("#logo").attr("src", "./dist/img/logo.png");
        //remove
        $("nav").removeClass("navbar-dark");
      } else if ($win.scrollTop() < $pos) {
        $("nav").removeClass("bg-light");
        $("nav").addClass("navbar-dark");
        $("nav").removeClass("shadow-nav");
        $("#logo").attr("src", "./dist/img/logo-white.png");
      }
    });
  } else {
    var $win = $(window);
    var $pos = 25;
    if ($win.scrollTop() > $pos) {
      return false;
    } else if ($win.scrollTop() < $pos) {
      return true;
    }
  }
}

//function
function CtrBtnMenu(){
    let scrolls = scroll("on");
    if (scrolls) {
      var item = $("#btnMenu").hasClass("collapsed");
      console.log(item);
      if (item) {
        console.log("pinta");
        $("nav").addClass("bg-light");
        $("nav").removeClass("navbar-dark");
        $("nav").addClass("navbar-light");
        $("#logo").attr("src", "./dist/img/logo.png");
      } else {
        $("nav").removeClass("bg-light");
        $("nav").removeClass("navbar-light");
        $("nav").addClass("navbar-dark");
        $("#logo").attr("src", "./dist/img/logo-white.png");
      }
    }
}