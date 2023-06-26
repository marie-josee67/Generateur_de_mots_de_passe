/* Fond d'écran */
var colors = new Array(
    [62,35,255],
    [60,255,60],
    [255,35,98],
    [45,175,230],
    [255,0,255],
    [255,128,0]);
  
  var step = 0;
  //color table indices for: 
  // current color left
  // next color left
  // current color right
  // next color right
  var colorIndices = [0,1,2,3];
  
  //transition speed
  var gradientSpeed = 0.002;
  
  function updateGradient()
  {
  var c0_0 = colors[colorIndices[0]];
  var c0_1 = colors[colorIndices[1]];
  var c1_0 = colors[colorIndices[2]];
  var c1_1 = colors[colorIndices[3]];
  
  var istep = 1 - step;
  var r1 = Math.round(istep * c0_0[0] + step * c0_1[0]);
  var g1 = Math.round(istep * c0_0[1] + step * c0_1[1]);
  var b1 = Math.round(istep * c0_0[2] + step * c0_1[2]);
  var color1 = "#"+((r1 << 16) | (g1 << 8) | b1).toString(16);
  
  var r2 = Math.round(istep * c1_0[0] + step * c1_1[0]);
  var g2 = Math.round(istep * c1_0[1] + step * c1_1[1]);
  var b2 = Math.round(istep * c1_0[2] + step * c1_1[2]);
  var color2 = "#"+((r2 << 16) | (g2 << 8) | b2).toString(16);
  
   $('#gradient').css({
     background: "-webkit-gradient(linear, left top, right top, from("+color1+"), to("+color2+"))"}).css({
      background: "-moz-linear-gradient(left, "+color1+" 0%, "+color2+" 100%)"});
    
    step += gradientSpeed;
    if ( step >= 1 )
    {
      step %= 1;
      colorIndices[0] = colorIndices[1];
      colorIndices[2] = colorIndices[3];
      
      //pick two new target color indices
      //do not pick the same as the current one
      colorIndices[1] = ( colorIndices[1] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
      colorIndices[3] = ( colorIndices[3] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
      
    }
  }
  
  setInterval(updateGradient,10);


/* Site web */
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