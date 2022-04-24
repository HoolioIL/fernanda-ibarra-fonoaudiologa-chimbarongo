const getFooter = function () {
    const year = new Date().getFullYear();
   document.getElementById("footer-text").innerHTML = "Fonoaudiología Chimbarongo. Copyright &copy JFIL Softwares - " + year 
   return;
}
const scrollNavbar = document.querySelector('.navbar');

window.onscroll = function() {
    const top = window.scrollY;
    if ( top >= 40 ){
        scrollNavbar.classList.add('active');
    }else{
        scrollNavbar.classList.remove('active');
    }
}