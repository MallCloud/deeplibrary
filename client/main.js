import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import './main.html';


if (Meteor.isClient) {
    if (Meteor.users.findOne({email:"test@yahoo.com"})==false){
        Roles.addUsersToRoles(Accounts.createUser({email: "test@yahoo.com", password: "test1234"}), ['admin'], 'default-group');
      }
    Meteor.subscribe('files.images.all');
    function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    /* predict and actual revenue collection links*/
    Meteor.subscribe('predictline');
    Meteor.subscribe('revenue1line');
    Meteor.subscribe('revenue2line');
    Meteor.subscribe('revenue3line');
    Meteor.subscribe('revenue4line');
    Meteor.subscribe('revenue5line');
    Meteor.subscribe('revenue6line');
    Meteor.subscribe('revenue7line');
    /* Algorithm contribution 3 lines*/
    Meteor.subscribe('algoline');
    Meteor.subscribe('cursettingline');
    Meteor.subscribe('engagementline');
    Meteor.subscribe('cursettingline');
    Meteor.subscribe('grid_orgline');
    function show_fut_rev(){
        nv.addGraph(function() {
          var chart = nv.models.scatterChart()
                        .showDistX(true)    //showDist, when true, will display those little distribution lines on the axis.
                        .showDistY(true)
                        .transitionDuration(350)
                        .color(d3.scale.category10().range());

          //Configure how the tooltip looks.
          chart.tooltipContent(function(key) {
              return '<h3>' + key + '</h3>';
          });

          //Axis settings
          chart.xAxis.tickFormat(d3.format('.02f'));
          chart.yAxis.tickFormat(d3.format('.02f'));

          //We want to show shapes other than circles.
          chart.scatter.onlyCircles(false);

          var myData = randomData(3,40);
          d3.select('#chart_fut_rev svg')
              .datum(myData)
              .call(chart);

          nv.utils.windowResize(chart.update);

          return chart;
        });
    }
    function add_preandrev(){

            var qua1 = new Date().getTime();
            var qua2 = getRandomInt(0, 113434);
            var qua3 = getRandomInt(10343432383, 11343432383);
            var qua4 = getRandomInt(50, 600);
            var qua5 = getRandomInt(10343432383, 11343432383);
            var qua6 = getRandomInt(50, 600);
            var qua7 = getRandomInt(10343432383, 11343432383);
            var qua8 = getRandomInt(50, 600);
            var qua9 = getRandomInt(10343432383, 11343432383);
            var qua10 = getRandomInt(50, 600);
            var qua11 = getRandomInt(10343432383, 11343432383);
            var qua12 = getRandomInt(50, 600);
            var qua13 = getRandomInt(10343432383, 11343432383);
            var qua14 = getRandomInt(50, 600);
            var qua15 = getRandomInt(10343432383, 11343432383);
            var qua16 = getRandomInt(50, 600);
           
            predict.insert({x:qua1, y:qua2});
            revenue1.insert({x:qua1, y:qua4});
            revenue2.insert({x:qua1, y:qua6});
            revenue3.insert({x:qua1, y:qua8});
            revenue4.insert({x:qua1, y:qua10});
            revenue5.insert({x:qua1, y:qua12});
            revenue6.insert({x:qua1, y:qua14});
            revenue7.insert({x:qua1, y:qua16});
    }
    /**************************************
     * Simple test data generator
     */
    function randomData(groups, points) { //# groups,# points per group
      var data = [],
          shapes = ['circle', 'cross', 'triangle-up', 'triangle-down', 'diamond', 'square'],
          random = d3.random.normal();

      /*for (i = 0; i < groups; i++) {
        data.push({
          key: 'Group ' + i,
          values: []
        });

        for (j = 0; j < points; j++) {
          data[i].values.push({
            x: random()
          , y: random()
          , size: Math.random()   //Configure the size of each scatter point
          , shape: (Math.random() > 0.95) ? shapes[j % 6] : "circle"  //Configure the shape of each scatter point.
          });
        }
      }*/
        data.push({
          key: 'GRID A',
          values: []
        });

        for (j = 0; j < points; j++) {
          data[0].values.push({
            x: random()
          , y: random()
          , size: Math.random()   //Configure the size of each scatter point
          , shape: (Math.random() > 0.95) ? shapes[j % 6] : "circle"  //Configure the shape of each scatter point.
          });
        }
        data.push({
          key: 'GRID B',
          values: []
        });

        for (j = 0; j < points; j++) {
          data[1].values.push({
            x: random()
          , y: random()
          , size: Math.random()   //Configure the size of each scatter point
          , shape: (Math.random() > 0.95) ? shapes[j % 6] : "circle"  //Configure the shape of each scatter point.
          });
        }
        data.push({
          key: 'GRID C',
          values: []
        });

        for (j = 0; j < points; j++) {
          data[2].values.push({
            x: random()
          , y: random()
          , size: Math.random()   //Configure the size of each scatter point
          , shape: (Math.random() > 0.95) ? shapes[j % 6] : "circle"  //Configure the shape of each scatter point.
          });
        }
      return data;
    }
    
    function show_futrev1(){
        var margin = {top: 30, right: 20, bottom: 30, left: 50},
            width = $('#chart_futrev1').width()*0.9 - margin.left - margin.right,
            height = $('#chart_futrev1').height() - margin.top - margin.bottom;
            $('#chart_futrev1 svg').remove()
        // Parse the date / time
        var parseDate = d3.time.format("%d-%b-%y").parse;

        // Set the ranges
        var x = d3.time.scale().range([0, width]);
        var y = d3.scale.linear().range([height, 0]);

        // Define the axes
        var xAxis = d3.svg.axis().scale(x)
            .orient("bottom").ticks(5);

        var yAxis = d3.svg.axis().scale(y)
            .orient("left").ticks(5);

        // Define the line
        var valueline = d3.svg.line()
            .x(function(d) { return x(d.date); })
            .y(function(d) { return y(d.close); });
            
        var valueline1 = d3.svg.line()
            .x(function(d) { return x(d.date1); })
            .y(function(d) { return y(d.close1); });
        // Adds the svg canvas
        $("#chart_futrev1").remove("svg");
        var svg = d3.select("#chart_futrev1")
            .append("svg")
                .attr("width", width + margin.left + margin.right)
                .attr("height", height + margin.top + margin.bottom)
            .append("g")
                .attr("transform", 
                      "translate(" + margin.left + "," + margin.top + ")");

        // Get the data
        d3.csv("./data1.csv", function(error, data) {
            data.forEach(function(d) {
                d.date = parseDate(d.date);
                console.log(d.date);
                d.close = +d.close;
            });

            // Scale the range of the data
            x.domain(d3.extent(data, function(d) { return d.date; }));
            y.domain([0, d3.max(data, function(d) { return d.close; })]);

            // Add the valueline path.
            svg.append("path")
                .attr("class", "line")
                .attr("d", valueline(data));
            // Add the scatterplot
            svg.selectAll("dot")
                .data(data)
              .enter().append("circle")
              .filter(function(d) { return Date.parse(d.date) < Date.parse(new Date())})
                .style("fill", "transparent")
                .style("stroke", "#4682b4")
                .style("stroke-width","2")
                .attr("r", 6)
                .attr("cx", function(d) { return x(d.date); })
                .attr("cy", function(d) { return y(d.close); });

            // Add the X Axis
            svg.append("g")
                .attr("class", "x axis")
                .attr("transform", "translate(0," + height + ")")
                .call(xAxis);

            // Add the Y Axis
            svg.append("g")
                .attr("class", "y axis")
                .call(yAxis);

        });
        d3.csv("./data.csv", function(error, data1) {
            data1.forEach(function(d) {
                d.date1 = parseDate(d.date1);
                console.log(d.date1);
                d.close1 = +d.close1;
            });

            // Scale the range of the data
           

            // Add the valueline path.
            svg.append("path")
                .attr("class", "line2")
                .attr("d", valueline1(data1));
            // Add the scatterplot
            svg.selectAll("dot")
                .data(data1)
              .enter().append("circle")
              .filter(function(d) { return Date.parse(d.date1) < Date.parse(new Date())})
                .style("fill", "transparent")
                .style("stroke", "#4682b4")
                .style("stroke-width","2")
                .attr("r", 6)
                .attr("cx", function(d) { return x(d.date1); })
                .attr("cy", function(d) { return y(d.close1); });

          

        });
    }
    function show_intandact(){
        
            //Intension and activities data. Note how there is only a single array of key-value pairs.
            function intandactData() {
                return  [
                    { 
                        "label": "Cruisin",
                        "value" : 5.99
                    } , 
                    { 
                        "label": "Snowmobile",
                        "value" : 33.9
                    } , 
                    { 
                        "label": "Harley",
                        "value" : 5.55
                    } , 
                    { 
                        "label": "Racing",
                        "value" : 15.48
                    } , 
                    { 
                        "label": "Street",
                        "value" : 11.89
                    } , 
                    { 
                        "label": "Tourism",
                        "value" : 9.29
                    } 
                ];
            }
    }
    function show_helmet(){

    }

    function show_preandrev(){
        d3.select("#chart_preandrev svg").selectAll("*").remove();
        var chart = nv.models.linePlusBarChart()
                .margin({top: 30, right: 60, bottom: 50, left: 70})
                .x(function(d,i){return i})
                .y(function(d,i){return d[1]}) 
                .showLegend(false); 
                ;
    
            nv.addGraph(function() {
                var datapredict=function(){
                    var results=[];
                    predict.find().map(function(predict){
                        results.push([predict.x , predict.y]);
                    })
                    return results;
                }
                var datarevenue1=function(){
                    var results=[];
                    revenue1.find().map(function(revenue){
                        results.push([revenue.x , revenue.y]);
                    })
                    return results;
                }
                var datarevenue2=function(){
                    var results=[];
                    revenue2.find().map(function(revenue){
                        results.push([revenue.x , revenue.y]);
                    })
                    return results;
                }
                var datarevenue3=function(){
                    var results=[];
                    revenue3.find().map(function(revenue){
                        results.push([revenue.x , revenue.y]);
                    })
                    return results;
                }
                var datarevenue4=function(){
                    var results=[];
                    revenue4.find().map(function(revenue){
                        results.push([revenue.x , revenue.y]);
                    })
                    return results;
                }
                var datarevenue5=function(){
                    var results=[];
                    revenue5.find().map(function(revenue){
                        results.push([revenue.x , revenue.y]);
                    })
                    return results;
                }
                var datarevenue6=function(){
                    var results=[];
                    revenue6.find().map(function(revenue){
                        results.push([revenue.x , revenue.y]);
                    })
                    return results;
                }
                var datarevenue7=function(){
                    var results=[];
                    revenue7.find().map(function(revenue){
                        results.push([revenue.x , revenue.y]);
                    })
                    return results;
                }
                var data=[{ "key": 'Algorithm A', "bar" : true, "color":'#70c0b3', "values": datapredict() },{"key": 'Algorithm B' , "color":'#ed6283',"values":datarevenue1()},{  "key": 'Algorithm C' , "color":'blue',"values":datarevenue2()},{  "key": 'Algorithm D' , "color":'blue',"values":datarevenue3()},{  "key": 'Algorithm E' , "color":'blue',"values":datarevenue4()},{  "key": 'Algorithm F' , "color":'blue',"values":datarevenue5()},{  "key": 'Algorithm G' , "color":'blue',"values":datarevenue6()},{  "key": 'Algorithm H' , "color":'blue',"values":datarevenue7()} ];
                chart.xAxis.tickFormat(function(d) {
                    var dx = data[0].values[d] && data[0].values[d][0] || 0;
                    return d3.time.format('%x')(new Date(dx))
                });
                chart.y1Axis
                    .tickFormat(d3.format(',f'));

                chart.y2Axis
                    .tickFormat(function(d) { return d3.format(',f')(d) + '%' });

                chart.bars.forceY([0]);
                d3.select('#chart_preandrev svg').datum(data).transition().duration(0).call(chart);
                
                return chart;
            });
    }
    function show_algorithm(){
        d3.select("#chart_algorithm svg").selectAll("*").remove();
        var chart = nv.models.cumulativeLineChart()
                  .x(function(d) { return d[0] })
                  .y(function(d) { return d[1]/100 }) //adjusting, 100% is 1.00, not 100 as it is in the data
                  .color(d3.scale.category10().range())
                  .useInteractiveGuideline(true)
                  ;
            
            nv.addGraph(function() {
                var algo1data=function(){
                    var results=[];
                    algo.find().map(function(algo){
                        results.push([algo.algo1x , algo.algo1y]);
                    })
                    return results;
                }
                var algo2data=function(){
                    var results=[];
                    algo.find().map(function(algo){
                        results.push([algo.algo2x , algo.algo2y]);
                    })
                    return results;
                }
                var algo3data=function(){
                    var results=[];
                    algo.find().map(function(algo){
                        results.push([algo.algo3x , algo.algo3y]);
                    })
                    return results;
                }
                var data= [{ "key": 'Algorithm A', "color":"#91cec6", "values": algo1data() },{  "key": 'Algorithm B', "color":"#ec547a" , "values":algo2data()},{ "key": 'Algorithm C', "color":"#f1a17c", "values": algo3data() } ];
                chart.xAxis
                    .tickValues([1078030800000,1122782400000,1167541200000])
                    .tickFormat(function(d) {
                        return d3.time.format('%x')(new Date(d))
                    });
                chart.yAxis
                    .tickFormat(d3.format(',.1%'));
                    d3.select('#chart_algorithm svg').datum(data).transition().duration(0).call(chart);
                    
                    nv.utils.windowResize(function() { chart.update; });
                    return chart;
            });
    }
    function show_algo_cur_data(){
        d3.select("#chart_algo_cur svg").selectAll("*").remove();
            var chart = nv.models.lineChart()
                .margin({left: 100})  //Adjust chart margins to give the x-axis some breathing room.
                .useInteractiveGuideline(true)  //We want nice looking tooltips and a guideline!
                .transitionDuration(350)  //how fast do you want the lines to transition?
                .showLegend(true)       //Show the legend, allowing users to turn on/off line series.
                .showYAxis(true)        //Show the y-axis
                .showXAxis(true)        //Show the x-axis
            ;
            nv.addGraph(function() {
                chart.xAxis     //Chart x-axis settings
                    .axisLabel('Time (ms)')
                    .tickFormat(d3.format(',r'));

                chart.yAxis     //Chart y-axis settings
                    .axisLabel('Voltage (v)')
                    .tickFormat(d3.format('.02f'));

              /* Done setting the chart up? Time to render it!*/
                var myData = sinAndCos();   //You need data...

                d3.select('#chart_algo_cur svg')    //Select the <svg> element you want to render the chart in.   
                    .datum(myData)         //Populate the <svg> element with chart data...
                    .call(chart);          //Finally, render the chart!

              //Update the chart when window resizes.
                nv.utils.windowResize(function() { chart.update() });
                return chart;
            });
            function sinAndCos() {
                var sin = [],sin2 = [],cos = [],sin3 = [],sin4 = [],cos1 = [],cos2 = [];

                //Data is represented as an array of {x,y} pairs.
                for (var i = 0; i < 100; i++) {
                    sin.push({x: i, y: Math.sin(i/10)});
                    sin2.push({x: i, y: Math.sin(i/10) *0.25 + 0.5});
                    cos.push({x: i, y: .5 * Math.cos(i/10)});
                    sin3.push({x: i, y: Math.sin(i/10)*0.2+0.7});
                    sin4.push({x: i, y: Math.sin(i/10) *0.5 + 0.8});
                    cos1.push({x: i, y: .5 * Math.cos(i/10)*0.1});
                    cos2.push({x: i, y: Math.cos(i/10)*0.3 + 1});
                }

                //Line chart data should be sent as an array of series objects.
                return [
                    {
                        values: sin,      //values - represents the array of {x,y} data points
                        key: 'Algorithm A', //key  - the name of the series.
                        color: '#72c0b3'  //color - optional: choose your own line color.
                    },
                    {
                        values: cos,
                        key: 'Algorithm B',
                        color: '#eb557b'
                    },
                    {
                        values: sin2,
                        key: 'Algorithm C',
                        color: '#a9cadb'
                    },
                    {
                        values: sin3,      //values - represents the array of {x,y} data points
                        key: 'Algorithm D', //key  - the name of the series.
                        color: '#72c0b3'  //color - optional: choose your own line color.
                    },
                    {
                        values: cos1,
                        key: 'Algorithm E',
                        color: '#eb557b'
                    },
                    {
                        values: sin4,
                        key: 'Algorithm F',
                        color: '#a9cadb'
                    },
                    {
                        values: sin3,
                        key: 'Algorithm G',
                        color: '#a9cadb',
                        area: true      //area - set to true if you want this line to turn into a filled area chart.
                    }
                ]; 
            }
    }
    Template.lapse.events({

        'click .lapsebtn' : function() {
            $("#churn_add_form").modal('show');
        },
        /* predict and actual revenue button events*/
        'click #add_preandrev': function() {
            add_preandrev();
            show_preandrev();
            $("#preandrev_add_form").modal('show');
        },
        'click #remove_preandrev': function() {
        },
        'click #show_preandrev': function() {
            show_preandrev();
        },



        /* algorithm contribution 3 lines button events*/
        'click #add_algorithm': function() {
            $("#algorithmdata_add_form").modal('show');
            var algo1xval = 1076358400000  ;
            var algo1yval =  -1.569146943813;
            var algo2xval = 1076358400000  ;
            var algo2yval = -11;
            var algo3xval = 1076358400000  ;
            var algo3yval =  -5.569146943813;
           
            algo.insert({algo1x:algo1xval, algo1y:algo1yval,algo2x:algo2xval, algo2y:algo2yval,algo3x:algo3xval, algo3y:algo3yval});
        },
        'click #remove_algorithm': function() {
        },
        'click #show_algorithm': function() {
            show_algorithm();
        },


        /* cureved algorithm button click event */
        'click #change_algo_cur_data': function() {
            $("#algo_cur_data_add_form").modal('show');
        },
        'click #show_algo_cur_data': function() {
            show_algo_cur_data();
        },
        'click #add_futrev1': function() {
            var qua1 = new Date().getTime();
            var qua2 = getRandomInt(0, 113434);
            var qua3 = getRandomInt(10343432383, 11343432383);
            var qua4 = getRandomInt(50, 600);
           
            //predict.insert({x:qua1, y:qua2});
            //revenue.insert({x:qua3, y:qua4});
            show_futrev1();
        },
        'click #remove_futrev1': function() {
        },
        'click #show_futrev1': function() {
            show_futrev1();
        }
    });
    Template.churn.events({
        'click .churnbtn' : function() {
            $("#churn_add_form").modal('show');
        },
        /* predict and actual revenue button events*/
        'click #add_preandrev': function() {
            add_preandrev();
            show_preandrev();
            $("#preandrev_add_form").modal('show');
        },
        'click #remove_preandrev': function() {
        },
        'click #show_preandrev': function() {
            show_preandrev();
        },
        'click #add_futrev1': function() {
            var qua1 = new Date().getTime();
            var qua2 = getRandomInt(0, 113434);
            var qua3 = getRandomInt(10343432383, 11343432383);
            var qua4 = getRandomInt(50, 600);
           
            //predict.insert({x:qua1, y:qua2});
            //revenue.insert({x:qua3, y:qua4});
            show_futrev1();
        },
        'click #remove_futrev1': function() {
        },
        'click #show_futrev1': function() {
            show_futrev1();
        },



        /* algorithm contribution 3 lines button events*/
        'click #add_algorithm': function() {
            $("#algorithmdata_add_form").modal('show');
            var algo1xval = 1076358400000  ;
            var algo1yval =  -1.569146943813;
            var algo2xval = 1076358400000  ;
            var algo2yval = -11;
            var algo3xval = 1076358400000  ;
            var algo3yval =  -5.569146943813;
           
            algo.insert({algo1x:algo1xval, algo1y:algo1yval,algo2x:algo2xval, algo2y:algo2yval,algo3x:algo3xval, algo3y:algo3yval});
        },
        'click #remove_algorithm': function() {
        },
        'click #show_algorithm': function() {
            show_algorithm();
        },


        /* cureved algorithm button click event */
        'click #change_algo_cur_data': function() {
            $("#algo_cur_data_add_form").modal('show');
        },
        'click #show_algo_cur_data': function() {
            show_algo_cur_data();
        }
    });
    Template.target.events({

        'click .targetbtn' : function() {
            $("#churn_add_form").modal('show');
        },
        /* predict and actual revenue button events*/
        'click #add_preandrev': function() {
            add_preandrev();
            show_preandrev();
            $("#preandrev_add_form").modal('show');
        },
        'click #remove_preandrev': function() {
        },
        'click #show_preandrev': function() {
            show_preandrev();
        },



        /* algorithm contribution 3 lines button events*/
        'click #add_algorithm': function() {
            $("#algorithmdata_add_form").modal('show');
            var algo1xval = 1076358400000  ;
            var algo1yval =  -1.569146943813;
            var algo2xval = 1076358400000  ;
            var algo2yval = -11;
            var algo3xval = 1076358400000  ;
            var algo3yval =  -5.569146943813;
           
            algo.insert({algo1x:algo1xval, algo1y:algo1yval,algo2x:algo2xval, algo2y:algo2yval,algo3x:algo3xval, algo3y:algo3yval});
        },
        'click #remove_algorithm': function() {
        },
        'click #show_algorithm': function() {
            show_algorithm();
        },


        /* cureved algorithm button click event */
        'click #change_algo_cur_data': function() {
            $("#algo_cur_data_add_form").modal('show');
        },
        'click #show_algo_cur_data': function() {
            show_algo_cur_data();
        },
        'click #add_futrev1': function() {
            var qua1 = new Date().getTime();
            var qua2 = getRandomInt(0, 113434);
            var qua3 = getRandomInt(10343432383, 11343432383);
            var qua4 = getRandomInt(50, 600);
           
            //predict.insert({x:qua1, y:qua2});
            //revenue.insert({x:qua3, y:qua4});
            show_futrev1();
        },
        'click #remove_futrev1': function() {
        },
        'click #show_futrev1': function() {
            show_futrev1();
        }
    });

    Template.knowledge.events({

        'click .lapsebtn' : function() {
            $("#churn_add_form").modal('show');
        },
        'click .targetbtn' : function() {
            $("#churn_add_form").modal('show');
        },
        'click .influencebtn' : function() {
            $("#churn_add_form").modal('show');
        },
        'click .churnbtn' : function() {
            $("#churn_add_form").modal('show');
        },
        /* predict and actual revenue button events*/
        'click #add_preandrev': function() {
            add_preandrev();
            show_preandrev();
            $("#preandrev_add_form").modal('show');
        },
        'click #remove_preandrev': function() {
        },
        'click #show_preandrev': function() {
            show_preandrev();
        },

        'click #add_fut_rev': function() {
            $("#predata_add_form").modal('show');
        },
        'click #show_fut_rev': function() {
            show_fut_rev();
        },

        /* algorithm contribution 3 lines button events*/
        'click #add_algorithm': function() {
            $("#algorithmdata_add_form").modal('show');
            var algo1xval = 1076358400000  ;
            var algo1yval =  -1.569146943813;
            var algo2xval = 1076358400000  ;
            var algo2yval = -11;
            var algo3xval = 1076358400000  ;
            var algo3yval =  -5.569146943813;
           
            algo.insert({algo1x:algo1xval, algo1y:algo1yval,algo2x:algo2xval, algo2y:algo2yval,algo3x:algo3xval, algo3y:algo3yval});
        },
        'click #remove_algorithm': function() {
        },
        'click #show_algorithm': function() {
            show_algorithm();
        },


        /* cureved algorithm button click event */
        'click #change_algo_cur_data': function() {
            $("#algo_cur_data_add_form").modal('show');

        },
        'click #show_algo_cur_data': function() {
            show_algo_cur_data();
        },
        'click #change_grid_org' : function(){
            $("#data_add_form").modal('show');
        }
    });
    Template.influence.events({
        'click #add_futrev1': function() {
            var qua1 = new Date().getTime();
            var qua2 = getRandomInt(0, 113434);
            var qua3 = getRandomInt(10343432383, 11343432383);
            var qua4 = getRandomInt(50, 600);
           
            //predict.insert({x:qua1, y:qua2});
            //revenue.insert({x:qua3, y:qua4});
            show_futrev1();
        },
        'click #remove_futrev1': function() {
        },
        'click #show_futrev1': function() {
            show_futrev1();
        },

        'click .influencebtn' : function() {
            $("#churn_add_form").modal('show');
        },
        /* predict and actual revenue button events*/
        'click #add_preandrev': function() {
            add_preandrev();
            show_preandrev();
            $("#preandrev_add_form").modal('show');
        },
        'click #remove_preandrev': function() {
        },
        'click #show_preandrev': function() {
            show_preandrev();
        },



        /* algorithm contribution 3 lines button events*/
        'click #add_algorithm': function() {
            $("#algorithmdata_add_form").modal('show');
            var algo1xval = 1076358400000  ;
            var algo1yval =  -1.569146943813;
            var algo2xval = 1076358400000  ;
            var algo2yval = -11;
            var algo3xval = 1076358400000  ;
            var algo3yval =  -5.569146943813;
           
            algo.insert({algo1x:algo1xval, algo1y:algo1yval,algo2x:algo2xval, algo2y:algo2yval,algo3x:algo3xval, algo3y:algo3yval});
        },
        'click #remove_algorithm': function() {
        },
        'click #show_algorithm': function() {
            show_algorithm();
        },


        /* cureved algorithm button click event */
        'click #change_algo_cur_data': function() {
            $("#algo_cur_data_add_form").modal('show');
        },
        'click #show_algo_cur_data': function() {
            show_algo_cur_data();
        }
    });
    Template.main.events({
        'click .lapsebtn' : function() {
            $("#churn_add_form").modal('show');
        },
        'click .targetbtn' : function() {
            $("#churn_add_form").modal('show');
        },
        'click .influencebtn' : function() {
            $("#churn_add_form").modal('show');
        },
        'click .churnbtn' : function() {
            $("#churn_add_form").modal('show');
        },
         /* engagement button events*/
        'click #add_engagement': function() {
        },
        'click #remove_engagement': function() {
        },
        /* Intension and activities button events*/
        'click #add_intandact': function() {
        },
        'click #remove_intandact': function() {
        }
    });
    Template.lapse.onRendered(function(){
         _.defer(function () {

            Deps.autorun(function () {
                Tracker.afterFlush(function(){
                show_preandrev();
                show_algorithm();
                show_algo_cur_data();}.bind(this));
            }.bind(this));
            show_preandrev();
            show_algorithm();
            show_algo_cur_data();
        });
    });

    Template.knowledge.onRendered(function(){
         _.defer(function () {

            Deps.autorun(function () {
                Tracker.afterFlush(function(){
                show_preandrev();
                show_algorithm();
                show_algo_cur_data();
                show_fut_rev();}.bind(this));
            }.bind(this));
            show_preandrev();
            show_algorithm();
            show_algo_cur_data();
            show_fut_rev();
        });
    });

    Template.target.onRendered(function(){
         _.defer(function () {

            Deps.autorun(function () {
                show_preandrev();
                show_algorithm();
                show_algo_cur_data();
            });
            show_preandrev();
            show_algorithm();
            show_algo_cur_data();
        });
    });

    Template.influence.onRendered(function(){
         _.defer(function () {

            Deps.autorun(function () {
                show_preandrev();
                show_algorithm();
                show_algo_cur_data();
            });
            show_preandrev();
            show_algorithm();
            show_algo_cur_data();
        });
    });

    Template.churn.onRendered(function(){
         _.defer(function () {

            Deps.autorun(function () {
                show_preandrev();
                show_algorithm();
                show_algo_cur_data();
            });
            show_preandrev();
            show_algorithm();
            show_algo_cur_data();
        });
    });
    Template.action.onRendered(function(){
         _.defer(function () {

            Deps.autorun(function () {
                console.log("helmet shows");
                show_helmet();
            });
            show_helmet();
        });
    });
}

