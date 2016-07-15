app.directive('quiz', function(quizFactory) {
	return {
		restrict: 'AE',
		scope: {},
		templateUrl: 'templates/questionaire.html',
		link: function(scope, elem, attrs) {
			scope.start = function() {
				scope.id = 0;
				scope.quizOver = false;
				scope.inProgress = true;
				scope.getQuestion();
			};
 
			scope.reset = function() {
				scope.inProgress = false;
				scope.score = 0;
                                scope.quizOver = false;
			}
 
			scope.getQuestion = function() {
				var q = quizFactory.getQuestion(scope.id);
				if(q) {
					scope.question = q.question;
					scope.options = q.options;
					scope.answer = q.answer;
					scope.answerMode = true;
				} else {
					scope.quizOver = true;
				}
			};
                        
                        scope.$watch(
                                "quizOver",
                                function handleQuizOver(newValue, oldValue) {
                                    $('#questionaire-pie').highcharts({
                                            chart: {
                                                    plotBackgroundColor: null,
                                                    plotBorderWidth: null,
                                                    plotShadow: false
                                            },
                                            tooltip: {
                                                    pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
                                            },
                                            plotOptions: {
                                                    pie: {
                                                            allowPointSelect: true,
                                                            cursor: 'pointer',
                                                            dataLabels: {
                                                                    enabled: true,
                                                                    format: '<b>{point.name}</b>: {point.percentage:.1f} %'
                                                            },
                                                            showInLegend: true
                                                    }
                                            },
                                            series: [{
                                                            type: 'pie',
                                                            name: 'Portfolio Share ($)',
                                                            colorByPoint: true,
                                                            data: [
                                                                    ['Liquidity', 12897235.00],
                                                                    ['Bonds', 500502.02],
                                                                    ['Equities', 7546422.13],
                                                                    ['Alt. Investments', 80302.06],
                                                                    ['Real Estate', 12057500.00],
                                                                    ['Others', 35043.00]
                                                            ]
                                                    }],
                                            title: {
                                                    text: null
                                            }, credits: {
                                                    enabled: false
                                            },
                                            loading: false
                                    });
                                }                          
                        );
 
			scope.checkAnswer = function() {
				if(!$('input[name=answer]:checked').length) return;
 
				var ans = $('input[name=answer]:checked').val();
 
				scope.score++;
 
				scope.answerMode = false;
                                
                                scope.nextQuestion();
			};
 
			scope.nextQuestion = function() {
				scope.id++;
				scope.getQuestion();
			}
 
			scope.reset();
		}
	}
});

app.factory('quizFactory', function($timeout) {
    var questions = [
		{
			question: "What is your current age?",
			options: ["18 - 25", "25 - 50", "50 - 65", "Above 65"],
			answer: 0
		},
		{
			question: "What is your annual income?",
			options: ["Less than $50000", "$50001 - $100000", "$100001 - $500000", " Above $500000"],
			answer: 0
		},
		{
			question: "What is your preferred investment timeline?",
			options: ["Less than 1 year", "1 - 2 years", "2 - 5 years", "Above 5 years"],
			answer: 0
		},
		{
			question: "What is your main aim in investing?",
			options: ["Preservation of wealth", "Aggressive growth", "Steady stream of income", "No real preference"],
			answer: 0
		}
	];
 
	return {
		getQuestion: function(id) {
			if(id < questions.length) {
				return questions[id];
			} else {
				return false;
			}
		}
	};
});