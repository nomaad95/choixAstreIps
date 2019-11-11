
/**
 * Test de la première hypothèse : Un étudiant utilisant Linux et Arduino et s'intéressant à Ensim'Elec a un profil astre
 * 
 * @param {Map} student Un dictionnaire contenant les valeurs associées à l'étudiant
 * @returns {number} Le score obtenu par l'étudiant entre -5 (profil astre) et 5 profil IPS
 */
function hypothesis1(student){
    var score =0
    var linuxWeight=Number(document.getElementById("H1Linux").value); 
    var arduinoWeight=Number(document.getElementById("H1Arduino").value); 
    var elecWeight=Number(document.getElementById("H1Elec").value); 
    if(student.get("OS").match("Linux"))
        score+= linuxWeight;
    if(student.get("device").match("Arduino"))
        score+= arduinoWeight;
    if(student.get("asso").match("ENSIM'elec"))
        score+= elecWeight;
    //alert(score);
    return score;
}

/**
 * Test de la deuxième hypothèse : Un étudiant ayant déjà fait du C et de l'arduino mais venant de prépa n'a pas un profil astre
 * 
 * @param {Map} student Un dictionnaire contenant les valeurs associées à l'étudiant
 * @returns {number} Le score obtenu par l'étudiant entre -5 (profil astre) et 5 profil IPS
 */
function hypothesis2(student){
    var score =0
    var h2Weight=Number(document.getElementById("H2Weight").value); 
    if(student.get("device").match("Arduino") && student.get("langage").match("C")&& student.get("origine").match("Prépa Intégrée"));
        score+= h2Weight;
    //alert(score);
    return score;
}

/**
 * Test de la troisième hypothèse : Un étudiant venant de BL aimant les matières littéraires pratiquant une activité artistique et n'aimant pas les maths et la physique a un profil IPS
 * 
 * @param {Map} student Un dictionnaire contenant les valeurs associées à l'étudiant
 * @returns {number} Le score obtenu par l'étudiant entre -5 (profil astre) et 5 profil IPS
 */
function hypothesis3(student){
    var score =0
    var blWeight=Number(document.getElementById("H3BL").value); 
    var matiere=student.get("matiere");
    var activite=student.get("activite");
    var litteraireWeight=Number(document.getElementById("H3Litteraire").value); 
    var activiteWeight=Number(document.getElementById("H3Activite").value); 
    var mathphyWeight=Number(document.getElementById("H3MathPhy").value); 
    if(student.get("origine").match("CPGE BL"))
        score+= blWeight;
    if(matiere.includes("Philosophie" )|| matiere.includes("Anglais" ) || matiere.includes("Français" ) || matiere.includes("Allemand" )|| matiere.includes("latin" ) || matiere.includes("Histoire-Géographie" ) )
        score+= litteraireWeight;
    if(activite.includes("Dessin" )|| activite.includes("Jouer de la musique" ) || activite.includes("Lecture" ) )
        score+= activiteWeight;
    //alert(score);
    return score;
}