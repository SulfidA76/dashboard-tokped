/// LINE CHART

var colorLine = ['#85b97b', '#7db173', '#75a96b', '#6da262', '#659a5a', '#5c9252', '#548a4a', '#4c8341', '#447b39', '#3c7331']
var dataHari = [];
var dataY = [];
var dataKategori = []
var dataKota = ["Jakarta Barat", "Jakarta Pusat", "Jakarta Selatan", "Jakarta Timur", "Jakarta Utara"]

if (kota != "DKI Jakarta") {
	data = data.filter(el => el.Kota == kota);
}

if (kategori != "Fashion Muslim") {
	data = data.filter(el => el.Kategori == kategori);
}


// console.log(data)
// var data = data.filter(el => el.Kota == "Jakarta Barat")

for (i = 0; i < data.length; i++) {
	if (!dataHari.includes(data[i].Tanggal)) {
		dataHari.push(data[i].Tanggal);
	}
	if (kategori == "Fashion Muslim") {
		if (!dataKategori.includes(data[i].Kategori)) {
			dataKategori.push(data[i].Kategori);
		}
	} else {
		if (!dataKategori.includes(data[i].SubKategori)) {
			dataKategori.push(data[i].SubKategori);
		}
	}


	var idx = dataHari.indexOf(data[i].Tanggal);
	if (typeof (dataY[idx]) == 'undefined') {
		dataY[idx] = data[i].UnitTerjual_sum
	} else {
		dataY[idx] += data[i].UnitTerjual_sum
	}

}


var ctxLine1 = document.getElementById("chartLine1").getContext("2d");

var gradientStroke = ctxLine1.createLinearGradient(0, 230, 0, 50);

gradientStroke.addColorStop(1, 'rgba(72,72,176,0.2)');
gradientStroke.addColorStop(0.2, 'rgba(72,72,176,0.0)');
gradientStroke.addColorStop(0, 'rgba(119,52,169,0)'); //purple colors


gradientChartOptionsConfigurationWithTooltipGreen = {
	maintainAspectRatio: false,
	legend: {
		display: false
	},

	tooltips: {
		backgroundColor: '#f5f5f5',
		titleFontColor: '#333',
		bodyFontColor: '#666',
		bodySpacing: 4,
		xPadding: 12,
		mode: "nearest",
		intersect: 0,
		position: "nearest"
	},
	responsive: true,
	scales: {
		yAxes: [{
			barPercentage: 1.6,
			gridLines: {
				drawBorder: false,
				color: 'rgba(29,140,248,0.0)',
				zeroLineColor: "transparent",
			},
			ticks: {
				suggestedMin: 60,
				suggestedMax: 125,
				padding: 20,
				fontColor: "#9a9a9a"
			}
		}],

		xAxes: [{
			barPercentage: 1.6,
			gridLines: {
				drawBorder: false,
				color: 'rgba(225,78,202,0.1)',
				zeroLineColor: "transparent",
			},
			ticks: {
				padding: 20,
				fontColor: "#9a9a9a"
			}
		}]
	}
};
dataY0 = []
dataHari0 = []
for (i = 0; i < dataY.length - 1; i++){
  dataY0[i] = dataY[i+1] - dataY[i]
  dataHari0[i] = dataHari[i+1]
}

console.log(dataHari0)

var dataLine0 = {
	labels: dataHari0,
	datasets: [{
		label: "Produk Terjual",
		fill: true,
		backgroundColor: gradientStroke,
		borderColor: '#5DA64E',
		borderWidth: 2,
		borderDash: [],
		borderDashOffset: 0.0,
		pointBackgroundColor: '#5DA64E',
		pointBorderColor: 'rgba(255,255,255,0)',
		pointHoverBackgroundColor: '#5DA64E',
		pointBorderWidth: 20,
		pointHoverRadius: 4,
		pointHoverBorderWidth: 15,
		pointRadius: 4,
		data: dataY0
	}]
};

var ctxLine0 = document.getElementById("chartLine0").getContext("2d");

var myChart = new Chart(ctxLine0, {
	type: 'line',
	data: dataLine0,
	options: gradientChartOptionsConfigurationWithTooltipGreen
});

var dataLine1 = {
	labels: dataHari,
	datasets: [{
		label: "Produk Terjual",
		fill: true,
		backgroundColor: gradientStroke,
		borderColor: '#5DA64E',
		borderWidth: 2,
		borderDash: [],
		borderDashOffset: 0.0,
		pointBackgroundColor: '#5DA64E',
		pointBorderColor: 'rgba(255,255,255,0)',
		pointHoverBackgroundColor: '#5DA64E',
		pointBorderWidth: 20,
		pointHoverRadius: 4,
		pointHoverBorderWidth: 15,
		pointRadius: 4,
		data: dataY
	}]
};



var myChart = new Chart(ctxLine1, {
	type: 'line',
	data: dataLine1,
	options: gradientChartOptionsConfigurationWithTooltipGreen
});

