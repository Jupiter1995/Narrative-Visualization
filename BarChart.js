// create covid data_set
var data2020 = [
    {group: "US", value: 0.015, color: 'red'},
    {group: "Russia", value: 0.0059, color: '#9f9f9f'},
    {group: "United Kingdom", value: 0.0075, color: '#717171'},
    {group: "France", value: 0.0090, color: '#3a3a3a'},
    {group: "China", value: 0.000061, color: '#c7c7c7'}
    
 ];
 
 var data2021 = [
     {group: "US", value: 0.11, color: 'red'},
     {group: "Russia", value: 0.042, color: '#9f9f9f'},
     {group: "United Kingdom", value: 0.092, color: '#3a3a3a'},
     {group: "France", value: 0.087, color: '#717171'},
     {group: "China", value: 0.000081, color: '#c7c7c7'}
 ];

 var data2022 = [
     {group: "US", value: 0.23, color: '#717171'},
     {group: "Russia", value: 0.11, color: '#9f9f9f'},
     {group: "United Kingdom", value: 0.29, color: '#3a3a3a'},
     {group: "France", value: 0.35, color: 'red'},
     {group: "China", value: 0.00079, color: '#c7c7c7'}
 ];
 
 // set the dimensions and margins of the graph
 var margin = {top: 50, right: 150, bottom: 70, left: 200
 },
     width = 800 - margin.left - margin.right,
     height = 600 - margin.top - margin.bottom;
 
 // append the svg object to the body of the page
 var svg = d3.select("#covidviz")
             .append("svg")
             .attr("width", width + margin.left + margin.right)
             .attr("height", height + margin.top + margin.bottom)
             .append("g")
             .attr("transform",
                     "translate(" + margin.left + "," + margin.top + ")");
 
 // X axis
 var x = d3.scaleBand()
   .range([ 0, width ])
   .domain(data2020.map(function(d) { return d.group; }))
   .padding(0.2);
 svg.append("g")
   .attr("transform", "translate(0," + height + ")")
   .call(d3.axisBottom(x))
 
 // Add Y axis
 var y = d3.scaleLinear()
   .domain([0, 0.35])
   .range([ height, 0]);
 svg.append("g")
   .attr("class", "myYaxis")
   .call(d3.axisLeft(y));

 // Axis labels
 svg.append('text')
     .attr('class', 'x label')
     .attr("text-anchor", "end")
     .attr("x", width + 40)
     .attr("y", height + 50)
     .text("Five permanent members of The Security Council in the United Nations");

 svg.append('text')
     .attr('class', 'y label')
     .attr("text-anchor", "end")
     .attr('x', -50)
     .attr("y", -70)
     .attr("dy", ".10em")
     .attr("transform", "rotate(-90)")
     .text("Avg. Confirmed COVID Cases per Population");

 // adding legend to the chart
 var keys = [
     "Infection - Highest",
     "Infection - High",
     "Infection - Medium",
     "Infection - Mild",
     "Infection - Low"
 ];

 var color = d3.scaleOrdinal()
             .domain(keys)
             .range(['red', '#3a3a3a', '#717171', "#9f9f9f", "#c7c7c7"]);

 // Add one dot in the legend for each name.
 svg.selectAll("mydots")
 .data(keys)
 .enter()
 .append("circle")
     .attr("cx", 15)
     .attr("cy", function(d,i){ return -5+i*25}) // 100 is where the first dot appears. 25 is the distance between dots
     .attr("r", 7)
     .style("fill", function(d){ return color(d)})

 // Add one dot in the legend for each name.
 svg.selectAll("mylabels")
 .data(keys)
 .enter()
 .append("text")
     .attr("x", 30)
     .attr("y", function(d,i){ return 1+ i*25}) // 100 is where the first dot appears. 25 is the distance between dots
     .style("fill", function(d){ return color(d)})
     .text(function(d){ return d})
     .attr("text-anchor", "bottom")
     .style("alignment-baseline", "right");

// Annotation
// const type = d3.annotationCalloutCircle;

// const annotations = [
//    {
//      note: { label: "Country with Lowest Infection Rate" },
//      x: 400,
//      y: 475,
//      dy: -80,
//      dx: 60,
//      subject: { radius: 30, radiusPadding: 5 },
//    },
//  ];
//  const makeAnnotations = d3.annotation()
//  .type(type)
//    .annotations(annotations);

// const annotations2 = [
// {
//     note: { label: "Highest Infected rate highlighted with red" },
//     x: 130,
//     y: -4,
//     dy: -50,
//     dx: 60,
//     subject: { radius: 30, radiusPadding: 5 },
// },
// ];
// const makeAnnotations2 = d3.annotation()
// .type(type)
// .annotations(annotations2);

// Annotation with arrow
const type2 = d3.annotationCustomType(
  d3.annotationCallout, 
  {"className":"custom",
    "connector":{"end":"arrow"},
    "note":{"lineType":"horizontal"}});

const annotations_lowest = [{
  note: {
    label: "Lowest Infection Rate All Time",
    bgPadding: {"top":475,"left":400,"right":10,"bottom":10},
    title: "China"
  },
  //can use x, y directly instead of data
  color: ['steelblue'],
  x: 400,
  y: 475,
  dy: -80,
  dx: 30
}];

const annotations_highest= [{
  note: {
    label: "Highest Infection Rate except 2022",
    bgPadding: {"top":80,"left":80,"right":10,"bottom":100},
    title: "US"
  },
  //can use x, y directly instead of data
  color: ['steelblue'],
  x: 55,
  y: 470,
  dy: -250,
  dx: 30
}];

const makeAnnotations_lowest = d3.annotation()
.type(type2)
.annotations(annotations_lowest);

const makeAnnotations_highest = d3.annotation()
.type(type2)
.annotations(annotations_highest);


 // A function that create / update the plot for a given variable:
 function update(data) {
 
   var u = svg.selectAll("rect")
     .data(data)
 
   u
     .enter()
     .append("rect")
     .merge(u)
     .transition()
     .duration(1000)
       .style("fill", function(d) {return d.color;})
       .attr("x", function(d) { return x(d.group); })
       .attr("y", function(d) { return y(d.value); })
       .attr("width", x.bandwidth())
       .attr("height", function(d) { return height - y(d.value); })
       .attr("fill", "#69b3a2")
    
 };
 
 // Initialize the plot with the first dataset
 update(data2020);

  
  // Add annotation to the chart

  // svg
  //   .append("g")
  //   .call(makeAnnotations);
  
svg
.append("g")
.call(makeAnnotations_lowest);

svg
.append("g")
.call(makeAnnotations_highest);
  
