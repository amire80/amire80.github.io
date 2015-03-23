//Adjust metricName and options:
google.load('visualization', '1', {packages: ['corechart']});
google.setOnLoadCallback(function(){
	var metricName = "translators";
	var options = {
	    width: 1200,
	    height: 563,
	    hAxis: {
			title: 'Time'
			},
		vAxis: {
			title: 'Translators'
		}
    };
  $.getJSON(metricName + '.json', function(json) {
    var data = new google.visualization.DataTable(json);
	var chart = new google.visualization.LineChart(document.getElementById(metricName));
    chart.draw(data, options);

  });

});