if (Meteor.isServer) {
  Meteor.publish('files.images.all', function () {
    return Images.find().cursor;
  });
}
Meteor.startup(function () {

    sAlert.config({
        effect: '',
        position: 'top-right',
        timeout: 5000,
        html: false,
        onRouteClose: true,
        stack: true,
        // or you can pass an object:
        // stack: {
        //     spacing: 10 // in px
        //     limit: 3 // when fourth alert appears all previous ones are cleared
        // }
        offset: 0, // in px - will be added to first alert (bottom or top - depends of the position in config)
        beep: false,
        // examples:
        // beep: '/beep.mp3'  // or you can pass an object:
        // beep: {
        //     info: '/beep-info.mp3',
        //     error: '/beep-error.mp3',
        //     success: '/beep-success.mp3',
        //     warning: '/beep-warning.mp3'
        // }
        onClose: _.noop //
        // examples:
        // onClose: function() {
        //     /* Code here will be executed once the alert closes. */
        // }
    });

});
Template.data_update_form.events({
    'submit .js-add-data': function(event){
        var learningRate, activations, regularizations, regularRate, problem;
        learningRate = event.target.learningRate.value;
        activations = event.target.activations.value;
        regularizations = event.target.regularizations.value;
        regularRate = event.target.regularRate.value;
        problem = event.target.problem.value;
        var grid_org_data = grid_org.find();
        if(grid_org_data.count()){
            grid_org.update({_id:"user"},{$set:{
                learningRate: learningRate,
                activations: activations,
                regularizations: regularizations,
                regularRate: regularRate,
                problem: problem
            }});
        }
        else{
            grid_org.insert({
                _id:"user",
                learningRate: learningRate,
                activations: activations,
                regularizations: regularizations,
                regularRate: regularRate,
                problem: problem
            })
        }
        $("#data_add_form").modal('hide');
        return false;
    }
})
Template.knowledge.helpers({
    grid_org_data: function(){
        var results;
        grid_org.find().map(function(predict){
            results=predict;
        });
        return results;
    }
})
Template.registerHelper('isUserInRole', function(role){
    return Roles.userIsInRole(Meteor.user(), ['admin'],'default-group');
});
Template.register.events({
    'submit form': function(event){
        event.preventDefault();
        var email = $('[name=email]').val();
        var password = $('[name=password]').val();
        Accounts.createUser({
            email: email,
            password: password
        }, function(error){
            if(error){
                sAlert.error(error.reason);
            } else {
                sAlert.success("Registered Successfully");
            }
        });
    }
});
Template.login.events({
    'click #facebook-login': function(event) {
        Meteor.loginWithFacebook({}, function(err){
            if (err) {
                throw new Meteor.Error("Facebook login failed");
            }
        });
    },
    'click #google-login': function(event) {
        Meteor.loginWithGoogle({}, function(err){
            if (err) {
                throw new Meteor.Error("Google login failed");
            }else{
                Router.go("/main");
            }
        });
    },
    'submit form': function(event){
        event.preventDefault();
        var email = $('[name=email]').val();
        var password = $('[name=password]').val();
        Meteor.loginWithPassword(email, password, function(error){
            if(error){
                sAlert.error(error.reason);
            } else {
                Router.go("/main");
            }
        });
    }
});
/*Template.login.onRendered(function(){
    $('.login').validate({
        rules: {
            email: {
                required: true,
                email: true
            },
            password: {
                required: true,
                minlength: 6
            }
        },
        messages: {
            email: {
                required: "You must enter an email address.",
                email: "You've entered an invalid email address."
            },
            password: {
                required: "You must enter a password.",
                minlength: "Your password must be at least {0} characters."
            }
        }
    });
});*/

