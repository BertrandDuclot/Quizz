    /***** Questions JSON *****/

    var jsonQuestions = [
	{
		question: "JSON est t-il un langage de programmation ?",
		answers: {
			a: 'Vrai',
			b: 'Faux',	
		},
		correctAnswer: 'a',
		remarque: "JSON est un format de données textuel dérivé de la notation des objets du langage JavaScript.",
	},
	{
		question: "Javascript permet t-il de manipuler le DOM ?",
		answers: {
			a: 'Vrai',
			b: 'Faux',
		},
		correctAnswer: 'a',
		remarque: "Il s’attache au nœud du DOM et peut agir en lecture et écriture."
	},
    {
        question: "Javascript est-il un langage orienté objet ?",
		answers: {
			a: 'Vrai',
			b: 'Faux',
		},
		correctAnswer: 'a',
		remarque: "Il permet de créer des classes qui seront instanciées en objets." 
    },
    {
        question: "JavaScript permet-il de faire des sauvegardes des données sur le disque dur client ?",
		answers: {
			a: 'Vrai',
			b: 'Faux',
		},
		correctAnswer: 'a',
		remarque: "La fonction  localstorage permet d’ecrire les données de façon persistante sur le disque dur."
    },
    {
        question: "Depuis Javascript ES6, pour la bonne pratique en matière de la déclaration des variables, doit-on continuer à utiliser var ?",
		answers: {
			a: 'Vrai',
			b: 'Faux',
		},
		correctAnswer: 'b',
		remarque: "Il faut utiliser let ou const pour mieux controler la portée des variables." 
    }
];


/***** Début du Quizz ******/

var resultatsContainer = document.getElementById('resultats');
var soumettreBouton = document.getElementById('soumettre');
var quizzContainer = document.getElementById('quizz');

// On générère le quizz et ses questions
Quizz(jsonQuestions, quizzContainer, resultatsContainer, soumettreBouton);

function Quizz(questions, quizzContainer, resultatsContainer, soumettreBouton){
	function Questions(questions, quizzContainer){
		var reponses;
        var resultat = [];

		for(var i=0; i<questions.length; i++){
			reponses = [];

			for(letter in questions[i].answers){
				reponses.push(
					'<input type="radio" name="question'+ i + '" value="'+letter+'" + id= "'+ i + ': ' + questions[i].answers[letter] +'">' + '<label class="button" for= "'+ i + ': ' + questions[i].answers[letter] +'" >' + letter + ': ' + questions[i].answers[letter] + '</label>'
				);
			}
			resultat.push(
				'<div class="question">' + questions[i].question + '</div>' + '<p class="remarques">'+questions[i].remarque+'</p>' + '<div class="answers">' + reponses.join('') + '</div>'	
			);
		}

        // Ajout du résultat à la page
        quizzContainer.innerHTML = resultat.join('');
	}

    // Comparaison des résultats
	function montrerResultats(questions, quizzContainer, resultatsContainer){
		var reponsesContainers = quizzContainer.querySelectorAll('.answers');
		var reponsesUtilisateur = '';
		var numCorrect = 0;
		
		for(var i=0; i<questions.length; i++){
			reponsesUtilisateur = (reponsesContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
			
			if(reponsesUtilisateur===questions[i].correctAnswer){
				numCorrect++;
				reponsesContainers[i].style.color = 'lightgreen';
			}
			else{
				reponsesContainers[i].style.color = 'red';
			}
		}

		// Nombre total de bonnes réponses
		resultatsContainer.innerHTML = 'SCORE : ' + numCorrect + ' sur ' + questions.length;
	}

	Questions(questions, quizzContainer);
	
	// Bouton "soumettre"
	soumettreBouton.onclick = function(){
		montrerResultats(questions, quizzContainer, resultatsContainer);
		var e = document.querySelectorAll("p");
		
		for(i=0 ; i < questions.length ; i++){
			e[i].style.visibility = 'visible';
		}
	}
}

