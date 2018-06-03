$(document).ready(function () {
    //Si il y a un utilsateur loggé, on l'affiche dans le message de bienvenue
    if (localStorage.getItem("userlogged") != null) {

        $(".text-welcome").empty();
        $(".text-welcome").append("Bienvenue " + localStorage.getItem("userlogged"));
    }
    //Si on clique sur se déco, on se déco
    $("#logout").on("click", logout);

    function logout() {
        if (localStorage.getItem("userlogged") != null) {
            localStorage.removeItem("userlogged");
            alert("Utilisateur déconnecté")
        } else {
            alert("Pas connecté");
        }
    }
    // on charge la liste des billets
    
});
