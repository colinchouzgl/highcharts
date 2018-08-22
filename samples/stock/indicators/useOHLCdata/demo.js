
$.getJSON('https://www.highcharts.com/samples/data/aapl-ohlc.json', function (data) {

    Highcharts.stockChart('container', {

        rangeSelector: {
            selected: 2
        },

        title: {
            text: 'AAPL Stock Price'
        },

        legend: {
            enabled: true
        },

        plotOptions: {
            series: {
                showInLegend: true
            }
        },

        series: [{
            type: 'line',
            useOHLCdata: true,
            id: 'aapl',
            name: 'AAPL Stock Price',
            data: data
        }, {
            type: 'atr',
            linkedTo: 'aapl'
        }]
    });
});