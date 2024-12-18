function checkQuiz() {
    var score = 0;
    var correctAnswers = "";
    var allCorrectAnswers = "";

    var correctAnswersList = [
        "1. Qui a peint la Mona Lisa ? </br>- Léonard de Vinci",
        "2. Quel est le principal matériau utilisé dans le dessin traditionnel ? </br>- Un crayon",
        "3. Quelle technique est utilisée pour peindre sur un mur ? </br>- Fresque",
        "4. Quel peintre est célèbre pour ses 'Nympheas' ? </br>- Claude Monet",
        "5. Quelle couleur est obtenue en mélangeant du bleu et du jaune ? </br>- Vert",
        "6. Qui a peint 'Starry Night' ? </br>- Vincent van Gogh",
        "7. Quel est le nom du style de peinture basé sur des formes géométriques ? </br>- Cubisme",
        "8. Quelle technique consiste à dessiner avec de l'encre ? </br>- Gravure",
        "9. Qui est l'artiste créateur de 'Guernica' ? </br>- Pablo Picasso",
        "10. Quel est le nom de l'outil utilisé pour estomper un dessin au crayon ? </br>- Tortillon"
    ];

  
    if (document.getElementById('q1b').checked) {
        score++;
        correctAnswers += "<li>1. Léonard de Vinci</li>";
    }
    if (document.getElementById('q2b').checked) {
        score++;
        correctAnswers += "<li>2. Un crayon</li>";
    }
    if (document.getElementById('q3b').checked) {
        score++;
        correctAnswers += "<li>3. Fresque</li>";
    }
    if (document.getElementById('q4a').checked) {
        score++;
        correctAnswers += "<li>4. Claude Monet</li>";
    }
    if (document.getElementById('q5c').checked) {
        score++;
        correctAnswers += "<li>5. Vert</li>";
    }
    if (document.getElementById('q6b').checked) {
        score++;
        correctAnswers += "<li>6. Vincent van Gogh</li>";
    }
    if (document.getElementById('q7c').checked) {
        score++;
        correctAnswers += "<li>7. Cubisme</li>";
    }
    if (document.getElementById('q8a').checked) {
        score++;
        correctAnswers += "<li>8. Gravure</li>";
    }
    if (document.getElementById('q9a').checked) {
        score++;
        correctAnswers += "<li>9. Pablo Picasso</li>";
    }
    if (document.getElementById('q10a').checked) {
        score++;
        correctAnswers += "<li>10. Tortillon</li>";
    }

    // Créer la liste des bonnes réponses totales
    for (var i = 0; i < correctAnswersList.length; i++) {
        allCorrectAnswers += "<li>" + correctAnswersList[i] + "</li>";
    }

    document.getElementById('result').innerHTML = "Votre score : " + score + "/10";

    document.getElementById('correctAnswers').innerHTML = "<h3>Votre réponses correctes:</h3><ul>" + correctAnswers + "</ul>";
    
    document.getElementById('allCorrectAnswers').innerHTML = "<h3>les Réponses correctes complètes :</h3><ul>" + allCorrectAnswers + "</ul>";
}