Template.input.events({
    'click .logout': function(event){
        event.preventDefault();
        Meteor.logout();
        Router.go('/login');
    }
});
Template.uploadedFiles.helpers({
  uploadedFiles: function () {
    return Images.find();
  }
});

Template.uploadForm.onCreated(function () {
  this.currentUpload = new ReactiveVar(false);
});

Template.uploadForm.helpers({
  currentUpload: function () {
    return Template.instance().currentUpload.get();
  }
});

Template.uploadForm.events({
  'change #fileInput': function (e, template) {
    if (e.currentTarget.files && e.currentTarget.files[0]) {
      // We upload only one file, in case 
      // there was multiple files selected
      var file = e.currentTarget.files[0];
      if (file) {
        var uploadInstance = Images.insert({
          file: file,
          streams: 'dynamic',
          chunkSize: 'dynamic'
        }, false);

        uploadInstance.on('start', function() {
          template.currentUpload.set(this);
        });

        uploadInstance.on('end', function(error, fileObj) {
          if (error) {
            alert('Error during upload: ' + error.reason);
          } else {
            alert('File "' + fileObj.name + '" successfully uploaded');
          }
          template.currentUpload.set(false);
        });

        uploadInstance.start();
      }
    }
  }
});
// myTemplate.js
Template.main.topGenresChart = function() {
    return {
        chart: {
            type: 'columnrange',
            inverted: true
        },

        title: {
            text: ''
        },


        xAxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        },

        yAxis: {
            title: {
                text: ''
            }
        },

        tooltip: {
            valuePrefix: '$'
        },

        plotOptions: {
            columnrange: {
                dataLabels: {
                    enabled: true,
                    formatter: function () {
                        return '$' + this.y/1000000;
                    }
                }
            }
        },

        legend: {
            enabled: false
        },

        series: [{
            name: 'Predicted Revenue',
            data: [
                [9000000, 29000000],
                [11000000, 20000000],
                [4000000, 23000000],
                [18000000, 19900000],
                [2000000, 22600000],
                [2900000, 29500000],
                [9200000, 40700000],
                [7300000, 26500000],
                [4400000, 18000000],
                [3100000, 11400000],
                [5200000, 10400000]/*,
                [13.5, 19.8]*/
            ]
        }]
    };
};
Template.main.leftpieChart = function() {
    return {
         chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: ''
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                    style: {
                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                    }
                }
            }
        },
        series: [{
            size: 200,
            name: 'Brands',
            colorByPoint: true,
            innerSize: 100,
            data: [
                    { 
                        "name": "Cruisin",
                        "y" : 5.99
                    } , 
                    { 
                        "name": "Snowmobile",
                        "y" : 33.9
                    } , 
                    { 
                        "name": "Harley",
                        "y" : 5.55
                    } , 
                    { 
                        "name": "Racing",
                        "y" : 15.48
                    } , 
                    { 
                        "name": "Street",
                        "y" : 11.89
                    } , 
                    { 
                        "name": "Tourism",
                        "y" : 9.29
                    } 
                ]
        }]
    };
};

Template.main.rightpieChart = function() {
    return {
         chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: ''
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                    style: {
                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                    }
                }
            }
        },
        series: [{
            size: 200,
            name: 'Brands',
            colorByPoint: true,
            data: [
                    { 
                        "name": "SEO",
                        "y" :11.89
                    } , 
                    { 
                        "name": "Web",
                        "y" : 29.39
                    } , 
                    { 
                        "name": "Store",
                        "y" : 5.99
                    } , 
                    { 
                        "name": "Email",
                        "y" : 3.9
                    } 
                ]
        }]
    };
};