function validar(){
    // console.log("Hola");
    // Obtener info de los inputs
    // Enviar info al backend, a traves del endpoint con fetch
    // Guiarme por lo que hice en lo del buscador
    let usuario = document.getElementById("name").value;
    let contrasena = document.getElementById("password").value;
    console.log(usuario, contrasena);
    fetch("http://localhost:3000/ingresar/" + usuario + "/" + contrasena)
        .then(info => info.json())
        .then(infoUs => {
            if(infoUs == "Bienvenida :)"){
                console.log("ir a otra pagina")
                window.location.href = "file:///C:/Users/alive/Desktop/Proyecto_2022/frontend/index.html"
            } else{
                alert("El usuario o la contraseña son incorrectos")
            }
            // let conte = document.getElementById("revision").innerText = infoUs;
            // console.log(infoUs);
        })
}

// Extra... Que los errores los marque por separado, dependiendo lo que esta mal,
// o sea, si la contrasena esta mal, decir que la contrasena esta mal, e igual con el usrario



// KACHYSKACHYS          KACHYSKACHYS
// KACHYZKACHYS         KACHYSKACHYS             
// KACHYZKACHYS        KACHYSKACHYS
// KACHYZKACHYS       KACHYSKACHYS
// KACHYSKACHYS      KACHYSKACHYS
// KACHYSKACHYS     KACHYSKACHYS
// KACHYSKACHYS    KACHYSKACHYS
// KACHYSKACHYSKACHYSKACHYS
// KACHYSKACHYSKACHYSKACHYS
// KACHYSKACHYSKACHYSKACHYS
// KACHYSKACHYS   KACHYSKACHYS
// KACHYSKACHYS    KACHYSKACHYS
// KACHYSKACHYS     KACHYSKACHYS
// KACHYSKACHYS      KACHYSKACHYS
// KACHYSKACHYS       KACHYSKACHYS
// KACHYSKACHYS        KACHYSKACHYS
// KACHYSKACHYS         KACHYSKACHYS
// KACHYSKACHYS          KACHYSKACHYS
// KACHYSKACHYS           KACHYSKACHYS
// KACHYSKACHYS            KACHYSKACHYS

