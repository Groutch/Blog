$(document).ready(function () {
    $("#submit").on("click", addbillet);

    function addbillet() {
        // on récupère le titre de l'article
        var titleart = $("#titleart").val();
        //on récupère le contenu de l'artcle qu'on va devoir formater 
        //pour transformer les retour chariot en balise br par exemple 
        var textart = $('#textart').val();
        textart = textart.replace(/\r?\n/g, '<br />');
        
        // on construit l'objet contenant le tout pour insertion dans le json
        var date = new Date();
        var chardate = date.getDate()+"/"+date.getMonth()+"/"+date.getFullYear();
        var obj = {};
        obj["author"] = localStorage.getItem("userlogged");
        obj["date"] = chardate;
        obj["title"] = titleart;
        obj["body"] = textart;
        console.log(obj);

        $.getJSON('billets.json', function (artlist) {
            if (localStorage.getItem("storedartlist") == null) {
                localStorage.setItem("storedartlist", JSON.stringify(artlist));
            }
            var localartlist = localStorage.getItem("storedartlist");
            localartlist = JSON.parse(localartlist);
            localartlist.billets.push(obj);
            localStorage.setItem("storedartlist", JSON.stringify(localartlist));
            console.log(localartlist);
        });
        
    }
});
