﻿/*** Capacity Chart in Dashboard page ***/
var chart;
$(document).ready(function() {
    var highchartsOptions = Highcharts.setOptions(Highcharts.theme);
    chart = new Highcharts.Chart({
	chart: {
	 renderTo: 'CapacityWidget',
	 margin: [0, 0, 20, 0],
	 backgroundColor: null,
	 plotBackgroundColor: 'none',
	 height: 305,
	},
	 credits: {
	     enabled: false
	 },
	 plotOptions: {
	     pie: {
		 allowPointSelect: true,
	 cursor: 'pointer',
	 showInLegend: true,
	 dataLabels: {
	     enabled: true,
	 }
	     }	  
	 },
	 legend: {
	     enabled: true,
	     layout: 'horizontal',
	     width: "100%",
	     verticalAlign: 'bottom',
	     align: 'center',
	     itemDistance: 40,
	     floating: true
	 },
	 title: {
	     text: capacityUnit(0),
	    y: 130,
	    x: 0,
	    style: {
		font: 'normal 28px Verdana, sans-serif',
            }
	 },
	 
	 subtitle: {
            text: 'Total',
	    y: 150,
	    x: 0,
	    style: {
		font: 'normal 14px Verdana, sans-serif',
            }
         },

	 tooltip: {
	     formatter: function() { 
		 return this.point.name +': '+ this.y +' %';

	     } 	
	 },

	 series: [
	 {
	     borderWidth: 3,
	     borderColor: '#F1F3EB',
	     shadow: false,	
	     type: 'pie',
	     name: 'Capacity',
	     //size: "45%",
	     innerSize: '65%',
	     stickyTracking: true,
	     showInLegend: true,
	     data: [
	     { name: 'Data', y: 30, color: '#b2c831' },
	     { name: 'Replicas', y: 40, color: '#2E8AE6' },
	     { name: 'Free', y: 30, color: '#3d3d3d' }	],
	     dataLabels: {
		 enabled: true,
		 connectorColor: '#000000',
		 padding : 1,
		 formatter: function() {
		     return Math.round(this.percentage*100)/100 + ' %';
		 },
		 distance: -28,
		 color:'white'
	     }
	 }],

    });

});

