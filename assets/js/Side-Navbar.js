function togNav() {
   

    var mySidebar = document.getElementById("mySidebar");
        if (mySidebar.style.width == '250px') {
            mySidebar.style.width = '0';
        } else {
            mySidebar.style.width = "250px";

        }

    var main = document.getElementById("main");
        if (main.style.marginLeft == '250px') {
            main.style.marginLeft = '0';
        } else {
            main.style.marginLeft = "250px";
        }
    
  }
  
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
}