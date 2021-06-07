/// LINE CHART

var colorLine = ['#85b97b','#7db173','#75a96b','#6da262','#659a5a','#5c9252','#548a4a','#4c8341','#447b39','#3c7331']
var dataHari = [];
var dataY = [];
var dataKategori = []
var dataKota = ["Jakarta Barat", "Jakarta Pusat", "Jakarta Selatan", "Jakarta Timur", "Jakarta Utara"]

if (kota != "DKI Jakarta"){
    data = data.filter(el => el.Kota == kota);
}

if (kategori != "Fashion Muslim"){
    data = data.filter(el => el.Kategori == kategori);
}


//console.log(data)
// var data = data.filter(el => el.Kota == "Jakarta Barat")

for (i = 0; i < data.length; i++){
    if(!dataHari.includes(data[i].Tanggal)){
        dataHari.push(data[i].Tanggal);
    } 
    if(kategori == "Fashion Muslim"){
        if(!dataKategori.includes(data[i].Kategori)){
            dataKategori.push(data[i].Kategori);     
        }
    } else{
        if(!dataKategori.includes(data[i].SubKategori)){
            dataKategori.push(data[i].SubKategori);     
        }
    }
    

    var idx = dataHari.indexOf(data[i].Tanggal);
    if (typeof(dataY[idx]) == 'undefined') {
        dataY[idx] = data[i].UnitTerjual_sum
    } else{
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


console.log(dataLine1)
var myChart = new Chart(ctxLine1, {
    type: 'line',
    data: dataLine1,
    options: gradientChartOptionsConfigurationWithTooltipGreen
});

colorLine = ["#38908f", "#c2EBE0", "#5E96AE", "#ffBFA3", "#E08963", "#ce8054", "#FEBE28"]
var dt;
var dataPenjualanKota = [];
for(i = 0; i < dataKota.length; i++){
    dt = data.filter(el => el.Kota == dataKota[i])
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

if(kota == "DKI Jakarta"){
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
    //console.log(tmp)
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