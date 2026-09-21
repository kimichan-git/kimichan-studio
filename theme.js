(function(){
  var themeBtn=document.getElementById("themeBtn");
  var SUN='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/></svg>';
  var MOON='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';
  function getTheme(){ try{ return localStorage.getItem("kc-theme"); }catch(e){ return null; } }
  function setTheme(v){ try{ localStorage.setItem("kc-theme", v); }catch(e){} }
  function paint(theme){
    document.documentElement.setAttribute("data-theme", theme);
    if(!themeBtn) return;
    themeBtn.innerHTML = theme==="dark" ? SUN : MOON;
    themeBtn.setAttribute("aria-label", theme==="dark" ? "Switch to light mode" : "Switch to dark mode");
  }
  var theme=getTheme()||"dark";
  paint(theme);
  if(themeBtn){
    themeBtn.addEventListener("click", function(){
      theme = theme==="dark" ? "light" : "dark";
      setTheme(theme);
      paint(theme);
    });
  }
})();
