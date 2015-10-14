function initialize()
{

}

function answer()
{
	alert( 'You answered the question!' );
}

angular.module('quizApp', []).controller('QuizController', function()
{
	var Quiz = this;

	Quiz.questions = [{id: 1, questionText: "Can you hear me?", choices: [{id: 1, choiceText:"Yes"},{id: 2, choiceText:"No"}], correctAnswerIds: [1]}];

	Quiz.processAnswer = function()
	{
		//var text = "";
		var choicesContainer = document.getElementById('quizData');
		var choiceArticles = choicesContainer.getElementsByTagName('article');
		var choiceCheckboxes = [];
		var userAnswers = [];
		for( var i = 0; i < choiceArticles.length; i++ )
		{
			userAnswers.length = 0;
			console.log( choiceArticles[i].id );
			var choiceDivs = choiceArticles[i].getElementsByTagName('div');
			for( var k = 0; k < choiceDivs.length; k++ )
			{
				choiceCheckboxes = choiceDivs[k].getElementsByTagName('input');
				for( var j = 0; j < choiceCheckboxes.length; j++ )
				{
					//text += choiceCheckboxes[j].id + " " + choiceCheckboxes[j].type + " " + choiceCheckboxes[j].checked + "\n";
					if( choiceCheckboxes[j].type === "checkbox" && choiceCheckboxes[j].checked === true)
					{
						//alert( "Choice # " + choiceCheckboxes[j].id + " of question " + choiceCheckboxes[j].parentElement.id + " is checked." );
						userAnswers.push( parseInt(choiceCheckboxes[j].id) );
						console.log( "Pushing: " + parseInt(choiceCheckboxes[j].id) );
					}
				}
			}
			var question;
			console.log( "Questions: " + Quiz.questions.length );
			for( question in Quiz.questions )
			{
				console.log( "Question: " + question.id );
				if( parseInt(choiceDivs[i].id) === parseInt(question.id) )
				{
					if( userAnswers.equals(question.correctAnswerIds) )
					{
						alert( "Correct!" );
					}
					else
					{
						alert( "Wrong" );
					}
				}
			}
		}
		//alert( text );
	}
});

window.onload = initialize;