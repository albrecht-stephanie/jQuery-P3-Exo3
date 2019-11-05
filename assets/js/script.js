
function nb_aleatoire()//génère un nombre aléatoire
{
    var min=0;
    var max=100; 
    
    var nb = min + (max-min+1)*Math.random();//création d'une variable contenant un nombre aléatoire
     return Math.floor(nb);//arrondi le nombre à l'inférieur
}

$(function(){
    var secretNumber = nb_aleatoire();//récupère le nombre aléatoire
    var i = 0;// point de départ pour compter les coups
    $('#valid').click(function(){// récupère le champ au click du bouton
        var nbre_saisi = $('#number').val();
        i++;
//comparaison entre le nombre saisie et le nombre secret
    if(nbre_saisi < secretNumber){
        $('#indication').text('plus grand');
    }
    else if(nbre_saisi > secretNumber){
        $('#indication').text('plus petit');
    }
    else if(nbre_saisi == secretNumber){
        $('#indication').text('correct, vous avez trouvé en ' + i + ' coups !');//nombre de coup
    }
    else{
        $('#indication').text('entrer un nombre');// réponse si on a saisi autre chose qu'un nombre
    }
    });
});
    
