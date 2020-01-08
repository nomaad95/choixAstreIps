var map;
var labelMap;
var datasetId = [];
var datasetScore = [];
for(var key in map){
	datasetId.push(key);
	datasetScore.push(map[key]);
}

var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
// The type of chart we want to create
type: 'line',
// The data for our dataset
data: {
labels: datasetId,
datasets: [{
	label: 'Résultats',
	backgroundColor: 'blue',
	borderColor: 'rgb(255, 99, 132)',
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
