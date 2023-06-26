function generatePassword(){
    // Récupérer la longueur du mot de passe.
    let length = document.getElementById("length").value; // On à créer une variable qui s'appel : let lenght qui va contenir la valeur de notre Id lenght ( le champ ==>longueur du mot de passe).

    // définir les caractères à inclure dans le mot de passe.
    let characters = "azertyuiopqsdfghjklmwxcvbnAZERTYUIOPQSDFGHJKLMWXCVBN" // Order du clavier et non alphabétique. Ils sont maintenant inclue dans la variable que l'on à créer : let characters.

    // Création d'une condition pour s'avoir si le bouton est ou non cocher.
    if(document.getElementById("include-numbers").checked){
        characters += "0123456789";
        // += est une posibiliter d'ajout, si on avait mis que = alors l'alphabet serrait éffacer pour une nouvelle valeur siot ici les chiffres de 0 à 9.
    }

    // Création d'une condition pour les symboles.
    if(document.getElementById("include-symbols").checked){
        characters += "&~#'()-/^@%§:;,$£{](}-*";
    }

    // Initialisation de la variable qui stockera le mot de passe.
    let password =""; // on ne met rien dedans on l'initiale seulement.

    //génération du mot de passe.
    // temps qui i est inférieur à la longueur ex:6 on incrémente de + 1. Donc cela génèrera un mot de passe de 6 caractères
    for(let i = 0; i< length; i++){ 
        password += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    // Afficher le mot de passe générer.
    document.getElementById("password").textContent = password;
}