function openPage(pageName, elmnt, color) {
  // Hide all elements with class="tabcontent" by default */
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Remove the background color of all tablinks/buttons
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
  }

  // Show the specific tab content
  document.getElementById(pageName).style.display = "block";

  // Add the specific color to the button used to open the tab content
  elmnt.style.backgroundColor = color;
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();


function drawChart() {
  // Create the data table for the first chart.
  var data1 = new google.visualization.DataTable();
  data1.addColumn('string', 'Topping');
  data1.addColumn('number', 'Slices');
  data1.addRows([
    ['Maschi', 950],
    ['Femmine', 594],
  ]);

  // Set options for the first chart.
  var options1 = {
    'title': 'Il genere degli scriventi',
    'width': 400,
    'height': 300,
    'titleTextStyle': { fontSize: 20 },
    'legend': { textStyle: { fontSize: 13 } }
  };

  // Instantiate and draw the first chart.
  var chart1 = new google.visualization.PieChart(document.getElementById('chart_div_gender'));
  chart1.draw(data1, options1);

  // Create the data table for the second chart.
  var data2 = new google.visualization.DataTable();
  data2.addColumn('string', 'Topping');
  data2.addColumn('number', 'Slices');
  data2.addRows([
    ['Liceo Scientifico', 1222],
    ['Liceo Classico', 943],
    ['Istituto Tecnico', 1429],
  ]);

  // Set options for the second chart.
  var options2 = {
    'title': 'Indirizzo di studi',
    'width': 400,
    'height': 300,
    'titleTextStyle': { fontSize: 20 },
    'legend': { textStyle: { fontSize: 13 } }
  };

  // Instantiate and draw the second chart.
  var chart2 = new google.visualization.PieChart(document.getElementById('chart_div_typeschool'));
  chart2.draw(data2, options2);


var data3 = new google.visualization.DataTable();
  data3.addColumn('string', 'Topping');
  data3.addColumn('number', 'Slices');
  data3.addRows([
    ['Nord', 1285],
    ['Centro', 1404],
    ['Sud', 309],
    ['Isole', 301],
  ]);

  // Set options for the third chart.
  var options3 = {
    'title': 'Sede scolastica*',
    'width': 400,
    'height': 300,
    'titleTextStyle': { fontSize: 20 },
    'legend': { textStyle: { fontSize: 13 } }
  };

  // Instantiate and draw the third chart.
  var chart3 = new google.visualization.PieChart(document.getElementById('chart_div_geographic'));
  chart3.draw(data3, options3);
}