colorLine = ["#38908f", "#c2EBE0", "#5E96AE", "#ffBFA3", "#E08963", "#ce8054", "#FEBE28"]
var dt;
var dataPenjualanKota = [];
for (i = 0; i < dataKota.length; i++) {
	dt = data.filter(el => el.Kota == dataKota[i])
	var tmp = []
	for (j = 0; j < dt.length; j++) {
		var idx = dataHari.indexOf(dt[j].Tanggal);
		// console.log(idx)
		if (typeof (tmp[idx]) == 'undefined') {
			tmp[idx] = dt[j].UnitTerjual_sum
		} else {
			tmp[idx] += dt[j].UnitTerjual_sum
		}
	}
	dataPenjualanKota.push(
		{
			label: dataKota[i],
			fill: true,
			backgroundColor: gradientStroke,
			borderColor: colorLine[i],
			borderWidth: 2,
			borderDash: [],
			borderDashOffset: 0.0,
			pointBackgroundColor: colorLine[i],
			pointBorderColor: 'rgba(255,255,255,0)',
			pointHoverBackgroundColor: colorLine[i],
			pointBorderWidth: 20,
			pointHoverRadius: 4,
			pointHoverBorderWidth: 15,
			pointRadius: 4,
			data: tmp,
		}
	)
}

if (kota == "DKI Jakarta") {
	var ctxLine2 = document.getElementById("chartLine2").getContext("2d");
	var myChart = new Chart(ctxLine2, {
		type: 'line',
		data: {
			labels: dataHari,
			datasets: dataPenjualanKota
		},
		options: gradientChartOptionsConfigurationWithTooltipGreen
	});
}


var dt;
var dataPenjualanKategori = [];

for(i = 0; i < dataKategori.length; i++){
    if(kategori == "Fashion Muslim"){
        dt = data.filter(el => el.Kategori == dataKategori[i])
    } else{
        dt = data.filter(el => el.SubKategori == dataKategori[i])
    }
    
    var tmp = []
    for(j = 0; j < dt.length; j++){
        var idx = dataHari.indexOf(dt[j].Tanggal);
        // console.log(idx)
        if (typeof(tmp[idx]) == 'undefined') {
            tmp[idx] =dt[j].UnitTerjual_sum
        } else{
            tmp[idx] += dt[j].UnitTerjual_sum
        }
    }
    dataPenjualanKategori.push(
        {
            label: dataKategori[i],
            fill: true,
            backgroundColor: gradientStroke,
            borderColor: colorLine[i],
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            pointBackgroundColor: colorLine[i],
            pointBorderColor: 'rgba(255,255,255,0)',
            pointHoverBackgroundColor: colorLine[i],
            pointBorderWidth: 20,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 15,
            pointRadius: 4,
            data: tmp,
        }
    )

}
var ctxLine3 = document.getElementById("chartLine3").getContext("2d");
var myChart = new Chart(ctxLine3, {
	type: 'line',
	data: {
		labels: dataHari,
		datasets: dataPenjualanKategori
	},
	options: gradientChartOptionsConfigurationWithTooltipGreen
});
// console.log(dataPenjualanKota)


// END OF LINE CHART



