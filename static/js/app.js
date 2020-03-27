// from data.js
var tableData = data;

//prime table body
var tableBody = d3.select("tbody");

//read in data into table and create table structures as needed
tableData.forEach(function(sightings) {
    var row = tableBody.append("tr");

    //use Object.entries to isolate value and write into row data.
    Object.entries(sightings).forEach(function([key, value]) {
      var cell = row.append("td");
      cell.text(value);
    });
  });

  //button to start filtering data based on input
  var button = d3.select("#filter-btn");
  button.on("click", function() {
  
      tableBody.html("");

      //get input data
      var inputBase = d3.select("#datetime");
      var input = inputBase.property("value");
      var filteredData = tableData.filter(sighting => sighting.datetime === input);
  
      //recreate table based on filter
      filteredData.forEach(filtered => {
      var row = tableBody.append("tr");
      Object.entries(filtered).forEach(function([key, value]) {
          var cell = row.append("td");
          cell.text(value);
      });
  });
});
