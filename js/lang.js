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
                        'personal': 'Втрати особового складу (приблизні)',
                    },
                    'tanks': 'Танки',
                    'bbms': 'Бойові броньовані машини',
                    'autos': 'Авто',
                    'airplanes': 'Літаки',
                    'helicopters': 'Гелікоптери',
                    'ppos': 'ППО',
                    'bpla': 'Безпілотні літальні апарати',
                    'gradAndBucks': 'Реактивні системи залпового вогню',
                    'artillery': 'Гармати',
                    'tankers': 'Цистерни з ППМ',
                    'boats': 'Кораблі (катери)',
                    'personal': 'Солдати'
                },
                main: {
                    'help_zsu': 'УВАГА! Допомогти Збройним Силам України можна, здійснивши переказ з платіжної картки за цим',
                    'help_zsu_url': 'посиланням',
                    'suggestions': 'Зауваження, скарги пишіть на',
                    'official_data': 'Дані по особовому складу приблизні, інформацію взято з офіційної сторінки',
                    'title': 'Втрати окупантів в Україні',
                    'zsu_url': 'Сухопутні війська ЗС України'
                }
            }
            break;
        case 'ru':
            languageData = {
                charts: {
                    'title': {
                        'earth': 'Потери на земле',
                        'earthOther': 'Потери на земле (другие)',
                        'sky': 'Потери в небе',
                        'personal': 'Потери личного состава (приблизительные',
                    },
                    'tanks': 'Танки',
                    'bbms': 'Боевые бронированные машины',
                    'autos': 'Авто',
                    'airplanes': 'Самолеты',
                    'helicopters': 'Вертолеты',
                    'ppos': 'ПВО',
                    'bpla': 'Беспилотные летательные аппараты',
                    'gradAndBucks': 'Реактивные системы залпового огня',
                    'artillery': 'Пушки',
                    'tankers': 'Цистерны с ГСМ',
                    'boats': 'Корабли (катера)',
                    'personal': 'Солдаты'
                },
                main: {
                    'help_zsu': 'ВНИМАНИЕ! Помочь Вооруженным Силам Украины можно, совершив перевод с платежной карты ',
                    'help_zsu_url': 'здесь',
                    'suggestions': 'Замечания, жалобы пишите на',
                    'official_data': 'Данные по личному составу приблизительны, информация взята с официальной страницы',
                    'title': 'Потери оккупантов в Украине',
                    'zsu_url': 'Сухопутные войска ВС Украины'
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
                        'personal': 'Military staff losses (approximate)',
                    },
                    'tanks': 'Tanks',
                    'bbms': 'Armored vehicles ',
                    'autos': 'Automotive equipment',
                    'airplanes': 'Planes',
                    'helicopters': 'Helicopters',
                    'ppos': 'AAW (air defense)',
                    'bpla': 'Unmanned aerial vehicle (drone)',
                    'gradAndBucks': 'Multiple launch rocket system',
                    'artillery': 'Field artillery guns',
                    'tankers': 'Cisterns with oil',
                    'boats': 'Ships (boats)',
                    'personal': 'Soldiers/army staff'
                },
                main: {
                    'help_zsu': 'You can donate to Ukrainian Army using this link',
                    'help_zsu_url': 'here',
                    'suggestions': 'Let us know if you have any suggestions for improvement ',
                    'official_data': 'The military staff losses data is approximate, information was taken from ',
                    'title': 'Losses of the invaders in Ukraine',
                    'zsu_url': 'Land forces of the Armed Forces of Ukraine'
                }
            }
            break;
        case 'de':
            languageData = {
                charts: {
                    'title': {
                        'earth': 'Verluste an militärischer Ausrüstung an Land',
                        'earthOther': 'Militärische Ausrüstungsverluste (zusätzlich)',
                        'sky': 'Verluste an militärischer Ausrüstung in Luftkämpfen',
                        'personal': 'Verluste des Militärpersonals (ungefähr)',
                    },
                    'tanks': 'Panzer',
                    'bbms': 'Gepanzerte Fahrzeuge',
                    'autos': 'Kfz-Ausrüstung',
                    'airplanes': 'Flugzeuge',
                    'helicopters': 'Helikopter',
                    'ppos': 'Luftverteidigung',
                    'bpla': 'Unbemanntes Luftfahrzeug (Drohne)',
                    'gradAndBucks': 'Mehrfachstartraketensystem',
                    'artillery': 'Feldartilleriegeschütze',
                    'tankers': 'Zisternen mit Öl',
                    'boats': 'Schiffe (Boote)',
                    'personal': 'Soldaten/Armeepersonal'
                },
                main: {
                    'help_zsu': 'Über diesen Link können Sie an die ukrainische Armee spenden',
                    'help_zsu_url': 'hier',
                    'suggestions': 'Lassen Sie uns wissen, wenn Sie Verbesserungsvorschläge haben ',
                    'official_data': 'Die Daten zu den Verlusten des Militärpersonals sind ungefähre Angaben, die Informationen wurden entnommen',
                    'title': 'Verluste der Invasoren in der Ukraine',
                    'zsu_url': 'Landstreitkräfte der Streitkräfte der Ukraine'
                }
            }
            break;
        case 'by':
            languageData = {
                charts: {
                    'title': {
                        'earth': 'Страты на зямлі',
                        'earthOther': 'Страты на зямлі (іншыя)',
                        'sky': 'Страты ў небе',
                        'personal': 'Страты асабовага складу (прыблізныя)',
                    },
                    'tanks': 'Танкі',
                    'bbms': 'Баявыя браняваныя машыны',
                    'autos': 'Аўта',
                    'airplanes': 'Самалёты',
                    'helicopters': 'Верталёты',
                    'ppos': 'СПА',
                    'bpla': 'Беспілотныя лятальныя апараты',
                    'gradAndBucks': 'Рэактыўныя сістэмы залпавага агню',
                    'artillery': 'Гарматы',
                    'tankers': 'Цыстэрны з ГЗМ',
                    'boats': 'Караблі (катэры)',
                    'personal': 'Салдаты'
                },
                main: {
                    'help_zsu': 'УВАГА! Дапамагчы Узброеным Сілам Украіны можна, здзейсніўшы перавод з аплатнай карты ',
                    'help_zsu_url': 'тут',
                    'suggestions': 'Заўвагі, скаргі пішыце на',
                    'official_data': 'Дадзеныя па асабовым складзе прыблізныя, інфармацыя ўзятая з афіцыйнай старонкі',
                    'title': 'Страты акупантаў ва Украіне',
                    'zsu_url': 'Сухапутныя войскі УС Украіны'
                }
            }
            break;
    }

    return languageData;
}