/// BEGIN : RADAR CHART
if (kota == "DKI Jakarta") {
var marksCanvas = document.getElementById("radarChart2").getContext("2d");

var DataFM = {
  labels: ["Atasan", "Bawahan", "Dress", "Jilbab", "Pakaian Muslim Anak", "Pakaian Muslim Pria", "Peralatan Ibadah"],
  datasets: [ 
  {
    label: "Jakarta Utara",
    backgroundColor: "rgba(255, 247, 102, 0.5)",
    data: [40196,2435,13554,59168,33003,223849]
  },{
    label: "Jakarta Selatan",
    backgroundColor: "rgba(102, 255, 107, 0.5)",
    data: [127672,1633,103889,133738,27690,60851,235632]
  },{
    label: "Jakarta Timur",
    backgroundColor: "rgba(102, 229, 255, 0.5)",
    data: [48125,5409,8875,124057,35002,134430,102811]
  },{
    label: "Jakarta Pusat",
    backgroundColor: "rgba(176, 102, 255, 0.5)",
    data: [76361,1559,111545,66774,14360,93139,1001320]
  },{
    label: "Jakarta Barat",
    backgroundColor: "rgba(200,0,0,0.5)",
    data: [128776,11026,66806,76863,52088,201566,378355]
  }]
};

var DataAW = {
    labels: ["Blouse", "Manset", "Syari", "Tunik"],
    datasets: [ 
    {
      label: "Jakarta Utara",
      backgroundColor: "rgba(255, 247, 102, 0.5)",
      data: [2625,3725,18653,15193]
    },{
      label: "Jakarta Pusat",
      backgroundColor: "rgba(176, 102, 255, 0.5)",
      data: [3489,19410,42748,10714]
    }, {
      label: "Jakarta Selatan",
      backgroundColor: "rgba(102, 255, 107, 0.5)",
      data: [2101,39645,79900,6026]
    }, {
      label: "Jakarta Timur",
      backgroundColor: "rgba(102, 229, 255, 0.5)",
      data: [525,7772,34234,5594]
    },{
        label: "Jakarta Barat",
        backgroundColor: "rgba(200,0,0,0.5)",
        data: [7408,25591,62769,33008]
    }]
};

var DataBW = {
    labels: ["Jakarta Barat","Jakarta Pusat", "Jakarta Selatan", "Jakarta Timur", "Jakarta Utara"],
    datasets: [ {
      label: "Kulot",
      backgroundColor: "rgba(176, 102, 255, 0.5)",
      data: [1298,33,8,1748,876]
    }, {
      label: "Rok",
      backgroundColor: "rgba(102, 255, 107, 0.5)",
      data: [9728,1526,1625,3661,1559]
    }]
};

var DataD = {
    labels: ["Jakarta Barat","Jakarta Pusat", "Jakarta Selatan", "Jakarta Timur", "Jakarta Utara"],
    datasets: [ 
        {
            label: "Abaya,Jumpsuit,Kaftan",
            backgroundColor: "rgba(102, 255, 107, 1)",
            data: [3064,2342,1914,632,1213]
          },{
      label: "Gamis",
      backgroundColor: "rgba(176, 102, 255, 0.5)",
      data: [63742,109203,101975,8243,12341]
    }]
};

var DataJ = {
    labels: ["Jilbab","Khimar","Pashmina","Turban"],
    datasets: [ 
      {
        label: "Jakarta Utara",
        backgroundColor: "rgba(255, 247, 102, 0.5)",
        data: [53217,1534,4382,35]
      },{
      label: "Jakarta Pusat",
      backgroundColor: "rgba(176, 102, 255, 0.5)",
      data: [53935,1420,4285,7134]
    }, {
      label: "Jakarta Selatan",
      backgroundColor: "rgba(102, 255, 107, 0.5)",
      data: [91606,6156,21487,14489]
    }, {
      label: "Jakarta Timur",
      backgroundColor: "rgba(102, 229, 255, 0.5)",
      data: [88379,8766,26020,892]
    },{
        label: "Jakarta Barat",
        backgroundColor: "rgba(200,0,0,0.5)",
        data: [47707,9885,17450,1821]
    }]
};

var DataPMA = {
    labels: ["Busana Muslim","Gamis","Jilbab","Koko","Mukena","Peci","Sarung"],
    datasets: [ 
    {
      label: "Jakarta Utara",
      backgroundColor: "rgba(255, 247, 102, 0.5)",
      data: [963,14717,1316,6169,387,143,9308]
    },{
      label: "Jakarta Pusat",
      backgroundColor: "rgba(176, 102, 255, 0.5)",
      data: [99,1910,286,2156,1989,127,7793]
    }, {
      label: "Jakarta Selatan",
      backgroundColor: "rgba(102, 255, 107, 0.5)",
      data: [3347,4730,12554,3499,1170,405,1985]
    }, {
      label: "Jakarta Timur",
      backgroundColor: "rgba(102, 229, 255, 0.5)",
      data: [401,8454,4833,12829,2807,3737,1941]
    },{
        label: "Jakarta Barat",
        backgroundColor: "rgba(200,0,0,0.5)",
        data: [1366,13860,4560,20535,7353,2380,2034]
    }]
};

var DataPMP = {
    labels: ["Celana Sarung","Celana Sirwal","Gamis","Koko","Peci","Sorban"],
    datasets: [ 
    {
      label: "Jakarta Utara",
      backgroundColor: "rgba(255, 247, 102, 0.5)",
      data: [1052,9182,14289,37915,11574,2615]
    },{
      label: "Jakarta Pusat",
      backgroundColor: "rgba(176, 102, 255, 0.5)",
      data: [300,9302,4200,34014,39750,5573]
    }, {
      label: "Jakarta Selatan",
      backgroundColor: "rgba(102, 255, 107, 0.5)",
      data: [3813,3538,34302,10857,8285]
    }, {
      label: "Jakarta Timur",
      backgroundColor: "rgba(102, 229, 255, 0.5)",
      data: [4168,48373,2892,17692,60737,568]
    },{
        label: "Jakarta Barat",
        backgroundColor: "rgba(200,0,0,0.5)",
        data: [2205,9441,13642,130000,44182,2096]
    }]
};

var DataPI = {
    labels: ["Mukena","Sajadah","Sarung","Tasbih"],
    datasets: [ 
        {
            label: "Jakarta Utara",
            backgroundColor: "rgba(255, 247, 102, 0.5)",
            data: [2045,60062,59999,101743]
          },{
      label: "Jakarta Pusat",
      backgroundColor: "rgba(176, 102, 255, 0.5)",
      data: [48197,483259,363004,106860]
    }, {
      label: "Jakarta Selatan",
      backgroundColor: "rgba(102, 255, 107, 0.5)",
      data: [31870,39182,39835,124745]
    }, {
      label: "Jakarta Timur",
      backgroundColor: "rgba(102, 229, 255, 0.5)",
      data: [36693,11259,26192,28667]
    },{
        label: "Jakarta Barat",
        backgroundColor: "rgba(200,0,0,0.5)",
        data: [83389,167676,52668,74622]
    }]
};

if (kategori == "Fashion Muslim"){
    var radarChart = new Chart(marksCanvas, {
        type: 'radar',
        data: DataFM,
        options: {
          legend: {
              display: true,
              position: 'right',
              boxWidth : 5,
              fontSize : 10,
              fontColor: 'rgb(0,0,0)',
              fullWidth: false,
              labels: {
                fontColor: "#aaaaaa"
              }
          },
          scale: {
            gridLines: {
              color: '#aaaaaa'
            },
            pointLabels:{
              fontColor:"#aaaaaa",
           },
          }
        }
      });
}

if (kategori == "Atasan Wanita"){
    var radarChart = new Chart(marksCanvas, {
        type: 'radar',
        data: DataAW,
        options: {
          legend: {
              display: true,
              position: 'right',
              boxWidth : 5,
              fontSize : 10,
              fontColor: 'rgb(0,0,0)',
              fullWidth: false,
              labels: {
                fontColor: "#aaaaaa"
              }
          },
          scale: {
            gridLines: {
              color: '#aaaaaa'
            },
            pointLabels:{
              fontColor:"#aaaaaa",
           },
          }
          
        }
      });
}

if (kategori == "Bawahan Wanita"){
    var radarChart = new Chart(marksCanvas, {
        type: 'radar',
        data: DataBW,
        options: {
          legend: {
              display: true,
              position: 'right',
              boxWidth : 5,
              fontSize : 10,
              fontColor: 'rgb(0,0,0)',
              fullWidth: false,
              labels: {
                fontColor: "#aaaaaa"
              }
          },
          scale: {
            gridLines: {
              color: '#aaaaaa'
            },
            pointLabels:{
              fontColor:"#aaaaaa",
           },
          }
          
        }
      });
}

if (kategori == "Dress"){
    var radarChart = new Chart(marksCanvas, {
        type: 'radar',
        data: DataD,
        options: {
          legend: {
              display: true,
              position: 'right',
              boxWidth : 5,
              fontSize : 10,
              fontColor: 'rgb(0,0,0)',
              fullWidth: false,
              labels: {
                fontColor: "#aaaaaa"
              }
          },
          scale: {
            gridLines: {
              color: '#aaaaaa'
            },
            pointLabels:{
              fontColor:"#aaaaaa",
           },
          }
          
        }
      });
}

if (kategori == "Jilbab"){
    var radarChart = new Chart(marksCanvas, {
        type: 'radar',
        data: DataJ,
        options: {
          legend: {
              display: true,
              position: 'right',
              boxWidth : 5,
              fontSize : 10,
              fontColor: 'rgb(0,0,0)',
              fullWidth: false,
              labels: {
                fontColor: "#aaaaaa"
              }
          },
          scale: {
            gridLines: {
              color: '#aaaaaa'
            },
            pointLabels:{
              fontColor:"#aaaaaa",
           },
          }
          
        }
      });
}

if (kategori == "Pakaian Muslim Anak"){
    var radarChart = new Chart(marksCanvas, {
        type: 'radar',
        data: DataPMA,
        options: {
          legend: {
              display: true,
              position: 'right',
              boxWidth : 5,
              fontSize : 10,
              fontColor: 'rgb(0,0,0)',
              fullWidth: false,
              labels: {
                fontColor: "#aaaaaa"
              }
          },
          scale: {
            gridLines: {
              color: '#aaaaaa'
            },
            pointLabels:{
              fontColor:"#aaaaaa",
           },
          }
          
        }
      });
}

if (kategori == "Pakaian Muslim Pria"){
    var radarChart = new Chart(marksCanvas, {
        type: 'radar',
        data: DataPMP,
        options: {
          legend: {
              display: true,
              position: 'right',
              boxWidth : 5,
              fontSize : 10,
              fontColor: 'rgb(0,0,0)',
              fullWidth: false,
              labels: {
                fontColor: "#aaaaaa"
              }
          },
          scale: {
            gridLines: {
              color: '#aaaaaa'
            },
            pointLabels:{
              fontColor:"#aaaaaa",
           },
          }
          
        }
      });
}

if (kategori == "Peralatan Ibadah"){
    var radarChart = new Chart(marksCanvas, {
        type: 'radar',
        data: DataPI,
        options: {
          legend: {
              display: true,
              position: 'right',
              boxWidth : 5,
              fontSize : 10,
              fontColor: 'rgb(0,0,0)',
              fullWidth: false,
              labels: {
                fontColor: "#aaaaaa"
              }
          },
          scale: {
            gridLines: {
              color: '#aaaaaa'
            },
            pointLabels:{
              fontColor:"#aaaaaa",
           },
          }
          
        }
      });
}
}
/// END : RADAR CHART


