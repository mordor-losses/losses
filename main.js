(function() {
    function initEvents() {
        document.getElementById('languages').addEventListener('click', function(event){
            const language = event.target.id.replace('_language', '');
            const languageData = getLanguageData(language)

            changeLanguageData(languageData.main)
            updateCharts(languageData.charts);
        })
    }

    function changeLanguageData(languageData) {
        Object.keys(languageData).forEach(function(languageKey) {
            const element = document.getElementById(languageKey);
            if (element) {
                element.innerHTML = languageData[languageKey];
            }
        })
    }

    function init() {
        initEvents();
        renderChart(getLanguageData().charts);
    }

    function updateCharts(languageData) {
        window.earthChart.destroy();
        window.earthChartOther.destroy();
        window.skyChart.destroy();
        window.personalChart.destroy();

        renderChart(languageData);
    }

    function renderChart(languageData) {
        const earthChart = document.getElementById('chartMordorLossesEarth');
        const earthOtherChart = document.getElementById('chartMordorLossesEarthOther');
        const skyChart = document.getElementById('chartMordorLossesSky');

        const labels = [
           '24.02',
           '25.02',
           '26.02',
           '27.02',
           '28.02',
           '01.03',
           '02.03',
           '03.03',
           '04.03',
           '05.03',
           '06.03',
           '07.03'
        ];

        const tanks = {
            type: 'line',
            label: languageData.tanks,
            data: [30, 80, 100, 150, 191, 198, 211, 217, 251, 269, 285, 290],
            borderColor: '#003f5c',
            backgroundColor: '#003f5c'
        }

        const bbms = {
            type: 'line',
            label: languageData.bbms,
            data: [130, 516, 540, 706, 816, 846, 862, 900, 939,945, 985, 999],
            borderColor: '#ffa600',
            backgroundColor: '#ffa600'
        }

        const autos = {
            type: 'line',
            label: languageData.autos,
            data: [0,0,0,0, 291, 305, 355, 374, 404, 409, 447, 454],
            borderColor: '#bc5090',
            backgroundColor: '#bc5090',
        }

        const airplanes = {
            type: 'line',
            label: languageData.airplanes,
            data: [7, 10, 16, 27, 29, 29, 30, 30, 37, 39, 44, 46],
            borderColor: '#aecdc2',
            backgroundColor: '#aecdc2'
        }

        const helicopters = {
            type: 'line',
            label: languageData.helicopters,
            data: [6, 7, 18, 26, 29, 29, 31, 31, 37, 40, 48, 68],
            borderColor: '#f0b8b8',
            backgroundColor: '#f0b8b8'
        }

        const bpla = {
            type: 'line',
            label: languageData.bpla,
            data: [0,0,0,2, 3, 3, 3, 3, 3,3, 4, 7],
            borderColor: '#ada600',
            backgroundColor: '#ada600'
        }

        const ppos = {
            type: 'line',
            label: languageData.ppos,
            data: [0, 0, 0, 0, 0, 7, 9, 11, 18, 19, 21, 23],
            borderColor: '#ea5545',
            backgroundColor: '#ea5545'
        }

        const gradAndBucks = {
            type: 'line',
            label: languageData.gradAndBucks,
            data: [0, 0, 0, 5, 22, 25, 40, 42, 50, 50, 50, 50],
            borderColor: '#f46a9b',
            backgroundColor: '#f46a9b'
        }

        const artillery = {
            type: 'line',
            label: languageData.artillery,
            data: [0, 0, 0, 50, 74, 77, 85, 90, 105, 105, 109, 117],
            borderColor: '#ef9b20',
            backgroundColor: '#ef9b20'
        }

        const tankers = {
            type: 'line',
            label: languageData.tankers,
            data: [0, 0, 0, 0, 0, 0, 60, 60,60,60,60, 60],
            borderColor: '#bdcf32',
            backgroundColor: '#bdcf32'
        }

        const boats = {
            type: 'line',
            label: languageData.boats,
            data: [0, 0, 0, 2, 2, 2, 2, 2, 2, 2 ,2, 3],
            borderColor: '#0ea4D4',
            backgroundColor: '#0ea4D4'
        }

        const personal = {
            type: 'line',
            label: languageData.personal,
            data: [800, 2800, 3000, 4500, 5300, 5710, 5840, 9000, 9166, 10000, 11000, 11250],
            borderColor: '#ef9b20',
            backgroundColor: '#ef9b20'
        }

        const earthLosses = [tanks, bbms, autos];
        const skyLosses = [airplanes, helicopters, bpla];
        const earthOtherLosses = [ppos, gradAndBucks, artillery, tankers, boats];
        const personalLosses = [personal];

        // earthChart
        window.earthChart = new Chart(earthChart, {
            data: {
                datasets: earthLosses,
                labels: labels
            },
            options: {
                maintainAspectRatio: false,
                plugins: {
                    title: {
                        display: true,
                        text: languageData.title.earth,
                        font: {
                            size: '16',
                            weight: 'bold'
                        }
                    }
                }
            }
        });

        // skyChart
        window.skyChart =new Chart(skyChart, {
            data: {
                datasets: skyLosses,
                labels: labels
            },
            options: {
                maintainAspectRatio: false,
                plugins: {
                    title: {
                        display: true,
                        text: languageData.title.sky,
                        font: {
                            size: '16',
                            weight: 'bold'
                        }
                    }
                }
            }
        });

        // earthChartOther
        window.earthChartOther =new Chart(earthOtherChart, {
            data: {
                datasets: earthOtherLosses,
                labels: labels
            },
            options: {
                maintainAspectRatio: false,
                plugins: {
                    title: {
                        display: true,
                        text: languageData.title.earthOther,
                        font: {
                            size: '16',
                            weight: 'bold'
                        }
                    }
                }
            }
        });

        // personal
        window.personalChart =new Chart(chartMordorLossesPersonal, {
            data: {
                datasets: personalLosses,
                labels: labels
            },
            options: {
                maintainAspectRatio: false,
                plugins: {
                    title: {
                        display: true,
                        text: languageData.title.personal,
                        font: {
                            size: '16',
                            weight: 'bold'
                        }
                    }
                }
            }
        });

    }

    init();
})();