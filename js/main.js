(function() {
    const START_OF_WAR = '2022-02-24';
    const END_OF_WAR = '2023-09-09';
    let charts = [];
    let currentIconElement = null;
    let fullScreen = false;
    function init() {
        renderCharts(window.languageData.charts);
        renderFullScreenIcons();
        addEvents();
        initDatePicker();
    }

    function calculateCountOfDays(firstDate, secondDate) {
        const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds

        return Math.round(Math.abs((new Date(firstDate) - new Date(secondDate)) / oneDay));
    }

    function initDatePicker() {
        const picker = new easepick.create({
            element: "#datepicker",
            css: [
                "https://cdn.jsdelivr.net/npm/@easepick/bundle@1.2.0/dist/index.css"
            ],
            zIndex: 10,
            plugins: [
                "RangePlugin",
                "LockPlugin",
                "PresetPlugin"
            ],
            "LockPlugin": {
                "minDate": START_OF_WAR,
                "maxDate": END_OF_WAR,
            }
        });

        picker.on('select', (e) => {
            const startDate = new Date(e.detail.start);
            const endDate = new Date(e.detail.end);

            applyDateFilters(startDate, endDate);
        })
    }

    function applyDateFilters(startDate, endDate) {
        const countDays = calculateCountOfDays(endDate, startDate);
        const countDays2 = calculateCountOfDays(startDate, START_OF_WAR);

        charts.forEach((chart) => {
            if (!chart.config.dataBackup) {
                chart.config.dataBackup = JSON.parse(JSON.stringify(chart.config.data));
            }

            chart.config.dataBackup.datasets.forEach((dataset, index) => {
                chart.config.data.datasets[index].data = dataset.data.slice(countDays2, countDays2 + countDays + 1);
            });

            chart.config.data.labels = chart.config.dataBackup.labels.slice(countDays2, countDays2 + countDays + 1);
            chart.update();
        });
    }

    function renderFullScreenIcons() {
        document.querySelectorAll('.canvasChartWrapper').forEach((canvasChart) => {
            const fullScreenIcon = document.createElement('div');
            fullScreenIcon.classList = 'fullScreenIcon'
            canvasChart.appendChild(fullScreenIcon);
        })
    }

    function getDateLabels(fromDate, toDate) {
        const formatMonth = function (month) {
            const formattedMonth = month + 1;

            return formattedMonth >= 10 ? formattedMonth : '0' + formattedMonth
        }

        let currentDate = new Date(fromDate);
        let endDate = new Date(toDate);

        const labels = [];
        while (currentDate.getTime() <= endDate.getTime()) {
            labels.push(currentDate.getDate() + '.' + formatMonth(currentDate.getMonth()));
            currentDate = new Date(currentDate.getTime() + 86400000)
        }

        return labels;
    }

    function renderChart(idElement, datasets, chartTitle, customTooltip) {
        const labels = getDateLabels(START_OF_WAR, END_OF_WAR);

        return new Chart(idElement, {
            data: {
                datasets,
                labels
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
                                if (!customTooltip) {
                                    return context.dataset.label + ' ' + context.formattedValue;
                                }

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

    function prepareData(data, languageData, typeChart) {
        const tanks = {
            type: typeChart,
            label: languageData.tanks,
            data: data.tanks,
            borderColor: '#003f5c',
            backgroundColor: '#003f5c'
        }

        const bbms = {
            type: typeChart,
            label: languageData.bbms,
            data: data.bbms,
            borderColor: '#ffa600',
            backgroundColor: '#ffa600'
        }

        const autos = {
            type: typeChart,
            label: languageData.autosAndTankers,
            data: data.autosAndTankers,
            borderColor: '#bc5090',
            backgroundColor: '#bc5090',
        }

        const airplanes = {
            type: typeChart,
            label: languageData.airplanes,
            data: data.airplanes,
            borderColor: '#aecdc2',
            backgroundColor: '#aecdc2'
        }

        const helicopters = {
            type: typeChart,
            label: languageData.helicopters,
            data: data.helicopters,
            borderColor: '#f0b8b8',
            backgroundColor: '#f0b8b8'
        }

        const bpla = {
            type: typeChart,
            label: languageData.bpla,
            data: data.bpla,
            borderColor: '#ada600',
            backgroundColor: '#ada600'
        }

        const cruiseMissiles = {
            type: typeChart,
            label: languageData.cruiseMissiles,
            data: data.cruiseMissiles,
            borderColor: '#003f5c',
            backgroundColor: '#003f5c'
        }

        const ppos = {
            type: typeChart,
            label: languageData.ppos,
            data: data.ppos,
            borderColor: '#ea5545',
            backgroundColor: '#ea5545'
        }

        const gradAndBucks = {
            type: typeChart,
            label: languageData.gradAndBucks,
            data: data.gradAndBucks,
            borderColor: '#f46a9b',
            backgroundColor: '#f46a9b'
        }

        const artillery = {
            type: typeChart,
            label: languageData.artillery,
            data: data.artillery,
            borderColor: '#aecdc2',
            backgroundColor: '#aecdc2'
        }

        const boats = {
            type: typeChart,
            label: languageData.boats,
            data: data.boats,
            borderColor: '#0ea4D4',
            backgroundColor: '#0ea4D4'
        }

        const special = {
            type: typeChart,
            label: languageData.special,
            data: data.special,
            borderColor: '#1AF9DF',
            backgroundColor: '#1AF9DF'
        }

        const personal = {
            type: typeChart,
            label: languageData.personal,
            data: data.personal,
            borderColor: '#ef9b20',
            backgroundColor: '#ef9b20'
        }


        return {
            tanks, bbms, autos, airplanes, helicopters, bpla, cruiseMissiles,
            gradAndBucks, personal, artillery, ppos, boats, special
        }
    }

    function renderCharts(languageData) {
        const lineChartData = prepareData(getData(), languageData, 'line');
        const barChartData = prepareData(getDataForDays(), languageData, 'bar');

        // Line charts
        const earthLosses = [lineChartData.tanks, lineChartData.bbms, lineChartData.autos, lineChartData.artillery];
        const skyLosses = [lineChartData.airplanes, lineChartData.helicopters, lineChartData.bpla, lineChartData.cruiseMissiles];
        const earthOtherLosses = [lineChartData.ppos, lineChartData.gradAndBucks, lineChartData.special];
        const personalLosses = [lineChartData.personal];

        // Bar charts

        charts.push(
            renderChart('chartMordorLossesTanksBar', [barChartData.tanks], languageData.title.earth, false),
            renderChart('chartMordorLossesBbmsBar', [barChartData.bbms], languageData.title.earth, false),
            renderChart('chartMordorLossesAutosBar', [barChartData.autos], languageData.title.earth, false),
            renderChart('chartMordorLossesArtilleryBar', [barChartData.artillery], languageData.title.earth, false),
            renderChart('chartMordorLossesPposBar', [barChartData.ppos], languageData.title.earth, false),
            renderChart('chartMordorLossesAirplanesBar', [barChartData.airplanes], languageData.title.sky, false),
            renderChart('chartMordorLossesHelicoptersBar', [barChartData.helicopters], languageData.title.sky, false),
            renderChart('chartMordorLossesBplaBar', [barChartData.bpla], languageData.title.sky, false),
            renderChart('chartMordorLossesCruiseMissilesBar', [barChartData.cruiseMissiles], languageData.title.sky, false),
            renderChart('chartMordorLossesGradAndBucksBar', [barChartData.gradAndBucks], languageData.title.earth, false),
            renderChart('chartMordorLossesSpecialBar', [barChartData.special], languageData.title.earth, false),
            renderChart('chartMordorLossesPersonalBar', [barChartData.personal], languageData.title.personal, false),
        );

        charts.push(
            renderChart('chartMordorLossesEarth', earthLosses, languageData.title.earth, true),
            renderChart('chartMordorLossesSky', skyLosses, languageData.title.sky, true),
            renderChart('chartMordorLossesEarthOther', earthOtherLosses, languageData.title.earthOther, true),
            renderChart('chartMordorLossesPersonal', personalLosses, languageData.title.personal, true),
        );
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
            if (e.key === 'Escape' && fullScreen) {
                toggleFullScreenMode(currentIconElement);

                currentIconElement = null;
                fullScreen = false;
            }
        });
    }

    init();
})();