// POLAR AREA
// var dataRating = [];
// var dataR11 = [];
// var dataR19 = [];
// var data11 = data.filter(el => el.Tanggal == "11/05/2021");
// var data19 = data.filter(el => el.Tanggal == "19/04/2021");

// for (i = 0; i < data11.length; i++){
//   if(!dataRating.includes(data11[i].Rating_round)){
//       dataRating.push(data11[i].Rating_round);
//   } 
//   if(kategori == "Fashion Muslim"){
//       if(!dataKategori.includes(data11[i].Kategori)){
//           dataKategori.push(data11[i].Kategori);     
//       }
//   } else{
//       if(!dataKategori.includes(data11[i].SubKategori)){
//           dataKategori.push(data11[i].SubKategori);     
//       }
//   }
  
//   var idx = dataRating.indexOf(data11[i].Rating_round);
//   if (typeof(dataR11[idx]) == 'undefined') {
//       dataR11[idx] = data11[i].UnitTerjual_sum
//   } else{
//       dataR11[idx] += data11[i].UnitTerjual_sum
//   }
// }

// for (i = 0; i < data19.length; i++){
//   var idx1 = dataRating.indexOf(data19[i].Rating_round);
//   if (typeof(dataR19[idx1]) == 'undefined') {
//       dataR19[idx1] = data19[i].UnitTerjual_sum
//   } else{
//       dataR19[idx1] += data19[i].UnitTerjual_sum
//   }

