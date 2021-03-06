async function init() {
    const data = await d3.csv("https://flunky.github.io/cars2017.csv");

    var svg = d3.select('svg'),
        margin = 50,
        width = svg.attr('width') - 2*margin
        height = svg.attr('height') - 2*margin;

    var g = svg.append('g')
        .attr('transform', 'translate('+margin+', '+margin+')');

    var yScale = d3.scaleLog().domain([10, 150]).range([height, 0]);
    var xScale = d3.scaleLog().domain([10, 150]).range([0, width]);

    svg.append('g')
    .attr('transform', 'translate('+ margin +', '+ margin +')')
    .call(
    d3.axisLeft(yScale)
        .tickValues([10,20,50,100])
        .tickFormat(d3.format("~s"))
    );

    svg.append('g')
    .attr('transform', 'translate('+ margin +', '+ (height + margin) +')')
    .call(
    d3.axisBottom(xScale)
        .tickValues([10,20,50,100])
        .tickFormat(d3.format("~s"))
    );

    g.selectAll('circle').data(data)
    .enter().append('circle')
    .attr("cx", function(d) { return xScale(d.AverageCityMPG); })
    .attr("cy", function(d) { return yScale(d.AverageHighwayMPG); })
    .attr('r', function(d) { return d.EngineCylinders - 2 + 4;}); 
    };