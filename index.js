$(document).ready(function () {
    //Si il y a un utilsateur loggé, on l'affiche dans le message de bienvenue
    //on cache le bouton pour se login/affiche le bouton pour se logout
    if (localStorage.getItem("userlogged") != null) {
        $(".text-welcome").empty();
        $(".text-welcome").append("Bienvenue " + localStorage.getItem("userlogged"));
        $(".login").hide();
        $(".signin").hide();
        $(".logout").show();
        $(".addplus").show();
    } else {
        $(".login").show();
        $(".signin").show();
        $(".logout").hide();
        $(".addplus").hide();
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
    // on charge la liste des billets: soit depuis le fichier json
    //soit de plutot depuis le localstorage s'il existe

    $.getJSON('billets.json', function (artlist) {
        if (localStorage.getItem("storedartlist") == null) {
            localStorage.setItem("storedartlist", JSON.stringify(artlist));
        } else {
            var localartlist = localStorage.getItem("storedartlist");
        }
        localartlist = JSON.parse(localartlist);
        $('.artlist').empty;
        for (var i = 0; i < localartlist.billets.length; i++) {
            $('.artlist').append(`<div class="billet" id="art${i}">
    <h3>${localartlist.billets[i].title}</h3>
    ${localartlist.billets[i].body}
    <footer class="text-right">
        ${localartlist.billets[i].author} - ${localartlist.billets[i].date}
    </footer>
</div>`);
        }

    });

});
