//SHEET ONE

//Advances Current Position
var val1 = document.getElementById("item-value-1").innerHTML;
var d1 = document.getElementById("val-1-main");
var arrow1 = document.getElementById("arrow-val1");
console.log(val1);

if (val1 > 1000) {
    d1.classList.add("text-success");
    arrow1.classList.add("fa-caret-up");
} else if (val1 < 1000) {
    d1.classList.add("text-danger");
    arrow1.classList.add("fa-caret-down");
} else {
    // Silence is Golden
}

//Advances Current Position
var val2 = document.getElementById("item-value-2").innerHTML;
var d2 = document.getElementById("val-2-main");
var arrow2 = document.getElementById("arrow-val2");
console.log(val1);

if (val2 > 1000) {
    d2.classList.add("text-success");
    arrow2.classList.add("fa-caret-up");
} else if (val2 < 1000) {
    d2.classList.add("text-danger");
    arrow2.classList.add("fa-caret-down");
} else {
    // Silence is Golden
}

//Advances Current Position
var val3 = document.getElementById("item-value-3").innerHTML;
var d3 = document.getElementById("val-3-main");
var arrow3 = document.getElementById("arrow-val3");
console.log(val1);

if (val3 > 1000) {
    d3.classList.add("text-success");
    arrow3.classList.add("fa-caret-up");
} else if (val3 < 1000) {
    d3.classList.add("text-danger");
    arrow3.classList.add("fa-caret-down");
} else {
    // Silence is Golden
}

//CURRENT DESPOSITS

var ctx = document.getElementById('c_chart').getContext('2d');
ctx.height = 50;
var value1 = 650;
var value2 = 1000;

var data = {
    labels: [
        "Credit Card-Current",
        "Credit Card-Target Remaning"
    ],
    datasets: [{
        data: [value2, value1],
        backgroundColor: [
            "#80A5CC",
            "#D7A398"
        ],
        hoverBackgroundColor: [
            "#0065E0",
            "#D41326"
        ]
    }]
};

var c_chart = new Chart(ctx, {
    type: 'doughnut',
    data: data,
    options: {
        title: {
            display: true,
            text: 'Current Deposits'
        },
        legend: {
            display: false
        },
        rotation: 1 * Math.PI,
        circumference: 1 * Math.PI,
    }

});

//SAVING DEPOSITS

var stx = document.getElementById('s_chart').getContext('2d');
stx.height = 50;
var value2 = 650;
var data = {
    labels: [
        "Credit Card-Current",
        "Credit Card-Target Remaning"
    ],
    datasets: [{
        data: [1000, value1],
        backgroundColor: [
            "#80A5CC",
            "#D7A398"
        ],
        hoverBackgroundColor: [
            "#0065E0",
            "#D41326"
        ]
    }]
};

var s_chart = new Chart(stx, {
    type: 'doughnut',
    data: data,
    options: {
        title: {
            display: true,
            text: 'Savings Deposit'
        },
        legend: {
            display: false
        },
        rotation: 1 * Math.PI,
        circumference: 1 * Math.PI,
    }

});

//TERM DEPOSITS

var tetx = document.getElementById('te_chart').getContext('2d');
tetx.height = 50;
var value3 = 650;
var data = {
    labels: [
        "Credit Card-Current",
        "Credit Card-Target Remaning"
    ],
    datasets: [{
        data: [1000, value1],
        backgroundColor: [
            "#80A5CC",
            "#D7A398"
        ],
        hoverBackgroundColor: [
            "#0065E0",
            "#D41326"
        ]
    }]
};

var te_chart = new Chart(tetx, {
    type: 'doughnut',
    data: data,
    options: {
        title: {
            display: true,
            text: 'Term Deposit'
        },
        legend: {
            display: false
        },
        rotation: 1 * Math.PI,
        circumference: 1 * Math.PI,
    }

});

//TOTAL DEPOSITS

var tottx = document.getElementById('tot_chart').getContext('2d');
tottx.height = 50;
var value4 = 650;
var data = {
    labels: [
        "Credit Card-Current",
        "Credit Card-Target Remaning"
    ],
    datasets: [{
        data: [1000, value1],
        backgroundColor: [
            "#80A5CC",
            "#D7A398"
        ],
        hoverBackgroundColor: [
            "#0065E0",
            "#D41326"
        ]
    }]
};

