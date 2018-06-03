$(document).ready(function () {
    $("#password").on("keyup", checkpwd);
    $("form").on("submit", getInfos);
    $("#btndisp").on("click", displayUsers);

    function displayUsers() {
        $(".userlistholder").empty();
        var usrlist = localStorage.getItem("userlist");
        usrlist = usrlist.split(",");
        for (var i = 0; i < usrlist.length; i++) {
            var infolist = localStorage.getItem(usrlist[i]);
            $(".userlistholder").append(`<div>
                ${usrlist[i]}<br/>
                ${infolist}<br/>
            </div>`)
        }
    }

    function checkpwd() {
        var ans = $("input");
        console.log(ans[4].value + ": ");
    }

    function getInfos() {
        var answers = $("input");
        //index answers:       index result:
        //0:Nom                 0:Nom
        //1:Prenom              1:Prenom
        //2:mail                2:mail
        //3:login               3:login
        //4:mdp                 4:mdp
        //5:checkboxmale        5:checkbox
        //6:checkboxfemale      6:ville
        //7:ville               7:date
        //8:date                8:num
        //9:num                 9:website
        //10:website            10:color
        //11:color
        var result = [];
        for (var i = 0; i < (answers.length - 1); i++) {
            if (!(i == 5 || i == 6)) {
                result.push(answers[i].value);
            } else if (answers[i].checked) {
                result.push(answers[i].value);
            }
        }
        console.log(result);
        //on crée 2 local storage, 1 avec la liste des users
        //un 2eme avec les infos d'un utilisateur
        //Si la liste d'utilisateur est vide, on ajoute le login sans plus de ménagement
        if (localStorage.getItem("userlist") == null) {
            console.log("la liste est vide donc on a juste: " + result[3]);
            localStorage.setItem("userlist", result[3]);
            //La on remplit un deuxieme local storage qui aura pour nom le login pour pouvoir linker
            //les logins dans la liste avec leurs infos dans ces autres localstorage
            localStorage.setItem(result[3], result[0] + ',' + result[1] + ',' + result[2] + ',' + result[4] + ',' + result[5] + ',' + result[6] + ',' + result[7] + ',' + result[8] + ',' + result[9] + ',' + result[10]);
            alert("Utilisateur bien enregistré!");
        } else {
            //Sinon on va vérifier que le login ne se trouve pas déjà dans la liste
            var tabusers = [];
            var listeduser = localStorage.getItem("userlist");
            tabusers = listeduser.split(',');
            //s'il n'est pas dans la liste on peut le push (it to the limit) dans la liste!
            if (tabusers.indexOf(result[3]) == -1) {
                listeduser += "," + result[3];
                console.log("on a une liste deja remplie, on se retrouve donc avec: ");
                console.log(listeduser);
                localStorage.setItem("userlist", listeduser);
                //La on remplit un deuxieme local storage qui aura pour nom le login pour pouvoir linker
                //les logins dans la liste avec leurs infos dans ces autres localstorage
                localStorage.setItem(result[3], result[0] + ',' + result[1] + ',' + result[2] + ',' + result[4] + ',' + result[5] + ',' + result[6] + ',' + result[7] + ',' + result[8] + ',' + result[9] + ',' + result[10]);
                alert("Utilisateur bien enregistré!");
            }
            //S'il est présent, on met un message d'erreur et on retourne 
            //false pour ne pas avoir à intégrer les infos dans le localstorage
            else {
                console.log("Utilisateur déjà présent");
                alert("Utilisateur déjà présent");
                return false
            }
        }
    }
});
