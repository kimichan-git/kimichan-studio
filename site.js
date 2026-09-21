(function(){
  var navBtn=document.getElementById("navBtn");
  var nav=document.querySelector("nav");
  if(navBtn&&nav){
    navBtn.addEventListener("click",function(){
      var open=nav.classList.toggle("open");
      navBtn.setAttribute("aria-expanded",open?"true":"false");
      navBtn.setAttribute("aria-label",open?"Close menu":"Open menu");
    });
    nav.querySelectorAll(".nl a").forEach(function(a){
      a.addEventListener("click",function(){
        nav.classList.remove("open");
        navBtn.setAttribute("aria-expanded","false");
        navBtn.setAttribute("aria-label","Open menu");
      });
    });
  }
  document.querySelectorAll("[data-year]").forEach(function(el){
    el.textContent=String(new Date().getFullYear());
  });
})();
