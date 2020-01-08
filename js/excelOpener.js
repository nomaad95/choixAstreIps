var excelSheet = new Map();

function handleDrop(e) {
    console.log("Opening file... ",e);
    e.stopPropagation(); e.preventDefault();
    if (e.type == "change") 
    var files = e.target.files, f = files[0];
    else var files = e.dataTransfer.files, f = files[0];
    var reader = new FileReader();
    reader.onload = function(e) {
        var data = new Uint8Array(e.target.result);
        var workbook = XLSX.read(data, {type: 'array'});

        var worksheet = workbook.Sheets.Sheet1;

        var f = "F".charCodeAt(0);
        var z = "Z".charCodeAt(0);
        var d = "D".charCodeAt(0);

        for (var l = 1; l < 30; l++){
            var line = new Map();
            for (var c = f; c < z + 5; c++){
                //console.log(String.fromCharCode(c));
                var col;
                if (c > z) col = "A" + String.fromCharCode(c-26);
                else col = String.fromCharCode(c);
                line.set(col,worksheet[col+l].v)
            }
            excelSheet.set(l,line);
        }
        console.log(excelSheet);

        // Mettre code utilisant Excel ici

    };
    reader.readAsArrayBuffer(f);
  }
  document.getElementById('dropZone').addEventListener('drop', handleDrop, false);
  document.getElementById('dropZone').addEventListener('change', handleDrop, false);

var analysisResult= new Map();
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
    if(student.get("Quel OS préfères-tu ?").match("Linux"))
        score+= linuxWeight;
    if(student.get("Raspberry Pi ou Arduino ?").match("Arduino"))
        score+= arduinoWeight;
    if(student.get("Quelles associations t'intéressent ?").match("ENSIM'elec"))
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
    if(student.get("Raspberry Pi ou Arduino ?").match("Arduino") && student.get("Quel est le premier langage de programmation que tu as appris en dehors des cours ?").match("C")&& student.get("Quelle est ta formation précédant l'ENSIM ?").match("Prépa Intégrée"));
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
    var matiere=student.get("Quelles étaient tes matières préférées au lycée ?");
    var activite=student.get("Quelles sont tes activités préférées ?");
    var litteraireWeight=Number(document.getElementById("H3Litteraire").value);
    var activiteWeight=Number(document.getElementById("H3Activite").value);
    var mathphyWeight=Number(document.getElementById("H3MathPhy").value);
    if(student.get("Quelle est ta formation précédant l'ENSIM ?").match("CPGE BL"))
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
    var logiciel=student.get("Quel bac possèdes-tu ?");
    var siteWeb=student.get("Quels sites fréquentes-tu régulièrement ?");
    var macOSWeight=Number(document.getElementById("H4MacOS").value);
    var softwareWeight=Number(document.getElementById("H4Logiciel").value);
    var webWeight=Number(document.getElementById("H4SiteWeb").value);
    if(student.get("Quel OS préfères-tu ?").match("MacOS"))
        score+= macOSWeight;
    if(logiciel.includes("Adobe" )|| logiciel.includes("Audacity" ) || logiciel.includes("Unity" ) ||  logiciel.includes("Gimp" ) || logiciel.includes("Paint" ) )
        score+= softwareWeight;
    if(siteWeb.includes("Instagram" )|| siteWeb.includes("Pinterest" ) || siteWeb.includes("Tumblr" ) )
        score+= webWeight;
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
    if(student.get("Raspberry Pi ou Arduino ?").match("Aucun") || student.get("Raspberry Pi ou Arduino ?").match("Raspberry Pi"))
        score+= deviceWeight;
    if(student.get("Quel est le premier langage de programmation que tu as appris en dehors des cours ?").match("php")|| student.get("Quel est le premier langage de programmation que tu as appris en dehors des cours ?").match("javascript")||student.get("Quel est le premier langage de programmation que tu as appris en dehors des cours ?").match("HTML") )
        score+= langageWeight;
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
    var matiere=student.get("Quelles étaient tes matières préférées au lycée ?");
    var bacWeight=Number(document.getElementById("H6bacS").value);
    var prepaWeight=Number(document.getElementById("H6prepa").value);
    var mathphyWeight=Number(document.getElementById("H6matiere").value);

    if(student.get("Quel bac possèdes-tu ?").match("S"))
        score+= bacWeight;
    if(student.get("Quelle est ta formation précédant l'ENSIM ?").match("CPGE MP/PT/PC/ SI"))
        score+= prepaWeight;
    if(matiere.includes("Maths")|| matiere.includes("Physique-Chimie"))
        score+= mathphyWeight;
    return score;
}
/**
 * Calcul score global
 *
 * @param {Map} student
 * @returns Le score de l'étudiant entre -5 (profil ASTRE) et 5 profil IPS
 */
function hypothesisGlobal(student){
    var score =0
    var h1Weight=document.getElementById("Hyp1").value;
    var h2Weight=document.getElementById("Hyp2").value;
    var h3Weight=document.getElementById("Hyp3").value;
    var h4Weight=document.getElementById("Hyp4").value;
    var h5Weight=document.getElementById("Hyp5").value;
    var h6Weight=document.getElementById("Hyp6").value;
    //console.log("Hyp 6 score : " +h6Weight);
    score= hypothesis1(student)*h1Weight-hypothesis2(student)*h2Weight+hypothesis3(student)*h3Weight+hypothesis4(student)*h4Weight+hypothesis5(student)*h5Weight+hypothesis6(student)*h6Weight;
    //console.log(score);
    return score;
}
/**
 * Transcription des données d'un étudiant
 *
 * @param {Map} student
 * @param {Map} label
 * @returns {Map}
 */
function transcript(student,label){
    //console.log(student);
    //console.log(label);
    var result = new Map;
    student.forEach( (answer,column)=> result.set(label.get(column),answer));
    console.log(result);
    return result;
}

/**
 * Analyse des résultats du questionnaires
 *
 * @param {Map} students Un dictionnaire contenant les résultats aux questionnaires
 */
function analysis(){
    //console.log(students);
    students = excelSheet;
    var label = students.get(1);
    students.delete(1);
    //console.log(students);
    console.log(label);
    students.forEach((student,key)=>
     analysisResult.set(transcript(student,label).get("Quel est ton numéro étudiant ?"),hypothesisGlobal(transcript(student,label)))
    )
    var map = analysisResult;
    var labelMap;
    var datasetId = [];
    var datasetScore = [];
    console.log(map)
    for (var [key, val] of map) {
        datasetId.push(key);
        datasetScore.push(val);
    }

    var ctx = document.getElementById('myChart').getContext('2d');
    var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'bar',
    // The data for our dataset
    data: {
    labels: datasetId,
    datasets: [{
        label: 'Résultats',
        backgroundColor: 'rgba(0, 38, 163,0.5)',
        borderColor: 'rgb(0,38,163)',
        data: datasetScore
        }]
    },
    // Configuration options go here
    options: {
        scales: {
            yAxes: [{
                ticks : {
                beginAtZero: true
                }
                }]
            }
        }
    });

    //console.log(analysisResult);
}
