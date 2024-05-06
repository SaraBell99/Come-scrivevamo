function openCity(evt, cityName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}



// Callback that creates and populates a data table,
// instantiates the pie chart, passes in the data and
// draws it.
function drawChart() {

  // Create the data table.
   var data = new google.visualization.DataTable();
   data.addColumn('string', 'Topping');
   data.addColumn('number', 'Slices');
   data.addRows([
   ['Maschi', 45],
   ['Femmine', 67],
  ]);

 // Set chart options
 var options = {'title':'Il genere',
                'width':400,
                'height':300,
                'titleTextStyle': {fontSize: 20},
                'legend': {textStyle: {fontSize: 13}}
               };

  // Instantiate and draw our chart, passing in some options.
  var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
  chart.draw(data, options);
      }


var downloadLink = document.getElementById('downloadLink');

// Ascolta l'evento 'click' sull'elemento di ancoraggio
downloadLink.addEventListener('click', function(event) {
    // Impedisce il comportamento predefinito del link (aprire l'URL specificato)
    event.preventDefault();
    
    // URL del file da scaricare
    var fileUrl = 'download/Metadati_schema_Zanichelli.xlsx'; // Sostituisci con l'URL effettivo del file

    // Crea un oggetto XMLHttpRequest
    var xhr = new XMLHttpRequest();
    
    // Imposta il metodo e l'URL della richiesta
    xhr.open('GET', fileUrl, true);
    
    // Imposta il tipo di risposta come 'blob' (Binary Large Object)
    xhr.responseType = 'blob';
    
    // Quando la richiesta è completata
    xhr.onload = function() {
        // Controlla se la richiesta ha avuto successo (status 200) 
        if (this.status === 200) {
            // Crea un oggetto URL dal blob restituito dalla richiesta
            var blob = new Blob([this.response], { type: 'application/octet-stream' });
            var url = window.URL.createObjectURL(blob);
            
            // Imposta l'attributo 'href' dell'elemento di ancoraggio per puntare all'URL del blob
            downloadLink.href = url;
            
            // Forza il download del file facendo clic sul link
            downloadLink.click();
            
            // Libera la risorsa URL creata
            window.URL.revokeObjectURL(url);
        }
    };
    
    // Invia la richiesta
    xhr.send();
});

