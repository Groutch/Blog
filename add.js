$(document).ready(function () {
    $("#submit").on("click", addbillet);
    function addbillet(){
        // on récupère le titre de l'article
        var titleart = $("#titleart").val();
        //on récupère le contenu de l'artcle qu'on va devoir formater 
        //pour transformer les retour chariot en balise br par exemple 
        var textart = $('#textart').val(); //value
        textart = textart.replace(/\r?\n/g, '<br />');
        var obj={};
        obj["author"]=localStorage.getItem("userlogged");
        obj["date"]="";
        obj["title"]=titleart;
        obj["body"]=textart;
        console.log(obj);
        
        $.getJSON('billets.json', function (artlist) {
            artlist.billets.push(obj);
            console.log(artlist);
            var jsontosend = JSON.stringify(artlist);
            console.log(jsontosend);
            //Le json est bien formé mais je ne peux pas l'enregistrer.
        });
        return false;
    }
});