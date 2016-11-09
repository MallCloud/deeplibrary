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
    Meteor.subscribe('revenueline');
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
          key: 'ALGORITHM A',
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
          key: 'ALGORITHM B',
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
          key: 'ALGORITHM C',
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
    

    function show_intandact(){
        d3.select("#chart_intandact svg").selectAll("*").remove();
        nv.addGraph(function() {
                var chart = nv.models.pieChart()
                    .x(function(d) { return d.label })
                    .y(function(d) { return d.value }) //Configure the minimum slice size for labels to show up
                    
                    .showLabels(true).donut(true)          //Turn on Donut mode. Makes pie chart look tasty!
                    .donutRatio(0.35);

                d3.select("#chart_intandact svg")
                    .datum(intandactData())
                    .transition().duration(350)
                    .call(chart);

                return chart;
            });

           

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
    function show_engagement(){
        d3.select("#chart_engagement svg").selectAll("*").remove();
        nv.addGraph(function() {
                var chart = nv.models.pieChart()
                    .x(function(d) { return d.label })
                    .y(function(d) { return d.value })
                    .showLabels(true)     //Display pie labels
                    .labelThreshold(.05)  //Configure the minimum slice size for labels to show up
                    .labelType("percent") //Configure what type of data to show in the label. Can be "key", "value" or "percent"
                         //Configure how big you want the donut hole size to be.
                    ;

                d3.select("#chart_engagement svg")
                    .datum(engagementData())
                    .transition().duration(350)
                    .call(chart);

                return chart;
            });

            //Engagement data. Note how there is only a single array of key-value pairs.
            function engagementData() {
                return  [
                    { 
                        "label": "SEO",
                        "value" :11.89
                    } , 
                    { 
                        "label": "Web",
                        "value" : 29.39
                    } , 
                    { 
                        "label": "Store",
                        "value" : 5.99
                    } , 
                    { 
                        "label": "Email",
                        "value" : 3.9
                    } 
                ];
            }
    }
    function show_preandrev(){
        d3.select("#chart_preandrev svg").selectAll("*").remove();
        var chart = nv.models.linePlusBarChart()
                .margin({top: 30, right: 60, bottom: 50, left: 70})
                .x(function(d,i){return i})
                .y(function(d,i){return d[1]})  
                ;
    
            nv.addGraph(function() {
                var datapredict=function(){
                    var results=[];
                    predict.find().map(function(predict){
                        results.push([predict.x , predict.y]);
                    })
                    return results;
                }
                var datarevenue=function(){
                    var results=[];
                    revenue.find().map(function(revenue){
                        results.push([revenue.x , revenue.y]);
                    })
                    return results;
                }
                var data=[{ "key": 'ALGORITHM A', "bar" : true, "color":'#70c0b3', "values": datapredict() },{  "key": 'ALGORITHM B' , "color":'#ed6283',"values":datarevenue()} ];
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
                nv.utils.windowResize(function() { chart.update; });
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
                var data= [{ "key": 'ALGORITHM A', "color":"#91cec6", "values": algo1data() },{  "key": 'ALGORITHM B', "color":"#ec547a" , "values":algo2data()},{ "key": 'ALGORITHM C', "color":"#f1a17c", "values": algo3data() } ];
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
                var sin = [],sin2 = [],cos = [];

                //Data is represented as an array of {x,y} pairs.
                for (var i = 0; i < 100; i++) {
                    sin.push({x: i, y: Math.sin(i/10)});
                    sin2.push({x: i, y: Math.sin(i/10) *0.25 + 0.5});
                    cos.push({x: i, y: .5 * Math.cos(i/10)});
                }

                //Line chart data should be sent as an array of series objects.
                return [
                    {
                        values: sin,      //values - represents the array of {x,y} data points
                        key: 'ALGORITHM A', //key  - the name of the series.
                        color: '#72c0b3'  //color - optional: choose your own line color.
                    },
                    {
                        values: cos,
                        key: 'ALGORITHM B',
                        color: '#eb557b'
                    },
                    {
                        values: sin2,
                        key: 'ALGORITHM C',
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
            var qua1 = getRandomInt(10343432383, 11343432383);
            var qua2 = getRandomInt(0, 113434);
            var qua3 = getRandomInt(10343432383, 11343432383);
            var qua4 = getRandomInt(50, 600);
           
            predict.insert({x:qua1, y:qua2});
            revenue.insert({x:qua3, y:qua4});
            //show_preandrev();
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
    Template.churn.events({
        'click .churnbtn' : function() {
            $("#churn_add_form").modal('show');
        },
        /* predict and actual revenue button events*/
        'click #add_preandrev': function() {
            var qua1 = getRandomInt(10343432383, 11343432383);
            var qua2 = getRandomInt(0, 113434);
            var qua3 = getRandomInt(10343432383, 11343432383);
            var qua4 = getRandomInt(50, 600);
           
            predict.insert({x:qua1, y:qua2});
            revenue.insert({x:qua3, y:qua4});
            //show_preandrev();
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
    Template.target.events({

        'click .targetbtn' : function() {
            $("#churn_add_form").modal('show');
        },
        /* predict and actual revenue button events*/
        'click #add_preandrev': function() {
            var qua1 = getRandomInt(10343432383, 11343432383);
            var qua2 = getRandomInt(0, 113434);
            var qua3 = getRandomInt(10343432383, 11343432383);
            var qua4 = getRandomInt(50, 600);
           
            predict.insert({x:qua1, y:qua2});
            revenue.insert({x:qua3, y:qua4});
            //show_preandrev();
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
            var qua1 = getRandomInt(10343432383, 11343432383);
            var qua2 = getRandomInt(0, 113434);
            var qua3 = getRandomInt(10343432383, 11343432383);
            var qua4 = getRandomInt(50, 600);
           
            predict.insert({x:qua1, y:qua2});
            revenue.insert({x:qua3, y:qua4});
            //show_preandrev();
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
            console.log("sdf");
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

        'click .influencebtn' : function() {
            $("#churn_add_form").modal('show');
        },
        /* predict and actual revenue button events*/
        'click #add_preandrev': function() {
            var qua1 = getRandomInt(10343432383, 11343432383);
            var qua2 = getRandomInt(0, 113434);
            var qua3 = getRandomInt(10343432383, 11343432383);
            var qua4 = getRandomInt(50, 600);
           
            predict.insert({x:qua1, y:qua2});
            revenue.insert({x:qua3, y:qua4});
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
        'click #show_engagement': function() {
            //Donut chart 
            show_engagement();
        },
        /* Intension and activities button events*/
        'click #add_intandact': function() {
        },
        'click #remove_intandact': function() {
        },
        'click #show_intandact': function() {
            //Regular pie chart 
            show_intandact();
        }
    });

    Template.main.onRendered(function(){
         _.defer(function () {

            Deps.autorun(function () {
                show_engagement();
                show_intandact();
            });
            show_engagement();
            show_intandact();
        });
         
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
            valueSuffix: '$'
        },

        plotOptions: {
            columnrange: {
                dataLabels: {
                    enabled: true,
                    formatter: function () {
                        return this.y/1000000 + '$';
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