// }

// var dataR = []
// for (i = 0; i < dataR11.length; i++){
//   dataR[i] = dataR11[i]-dataR19[i]
// }
// var ctxPolar = document.getElementById("polarChart").getContext("2d");
// var myChart = new Chart(ctxPolar, {
//   type: 'polarArea',
//   data: {
//       labels: dataRating,
//       datasets: [{
//           label: "Rating",
//           data: dataR,
//           backgroundColor: [
//               'rgba(255, 0, 0, 1)',
//               'rgba(0, 106, 255, 1)',
//               'rgba(255, 144, 36, 1)',
//               'rgba(150, 52, 189, 1)',
//               'rgba(0, 235, 3, 1)'
//           ]
//       }]
//   },
//   options: {
//       responsive: true,
//       legend: {
//           position: 'right',
//           labels: {
//               boxWidth: 20
//           }
//       },
//       layout: {
//           padding: {
//               top: 10,
//               right: 20
//           }
//       }
//   }
// });

/// END : POLAR CHART



///Bar chart

var dataY2 = [];

for (i = 0; i < data.length; i++) {
	var idx = dataKota.indexOf(data[i].Kota);
	if (typeof (dataY2[idx]) == 'undefined') {
		dataY2[idx] = data[i].UnitTerjual_sum
	} else {
		if (data[i].Tanggal == dataHari[dataHari.length - 1]) {
			dataY2[idx] += data[i].UnitTerjual_sum
		}
		else if (data[i].Tanggal == dataHari[0]) {
			dataY2[idx] -= data[i].UnitTerjual_sum
		}
		else {
			dataY2[idx] = data[i].UnitTerjual_sum

		}
	}
}

for (idx = 0; idx < dataKota.length; idx++) {
	dataY2[idx] = (dataY2[idx] / dataHari.length).toFixed(2)
}

gradientBarChartConfiguration = {
	maintainAspectRatio: false,
	legend: {
		display: false
	},

	tooltips: {
		backgroundColor: '#f5f5f5',
		titleFontColor: '#333',
		bodyFontColor: '#666',
		bodySpacing: 4,
		xPadding: 12,
		mode: "nearest",
		intersect: 0,
		position: "nearest"
	},
	responsive: true,
	scales: {
		yAxes: [{

			gridLines: {
				drawBorder: false,
				color: 'rgba(29,140,248,0.1)',
				zeroLineColor: "transparent",
			},
			ticks: {
				suggestedMin: 60,
				suggestedMax: 120,
				padding: 20,
				fontColor: "#9e9e9e"
			}
		}],

		xAxes: [{

			gridLines: {
				drawBorder: false,
				color: 'rgba(29,140,248,0.1)',
				zeroLineColor: "transparent",
			},
			ticks: {
				padding: 20,
				fontColor: "#9e9e9e"
			}
		}]
	}
};
if (kota == "DKI Jakarta") {
var ctxBar1 = document.getElementById("chartBar1").getContext("2d");

var gradientStroke = ctxBar1.createLinearGradient(0, 230, 0, 50);
gradientStroke.addColorStop(1, 'rgba(133,185,123,0.2)');
gradientStroke.addColorStop(0.4, 'rgba(133,185,123,0.0)');
gradientStroke.addColorStop(0, 'rgba(133,185,123,0)'); //blue colors

var dataBar1 = {
	labels: dataKota,
	datasets: [{
		label: "Produk Terjual",
		fill: true,
		backgroundColor: gradientStroke,
		hoverBackgroundColor: gradientStroke,
		borderColor: '#85b97b',
		borderWidth: 2,
		borderDash: [],
		borderDashOffset: 0.0,
		data: dataY2
	}]
};

var myChart = new Chart(ctxBar1, {
	type: 'bar',
	responsive: true,
	legend: {
		display: false
	},
	data: dataBar1,
	options: gradientBarChartConfiguration
});
}
var dataY3 = [];

