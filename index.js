$(document).ready(function () {
    //Si il y a un utilsateur loggé, on l'affiche dans le message de bienvenue
    //on cache le bouton pour se login/affiche le bouton pour se logout
    if (localStorage.getItem("userlogged") != null) {
        $(".text-welcome").empty();
        $(".text-welcome").append("Bienvenue " + localStorage.getItem("userlogged"));
        $(".login").hide();
        $(".signin").hide();
        $(".logout").show();
    }else{
        $(".login").show();
        $(".signin").show();
        $(".logout").hide();
    }
    //Si on clique sur se déco, on se déco
    //on affiche le bouton pour se login/cache le bouton pour se logout
    $("#logout").on("click", logout);

    function logout() {
        if (localStorage.getItem("userlogged") != null) {
            localStorage.removeItem("userlogged");
            alert("Utilisateur déconnecté");
        } else {
            alert("Pas connecté");
        }
    }
    // on charge la liste des billets
    $.getJSON('billets.json', function (artlist) {
        $('.artlist').empty;
        for (var i = 0; i < artlist.billets.length; i++) {
            $('.artlist').append(`<div class="billet" id="art${i}">
    <h3>${artlist.billets[i].title}</h3>
    ${artlist.billets[i].body}
    <footer class="text-right">
        ${artlist.billets[i].author} - ${artlist.billets[i].date}
    </footer>
</div>`);
        }

    });
});
