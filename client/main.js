import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import './main.html';


if (Meteor.isClient) {
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
    function show_intandact(){
        d3.select("#chart_intandact svg").selectAll("*").remove();
        nv.addGraph(function() {
                var chart = nv.models.pieChart()
                    .x(function(d) { return d.label })
                    .y(function(d) { return d.value })
                    .showLabels(true);

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
                        "label": "One",
                        "value" : 29.765957771107
                    } , 
                    { 
                        "label": "Two",
                        "value" : 0
                    } , 
                    { 
                        "label": "Three",
                        "value" : 32.807804682612
                    } , 
                    { 
                        "label": "Four",
                        "value" : 196.45946739256
                    } , 
                    { 
                        "label": "Five",
                        "value" : 40.19434030906893
                    } , 
                    { 
                        "label": "Six",
                        "value" : 98.079782601442
                    } , 
                    { 
                        "label": "Seven",
                        "value" : 33.925743130903
                    } , 
                    { 
                        "label": "Eight",
                        "value" : 55.1387322875705
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
                    .donut(true)          //Turn on Donut mode. Makes pie chart look tasty!
                    .donutRatio(0.35)     //Configure how big you want the donut hole size to be.
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
                        "label": "One",
                        "value" : 100
                    } , 
                    { 
                        "label": "Two",
                        "value" : 0
                    } , 
                    { 
                        "label": "Three",
                        "value" : 132.807804682612
                    } , 
                    { 
                        "label": "Four",
                        "value" : 196.45946739256
                    } , 
                    { 
                        "label": "Five",
                        "value" : 50.19434030906893
                    } , 
                    { 
                        "label": "Six",
                        "value" : 98.079782601442
                    } , 
                    { 
                        "label": "Seven",
                        "value" : 113.925743130903
                    }  , 
                    { 
                        "label": "Eight",
                        "value" : 215.1387322875705
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
                var data=[{ "key": 'Age', "bar" : true, "color":'#70c0b3', "values": datapredict() },{  "key": 'Age' , "color":'#ed6283',"values":datarevenue()} ];
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
                var data= [{ "key": 'Age1', "color":"#91cec6", "values": algo1data() },{  "key": 'Age2', "color":"#ec547a" , "values":algo2data()},{ "key": 'Age3', "color":"#f1a17c", "values": algo3data() } ];
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
                        key: 'Sine Wave', //key  - the name of the series.
                        color: '#72c0b3'  //color - optional: choose your own line color.
                    },
                    {
                        values: cos,
                        key: 'Cosine Wave',
                        color: '#eb557b'
                    },
                    {
                        values: sin2,
                        key: 'Another sine wave',
                        color: '#a9cadb',
                        area: true      //area - set to true if you want this line to turn into a filled area chart.
                    }
                ]; 
            }
    }
    Template.lapse.events({

        /* predict and actual revenue button events*/
        'click #add_preandrev': function() {
            var qua1 = getRandomInt(10343432383, 11343432383);
            var qua2 = getRandomInt(0, 113434);
            var qua3 = getRandomInt(10343432383, 11343432383);
            var qua4 = getRandomInt(50, 600);
           
            predict.insert({x:qua1, y:qua2});
            revenue.insert({x:qua3, y:qua4});
            show_preandrev();
        },
        'click #remove_preandrev': function() {
        },
        'click #show_preandrev': function() {
            show_preandrev();
        },



        /* algorithm contribution 3 lines button events*/
        'click #add_algorithm': function() {
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
        },
        'click #show_algo_cur_data': function() {
            show_algo_cur_data();
        }
    });
    Template.churn.events({

        /* predict and actual revenue button events*/
        'click #add_preandrev': function() {
            var qua1 = getRandomInt(10343432383, 11343432383);
            var qua2 = getRandomInt(0, 113434);
            var qua3 = getRandomInt(10343432383, 11343432383);
            var qua4 = getRandomInt(50, 600);
           
            predict.insert({x:qua1, y:qua2});
            revenue.insert({x:qua3, y:qua4});
            show_preandrev();
        },
        'click #remove_preandrev': function() {
        },
        'click #show_preandrev': function() {
            show_preandrev();
        },



        /* algorithm contribution 3 lines button events*/
        'click #add_algorithm': function() {
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
        },
        'click #show_algo_cur_data': function() {
            show_algo_cur_data();
        }
    });
    Template.target.events({

        /* predict and actual revenue button events*/
        'click #add_preandrev': function() {
            var qua1 = getRandomInt(10343432383, 11343432383);
            var qua2 = getRandomInt(0, 113434);
            var qua3 = getRandomInt(10343432383, 11343432383);
            var qua4 = getRandomInt(50, 600);
           
            predict.insert({x:qua1, y:qua2});
            revenue.insert({x:qua3, y:qua4});
            show_preandrev();
        },
        'click #remove_preandrev': function() {
        },
        'click #show_preandrev': function() {
            show_preandrev();
        },



        /* algorithm contribution 3 lines button events*/
        'click #add_algorithm': function() {
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
        },
        'click #show_algo_cur_data': function() {
            show_algo_cur_data();
        }
    });
    Template.influence.events({

        /* predict and actual revenue button events*/
        'click #add_preandrev': function() {
            var qua1 = getRandomInt(10343432383, 11343432383);
            var qua2 = getRandomInt(0, 113434);
            var qua3 = getRandomInt(10343432383, 11343432383);
            var qua4 = getRandomInt(50, 600);
           
            predict.insert({x:qua1, y:qua2});
            revenue.insert({x:qua3, y:qua4});
            show_preandrev();
        },
        'click #remove_preandrev': function() {
        },
        'click #show_preandrev': function() {
            show_preandrev();
        },



        /* algorithm contribution 3 lines button events*/
        'click #add_algorithm': function() {
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
        },
        'click #show_algo_cur_data': function() {
            show_algo_cur_data();
        }
    });
    Template.main.events({
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
                show_preandrev();
                show_algorithm();
                show_algo_cur_data();
            });
            show_preandrev();
            show_algorithm();
            show_algo_cur_data();
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
                        return this.y + '';
                    }
                }
            }
        },

        legend: {
            enabled: false
        },

        series: [{
            name: 'Temperatures',
            data: [
                [9, 29],
                [11, 20],
                [4, 23],
                [18, 19.9],
                [2.0, 22.6],
                [2.9, 29.5],
                [9.2, 40.7],
                [7.3, 26.5],
                [4.4, 18.0],
                [3.1, 11.4],
                [5.2, 10.4],
                [13.5, 19.8]
            ]
        }]
    };
};