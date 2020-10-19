function myFunction(){
    var x = document.getElementById("password");
    var y = document.getElementById("hide1");
    var z = document.getElementById("hide2");

    if (x.type === 'password'){
        x.type = "text";
        y.style.display = "block";
        z.style.display = "none";
    //   y.style.visibility = "visible";
    //   z.style.visibility = "hidden";
    }
    else{
      x.type = "password";
        y.style.display = "none";
        z.style.display = "block";
    //   y.style.visibility = "hidden";
    //   z.style.visibility = "visible";
    }

}