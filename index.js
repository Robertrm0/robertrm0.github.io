window.addEventListener("scroll", function(event){
    if (this.scrollY > 50){
        document.getElementById("div-menu").classList.add("flotar" );
    }else{
        document.getElementById("div-menu").classList.remove("flotar");
    }

});


document.getElementById('boton-menu').addEventListener("click",function(){
   
    document.getElementById("menu").classList.toggle("activador-menu")
    });


document.getElementById('boton-menu').addEventListener("click" ,function(){
    document.getElementById("boton-icono").classList.toggle("botonm")
});


document.getElementById('boton-menu').addEventListener("click" ,function(){
    document.getElementById("boton-icono2").classList.toggle("botom2")
});