for (i = 0; i < data.length; i++) {
	if (kategori == "Fashion Muslim") {
		idx = dataKategori.indexOf(data[i].Kategori);
	} else {
		idx = dataKategori.indexOf(data[i].SubKategori);
	}

	if (typeof (dataY3[idx]) == 'undefined') {
		dataY3[idx] = data[i].UnitTerjual_sum
	} else {
		if (data[i].Tanggal == dataHari[dataHari.length - 1]) {
			dataY3[idx] += data[i].UnitTerjual_sum
		}
		else if (data[i].Tanggal == dataHari[0]) {
			dataY3[idx] -= data[i].UnitTerjual_sum
		}
		else {
			dataY3[idx] = data[i].UnitTerjual_sum
		}
	}
}

for (idx = 0; idx < dataKategori.length; idx++) {
	dataY3[idx] = (dataY3[idx] / dataHari.length).toFixed(2);
}

var ctxBar2 = document.getElementById("chartBar2").getContext("2d");

var dataBar2 = {
	labels: dataKategori,
	datasets: [{
		label: "Produk Terjual",
		fill: true,
		backgroundColor: gradientStroke,
		hoverBackgroundColor: gradientStroke,
		borderColor: '#85b97b',
		borderWidth: 2,
		borderDash: [],
		borderDashOffset: 0.0,
		data: dataY3
	}]
};

var myChart2 = new Chart(ctxBar2, {
	type: 'bar',
	responsive: true,
	legend: {
		display: false
	},
	data: dataBar2,
	options: gradientBarChartConfiguration
});

//END OF BAR CHART

///PIE CHART

// var background = ['#3366CC', '#DC3912', '#FF9900', '#109618', '#990099', '#3B3EAC', '#0099C6', '#DD4477', '#66AA00', '#B82E2E', '#316395', '#994499', '#22AA99', '#AAAA11', '#6633CC', '#E67300', '#8B0707', '#329262', '#5574A6', '#3B3EAC'];
// var katDiskon = ["Diskon 0-25%", "Diskon 25-50%", "Diskon 50-75%", "Diskon 75-100%"];
// var diskon = data.map(function (e) {
// 	return Number(e.Diskon_sum);
// });
// for (i = 0; i < data.length; i++) {
// 	data[i]["diskon"] = diskon[i];
// 	if (data[i]["diskon"] < 26) {
// 		data[i]["katdiskon"] = "Diskon 0-25%";
// 	} else if (data[i]["diskon"] < 51) {
// 		data[i]["katdiskon"] = "Diskon 25-50%";
// 	} else if (data[i]["diskon"] < 76) {
// 		data[i]["katdiskon"] = "Diskon 50-75%";
// 	} else {
// 		data[i]["katdiskon"] = "Diskon 75-100%";
// 	}
// }

var background=['#3366CC', '#DC3912', '#FF9900', '#109618', '#990099', '#3B3EAC', '#0099C6', '#DD4477', '#66AA00', '#B82E2E', '#316395', '#994499', '#22AA99', '#AAAA11', '#6633CC', '#E67300', '#8B0707', '#329262', '#5574A6', '#3B3EAC'];
var katDiskon=["(0-25%)","(25-50%)","(50-75%)","(75-100%)"];
		var diskon= data.map(function (e) {
			return Number(e.Diskon_sum);
		});
		for(i = 0; i < data.length; i++){
			data[i]["diskon"]=diskon[i];
			if(data[i]["diskon"]<26){
				data[i]["katdiskon"]="(0-25%)";
			}else if(data[i]["diskon"]<51){
				data[i]["katdiskon"]="(25-50%)";
				}else if(data[i]["diskon"]<76){
				data[i]["katdiskon"]="(50-75%)";
				}else {
				data[i]["katdiskon"]="(75-100%)";
				}			
}


/////////////////////// jumlh produk////////////////////////////////////

var dtKat;
var dataPenjualanKategoriJumlahProduk = [];

