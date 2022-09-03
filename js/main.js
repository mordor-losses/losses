(function() {
    let currentIconElement = null;
    let fullScreen = false;
    function init() {
        renderCharts(window.languageData.charts);
        renderFullScreenIcons();
        addEvents();
    }

    function renderFullScreenIcons() {
        document.querySelectorAll('.canvasChartWrapper').forEach((canvasChart) => {
            const fullScreenIcon = document.createElement('div');
            fullScreenIcon.classList = 'fullScreenIcon'
            canvasChart.appendChild(fullScreenIcon);
        })
    }

    function getDateLabels(countDays) {
        const formatMonth = function (month) {
            const formattedMonth = month + 1;

            return formattedMonth >= 10 ? formattedMonth : '0' + formattedMonth
        }

        let currentDate = new Date('2022-02-24');
        const labels = [];

        for (let i = 0; i < countDays; i++) {
            labels.push(currentDate.getDate() + '.' + formatMonth(currentDate.getMonth()));
            currentDate = new Date(currentDate.getTime() + 86400000)
        }

        return labels;
    }

    function renderChart(idElement, datasets, chartTitle) {
        const labels = getDateLabels(datasets[0].data.length);
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
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                let label = context.dataset.label + ' ' + context.formattedValue;
                                const dataIndex = context.dataIndex;
                                const data = context.dataset.data;

                                if (dataIndex > 0 && data[dataIndex] && data[dataIndex - 1]) {
                                    label += ' (+' + (data[dataIndex] - data[dataIndex - 1]) + ')';
                                }

                                return label;
                            }
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
            label: languageData.autosAndTankers,
            data: data.autosAndTankers,
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

        const cruiseMissiles = {
            type: 'line',
            label: languageData.cruiseMissiles,
            data: data.cruiseMissiles,
            borderColor: '#003f5c',
            backgroundColor: '#003f5c'
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
            borderColor: '#aecdc2',
            backgroundColor: '#aecdc2'
        }

        const boats = {
            type: 'line',
            label: languageData.boats,
            data: data.boats,
            borderColor: '#0ea4D4',
            backgroundColor: '#0ea4D4'
        }

        const special = {
            type: 'line',
            label: languageData.special,
            data: data.special,
            borderColor: '#1AF9DF',
            backgroundColor: '#1AF9DF'
        }

        const personal = {
            type: 'line',
            label: languageData.personal,
            data: data.personal,
            borderColor: '#ef9b20',
            backgroundColor: '#ef9b20'
        }

        const earthLosses = [tanks, bbms, autos, artillery];
        const skyLosses = [airplanes, helicopters, bpla, cruiseMissiles];
        const earthOtherLosses = [ppos, gradAndBucks, boats, special];
        const personalLosses = [personal];

        renderChart('chartMordorLossesEarth', earthLosses, languageData.title.earth);
        renderChart('chartMordorLossesSky', skyLosses, languageData.title.sky);
        renderChart('chartMordorLossesEarthOther', earthOtherLosses, languageData.title.earthOther);
        renderChart('chartMordorLossesPersonal', personalLosses, languageData.title.personal);
    }

    function toggleFullScreenMode(element) {
        element.parentElement.classList.toggle('fullScreen');
        document.querySelector('body').classList.toggle('disableScroll');
    }

    function addEvents() {
        document.querySelectorAll('.fullScreenIcon').forEach((iconElement) => {
            iconElement.addEventListener('click', () => {
                toggleFullScreenMode(iconElement);

                // Toggle flag full screen
                fullScreen = !fullScreen;
                currentIconElement = fullScreen ? iconElement : null;
            })
        })

        document.addEventListener('keydown', function(e) {
            if (e.key == 'Escape' && fullScreen) {
                toggleFullScreenMode(currentIconElement);

                currentIconElement = null;
                fullScreen = false;
            }
        });
    }

    init();
})();