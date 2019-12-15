var map;
var labelMap;
var datasetId = [];
var datasetScore = [];
for(var key in map){
	datasetId.push(key);
	dataSetScore.push(map[key]);
}
var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
// The type of chart we want to create
type: 'line',
// The data for our dataset
data: {
labels: ['étudiant1', 'étudiant2', 'étudiant3', 'étudiant4', 'étudiant5', 'étudiant6'],
datasets: [{
	label: 'Résultats',
	backgroundColor: 'blue',
	borderColor: 'rgb(255, 99, 132)',
	data: [5, 10, 5, 2, 20, 30, 45]
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
