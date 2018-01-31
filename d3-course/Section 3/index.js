d3.csv('./data.csv', function(error, data){
    if(error) return console.log(error);

    console.log('csv data', data);
    // generate(data.columns);
})

d3.json('./data.json', function(error, data){
    if(error) return console.log(error);

    // console.log('json data', data);
    // generate(data);
})

function generate(data){
    // var dataset = [10, 20, 30, 40, 50];

    var el = d3.select('body')
        .selectAll('p')
        .data(data)
        .enter() 
        .append('p')
        .attr('class', function(d){
            if(d > 25){
                return 'foo';
            }else{
                return null;
            }
        })
        .classed('bar', function(d){
            return d < 25;
        })
        .text(function(d){
            return 'This paragraph is bound to the number ' + d;
        })
        .style('color', function(d){
            if(d > 25){
                return 'red';
            }else{
                return 'blue';
            }
        });
    console.log(el);
}