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
    if(matiere.includes("Maths")|| matiere.includes("Physique-Chimie"))
        score+= mathphyWeight;
    //alert(score);
    return score;
}
/**
 * Test de la quatrième hypothèse : Un étudiant sous macOS ayant utilisé un logiciel de graphisme ou une application liée au graphisme à un profil IPS
 * 
 * @param {Map} student Un dictionnaire contenant les valeurs associées à l'étudiant
 * @returns {number} Le score obtenu par l'étudiant entre -5 (profil astre) et 5 profil IPS
 */
function hypothesis4(student){
    var score =0
    var logiciel=student.get("logiciel");
    var siteWeb=student.get("site web");
    var macOSWeight=Number(document.getElementById("H4MacOS").value); 
    var softwareWeight=Number(document.getElementById("H4Logiciel").value); 
    var webWeight=Number(document.getElementById("H4SiteWeb").value); 
    if(student.get("OS").match("MacOS"))
        score+= macOSWeight;
    if(logiciel.includes("Adobe" )|| logiciel.includes("Audacity" ) || logiciel.includes("Unity" ) ||  logiciel.includes("Gimp" ) || logiciel.includes("Paint" ) )
        score+= softwareWeight;
    if(siteWeb.includes("Instagram" )|| siteWeb.includes("Pinterest" ) || siteWeb.includes("Tumblr" ) )
        score+= webWeight;
    //alert(score);
    return score;
}
/**
 * Test de la cinquième hypothèse : Un étudiant utilisant un langae web et n'utilisant pas d'arduino à un profil IPS
 * 
 * @param {Map} student Un dictionnaire contenant les valeurs associées à l'étudiant
 * @returns {number} Le score obtenu par l'étudiant entre -5 (profil astre) et 5 profil IPS
 */
function hypothesis5(student){
    var score =0 
    var deviceWeight=Number(document.getElementById("H5Arduino").value); 
    var langageWeight=Number(document.getElementById("H5Langage").value); 
    if(student.get("device").match("Aucun") || student.get("device").match("Raspberry Pi"))
        score+= deviceWeight;
    if(student.get("langage").match("php")|| student.get("langage").match("javascript")||student.get("langage").match("HTML") )
        score+= langageWeight;
    //alert(score);
    return score;
}
/**
 * Test de la sixième hypothèse : Un étudiant avec un bac S venant de prépa CPGE MP/PT/PC/ SI aimant les math ou la physique a un profil ASTRE.
 * 
 * @param {Map} student Un dictionnaire contenant les valeurs associées à l'étudiant
 * @returns {number} Le score obtenu par l'étudiant entre -5 (profil astre) et 5 profil IPS
 */
function hypothesis6(student){
    var score =0 
    var bacWeight=Number(document.getElementById("H6bacS").value); 
    var prepaWeight=Number(document.getElementById("H6prepa").value); 
    var mathphyWeight=Number(document.getElementById("H6matiere").value);
    if(student.get("bac").match("S"))
        score+= bacWeight;
    if(student.get("origine").match("CPGE MP/PT/PC/ SI"))
        score+= prepaWeight;
    if(matiere.includes("Maths")|| matiere.includes("Physique-Chimie"))
        score+= mathphyWeight;
    //alert(score);
    return score;
}
/**
 * Calcul score global
 * 
 * @param {Map} student
 * @returns Le score de l'étudiant entre -5 (profil astre) et 5 profil IPS
 */
function hypothesisGlobal(student){
    var score =0 
    var h1Weight=Number(document.getElementById("H1").value); 
    var h2Weight=Number(document.getElementById("H2").value); 
    var h3Weight=Number(document.getElementById("H3").value);
    var h4Weight=Number(document.getElementById("H4").value); 
    var h5Weight=Number(document.getElementById("H5").value);
    var h6Weight=Number(document.getElementById("H6").value);
    score= (hypothesis1*h1Weight-hypothesis2*h2Weight+hypothesis3*h3Weight+hypothesis4*h4Weight+hypothesis5*h5Weight+hypothesis6*h6Weight)/5;
    return score;
}

/**
 * Recupération des informations
 * 
 * @param {Map} result Un dictionnaire contenant les résultats aux questionnaires
 * @returns {Array[number]}  Le score obtenu pour chaque étudiant entre -5 (profil astre) et 5 profil IPS
 */
function analyse(result){
    var label =result.get("0");
    alert (result);
    result.delete("0");
    alert(result);
    var analysis;
    result.forEach((key,value)=>analysis.add(hypothesisGlobal(value)))
    alert(analysis);
    return analysis;
}
