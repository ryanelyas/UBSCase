app.controller('HighChartsCtrl', ['$scope', HighChartsCtrl]);
	
	function HighChartsCtrl ($scope) {
		$scope.greeting = "Hello! Welcome.";
		     
        $scope.funct2 = $(document).ready(function() {
		var chart2 = new Highcharts.Chart({
                        chart: {
                                renderTo: 'questionaire-pie',
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
						{
							name: 'Real Estate',
							y: 12057500.00,
							sliced: true,
							selected: true
						},
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
	});
    };