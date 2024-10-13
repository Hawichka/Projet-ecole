<<<<<<< HEAD
var formulaire = document.getElementById('envoyer');
var password = document.getElementById('password');

=======
let formulaire = document.getElementById('formulaire');



formulaire.addEventListener('submit', function(e){
    let email = document.getElementById('email');
    let password = document.getElementById('password');

    if (email.value ==""){
        let erreur = document.getElementById('erreur');
        erreur.innerHTML = "Email incorrect";
        erreur.style.color = 'red';
        e.preventDefault();
    }
    if(password.value==""){
        let mdp = document.getElementById('mdp');
        mdp.innerHTML = "mot de passe incorrect";
        mdp.style.color = 'red'
        e.preventDefault();
    }
})
>>>>>>> c691b59 (j'ai apportée des modification au niveau du script pour la validation du formulaire et ajouter un fichier page2)
