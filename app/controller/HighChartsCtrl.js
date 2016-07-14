app.controller('HighChartsCtrl', ['$scope', HighChartsCtrl]);
	
	function HighChartsCtrl ($scope) {
		$scope.greeting = "Hello! Welcome.";
		
                $scope.funct = $(document).ready(function() {
		var chart1 = new Highcharts.Chart({
			chart: {
				renderTo: 'kaixuan',
				type: 'bar'
			},
			title: {
				text: 'Fruit Consumption'
			},
			xAxis: {
				categories: ['Apples', 'Bananas', 'Oranges']
			},
			yAxis: {
				title: {
					text: 'Fruit eaten'
				}
			},
			series: [{
				name: 'Jane',
				data: [1, 0, 4]
			}, {
				name: 'John',
				data: [5, 7, 3]
			}]
		});
	});
        
        $('#portfolio-pie').highcharts({
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
						['Liquidity (incl. FX Products)', 12897235.00],
						['Bonds', 500502.02],
						['Equities', 7546422.13],
						['Alternative Investment', 80302.06],
						{
							name: 'Real Estate',
							y: 12057500.00,
							sliced: true,
							selected: true
						},
						['Precious Metals', 12500.00],
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
	};