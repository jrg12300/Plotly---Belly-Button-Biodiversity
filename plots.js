function init() {
    var selector = d3.select("#selDataset");
  
    d3.json("samples.json").then((data) => {
      console.log(data);
      var sampleNames = data.names;
      sampleNames.forEach((sample) => {
        selector
          .append("option")
          .text(sample)
          .property("value", sample);
      });
  })}
  
  init();





  function optionChanged(newSample) {
    console.log(newSample);
    buildMetadata(newSample);
    buildCharts(newSample);
  }

  function buildMetadata(sample) {
    d3.json("samples.json").then((data) => {
      var metadata = data.metadata;
      var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
      var result = resultArray[0];
      var PANEL = d3.select("#sample-metadata");
  
      PANEL.html("");
      //PANEL.append("h6").text('ID: '.concat(result.id));
      //PANEL.append("h6").text('Ethnicity: '.concat(result.ethnicity));
      //PANEL.append("h6").text(result);
      //console.log(Object.getOwnPropertyNames(result)[0]);
      //console.log(result[Object.getOwnPropertyNames(result)[0]]);

      var i;
      var label;
      var prop;
      
      for (i = 0; i < Object.getOwnPropertyNames(result).length; i++)
      {
        label = Object.getOwnPropertyNames(result)[i]
        prop = result[Object.getOwnPropertyNames(result)[i]]
        PANEL.append("h6").text(label.concat(": ",prop));
        
      }
      

      //PANEL.append("h6").text(result.gender);
      //PANEL.append("h6").text(result.age);
      //PANEL.append("h6").text(result.location);
      //PANEL.append("h6").text(result.bbtype);
      //PANEL.append("h6").text(result.wfreq);
    });
  }