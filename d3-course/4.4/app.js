// var data            =   [
//     [ 400, 200 ],
//     [ 210, 140 ],
//     [ 722, 300 ],
//     [ 70, 160 ],
//     [ 250, 50 ],
//     [ 110, 280 ],
//     [ 699, 225 ],
//     [ 90, 220 ]
// ];
var data = [
    { date: '07/01/2017', num: 20 },
    { date: '07/02/2017', num: 37 },
    { date: '07/03/2017', num: 25 },
    { date: '07/04/2017', num: 45 },
    { date: '07/05/2017', num: 23 },
    { date: '07/06/2017', num: 33 },
    { date: '07/07/2017', num: 49 },
    { date: '07/08/2017', num: 40 },
    { date: '07/09/2017', num: 36 },
    { date: '07/10/2017', num: 27 },
];

var time_parse = d3.timeParse('%m/%d/%Y');
var time_format = d3.timeFormat('%b %e');
var chart_width     =   1000;
var chart_height    =   400;
var padding = 50;

// Loop through each date
data.forEach(function(e, i) {
    data[i].date = time_parse(e.date);
})

// create svg element
var svg = d3.select('#chart')
    .append('svg')
    .attr('width', chart_width)
    .attr('height', chart_height);

// create scales
var xScale = d3.scaleTime()
    .domain([
        d3.min(data, function(d) {
            return d.date;
        }), 
        d3.max(data, function(d) {
            return d.date
        })
    ])
    .range([padding, chart_width - padding * 2]);

var yScale = d3.scaleLinear()
    .domain([
        0, 
        d3.max(data, function(d) {
            return d.num;
        })
    ])
    .range([chart_height - padding, padding]);

// var rScale = d3.scaleLinear()
//     .domain([0, d3.max(data, function(d) {
//         return d[1];
//     })])
//     .range([5, 30]);

var aScale = d3.scaleSqrt()
    .domain([0, d3.max(data, function(d) {
        return d.num;
    })])
    .range([0, 25]);

// create circles
svg.selectAll('circle')
    .data(data)
    .enter()
    .append('circle')
    .attr('cx', function(d) {
        return xScale(d.date);
    })
    .attr('cy', function(d) {
        return yScale(d.num);
    })
    .attr('r', function(d) {
        return aScale(d.num);
    })
    .attr('fill', '#d1ab0e');

    // create labels
    svg.selectAll('text')
        .data(data)
        .enter()
        .append('text')
        .text(function(d ){
            return time_format(d.date);
        })
        .attr('x', function(d) { return xScale(d.date); })
        .attr('y', function(d) { return yScale(d.num); })