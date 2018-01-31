// Data
var data            =   [ 35, 6, 20, 47, 19 ];
var chart_width     =   600;
var chart_height    =   600;
var color = d3.scaleOrdinal( d3.schemeCategory10 );

// pie layout
var pie = d3.pie()

// arc
var outer_radius = chart_width / 2;
var inner_radius = 200;
var arc = d3.arc()
    .innerRadius(inner_radius)
    .outerRadius(outer_radius);

// create chart
var svg = d3.select('#chart')
    .append('svg')
    .attr('width', chart_width)
    .attr('height', chart_height);

// groups
var arcs = svg.selectAll('g.arc')
    .data(pie(data))
    .enter()
    .append('g')
    .attr('class', 'arc')
    .attr('transform', 'translate(' + outer_radius + ',' + chart_height / 2 + ')');

// arcs
arcs.append('path')
    .attr('fill', function(d, i){
        return color(i);
    })
    .attr('d', arc)

// labels
arcs.append('text')
    .attr('transform', function(d){
        return 'translate(' + arc.centroid(d) + ')';
    })
    .attr('text-anchor', 'text-middle')
    .text(function(d){
        return d.value;
    })