for(i = 0; i < dataKategori.length; i++){
    if(kategori == "Fashion Muslim"){
        dtKat = data.filter(el => el.Kategori == dataKategori[i])
    } else{
        dtKat = data.filter(el => el.SubKategori == dataKategori[i])
    }
	var tmpPie = []///tambah
    for(j = 0; j < dtKat.length; j++){
        var idx = dataHari.indexOf(dtKat[j].Tanggal);
		 if (typeof(tmpPie[idx]) == 'undefined') {//////tambah
            tmpPie[idx] =dtKat[j].jumlahProduk
        } else{
            tmpPie[idx] += dtKat[j].jumlahProduk
        }
    }
    dataPenjualanKategoriJumlahProduk.push(
        {
            label: dataKategori[i],
            fill: true,
            backgroundColor: gradientStroke,
            borderColor: colorLine[i],
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            pointBackgroundColor: colorLine[i],
            pointBorderColor: 'rgba(255,255,255,0)',
            pointHoverBackgroundColor: colorLine[i],
            pointBorderWidth: 20,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 15,
            pointRadius: 4,
			Jumlah:tmpPie.reduce((total,current)=>total+current,0),//tambahJumlah Pie
        }
    )

}
//Visualisasi

// console.log(data)
var canvas = document.getElementById('chartPie3');
new Chart(canvas, {

    type: 'pie',    
    data: {
      labels:dataPenjualanKategoriJumlahProduk.map(a => a.label),
      datasets: [{
		  label: '# of Votes',
        data: dataPenjualanKategoriJumlahProduk.map(a => a.Jumlah),
        backgroundColor: background,
		borderWidth: 2
      }]
    },
	options: {
		legend: {
            display: true,
			position:'right',
			labels : {
				fontColor: 'rgb(154, 154, 154)',
				fontSize: 9,
				usePointStyle : true,
				padding: 5
			}
        },
      responsive: true,
      maintainAspectRatio: true,
	   tooltips: {
        backgroundColor: '#f5f5f5',
        titleFontColor: '#333',
        bodyFontColor: '#666',
        bodySpacing: 4,
        xPadding: 12,
        mode: "nearest",
        intersect: 0,
        position: "nearest"
    },
      plugins: {
        labels: [
    {
      render:'percentage',
	  fontColor: "white",
	  position:"outside",
      fontSize: 12
    }
  ],outlabels:{
	display:false
  }
      }
    }

});

// //////////////////////////diskon////////////////////////////////////////////////
// <<<<<<< HEAD
// var dtDiskon;

// var dataPenjualanKategoriDiskon= [];
// for(i = 0; i < katDiskon.length; i++){
//    dtDiskon = data.filter(el => el.katdiskon == katDiskon[i]);
//     var tmp = []
//     for(j = 0; j < dtDiskon.length; j++){
//         var idx = dataHari.indexOf(dtDiskon[j].Tanggal);
// 		 if (typeof(tmp[idx]) == 'undefined') {//////tambah
//             tmp[idx] =dtDiskon[j].UnitTerjual_sum
//         } else{
//             tmp[idx] += dtDiskon[j].UnitTerjual_sum
//         }
//     }
// 	check=tmp.reduce((total,current)=>total+current,0);
// 	if(check!=0){
//     dataPenjualanKategoriDiskon.push(
//         {
//             label: katDiskon[i],
//             fill: true,
//             backgroundColor: gradientStroke,
//             borderColor: colorLine[i],
//             borderWidth: 2,
//             borderDash: [],
//             borderDashOffset: 0.0,
//             pointBackgroundColor: colorLine[i],
//             pointBorderColor: 'rgba(255,255,255,0)',
//             pointHoverBackgroundColor: colorLine[i],
//             pointBorderWidth: 20,
//             pointHoverRadius: 4,
//             pointHoverBorderWidth: 15,
//             pointRadius: 4,
// 			Jumlah:tmp.reduce((total,current)=>total+current,0),
// =======

var dataSubKategori=[];
var katKota;
var dt1;
var dt2;
var dt5=[];
var sum=-1;
function ob(s, d, t,e) {
  this.s = s;
  this.d = d;
  this.t = t;
  this.e=e;
}
var Jdiskon=[];	
	if(kota == "DKI Jakarta"){
	for (j = 0; j <dataKota.length ; j++){
		katKota=data.filter(el => el.Kota ==dataKota[j])		
		for (k = 0; k <dataKategori.length; k++){
					
			if(kategori == "Fashion Muslim"){
				dt1=katKota.filter(el => el.Kategori==dataKategori[k])	
				for (i = 0; i <dt1.length; i++){
				 if(!dataSubKategori.includes(dt1[i].SubKategori)){
				 dataSubKategori.push(dt1[i].SubKategori)}   
				}
				for (m= 0; m<dataSubKategori.length; m++){
				dt2=dt1.filter(el => el.SubKategori==dataSubKategori[m])
				for (n= 0; n<katDiskon.length; n++){
					dt3=[];
					dt3=dt2.filter(el => el.katdiskon==katDiskon[n])
					var dt4=[];
					for (o= 0; o<dt3.length; o++){
					dt4.push(dt3[o].UnitTerjual_sum)
					}
					dt5[n]=Math.max.apply(null,dt4)						
				}
				sum+=1
			Jdiskon[sum]=new ob(dt5[0],dt5[1],dt5[2],dt5[3]);
		}
			}else{
				dt2=katKota.filter(el => el.SubKategori==dataKategori[k])
				for (n= 0; n<katDiskon.length; n++){
					dt3=[];
					dt3=dt2.filter(el => el.katdiskon==katDiskon[n])
					var dt4=[];
					for (o= 0; o<dt3.length; o++){
					dt4.push(dt3[o].UnitTerjual_sum)
					}
					dt5[n]=Math.max.apply(null,dt4)	
					
				}
				sum+=1
			Jdiskon[sum]=new ob(dt5[0],dt5[1],dt5[2],dt5[3]);
			
				
		}
		}
}
}


