function changeText(text) {
    var temp = [0]
    for (var i = 0; i < text.length; i++) {
        if (text[i] === text[i].toUpperCase()) {
            temp.push(text.indexOf(text[i]))
        }
    }

    if (temp.length === 0) {
        return text.charAt(0).toUpperCase() + text.slice(1, text.length)
    }

    var result = '';

    temp.push(text.length)
    for (i = 0; i < temp.length; i++) {
        result += text.charAt(temp[i]).toUpperCase() + text.slice(temp[i] + 1, temp[i + 1]) + ' '
    }
    return result;

}

// console.log(changeText('argumentSnUb'))


function createChart(argument) {
    if (!argument.ctx) return console.log('Deklarasikan ctx terlebih dahulu');
    if (!argument.data) return console.log('data harus ditentukan');
    if (!argument.namaVariabel) return console.log('Deklarasikan nama variable');

    namaVariabel = argument.namaVariabel;
    var typeChart = 'pie';
    var label = 'Default Label';
    var colors = defaultColors;
    var borderColor = 'rgb(255, 255, 255)';
    var backgroundColor = defaultColors;
    var beginAtZero = true;
    var borderWidth = 0;
    var displayLegend = true;
    var displayGridLineX = true;
    var displayGridLineY = true;
    var stacked = true;
    var legendPosition = 'bottom';
    var legendPadding = 20;
    var legendBoxWidth = 20;
    var cutoutPercentage = 0;
    var titleFontSize = 0;
    var angleLinesDisplay = true;
    var suggestedMax = 10;
    var suggestedMin = 0;
    var displayLabelX = false;
    var displayLabelY = false;
    var labelX = 'Default Label X';
    var labelY = 'Default Label Y';

    if (argument.typeChart) typeChart = argument.typeChart;
    if (argument.ctx) ctx = argument.ctx;
    if (argument.data) data = argument.data;
    if (argument.label) label = argument.label;
    if (argument.colors) colors = argument.colors;
    if (argument.borderColor) borderColor = argument.borderColor;
    if (argument.backgroundColor) backgroundColor = argument.backgroundColor;
    if (argument.borderWidth) borderWidth = argument.borderWidth;
    if (argument.displayLegend === false) displayLegend = argument.displayLegend;
    if (argument.displayGridLineX === false) displayGridLineX = argument.displayGridLineX;
    if (argument.displayGridLineY === false) displayGridLineY = argument.displayGridLineY;
    if (argument.beginAtZero === false) beginAtZero = argument.beginAtZero;
    if (argument.stacked === false) stacked = argument.stacked;
    if (argument.legendPosition) legendPosition = argument.legendPosition;
    if (argument.legendPadding && argument.legendPadding !== 0) legendPadding = argument.legendPadding;
    if (argument.legendBoxWidth && argument.legendBoxWidth !== 0) legendBoxWidth = argument.legendBoxWidth;
    if (argument.cutoutPercentage && argument.cutoutPercentage !== 0) cutoutPercentage = argument.cutoutPercentage;
    if (argument.titleFontSize && argument.titleFontSize !== 0) titleFontSize = argument.titleFontSize;
    if (argument.suggestedMax && argument.suggestedMax !== 0) suggestedMax = argument.suggestedMax;
    if (argument.suggestedMin && argument.suggestedMin !== 0) suggestedMin = argument.suggestedMin;
    if (angleLinesDisplay) angleLinesDisplay = argument.angleLinesDisplay;
    if (argument.labelX) { labelX = argument.labelX; displayLabelX = true }
    if (argument.labelY) { labelY = argument.labelY; displayLabelY = true }



    switch (typeChart) {
        case 'pie': {
            key = Object.keys(data[0])
            var labels = [];
            var value = []
            for (var i = 0; i < key.length; i++) {
                for (var j = 0; j < data.length; j++) {
                    // console.log(data[j][key[i]]);
                    if (i === 0) {
                        labels.push(data[j][key[i]])
                    } else {
                        value.push(data[j][key[i]])
                    }
                }
            }
            window[namaVariabel] = new Chart(ctx, {
                type: typeChart,
                data: {
                    labels: labels,
                    datasets: [{
                        label: label,
                        data: value,
                        backgroundColor: colors,
                        borderColor: borderColor,
                        borderWidth: borderWidth
                    }]
                },
                options: {
                    cutoutPercentage: cutoutPercentage,
                    legend: {
                        display: displayLegend,
                        position: legendPosition,
                        labels: {
                            padding: legendPadding,
                            boxWidth: legendBoxWidth
                        }
                    }
                }
            });
            break;
        }

        case 'polarArea': {
            key = Object.keys(data[0])
            var labels = [];
            var value = []
            for (var i = 0; i < key.length; i++) {
                for (var j = 0; j < data.length; j++) {
                    // console.log(data[j][key[i]]);
                    if (i === 0) {
                        labels.push(data[j][key[i]])
                    } else {
                        value.push(data[j][key[i]])
                    }
                }
            }
            window[namaVariabel] = new Chart(ctx, {
                type: typeChart,
                data: {
                    labels: labels,
                    datasets: [{
                        label: label,
                        data: value,
                        backgroundColor: colors,
                        borderColor: borderColor,
                        borderWidth: borderWidth
                    }]
                },
                options: {
                    cutoutPercentage: cutoutPercentage,
                    legend: {
                        display: displayLegend,
                        position: legendPosition,
                        labels: {
                            padding: legendPadding,
                            boxWidth: legendBoxWidth
                        }
                    }
                }
            });
            break;
        }

        case 'radar': {
            key = Object.keys(data[0])
            var labels = [];
            var value = [[], [], [], [], [], [], [], [], [], []]
            for (var i = 0; i < key.length; i++) {
                for (var j = 0; j < data.length; j++) {
                    // console.log(data[j][key[i]]);
                    if (i === 0) {
                        labels.push(data[j][key[i]])
                    } else {
                        value[i - 1].push(data[j][key[i]])
                    }
                }
            }
            // console.log(colors[4])

            var datasets = []
            for (var i = 0; i < value.length; i++) {
                if (value[i].length !== 0) {
                    var temp = {
                        label: changeText(key[i + 1]),
                        data: value[i],
                        borderColor: colors[i],
                        borderWidth: 3
                    }
                    datasets.push(temp)
                }
            }

            // console.log(datasets)
            window[namaVariabel] = new Chart(ctx, {
                type: typeChart,
                data: {
                    labels: labels,
                    datasets: datasets
                },
                options: {
                    scale: {
                        angleLines: {
                            display: angleLinesDisplay
                        },
                        ticks: {
                            suggestedMin: suggestedMin,
                            suggestedMax: suggestedMax
                        }
                    },
                    legend: {
                        display: displayLegend,
                        position: legendPosition,
                        labels: {
                            boxWidth: legendBoxWidth
                        }
                    },
                    tooltips: {
                        titleFontSize: titleFontSize
                    }
                }
            });

            break;
        }

        case 'horizontalBar': {
            key = Object.keys(data[0])
            var labels = [];
            var value = [[], [], [], [], [], [], [], [], [], []]
            for (var i = 0; i < key.length; i++) {
                for (var j = 0; j < data.length; j++) {
                    // console.log(data[j][key[i]]);
                    if (i === 0) {
                        labels.push(data[j][key[i]])
                    } else {
                        value[i - 1].push(data[j][key[i]])
                    }
                }
            }


            var datasets = []
            for (var i = 0; i < value.length; i++) {
                if (value[i].length !== 0) {
                    var temp = {
                        label: changeText(key[i + 1]),
                        data: value[i],
                        backgroundColor: colors[i],
                        borderColor: colors[i],
                        borderWidth: 1
                    }
                    datasets.push(temp)
                }
            }


            window[namaVariabel] = new Chart(ctx, {
                type: typeChart,
                data: {
                    labels: labels,
                    datasets: datasets
                },
                options: {
                    scales: {
                        xAxes: [{
                            ticks: {
                                beginAtZero: beginAtZero
                            },
                            gridLines: {
                                display: displayGridLineX
                            },
                            stacked: stacked,
                            scaleLabel: {
                                display: displayLabelX,
                                labelString: labelX
                            }
                        }],
                        yAxes: [{
                            // display : false
                            gridLines: {
                                display: displayGridLineY
                            },
                            stacked: stacked,
                            scaleLabel: {
                                display: displayLabelY,
                                labelString: labelY
                            }
                        }]
                    },
                    legend: {
                        display: displayLegend
                    }
                }
            });
            break;
        }

        case 'bar': {
            key = Object.keys(data[0])
            var labels = [];
            var value = [[], [], [], [], [], [], [], [], [], []]
            for (var i = 0; i < key.length; i++) {
                for (var j = 0; j < data.length; j++) {
                    // console.log(data[j][key[i]]);
                    if (i === 0) {
                        labels.push(data[j][key[i]])
                    } else {
                        value[i - 1].push(data[j][key[i]])
                    }
                }
            }


            var datasets = []
            for (var i = 0; i < value.length; i++) {
                if (value[i].length !== 0) {
                    var temp = {
                        label: changeText(key[i + 1]),
                        data: value[i],
                        backgroundColor: colors[i],
                        borderColor: colors[i],
                        borderWidth: 1
                    }
                    datasets.push(temp)
                }
            }


            window[namaVariabel] = new Chart(ctx, {
                type: typeChart,
                data: {
                    labels: labels,
                    datasets: datasets
                },
                options: {
                    scales: {
                        xAxes: [{
                            gridLines: {
                                display: displayGridLineX
                            },
                            stacked: stacked,
                            scaleLabel: {
                                display: displayLabelX,
                                labelString: labelX
                            }
                        }],
                        yAxes: [{
                            ticks: {
                                beginAtZero: beginAtZero
                            },
                            // display : false
                            gridLines: {
                                display: displayGridLineY
                            },
                            stacked: stacked,
                            scaleLabel: {
                                display: displayLabelY,
                                labelString: labelY
                            }
                        }]
                    },
                    legend: {
                        display: displayLegend,
                        position: legendPosition,
                        labels: {
                            padding: legendPadding,
                            boxWidth: legendBoxWidth
                        }
                    }
                }
            });
            break;
        }

        case 'piramida': {
            key = Object.keys(data[0]);
            var labels = [];
            var value = [[], []];
            for (var i = 0; i < key.length; i++) {
                for (var j = 0; j < data.length; j++) {
                    // console.log(data[j][key[i]]);
                    if (i === 0) {
                        labels.push(data[j][key[i]])
                    } else {
                        value[i - 1].push(data[j][key[i]])
                    }
                }
            }

            var king = key;


            // var datasets = []
            // for(var i = 0; i < value.length; i++){
            //     if(value[i].length !== 0){
            //         var temp = {
            //             label: changeText(key[i+1]),
            //             data: value[i],
            //             backgroundColor: colors[i],
            //             borderColor: colors[i],
            //             borderWidth: 1
            //         }
            //         datasets.push(temp)
            //     }
            // }
            // console.log(value[2].map(x => x*(-1)))
            window[namaVariabel] = new Chart(ctx, {
                type: 'horizontalBar',
                data: {
                    labels: labels,
                    datasets: [{
                        label: changeText(key[1]),
                        data: value[0].map(x => x * (-1)),
                        backgroundColor: colors[0],
                        borderColor: colors[0],
                        borderWidth: 1
                    }, {
                        label: changeText(key[2]),
                        data: value[1],
                        backgroundColor: colors[1],
                        borderColor: colors[1],
                        borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                        xAxes: [{
                            ticks: {
                                beginAtZero: true,
                                callback: (v) => { return v < 0 ? -v : v }
                            },
                            stacked: true,
                            scaleLabel: {
                                display: displayLabelX,
                                labelString: labelX
                            }
                        }],
                        yAxes: [{
                            // display : false
                            gridLines: {
                                display: false
                            },
                            stacked: true,
                            scaleLabel: {
                                display: displayLabelY,
                                labelString: labelY
                            }
                        }]
                    },
                    legend: {
                        display: displayLegend,
                        position: legendPosition,
                        labels: {
                            padding: legendPadding,
                            boxWidth: legendBoxWidth
                        }
                    },
                    tooltips: {
                        callbacks: {
                            label: (c) => {
                                const value = Number(c.value);
                                const positiveOnly = value < 0 ? -value : value;
                                let retStr = "";
                                if (c.datasetIndex === 0) {
                                    retStr += `${changeText(king[1])} : ${positiveOnly.toString()}`;
                                } else {
                                    retStr += `${changeText(king[2])} : ${positiveOnly.toString()}`;
                                }
                                return retStr;
                            }
                        }
                    }
                }
            });
            break;
        }

        case 'ipa': {
            var dataXY = [];
            var sumX = 0;
            var sumY = 0;

            var labels = [];
            key = Object.keys(data[0]);
            // for(var i = 0; i < key.length-1; i++){
            //     for(var j = 0; j < data.length; j++){
            //         if (i === 0) {
            //             labels.push(data[j][key[i]])
            //         } else {
            //             value[i-1].push(data[j][key[i]])
            //         } 
            //     }
            // }
            var king = key;
            for (var i = 0; i < data.length; i++) {
                labels.push(data[i][key[0]])
                dataXY.push({ x: data[i][key[1]], y: data[i][key[2]] });
                sumX += +data[i][key[1]];
                sumY += +data[i][key[2]];
            };

            var meanX = sumX / data.length;
            var meanY = sumY / data.length;

            // console.log(dataIPA.map(namaProvinsi => namaProvinsi.provinsi))

            var minX = Math.round((Math.min.apply(Math, dataXY.map(h => h.x)) - 5) / 10) * 10;
            var maxX = Math.round((Math.max.apply(Math, dataXY.map(h => h.x)) + 5) / 10) * 10;
            var minY = Math.round((Math.min.apply(Math, dataXY.map(h => h.y)) - 5) / 10) * 10;
            var maxY = Math.round((Math.max.apply(Math, dataXY.map(h => h.y)) + 5) / 10) * 10;

            // console.log(Math.round(59/10)*10)

            // var ctxScatter = document.getElementById('scatterChart').getContext('2d');
            window[namaVariabel] = new Chart(ctx, {
                data: {
                    labels: labels,
                    datasets: [
                        {
                            type: 'line',
                            label: 'Legend',
                            data: dataXY,
                            backgroundColor: defaultColors[0],
                            showLine: false
                        },
                        {
                            type: 'line',
                            label: 'Legend',
                            data: [{ x: meanX, y: 30 }, { x: meanX, y: 100 }],
                            borderColor: defaultColors[1],
                            pointRadius: 0,
                            showLine: true,
                            fill: false
                        },
                        {
                            type: 'line',
                            label: 'Legend',
                            data: [{ x: 30, y: meanY }, { x: 100, y: meanY }],
                            borderColor: defaultColors[2],
                            pointRadius: 0,
                            showLine: true,
                            fill: false
                        }
                    ]
                },
                options: {
                    scales: {
                        xAxes: [{
                            ticks: {
                                max: maxX,
                                min: minX
                            },
                            type: 'linear',
                            scaleLabel: {
                                display: true,
                                labelString: changeText(key[1])
                            }
                        }],
                        yAxes: [{
                            ticks: {
                                max: maxY,
                                min: minY
                            },
                            type: 'linear',
                            scaleLabel: {
                                display: true,
                                labelString: changeText(key[2])
                            }
                        }],
                    },
                    legend: {
                        display: displayLegend
                    },
                    tooltips: {
                        displayColors: false,
                        //titleFontSize: 10,
                        callbacks: {
                            title: function (tooltipItem, data) {
                                return data['labels'][tooltipItem[0]['index']]
                            },
                            label: function (tooltipItem, data) {

                                return changeText(king[1]) + ' : ' + tooltipItem.xLabel + '; ' + changeText(king[2]) + ' : ' + tooltipItem.yLabel;
                            }
                        }
                    }
                }
            });
            break;
        }

        case 'scatter': {
            var dataXY = [];
            var sumX = 0;
            var sumY = 0;

            var labels = [];
            key = Object.keys(data[0]);
            // for(var i = 0; i < key.length-1; i++){
            //     for(var j = 0; j < data.length; j++){
            //         if (i === 0) {
            //             labels.push(data[j][key[i]])
            //         } else {
            //             value[i-1].push(data[j][key[i]])
            //         } 
            //     }
            // }
            var king = key;

            for (var i = 0; i < data.length; i++) {
                labels.push(data[i][key[0]])
                dataXY.push({ x: data[i][key[1]], y: data[i][key[2]] });
                sumX += +data[i][key[1]];
                sumY += +data[i][key[2]];
            };

            var meanX = sumX / data.length;
            var meanY = sumY / data.length;

            // console.log(dataIPA.map(namaProvinsi => namaProvinsi.provinsi))

            var minX = Math.round((Math.min.apply(Math, dataXY.map(h => h.x)) - 5) / 10) * 10;
            var maxX = Math.round((Math.max.apply(Math, dataXY.map(h => h.x)) + 5) / 10) * 10;
            var minY = Math.round((Math.min.apply(Math, dataXY.map(h => h.y)) - 5) / 10) * 10;
            var maxY = Math.round((Math.max.apply(Math, dataXY.map(h => h.y)) + 5) / 10) * 10;

            // console.log(Math.round(59/10)*10)

            // var ctxScatter = document.getElementById('scatterChart').getContext('2d');
            window[namaVariabel] = new Chart(ctx, {
                data: {
                    labels: labels,
                    datasets: [
                        {
                            type: 'line',
                            label: 'Legend',
                            data: dataXY,
                            backgroundColor: defaultColors[0],
                            showLine: false
                        }
                    ]
                },
                options: {
                    scales: {
                        xAxes: [{
                            ticks: {
                                max: maxX,
                                min: minX
                            },
                            gridLines: {
                                display: displayGridLineX
                            },
                            type: 'linear',
                            scaleLabel: {
                                display: true,
                                labelString: changeText(key[1])
                            }
                        }],
                        yAxes: [{
                            ticks: {
                                max: maxY,
                                min: minY
                            },
                            gridLines: {
                                display: displayGridLineY
                            },
                            type: 'linear',
                            scaleLabel: {
                                display: true,
                                labelString: changeText(key[2])
                            }
                        }],
                    },
                    legend: {
                        display: displayLegend
                    },
                    tooltips: {
                        displayColors: false,
                        //titleFontSize: 10,
                        callbacks: {
                            title: function (tooltipItem, data) {
                                return data['labels'][tooltipItem[0]['index']]
                            },
                            label: function (tooltipItem, data) {

                                return changeText(king[1]) + ' : ' + tooltipItem.xLabel + '; ' + changeText(king[2]) + ' : ' + tooltipItem.yLabel;
                            }
                        }
                    }
                }
            });
            break;
        }




    }
}

function download(chart, title) {
    if (window.navigator.msSaveBlob) {
        window.navigator.msSaveBlob(chart.msToBlob(), title + ".png");
    } else {
        const a = document.createElement("a");
        document.body.appendChild(a);
        a.href = chart.toBase64Image();
        a.download = title + ".png";
        a.click();
        document.body.removeChild(a);
    }
}

