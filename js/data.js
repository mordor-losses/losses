function getData() {
    return {
        personal: [
            800, 2800, 3000, 4500, 5300, 5710, 5840, 9000, 9166, 10000, 11000, 11250, 11800, 12200, 12350, 12490,
            12550, 12600, 12640, 13500, 13800, 14000, 14200, 14400, 14700, 15000, 15300, 15600, 15800, 16100, 16400,
            16600, 17000, 17200, 17300, 17500, 17700, 17800, 18000, 18300, 18500, 18600, 18900, 19000, 19100, 19300,
            19500, 19600, 19800, 19900, 20000, 20100, 20300, 20600, 20800, 20900, 21000, 21200, 21600, 21800, 21900,
            22100, 22400, 22800, 23000, 23200, 23500, 23800, 24200, 24500, 24700, 24900, 25100, 25500, 25650, 26000,
            26350, 26650, 26900, 27200, 27400, 27700, 27900, 28300
        ],
        tanks: [
            30, 80, 100, 150, 191, 198, 211, 217, 251, 269, 285, 290, 303, 317, 335, 353, 362, 374, 389, 404, 430, 444,
            450, 466, 476, 498, 509, 517, 530, 561, 575, 582, 586, 597, 605, 614, 625, 631, 644, 647, 676, 684, 698,
            700, 705, 722, 725, 732, 739, 753, 756, 762, 773, 790, 802, 815, 829, 838, 854, 873, 884, 918, 939, 970,
            986, 1008, 1026, 1048, 1062, 1077, 1092, 1110, 1122, 1130, 1145, 1170, 1187, 1195, 1205, 1218, 1220, 1228,
            1235, 1251
        ],
        bbms: [
            130, 516, 540, 706, 816, 846, 862, 900, 939,945, 985, 999, 1036, 1070, 1105, 1165, 1205, 1226, 1249, 1279,
            1375, 1435, 1448, 1470, 1487, 1535, 1556, 1578, 1597, 1625, 1640, 1664, 1694, 1710, 1723, 1735, 1751, 1776,
            1830, 1844, 1858, 1861, 1891, 1891, 1895, 1911, 1923, 1946, 1964, 1968, 1976, 1982, 2002, 2041, 2063, 2087,
            2118, 2162, 2205, 2238, 2258, 2308, 2342, 2389, 2418, 2445, 2471, 2519, 2567, 2610, 2651, 2686, 2713, 2741,
            2764, 2808, 2856, 2873, 2900, 2934, 2958, 2974, 3009, 3043
        ],
        artillery: [
            0, 0, 0, 50, 74, 77, 85, 90, 105, 105, 109, 117, 120, 120, 123, 125, 135, 140, 150, 150, 190, 201, 205, 213,
            230, 240, 252, 267, 280, 291, 293, 294, 302, 303, 305, 311, 316, 317, 325, 330, 332, 332, 332, 333, 335,
            342, 347, 349, 358, 366, 366, 371, 376, 381, 386, 391, 393, 397, 403, 408, 411, 416, 421, 431, 435, 436,
            451, 459, 475, 491, 499, 502, 509, 509, 513, 519, 528, 534, 542, 551, 555, 577, 578, 586
        ],
        gradAndBucks: [
            0, 0, 0, 5, 22, 25, 40, 42, 50, 50, 50, 50, 56, 56, 56, 58, 62, 62, 64, 64, 70, 72, 72, 72, 74, 80, 80, 80,
            82, 90, 91, 93, 95, 96, 96, 96, 96, 100, 105, 107, 107, 107, 108, 108, 108, 108, 111, 111, 115, 122, 122,
            125, 127, 130, 132, 136, 136, 138, 143, 147, 149, 149, 149, 151, 151, 151, 151, 152, 162, 163, 169, 171,
            172, 179, 185, 185, 185, 191, 193, 195, 195, 195, 198, 199
        ],
        ppos: [
            0, 0, 0, 0, 0, 7, 9, 11, 18, 19, 21, 23, 27, 28, 29, 31, 33, 34, 34, 36, 43, 43, 43, 44, 44, 45, 45, 47, 47,
            49, 51, 52, 54, 54, 54, 54, 54, 54, 54, 54, 55, 55, 55, 55, 55, 55, 55, 63, 64, 64, 66, 66, 66, 67, 67, 67,
            67, 69, 69, 69, 69, 69, 71, 72, 73, 77, 80, 80, 80, 81, 83, 83, 84, 86, 87, 87, 87, 87, 88, 88, 89, 89, 90,
            91
        ],
        airplanes: [
            7, 10, 16, 27, 29, 29, 30, 30, 37, 39, 44, 46, 48, 49, 49, 57, 58, 74, 77, 81, 84, 86, 93, 95, 96, 97, 99,
            101, 108, 115, 117, 121, 123, 127, 131, 135, 143, 143, 143, 147, 150, 150, 150, 150, 151, 152, 154, 157, 158,
            160, 163, 163, 165, 167, 169, 171, 172, 176, 177, 179, 181, 184, 185, 187, 189, 190, 192, 194, 194, 194,
            196, 199, 199, 199, 199, 199, 199, 199, 200, 200, 200, 200, 201, 202
        ],
        helicopters: [
            6, 7, 18, 26, 29, 29, 31, 31, 37, 40, 48, 68, 80, 81, 81, 83, 83, 86, 90, 95, 108, 108, 112, 115, 118, 121,
            123, 124, 124, 125, 127, 127, 127, 129, 131, 131, 131, 134, 134, 134, 134, 135, 135, 135, 136, 137, 137,
            140, 143, 144, 144, 145, 146, 147, 150, 150, 151, 153, 154, 154, 154, 154, 155, 155, 155, 155, 155, 155,
            155, 155, 155, 155, 155, 156, 158, 158, 160, 161, 162, 163, 164, 165, 167, 167
        ],
        bpla: [
            0, 0, 0, 2, 3, 3, 3, 3, 3, 3, 4, 7, 7, 7, 7, 7, 7, 7, 8, 9, 11, 11, 12, 17, 21, 24, 35, 42, 50, 53, 56, 56,
            66, 71, 81, 83, 85, 87, 89, 92, 94, 96, 111, 112, 112, 112, 119, 124, 132, 134, 135, 138, 148, 155, 158,
            165, 166, 172, 182, 191, 201, 205, 207, 215, 229, 232, 245, 271, 291, 303, 312, 324, 341, 360, 377, 380,
            390, 398, 405, 411, 416, 427, 436, 441
        ],
        autos_and_tankers: [
            0, 0, 0, 0, 291, 305, 355, 374, 404, 409, 447, 454, 474, 482, 526, 558, 585, 600, 617, 640, 819, 864, 879,
            914, 947, 969, 1000, 1008, 1033, 1089, 1131, 1144, 1150, 1178, 1184, 1201, 1220, 1236, 1249, 1273, 1322,
            1324, 1358, 1361, 1363, 1384, 1387, 1406, 1429, 1437, 1443, 1458, 1471, 1487, 1495, 1504, 1508, 1523,
            1543, 1557, 1566, 1643, 1666, 1688, 1695, 1701, 1796, 1824, 1843, 1867, 1907, 1926, 1934, 1961, 1970,
            1980, 1997, 2019, 2042, 2059, 2087, 2101, 2109, 2137
        ],
        boats: [
            0, 0, 0, 2, 2, 2, 2, 2, 2, 2 ,2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 5, 7, 7, 7, 7, 7, 7,
            7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 10, 10, 10,
            11, 11, 12, 12, 12, 12, 13, 13, 13, 13, 13, 13, 13
        ],
        special: [
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 11, 11, 12, 13, 15, 15, 16, 18, 19, 21,
            21, 21, 21, 22, 24, 24, 24, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 26, 27, 27, 27, 27, 27, 27, 27,
            28, 28, 31, 31, 31, 31, 32, 32, 38, 38, 38, 38, 38, 38, 39, 41, 41, 41, 41, 41, 42, 42, 42, 43, 43
        ],
        missile_rockets: [
            null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
            null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
            null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
            null, null, null, null, null, null, null, null, null, null, null, null, 84, 84, 84, 87, 89, 90, 90, 92, 94,
            94, 94, 94, 95, 95, 95, 97, 97, 102
        ]
    }
}