Highcharts.theme = {
	colors: ["#DDDF0D", "#7798BF", "#55BF3B", "#DF5353", "#aaeeee", "#ff0066", "#eeaaee",
	"#55BF3B", "#DF5353", "#7798BF", "#aaeeee"],
	chart: {
	    backgroundColor: {
		linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
		stops: [
		    [0, 'rgb(96, 96, 96)'],
		[1, 'rgb(16, 16, 16)']
		    ]
	    },
	    borderWidth: 0,
	    borderRadius: 0,
	    plotBackgroundColor: null,
	    plotShadow: false,
	    plotBorderWidth: 0
	},
	title: {
	    style: {
		color: '#FFF',
		font: '16px Lucida Grande, Lucida Sans Unicode, Verdana, Arial, Helvetica, sans-serif'
	    }
	},
	subtitle: {
	    style: {
		color: '#DDD',
		font: '12px Lucida Grande, Lucida Sans Unicode, Verdana, Arial, Helvetica, sans-serif'
	    }
	},
	xAxis: {
	    gridLineWidth: 0,
	    lineColor: '#999',
	    tickColor: '#999',
	    labels: {
		style: {
		    color: '#999',
		    fontWeight: 'bold'
		}
	    },
	    title: {
		style: {
		    color: '#AAA',
		    font: 'bold 12px Lucida Grande, Lucida Sans Unicode, Verdana, Arial, Helvetica, sans-serif'
		}
	    }
	},
	yAxis: {
	    alternateGridColor: null,
	    minorTickInterval: null,
	    gridLineColor: 'rgba(255, 255, 255, .1)',
	    minorGridLineColor: 'rgba(255,255,255,0.07)',
	    lineWidth: 0,
	    tickWidth: 0,
	    labels: {
		style: {
		    color: '#999',
		    fontWeight: 'bold'
		}
	    },
	    title: {
		style: {
		    color: '#AAA',
		    font: 'bold 12px Lucida Grande, Lucida Sans Unicode, Verdana, Arial, Helvetica, sans-serif'
		}
	    }
	},
	legend: {
	    itemStyle: {
		color: '#CCC'
	    },
	    itemHoverStyle: {
		color: '#FFF'
	    },
	    itemHiddenStyle: {
		color: '#333'
	    }
	},
	labels: {
	    style: {
		color: '#CCC'
	    }
	},
	tooltip: {
	    backgroundColor: {
		linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
		stops: [
		    [0, 'rgba(96, 96, 96, .8)'],
		[1, 'rgba(16, 16, 16, .8)']
		    ]
	    },
	    borderWidth: 0,
	    style: {
		color: '#FFF'
	    }
	},


	plotOptions: {
	    series: {
		nullColor: '#444444'
	    },
	    line: {
		dataLabels: {
		    color: '#CCC'
		},
		marker: {
		    lineColor: '#333'
		}
	    },
	    spline: {
		marker: {
		    lineColor: '#333'
		}
	    },
	    scatter: {
		marker: {
		    lineColor: '#333'
		}
	    },
	    candlestick: {
		lineColor: 'white'
	    }
	},

	toolbar: {
	    itemStyle: {
		color: '#CCC'
	    }
	},

	navigation: {
	    buttonOptions: {
		symbolStroke: '#DDDDDD',
		hoverSymbolStroke: '#FFFFFF',
		theme: {
		    fill: {
			linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
			stops: [
			    [0.4, '#606060'],
			[0.6, '#333333']
			    ]
		    },
		    stroke: '#000000'
		}
	    }
	},

	// scroll charts
	rangeSelector: {
	    buttonTheme: {
		fill: {
		    linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
		    stops: [
			[0.4, '#888'],
		    [0.6, '#555']
			]
		},
		stroke: '#000000',
		style: {
		    color: '#CCC',
		    fontWeight: 'bold'
		},
		states: {
		    hover: {
			fill: {
			    linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
			    stops: [
				[0.4, '#BBB'],
			    [0.6, '#888']
				]
			},
			stroke: '#000000',
			style: {
			    color: 'white'
			}
		    },
		    select: {
			fill: {
			    linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
			    stops: [
				[0.1, '#000'],
			    [0.3, '#333']
				]
			},
			stroke: '#000000',
			style: {
			    color: 'yellow'
			}
		    }
		}
	    },
	    inputStyle: {
		backgroundColor: '#333',
		color: 'silver'
	    },
	    labelStyle: {
		color: 'silver'
	    }
	},

	navigator: {
	    handles: {
		backgroundColor: '#666',
		borderColor: '#AAA'
	    },
	    outlineColor: '#CCC',
	    maskFill: 'rgba(16, 16, 16, 0.5)',
	    series: {
		color: '#7798BF',
		lineColor: '#A6C7ED'
	    }
	},

	scrollbar: {
	    barBackgroundColor: {
		linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
		stops: [
		    [0.4, '#888'],
		[0.6, '#555']
		    ]
	    },
	    barBorderColor: '#CCC',
	    buttonArrowColor: '#CCC',
	    buttonBackgroundColor: {
		linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
		stops: [
		    [0.4, '#888'],
		[0.6, '#555']
		    ]
	    },
	    buttonBorderColor: '#CCC',
	    rifleColor: '#FFF',
	    trackBackgroundColor: {
		linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
		stops: [
		    [0, '#000'],
		[1, '#333']
		    ]
	    },
	    trackBorderColor: '#666'
	},

	// special colors for some of the demo examples
	legendBackgroundColor: 'rgba(48, 48, 48, 0.8)',
	background2: 'rgb(70, 70, 70)',
	dataLabelsColor: '#444',
	textColor: '#E0E0E0',
	maskColor: 'rgba(255,255,255,0.3)'
    };


    function chartUpdate(){
	if(window.capacity == undefined){return ;}
	var used =  Math.round(window.capacity.used/(window.capacity.physical/100));
	var replicas = Math.round(window.capacity.replicas_space/(window.capacity.physical/100));
	var data = [ { name: 'Data ' + capacityUnit(window.capacity.used - window.capacity.replicas_space ), y: used - replicas, color: '#b2c831' },
	    { name: 'Replicas ' + capacityUnit(window.capacity.replicas_space), y: replicas, color: '#2E8AE6' },
	    { name: 'Free ' + capacityUnit(window.capacity.free), y: 100 - used, color: '#3d3d3d' } ] ;
	
	chart.setTitle({ text: capacityUnit(window.capacity.physical) });
	
	window.chart.series[0].setData(data,true);
	// window.chart.series[0].setTitle(title,
    }

    setInterval(chartUpdate, 2000);

// transform mb to gb
function mb2Tb(mb_size){
    return mb_size * 9.53674316 * Math.pow(10, -7);
}
//transform mb to tb
function mb2Gb(mb_size){
    return mb_size * 9.765625  * Math.pow(10, -4);
}

function capacityUnit(mb_size){

    if(mb_size < 1000){
	return mb_size.toFixed(2) + " MB";
    }else if(mb_size < 999999 ){
	return mb2Gb(mb_size).toFixed(2) +" GB";
    }else{
	return mb2Tb(mb_size).toFixed(2) +" TB";
    }
}
