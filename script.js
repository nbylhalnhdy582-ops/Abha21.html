document.addEventListener("DOMContentLoaded", function() {

  const mobileMenu = document.getElementById("mobile-menu");
  if (mobileMenu) {
    mobileMenu.addEventListener("click", function() {
      document.querySelector(".nav-list").classList.toggle("active");
    });
  }

  const startScreen = document.getElementById("startScreen");
  const welcomeBtn = document.getElementById("welcomeBtn");
  const welcomeScreen = document.getElementById("welcomeScreen");
  const mainContent = document.getElementById("mainContent");
  const startTourBtn = document.getElementById("startTourBtn");
  const backToTop = document.getElementById("backToTop");
  const newsLinks = document.querySelectorAll(".show-news");
  const newsItems = document.querySelectorAll(".news-item");
  const backButtons = document.querySelectorAll(".back-to-table");
  const navLinks = document.querySelectorAll(".nav-list li a");

  if (startScreen) startScreen.style.opacity = 1;

  if (welcomeBtn) {
    welcomeBtn.addEventListener("click", function() {
      startScreen.style.display = "none";
      welcomeScreen.classList.add("active");
    });
  }

  if (startTourBtn) {
    startTourBtn.addEventListener("click", function() {
      welcomeScreen.classList.remove("active");
      mainContent.style.display = "block";
      window.scrollTo({top:0, behavior:"smooth"});
    });
  }

  newsLinks.forEach(link=>{
    link.addEventListener("click", function(e){
      e.preventDefault();
      const targetId = link.getAttribute("data-target");
      newsItems.forEach(item=>{
        item.style.display="none"; item.style.opacity=0;
      });
      const targetItem=document.getElementById(targetId);
      targetItem.style.display="block";
      setTimeout(()=>targetItem.style.opacity=1, 50);
    });
  });

  backButtons.forEach(btn=>{
    btn.addEventListener("click", function(){
      newsItems.forEach(item=>{
        item.style.display="none"; item.style.opacity=0;
      });
      document.getElementById("newsTable").scrollIntoView({behavior:"smooth"});
    });
  });

  if (backToTop) backToTop.addEventListener("click", ()=> window.scrollTo({top:0,behavior:"smooth"}));

  navLinks.forEach(link=>{
    link.addEventListener("click", function(e){
      e.preventDefault();
      const targetId = link.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);
      if(targetSection) targetSection.scrollIntoView({behavior:"smooth"});
    });
  });

});
