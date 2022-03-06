
function getLanguageData(language = 'ua') {
    let languageData = {};
    switch (language) {
        case 'ua':
            languageData = {
                charts: {
                    'title': {
                        'earth': 'Втрати на землі',
                        'earthOther': 'Втрати на землі (інше)',
                        'sky': 'Втрати в небі',
                        'personal': 'Втрати особового складу',
                    },
                    'tanks': 'Танки',
                    'bbms': 'Бойові броньовані машини',
                    'autos': 'Авто',
                    'airplanes': 'Літаки',
                    'helicopters': 'Гелікоптери',
                    'ppos': 'ППО',
                    'bpla': 'БПЛА',
                    'gradAndBucks': 'Град + БУК',
                    'artillery': 'Гармати',
                    'tankers': 'Цистерни з ППМ',
                    'personal': 'Солдати'
                },
                main: {
                    'help_zsu': 'УВАГА! Допомогти Збройним Силам України можна, здійснивши переказ з платіжної картки за цим',
                    'help_zsu_url': 'посиланням',
                    'suggestions': 'Зауваження, скарги пишіть на',
                    'official_data': 'Дані по особовому складу приблизні, інформацію взято з офіційної сторінки',
                    'title': 'Втрати окупантів в Україні'
                }
            }
            break;
        case 'ru':
            languageData = {
                charts: {
                    'title': {
                        'earth': 'Потери на земле',
                        'earthOther': 'Потери на земле (другме)',
                        'sky': 'Потери в небе',
                        'personal': 'Потери личного состава',
                    },
                    'tanks': 'Танки',
                    'bbms': 'Боевые бронированные машины',
                    'autos': 'Авто',
                    'airplanes': 'Самолеты',
                    'helicopters': 'Вертолеты',
                    'ppos': 'ПВО',
                    'bpla': 'БПЛА',
                    'gradAndBucks': 'Град + БУК',
                    'artillery': 'Пушки',
                    'tankers': 'Цистерны с ГСМ',
                    'personal': 'Солдаты'
                },
                main: {
                    'help_zsu': 'ВНИМАНИЕ! Помочь Вооруженным Силам Украины можно, совершив перевод с платежной карты ',
                    'help_zsu_url': 'здесь',
                    'suggestions': 'Замечания, жалобы пишите на',
                    'official_data': 'Данные по личному составу приблизительны, информация взята с официальной страницы',
                    'title': 'Потери оккупантов в Украине'
                }
            }
            break;
        case 'en':
            languageData = {
                charts: {
                    'title': {
                        'earth': 'Military equipment losses on land',
                        'earthOther': 'Military equipment losses (additionally)',
                        'sky': 'Military equipment losses in air battles',
                        'personal': 'Military staff losses',
                    },
                    'tanks': 'Tanks',
                    'bbms': 'Armored vehicles ',
                    'autos': 'Automotive equipment',
                    'airplanes': 'Planes',
                    'helicopters': 'Helicopters',
                    'ppos': 'AAW (air defense)',
                    'bpla': 'Unmanned aerial vehicle (drone)',
                    'gradAndBucks': 'BM-21 Grad + BUK',
                    'artillery': 'Field artillery guns',
                    'tankers': 'Cisterns with oil',
                    'personal': 'Soldiers/army staff'
                },
                main: {
                    'help_zsu': 'You can donate to Ukrainian Army using this link',
                    'help_zsu_url': 'here',
                    'suggestions': 'Let us know if you have any suggestions for improvement ',
                    'official_data': 'The military staff losses data is approximate, information was taken from ',
                    'title': 'Losses of the invaders in Ukraine'
                }
            }
            break;
    }

    return languageData;
}