if(kota != "DKI Jakarta"){
		katKota=data.filter(el => el.Kota ==kota);		
		for (k = 0; k <dataKategori.length; k++){			
			if(kategori == "Fashion Muslim"){
				dt1=katKota.filter(el => el.Kategori==dataKategori[k])	
				for (i = 0; i <dt1.length; i++){
				 if(!dataSubKategori.includes(dt1[i].SubKategori)){
				 dataSubKategori.push(dt1[i].SubKategori)}   
				}
				for (m= 0; m<dataSubKategori.length; m++){
                    dt2=dt1.filter(el => el.SubKategori==dataSubKategori[m])
                        for (n= 0; n<katDiskon.length; n++){
                            dt3=[];
                            dt3=dt2.filter(el => el.katdiskon==katDiskon[n])
                            var dt4=[];
                            for (o= 0; o<dt3.length; o++){
                            dt4.push(dt3[o].UnitTerjual_sum)
                            }
                            dt5[n]=Math.max.apply(null,dt4)						
                        }
                    sum+=1
                    Jdiskon[sum]=new ob(dt5[0],dt5[1],dt5[2],dt5[3]);
// >>>>>>> piechart
		        }
			}else{
				dt2=katKota.filter(el => el.SubKategori==dataKategori[k])
				for (n= 0; n<katDiskon.length; n++){
					dt3=[];
					dt3=dt2.filter(el => el.katdiskon==katDiskon[n])
					var dt4=[];
					for (o= 0; o<dt3.length; o++){
					dt4.push(dt3[o].UnitTerjual_sum)
					}
					dt5[n]=Math.max.apply(null,dt4)	
					
				}
				sum+=1
			Jdiskon[sum]=new ob(dt5[0],dt5[1],dt5[2],dt5[3]);
			
				
		}
		}
}
 
 var data1=[];
 var data2=[];
 var data3=[];
 var data4=[];
 
for (i= 0; i<Jdiskon.length; i++){
	data1.push(Jdiskon[i].s);
	data2.push(Jdiskon[i].d);
	data3.push(Jdiskon[i].t);
	data4.push(Jdiskon[i].e);
	
// <<<<<<< HEAD
//     )

// 	}
// =======
}
sum1=[null,null,null,null]
for (i= 0; i<data1.length; i++){
	if (!isFinite( data1[i])) { continue; }
	sum1[0]+=data1[i]
}
for (i= 0; i<data2.length; i++){
	if (!isFinite( data2[i])) { continue; }
	sum1[1]+=data1[i]
}
for (i= 0; i<data3.length; i++){
	if (!isFinite( data3[i])) { continue; }
	sum1[2]+=data1[i]
}
for (i= 0; i<data4.length; i++){
	if (!isFinite( data4[i])) { continue; }
	sum1[3]+=data4[i]
}
label=[]
datafix=[]
for (i= 0; i<sum1.length; i++){
	if(sum1[i]===null) { continue; }
	label.push(katDiskon[i])
	datafix.push(sum1[i])
// >>>>>>> piechart
}

//visualisasi

var ctxPie2= document.getElementById('chartPie2').getContext('2d');

var myChart2 = new Chart(ctxPie2, {
	type: "outlabeledPie",
  data: {
    labels:katDiskon,
    datasets: [{
        backgroundColor: ["#FF3784", "#36A2EB", "#4BC0C0", "#F77825", "#9966FF"],
        data:datafix
		}]
  },
  options: {legend: {
            display: true,
			position:'top',
			labels : {

				fontColor: 'rgb(154, 154, 154)',
				fontSize:10,
				usePointStyle : true,
				padding:3
			}

        },
    plugins: {
      legend:true,
      outlabels: {
        text: "%p",
        color: "black",
        stretch: 35,
        font: {
          resizable:false,
          minSize: 5,
          maxSize: 8
        },
		
      }
    },
	layout: {
                 padding:{
                left: 30,
                right:30,
            }
               }
  }
});
///end of pie 


