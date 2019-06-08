(function (factory) {
    if (typeof define === 'function' && define.amd) {
        define('ChineseDistricts', [], factory)
    } else {
        factory()
    }
})(function () {
    var ChineseDistricts = {
        0: {
            1: '马克思主义学院',
            2: '政法学院',
            3: '教育学院',
            4: '文学与新闻传播学院',
            5: '外国语学院',
            6: '历史文化与旅游学院',
            7: '经济管理学院',
            8: '音乐学院',
            9: '美术学院',
            10: '数学与信息科学学院',
            11: '物理与光电技术学院',
            12: '化学化工学院',
            13: '地理与环境学院',
            14: '机械工程学院',
            15: '电子电气学院',
            16: '计算机学院',
            17: '体育学院'
        },
        1: {100: '2017', 101: '2016', 102: '2015', 103: '2014'},
        2: {200: '2017', 201: '2016', 202: '2015', 203: '2014'},
        3: {300: '2017', 301: '2016', 302: '2015', 303: '2014'},
        4: {400: '2017', 401: '2016', 402: '2015', 403: '2014'},
        5: {500: '2017', 501: '2016', 502: '2015', 503: '2014'},
        6: {600: '2017', 601: '2016', 602: '2015', 603: '2014'},
        7: {700: '2017', 701: '2016', 702: '2015', 703: '2014'},
        8: {800: '2017', 801: '2016', 802: '2015', 803: '2014'},
        9: {900: '2017', 901: '2016', 902: '2015', 903: '2014'},
        10: {1000: '2017', 1001: '2016', 1002: '2015', 1003: '2014'},
        11: {1100: '2017', 1101: '2016', 1102: '2015', 1103: '2014'},
        12: {1200: '2017', 1201: '2016', 1202: '2015', 1203: '2014'},
        13: {1300: '2017', 1301: '2016', 1302: '2015', 1303: '2014'},
        14: {1400: '2017', 1401: '2016', 1402: '2015', 1403: '2014'},
        15: {1500: '2017', 1501: '2016', 1502: '2015', 1503: '2014'},
        16: {1600: '2017', 1601: '2016', 1602: '2015', 1603: '2014'},
        17: {1700: '2017', 1701: '2016', 1702: '2015', 1703: '2014'},
        100: {},
        101: {},
        102: {},
        103: {},
        200: {},
        201: {},
        202: {},
        203: {},
        300: {},
        301: {},
        302: {},
        303: {},
        400: {},
        401: {},
        402: {},
        403: {},
        500: {},
        501: {},
        502: {},
        503: {},
        600: {},
        601: {},
        602: {},
        603: {},
        700: {},
        701: {},
        702: {},
        703: {},
        800: {},
        801: {},
        802: {},
        803: {},
        900: {},
        901: {},
        902: {},
        903: {},
        1000: {},
        1001: {},
        1002: {},
        1003: {},
        1100: {110000: '物理学', 110001: '材料物理', 110002: '测控技术与仪器', 110003: '电子科学与技术',},
        1101: {110000: '物理学', 110001: '材料物理', 110002: '测控技术与仪器', 110003: '电子科学与技术',},
        1102: {110000: '物理学', 110001: '材料物理', 110002: '测控技术与仪器', 110003: '电子科学与技术',},
        1103: {110000: '物理学', 110001: '材料物理', 110002: '测控技术与仪器', 110003: '电子科学与技术',},
        1200: {},
        1201: {},
        1202: {},
        1203: {},
        1300: {},
        1301: {},
        1302: {},
        1303: {},
        1400: {140004: '机械设计制造及其自动化', 140005: '工业设计', 140006: '材料成型机控制工程', 140007: '机械电子工程',},
        1401: {140004: '机械设计制造及其自动化', 140005: '工业设计', 140006: '材料成型机控制工程', 140007: '机械电子工程',},
        1402: {140004: '机械设计制造及其自动化', 140005: '工业设计', 140006: '材料成型机控制工程', 140007: '机械电子工程',},
        1403: {140004: '机械设计制造及其自动化', 140005: '工业设计', 140006: '材料成型机控制工程', 140007: '机械电子工程',},
        1500: {150008: '电气工程及其自动化', 150009: '电子信息工程', 150010: '通信工程', 150011: '自动化', 150012: '轨道交通信号与控制',},
        1501: {150008: '电气工程及其自动化', 150009: '电子信息工程', 150010: '通信工程', 150011: '自动化', 150012: '轨道交通信号与控制',},
        1502: {150008: '电气工程及其自动化', 150009: '电子信息工程', 150010: '通信工程', 150011: '自动化', 150012: '轨道交通信号与控制',},
        1503: {150008: '电气工程及其自动化', 150009: '电子信息工程', 150010: '通信工程', 150011: '自动化', 150012: '轨道交通信号与控制',},
        1600: {160013: '计算机科学与技术', 160014: '软件工程', 160015: '物联网工程',},
        1601: {160013: '计算机科学与技术', 160014: '软件工程', 160015: '物联网工程',},
        1602: {160013: '计算机科学与技术', 160014: '软件工程', 160015: '物联网工程',},
        1603: {160013: '计算机科学与技术', 160014: '软件工程', 160015: '物联网工程',},
        1700: {},
        1701: {},
        1702: {},
        1703: {},
        160013:{1600130:'一班'},
    };
    if (typeof window !== 'undefined') {
        window.ChineseDistricts = ChineseDistricts
    }
    return ChineseDistricts
});