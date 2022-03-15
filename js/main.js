(function() {
    function init() {
        renderCharts(window.languageData.charts);
    }

    function getDateLabels() {
        const formatMonth = function (month) {
            const formattedMonth = month + 1;

            return formattedMonth >= 10 ? formattedMonth : '0' + formattedMonth
        }

        const startDate = new Date('2022-02-24');
        const endDate = new Date('2022-03-15');
        let currentDate = startDate;
        const labels = [];

        while (currentDate.getTime() <= endDate.getTime()) {
            labels.push(currentDate.getDate() + '.' + formatMonth(currentDate.getMonth()));
            currentDate = new Date(currentDate.getTime() + 86400000)
        }

        return labels;
    }

    function renderChart(idElement, datasets, chartTitle) {
        const labels = getDateLabels();

        return new Chart(idElement, {
            data: {
                datasets: datasets,
                labels: labels
            },
            options: {
                maintainAspectRatio: false,
                plugins: {
                    title: {
                        display: true,
                        text: chartTitle,
                        font: {
                            size: '16',
                            weight: 'bold'
                        }
                    }
                }
            }
        });
    }

    function renderCharts(languageData) {
        const data = getData();

        const tanks = {
            type: 'line',
            label: languageData.tanks,
            data: data.tanks,
            borderColor: '#003f5c',
            backgroundColor: '#003f5c'
        }

        const bbms = {
            type: 'line',
            label: languageData.bbms,
            data: data.bbms,
            borderColor: '#ffa600',
            backgroundColor: '#ffa600'
        }

        const autos = {
            type: 'line',
            label: languageData.autos,
            data: data.autos,
            borderColor: '#bc5090',
            backgroundColor: '#bc5090',
        }

        const airplanes = {
            type: 'line',
            label: languageData.airplanes,
            data: data.airplanes,
            borderColor: '#aecdc2',
            backgroundColor: '#aecdc2'
        }

        const helicopters = {
            type: 'line',
            label: languageData.helicopters,
            data: data.helicopters,
            borderColor: '#f0b8b8',
            backgroundColor: '#f0b8b8'
        }

        const bpla = {
            type: 'line',
            label: languageData.bpla,
            data: data.bpla,
            borderColor: '#ada600',
            backgroundColor: '#ada600'
        }

        const ppos = {
            type: 'line',
            label: languageData.ppos,
            data: data.ppos,
            borderColor: '#ea5545',
            backgroundColor: '#ea5545'
        }

        const gradAndBucks = {
            type: 'line',
            label: languageData.gradAndBucks,
            data: data.gradAndBucks,
            borderColor: '#f46a9b',
            backgroundColor: '#f46a9b'
        }

        const artillery = {
            type: 'line',
            label: languageData.artillery,
            data: data.artillery,
            borderColor: '#ef9b20',
            backgroundColor: '#ef9b20'
        }

        const tankers = {
            type: 'line',
            label: languageData.tankers,
            data: data.tankers,
            borderColor: '#bdcf32',
            backgroundColor: '#bdcf32'
        }

        const boats = {
            type: 'line',
            label: languageData.boats,
            data: data.boats,
            borderColor: '#0ea4D4',
            backgroundColor: '#0ea4D4'
        }

        const personal = {
            type: 'line',
            label: languageData.personal,
            data: data.personal,
            borderColor: '#ef9b20',
            backgroundColor: '#ef9b20'
        }

        const earthLosses = [tanks, bbms, autos];
        const skyLosses = [airplanes, helicopters, bpla];
        const earthOtherLosses = [ppos, gradAndBucks, artillery, tankers, boats];
        const personalLosses = [personal];

        window.earthChart = renderChart('chartMordorLossesEarth', earthLosses, languageData.title.earth);
        window.skyChart = renderChart('chartMordorLossesSky', skyLosses, languageData.title.sky);
        window.earthChartOther = renderChart('chartMordorLossesEarthOther', earthOtherLosses, languageData.title.earthOther);
        window.personalChart = renderChart('chartMordorLossesPersonal', personalLosses, languageData.title.personal);

    }

    init();
})();