var tot_chart = new Chart(tottx, {
    type: 'doughnut',
    data: data,
    options: {
        title: {
            display: true,
            text: 'Total Deposit'
        },
        legend: {
            display: false
        },
        rotation: 1 * Math.PI,
        circumference: 1 * Math.PI,
    }

});

//DISBURSEMENT

var distx = document.getElementById('dis_chart').getContext('2d');
distx.height = 50;
var valuex = 650;
var data = {
    labels: [
        "Credit Card-Current",
        "Credit Card-Target Remaning"
    ],
    datasets: [{
        data: [1000, value1],
        backgroundColor: [
            "#80A5CC",
            "#D7A398"
        ],
        hoverBackgroundColor: [
            "#0065E0",
            "#D41326"
        ]
    }]
};

var dis_chart = new Chart(distx, {
    type: 'doughnut',
    data: data,
    options: {
        title: {
            display: true,
            text: 'Disbursements'
        },
        legend: {
            display: false
        }
    }
});

//Stacked Bars

var barChartData = {
    labels: ['Updated As Of 3rd Dec 2019'],
    datasets: [{
        label: 'Dataset 1',
        backgroundColor: "#80A5CC",
        data: [
            50,

        ]
    }, {
        label: 'Dataset 2',
        backgroundColor: "#D7A398",
        data: [
            90,
        ]
    }, {
        label: 'Dataset 3',
        backgroundColor: "#93B57D",
        data: [
            50,

        ]
    }, ]

};
window.onload = function () {
    var ctx = document.getElementById('canvas').getContext('2d');
    window.myBar = new Chart(ctx, {
        type: 'bar',
        data: barChartData,
        options: {
            datalabels: {
                color: '#fff'
            },
            legend: {
                display: false
            },
            title: {
                display: true,
                text: 'Number of Policies Sold'
            },
            tooltips: {
                mode: 'index',
                intersect: false
            },
            maintainAspectRatio: false,
            responsive: true,
            scales: {
                xAxes: [{
                    stacked: true,
                    gridLines: {
                        drawBorder: false,
                    },
                }],
                yAxes: [{
                    stacked: true,
                    gridLines: {
                        drawBorder: false,
                    },
                    ticks: {
                        display: false //this will remove only the label
                    },
                }]
            }
        }
    });
};

//DEBIT

var dbttx = document.getElementById('dbt_chart').getContext('2d');
dbttx.height = 50;
var valuey = 650;
var data = {
    labels: [
        "Credit Card-Current",
        "Credit Card-Target Remaning"
    ],
    datasets: [{
        data: [1000, value1],
        backgroundColor: [
            "#80A5CC",
            "#D7A398"
        ],
        hoverBackgroundColor: [
            "#0065E0",
            "#D41326"
        ]
    }]
};

var dbt_chart = new Chart(dbttx, {
    type: 'doughnut',
    data: data,
    options: {
        legend: {
            display: false
        },
        title: {
            display: true,
            text: 'Debit Card Registration'
        }
    }
});

//Credit

var crttx = document.getElementById('crt_chart').getContext('2d');
crttx.height = 50;
var valuecc = 650;
var data = {
    labels: [
        "Credit Card-Current",
        "Credit Card-Target Remaning"
    ],
    datasets: [{
        data: [1000, value1],
        backgroundColor: [
            "#80A5CC",
            "#D7A398"
        ],
        hoverBackgroundColor: [
            "#0065E0",
            "#D41326"
        ]
    }]
};

var crt_chart = new Chart(crttx, {
    type: 'doughnut',
    data: data,
    options: {
        legend: {
            display: false
        },
        title: {
            display: true,
            text: 'Credit Card Registration'
        },
    }
});


// SHEET TWO

//One
var val4 = document.getElementById("item-value-4").innerHTML;
var d4 = document.getElementById("val-4-main");
var arrow4 = document.getElementById("arrow-val4");
console.log(val1);

if (val4 > 1000) {
    d4.classList.add("text-success");
    arrow4.classList.add("fa-caret-up");
} else if (val4 < 1000) {
    d4.classList.add("text-danger");
    arrow4.classList.add("fa-caret-down");
} else {
    // Silence is Golden
}

//Two
var val5 = document.getElementById("item-value-5").innerHTML;
var d5 = document.getElementById("val-5-main");
var arrow5 = document.getElementById("arrow-val5");
console.log(val1);

if (val5 > 1000) {
    d5.classList.add("text-success");
    arrow5.classList.add("fa-caret-up");
} else if (val5 < 1000) {
    d5.classList.add("text-danger");
    arrow5.classList.add("fa-caret-down");
} else {
    // Silence is Golden
}

//Three
var val6 = document.getElementById("item-value-6").innerHTML;
var d6 = document.getElementById("val-6-main");
var arrow6 = document.getElementById("arrow-val6");
console.log(val1);

if (val6 > 1000) {
    d6.classList.add("text-success");
    arrow6.classList.add("fa-caret-up");
} else if (val6 < 1000) {
    d6.classList.add("text-danger");
    arrow6.classList.add("fa-caret-down");
} else {
    // Silence is Golden
}

//NOW COMES THE CHARTS

//CURRENT DESPOSITS

var ctx = document.getElementById('c_chart-1').getContext('2d');
ctx.height = 50;
var value1 = 650;
var value2 = 1000;

var data = {
    labels: [
        "Credit Card-Current",
        "Credit Card-Target Remaning"
    ],
    datasets: [{
        data: [value2, value1],
        backgroundColor: [
            "#80A5CC",
            "#D7A398"
        ],
        hoverBackgroundColor: [
            "#0065E0",
            "#D41326"
        ]
    }]
};

var c_chart = new Chart(ctx, {
    type: 'doughnut',
    data: data,
    options: {
        title: {
            display: true,
            text: 'Current Deposits'
        },
        legend: {
            display: false
        },
        rotation: 1 * Math.PI,
        circumference: 1 * Math.PI,
    }

});

//Pie Chart

var canvas = document.getElementById("pie-chart");
var ctx = canvas.getContext('2d');

// Global Options:
Chart.defaults.global.defaultFontColor = 'black';
Chart.defaults.global.defaultFontSize = 16;

var data = {
    labels: ["Probably ", "Yes", "No"],
    datasets: [{
        fill: true,
        backgroundColor: [
            '#80A5CC',
            '#D7A398',
            'yellow'
        ],
        data: [15, 70, 15],
        // Notice the borderColor 
        borderColor: ['black', 'black', 'black'],
        borderWidth: [2, 2]
    }]
};

// Notice the rotation from the documentation.

var options = {
    title: {
        display: true,
        text: 'Negative effect from budget ?',
        position: 'top'
    },
    legend: {
        display: false
    },
    rotation: -0.7 * Math.PI
};


// Chart declaration:
var myBarChart = new Chart(ctx, {
    type: 'pie',
    data: data,
    options: options
});

//Bullet Graphs are not available in Chart.js
//We'll use Stacked Graphs instead

 // Return with commas in between
 var numberWithCommas = function(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

var dataPack1 = [21000, 22000, 26000, 35000];
var dataPack2 = [2000, 2200, 2300, 2400];
var dates = ["May 1", "May 2", "May 3", "May 4"];

// Chart.defaults.global.elements.rectangle.backgroundColor = '#FF0000';

var bar_ctx = document.getElementById('stacked-chart');
var bar_chart = new Chart(bar_ctx, {
    type: 'bar',
    data: {
        labels: dates,
        datasets: [
        {
            label: 'Bowser',
            data: dataPack1,
						backgroundColor: "#80A5CC",
						hoverBackgroundColor: "rgba(55, 160, 225, 0.7)",
						hoverBorderWidth: 2,
						hoverBorderColor: 'black'
        },
        {
            label: 'Mario',
            data: dataPack2,
						backgroundColor: "#D7A398",
						hoverBackgroundColor: "rgba(225, 58, 55, 0.7)",
						hoverBorderWidth: 2,
						hoverBorderColor: 'black'
        },
        ]
    },
    options: {
     		animation: {
        	duration: 10,
        },
        tooltips: {
					mode: 'label',
          callbacks: {
          label: function(tooltipItem, data) { 
          	return data.datasets[tooltipItem.datasetIndex].label + ": " + numberWithCommas(tooltipItem.yLabel);
          }
          }
         },
        scales: {
          xAxes: [{ 
          	stacked: true, 
            gridLines: { display: false },
            }],
          yAxes: [{ 
          	stacked: true, 
            ticks: {
        			callback: function(value) { return numberWithCommas(value); },
     				}, 
            }],
        }, // scales
        legend: {display: false}
    } // options
   }
);