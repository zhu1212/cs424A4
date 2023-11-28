// Vega-Lite specification
var spec1 = {
    "config": {"view": {"continuousWidth": 400, "continuousHeight": 300}},
    "data": {"name": "data-bd554d4ca22b55d8599e5bddb6724533"},
    "mark": "line",
    "encoding": {
      "tooltip": [
        {"field": "YEAR_MONTH", "type": "nominal"},
        {"field": "NUMBER_OF_CRASHES", "type": "quantitative"}
      ],
      "x": {"field": "YEAR_MONTH", "type": "temporal"},
      "y": {"field": "NUMBER_OF_CRASHES", "type": "quantitative"}
    },
    "height": 400,
    "title": "Number of Crashes per Month",
    "width": 600,
    "$schema": "https://vega.github.io/schema/vega-lite/v4.17.0.json",
    "datasets": {
      "data-bd554d4ca22b55d8599e5bddb6724533": [
        {"YEAR_MONTH": "2013-03", "NUMBER_OF_CRASHES": 3},
        {"YEAR_MONTH": "2013-06", "NUMBER_OF_CRASHES": 2},
        {"YEAR_MONTH": "2014-01", "NUMBER_OF_CRASHES": 4},
        {"YEAR_MONTH": "2014-02", "NUMBER_OF_CRASHES": 2},
        {"YEAR_MONTH": "2014-06", "NUMBER_OF_CRASHES": 2},
        {"YEAR_MONTH": "2014-08", "NUMBER_OF_CRASHES": 2},
        {"YEAR_MONTH": "2014-11", "NUMBER_OF_CRASHES": 1},
        {"YEAR_MONTH": "2015-01", "NUMBER_OF_CRASHES": 4},
        {"YEAR_MONTH": "2015-02", "NUMBER_OF_CRASHES": 2},
        {"YEAR_MONTH": "2015-04", "NUMBER_OF_CRASHES": 5},
        {"YEAR_MONTH": "2015-05", "NUMBER_OF_CRASHES": 5},
        {"YEAR_MONTH": "2015-06", "NUMBER_OF_CRASHES": 8},
        {"YEAR_MONTH": "2015-07", "NUMBER_OF_CRASHES": 27},
        {"YEAR_MONTH": "2015-08", "NUMBER_OF_CRASHES": 963},
        {"YEAR_MONTH": "2015-09", "NUMBER_OF_CRASHES": 3222},
        {"YEAR_MONTH": "2015-10", "NUMBER_OF_CRASHES": 5957},
        {"YEAR_MONTH": "2015-11", "NUMBER_OF_CRASHES": 5549},
        {"YEAR_MONTH": "2015-12", "NUMBER_OF_CRASHES": 5189},
        {"YEAR_MONTH": "2016-01", "NUMBER_OF_CRASHES": 6025},
        {"YEAR_MONTH": "2016-02", "NUMBER_OF_CRASHES": 5447},
        {"YEAR_MONTH": "2016-03", "NUMBER_OF_CRASHES": 6414},
        {"YEAR_MONTH": "2016-04", "NUMBER_OF_CRASHES": 6304},
        {"YEAR_MONTH": "2016-05", "NUMBER_OF_CRASHES": 6851},
        {"YEAR_MONTH": "2016-06", "NUMBER_OF_CRASHES": 6083},
        {"YEAR_MONTH": "2016-07", "NUMBER_OF_CRASHES": 7194},
        {"YEAR_MONTH": "2016-08", "NUMBER_OF_CRASHES": 9622},
        {"YEAR_MONTH": "2016-09", "NUMBER_OF_CRASHES": 10086},
        {"YEAR_MONTH": "2016-10", "NUMBER_OF_CRASHES": 10856},
        {"YEAR_MONTH": "2016-11", "NUMBER_OF_CRASHES": 10274},
        {"YEAR_MONTH": "2016-12", "NUMBER_OF_CRASHES": 10866},
        {"YEAR_MONTH": "2017-01", "NUMBER_OF_CRASHES": 9134},
        {"YEAR_MONTH": "2017-02", "NUMBER_OF_CRASHES": 8986},
        {"YEAR_MONTH": "2017-03", "NUMBER_OF_CRASHES": 11000},
        {"YEAR_MONTH": "2017-04", "NUMBER_OF_CRASHES": 11112},
        {"YEAR_MONTH": "2017-05", "NUMBER_OF_CRASHES": 13080},
        {"YEAR_MONTH": "2017-06", "NUMBER_OF_CRASHES": 13962},
        {"YEAR_MONTH": "2017-07", "NUMBER_OF_CRASHES": 14908},
        {"YEAR_MONTH": "2017-08", "NUMBER_OF_CRASHES": 17027},
        {"YEAR_MONTH": "2017-09", "NUMBER_OF_CRASHES": 20143},
        {"YEAR_MONTH": "2017-10", "NUMBER_OF_CRASHES": 22462},
        {"YEAR_MONTH": "2017-11", "NUMBER_OF_CRASHES": 21137},
        {"YEAR_MONTH": "2017-12", "NUMBER_OF_CRASHES": 22377},
        {"YEAR_MONTH": "2018-01", "NUMBER_OF_CRASHES": 21174},
        {"YEAR_MONTH": "2018-02", "NUMBER_OF_CRASHES": 18830},
        {"YEAR_MONTH": "2018-03", "NUMBER_OF_CRASHES": 20953},
        {"YEAR_MONTH": "2018-04", "NUMBER_OF_CRASHES": 21596},
        {"YEAR_MONTH": "2018-05", "NUMBER_OF_CRASHES": 24584},
        {"YEAR_MONTH": "2018-06", "NUMBER_OF_CRASHES": 23758},
        {"YEAR_MONTH": "2018-07", "NUMBER_OF_CRASHES": 23047},
        {"YEAR_MONTH": "2018-08", "NUMBER_OF_CRASHES": 22708},
        {"YEAR_MONTH": "2018-09", "NUMBER_OF_CRASHES": 22298},
        {"YEAR_MONTH": "2018-10", "NUMBER_OF_CRASHES": 23118},
        {"YEAR_MONTH": "2018-11", "NUMBER_OF_CRASHES": 21160},
        {"YEAR_MONTH": "2018-12", "NUMBER_OF_CRASHES": 22483},
        {"YEAR_MONTH": "2019-01", "NUMBER_OF_CRASHES": 19995},
        {"YEAR_MONTH": "2019-02", "NUMBER_OF_CRASHES": 18840},
        {"YEAR_MONTH": "2019-03", "NUMBER_OF_CRASHES": 21802},
        {"YEAR_MONTH": "2019-04", "NUMBER_OF_CRASHES": 21169},
        {"YEAR_MONTH": "2vegaEmbed('#vis2', spec2);2019-08", "NUMBER_OF_CRASHES": 22556},
        {"YEAR_MONTH": "2019-09", "NUMBER_OF_CRASHES": 22233},
        {"YEAR_MONTH": "2019-10", "NUMBER_OF_CRASHES": 22419},
        {"YEAR_MONTH": "2019-11", "NUMBER_OF_CRASHES": 21555},
        {"YEAR_MONTH": "2019-12", "NUMBER_OF_CRASHES": 21035},
        {"YEAR_MONTH": "2020-01", "NUMBER_OF_CRASHES": 19381},
        {"YEAR_MONTH": "2020-02", "NUMBER_OF_CRASHES": 20237},
        {"YEAR_MONTH": "2020-03", "NUMBER_OF_CRASHES": 14787},
        {"YEAR_MONTH": "2020-04", "NUMBER_OF_CRASHES": 9281},
        {"YEAR_MONTH": "2020-05", "NUMBER_OF_CRASHES": 14399},
        {"YEAR_MONTH": "2020-06", "NUMBER_OF_CRASHES": 16770},
        {"YEAR_MONTH": "2020-07", "NUMBER_OF_CRASHES": 19695},
        {"YEAR_MONTH": "2020-08", "NUMBER_OF_CRASHES": 19763},
        {"YEAR_MONTH": "2020-09", "NUMBER_OF_CRASHES": 17599},
        {"YEAR_MONTH": "2020-10", "NUMBER_OF_CRASHES": 18023},
        {"YEAR_MONTH": "2020-11", "NUMBER_OF_CRASHES": 14747},
        {"YEAR_MONTH": "2020-12", "NUMBER_OF_CRASHES": 15301},
        {"YEAR_MONTH": "2021-01", "NUMBER_OF_CRASHES": 14683},
        {"YEAR_MONTH": "2021-02", "NUMBER_OF_CRASHES": 16684},
        {"YEAR_MONTH": "2021-03", "NUMBER_OF_CRASHES": 16259},
        {"YEAR_MONTH": "2021-04", "NUMBER_OF_CRASHES": 17408},
        {"YEAR_MONTH": "2021-05", "NUMBER_OF_CRASHES": 21164},
        {"YEAR_MONTH": "2021-06", "NUMBER_OF_CRASHES": 22638},
        {"YEAR_MONTH": "2021-07", "NUMBER_OF_CRASHES": 21864},
        {"YEAR_MONTH": "2021-08", "NUMBER_OF_CRASHES": 21527},
        {"YEAR_MONTH": "2021-09", "NUMBER_OF_CRASHES": 21602},
        {"YEAR_MONTH": "2021-10", "NUMBER_OF_CRASHES": 22394},
        {"YEAR_MONTH": "2021-11", "NUMBER_OF_CRASHES": 19140},
        {"YEAR_MONTH": "2021-12", "NUMBER_OF_CRASHES": 18431},
        {"YEAR_MONTH": "2022-01", "NUMBER_OF_CRASHES": 17164},
        {"YEAR_MONTH": "2022-02", "NUMBER_OF_CRASHES": 16873},
        {"YEAR_MONTH": "2022-03", "NUMBER_OF_CRASHES": 18306},
        {"YEAR_MONTH": "2022-04", "NUMBER_OF_CRASHES": 18478},
        {"YEAR_MONTH": "2022-05", "NUMBER_OF_CRASHES": 21376},
        {"YEAR_MONTH": "2022-06", "NUMBER_OF_CRASHES": 21170},
        {"YEAR_MONTH": "2022-07", "NUMBER_OF_CRASHES": 20063},
        {"YEAR_MONTH": "2022-08", "NUMBER_OF_CRASHES": 19753},
        {"YEAR_MONTH": "2022-09", "NUMBER_OF_CRASHES": 20990},
        {"YEAR_MONTH": "2022-10", "NUMBER_OF_CRASHES": 21630},
        {"YEAR_MONTH": "2022-11", "NUMBER_OF_CRASHES": 18827},
        {"YEAR_MONTH": "2022-12", "NUMBER_OF_CRASHES": 19183},
        {"YEAR_MONTH": "2023-01", "NUMBER_OF_CRASHES": 17425},
        {"YEAR_MONTH": "2023-02", "NUMBER_OF_CRASHES": 17572},
        {"YEAR_MONTH": "2023-03", "NUMBER_OF_CRASHES": 19412},
        {"YEAR_MONTH": "2023-04", "NUMBER_OF_CRASHES": 19783},
        {"YEAR_MONTH": "2023-05", "NUMBER_OF_CRASHES": 22776},
        {"YEAR_MONTH": "2023-06", "NUMBER_OF_CRASHES": 21540},
        {"YEAR_MONTH": "2023-07", "NUMBER_OF_CRASHES": 21558},
        {"YEAR_MONTH": "2023-08", "NUMBER_OF_CRASHES": 21909},
        {"YEAR_MONTH": "2023-09", "NUMBER_OF_CRASHES": 21374},
        {"YEAR_MONTH": "2023-10", "NUMBER_OF_CRASHES": 7695}
      ]
    }
  };
  
  var spec2 = {
    "$schema": "https://vega.github.io/schema/vega/v5.json",
    "background": "white",
    "padding": 5,
    "width": 600,
    "height": 300,
    "title": {
      "text": "Heatmap of Crashes by Hour and Day of Week",
      "frame": "group"
    },
    "style": "cell",
    "data": [
      {
        "name": "data-18bc52e2bff14767bb5c92aab508ac7c",
        "values": [
          {"HOUR": 0, "DAY_OF_WEEK": "Friday", "NUMBER_OF_CRASHES": 3902},
          {"HOUR": 0, "DAY_OF_WEEK": "Monday", "NUMBER_OF_CRASHES": 3956},
          {"HOUR": 0, "DAY_OF_WEEK": "Saturday", "NUMBER_OF_CRASHES": 7453},
          {"HOUR": 0, "DAY_OF_WEEK": "Sunday", "NUMBER_OF_CRASHES": 9366},
          {"HOUR": 0, "DAY_OF_WEEK": "Thursday", "NUMBER_OF_CRASHES": 3001},
          {"HOUR": 0, "DAY_OF_WEEK": "Tuesday", "NUMBER_OF_CRASHES": 2772},
          {"HOUR": 0, "DAY_OF_WEEK": "Wednesday", "NUMBER_OF_CRASHES": 3069},
          {"HOUR": 1, "DAY_OF_WEEK": "Friday", "NUMBER_OF_CRASHES": 3091},
          {"HOUR": 1, "DAY_OF_WEEK": "Monday", "NUMBER_OF_CRASHES": 3244},
          {"HOUR": 1, "DAY_OF_WEEK": "Saturday", "NUMBER_OF_CRASHES": 7089},
          {"HOUR": 1, "DAY_OF_WEEK": "Sunday", "NUMBER_OF_CRASHES": 8864},
          {"HOUR": 1, "DAY_OF_WEEK": "Thursday", "NUMBER_OF_CRASHES": 2127},
          {"HOUR": 1, "DAY_OF_WEEK": "Tuesday", "NUMBER_OF_CRASHES": 1863},
          {"HOUR": 1, "DAY_OF_WEEK": "Wednesday", "NUMBER_OF_CRASHES": 2067},
          {"HOUR": 2, "DAY_OF_WEEK": "Friday", "NUMBER_OF_CRASHES": 2199},
          {"HOUR": 2, "DAY_OF_WEEK": "Monday", "NUMBER_OF_CRASHES": 2413},
          {"HOUR": 2, "DAY_OF_WEEK": "Saturday", "NUMBER_OF_CRASHES": 6363},
          {"HOUR": 2, "DAY_OF_WEEK": "Sunday", "NUMBER_OF_CRASHES": 7953},
          {"HOUR": 2, "DAY_OF_WEEK": "Thursday", "NUMBER_OF_CRASHES": 1696},
          {"HOUR": 2, "DAY_OF_WEEK": "Tuesday", "NUMBER_OF_CRASHES": 1465},
          {"HOUR": 2, "DAY_OF_WEEK": "Wednesday", "NUMBER_OF_CRASHES": 1567},
          {"HOUR": 3, "DAY_OF_WEEK": "Friday", "NUMBER_OF_CRASHES": 1673},
          {"HOUR": 3, "DAY_OF_WEEK": "Monday", "NUMBER_OF_CRASHES": 1718},
          {"HOUR": 3, "DAY_OF_WEEK": "Saturday", "NUMBER_OF_CRASHES": 4443},
          {"HOUR": 3, "DAY_OF_WEEK": "Sunday", "NUMBER_OF_CRASHES": 7038},
          {"HOUR": 3, "DAY_OF_WEEK": "Thursday", "NUMBER_OF_CRASHES": 1252},
          {"HOUR": 3, "DAY_OF_WEEK": "Tuesday", "NUMBER_OF_CRASHES": 1067},
          {"HOUR": 3, "DAY_OF_WEEK": "Wednesday", "NUMBER_OF_CRASHES": 1147},
          {"HOUR": 4, "DAY_OF_WEEK": "Friday", "NUMBER_OF_CRASHES": 1789},
          {"HOUR": 4, "DAY_OF_WEEK": "Monday", "NUMBER_OF_CRASHES": 1833},
          {"HOUR": 4, "DAY_OF_WEEK": "Saturday", "NUMBER_OF_CRASHES": 3531},
          {"HOUR": 4, "DAY_OF_WEEK": "Sunday", "NUMBER_OF_CRASHES": 4891},
          {"HOUR": 4, "DAY_OF_WEEK": "Thursday", "NUMBER_OF_CRASHES": 1308},
          {"HOUR": 4, "DAY_OF_WEEK": "Tuesday", "NUMBER_OF_CRASHES": 1203},
          {"HOUR": 4, "DAY_OF_WEEK": "Wednesday", "NUMBER_OF_CRASHES": 1333},
          {"HOUR": 5, "DAY_OF_WEEK": "Friday", "NUMBER_OF_CRASHES": 2657},
          {"HOUR": 5, "DAY_OF_WEEK": "Monday", "NUMBER_OF_CRASHES": 2737},
          {"HOUR": 5, "DAY_OF_WEEK": "Saturday", "NUMBER_OF_CRASHES": 2662},
          {"HOUR": 5, "DAY_OF_WEEK": "Sunday", "NUMBER_OF_CRASHES": 3719},
          {"HOUR": 5, "DAY_OF_WEEK": "Thursday", "NUMBER_OF_CRASHES": 2522},
          {"HOUR": 5, "DAY_OF_WEEK": "Tuesday", "NUMBER_OF_CRASHES": 2426},
          {"HOUR": 5, "DAY_OF_WEEK": "Wednesday", "NUMBER_OF_CRASHES": 2342},
          {"HOUR": 6, "DAY_OF_WEEK": "Friday", "NUMBER_OF_CRASHES": 4917},
          {"HOUR": 6, "DAY_OF_WEEK": "Monday", "NUMBER_OF_CRASHES": 5154},
          {"HOUR": 6, "DAY_OF_WEEK": "Saturday", "NUMBER_OF_CRASHES": 3066},
          {"HOUR": 6, "DAY_OF_WEEK": "Sunday", "NUMBER_OF_CRASHES": 3033},
          {"HOUR": 6, "DAY_OF_WEEK": "Thursday", "NUMBER_OF_CRASHES": 5235},
          {"HOUR": 6, "DAY_OF_WEEK": "Tuesday", "NUMBER_OF_CRASHES": 5365},
          {"HOUR": 6, "DAY_OF_WEEK": "Wednesday", "NUMBER_OF_CRASHES": 5473},
          {"HOUR": 7, "DAY_OF_WEEK": "Friday", "NUMBER_OF_CRASHES": 11496},
          {"HOUR": 7, "DAY_OF_WEEK": "Monday", "NUMBER_OF_CRASHES": 12114},
          {"HOUR": 7, "DAY_OF_WEEK": "Saturday", "NUMBER_OF_CRASHES": 4180},
          {"HOUR": 7, "DAY_OF_WEEK": "Sunday", "NUMBER_OF_CRASHES": 3076},
          {"HOUR": 7, "DAY_OF_WEEK": "Thursday", "NUMBER_OF_CRASHES": 12777},
          {"HOUR": 7, "DAY_OF_WEEK": "Tuesday", "NUMBER_OF_CRASHES": 13497},
          {"HOUR": 7, "DAY_OF_WEEK": "Wednesday", "NUMBER_OF_CRASHES": 13331},
          {"HOUR": 8, "DAY_OF_WEEK": "Friday", "NUMBER_OF_CRASHES": 14061},
          {"HOUR": 8, "DAY_OF_WEEK": "Monday", "NUMBER_OF_CRASHES": 14980},
          {"HOUR": 8, "DAY_OF_WEEK": "Saturday", "NUMBER_OF_CRASHES": 5804},
          {"HOUR": 8, "DAY_OF_WEEK": "Sunday", "NUMBER_OF_CRASHES": 3895},
          {"HOUR": 8, "DAY_OF_WEEK": "Thursday", "NUMBER_OF_CRASHES": 15417},
          {"HOUR": 8, "DAY_OF_WEEK": "Tuesday", "NUMBER_OF_CRASHES": 16921},
          {"HOUR": 8, "DAY_OF_WEEK": "Wednesday", "NUMBER_OF_CRASHES": 16386},
          {"HOUR": 9, "DAY_OF_WEEK": "Friday", "NUMBER_OF_CRASHES": 11631},
          {"HOUR": 9, "DAY_OF_WEEK": "Monday", "NUMBER_OF_CRASHES": 10971},
          {"HOUR": 9, "DAY_OF_WEEK": "Saturday", "NUMBER_OF_CRASHES": 8688},
          {"HOUR": 9, "DAY_OF_WEEK": "Sunday", "NUMBER_OF_CRASHES": 6045},
          {"HOUR": 9, "DAY_OF_WEEK": "Thursday", "NUMBER_OF_CRASHES": 11429},
          {"HOUR": 9, "DAY_OF_WEEK": "Tuesday", "NUMBER_OF_CRASHES": 12003},
          {"HOUR": 9, "DAY_OF_WEEK": "Wednesday", "NUMBER_OF_CRASHES": 11942},
          {"HOUR": 10, "DAY_OF_WEEK": "Friday", "NUMBER_OF_CRASHES": 11410},
          {"HOUR": 10, "DAY_OF_WEEK": "Monday", "NUMBER_OF_CRASHES": 10002},
          {"HOUR": 10, "DAY_OF_WEEK": "Saturday", "NUMBER_OF_CRASHES": 11607},
          {"HOUR": 10, "DAY_OF_WEEK": "Sunday", "NUMBER_OF_CRASHES": 8437},
          {"HOUR": 10, "DAY_OF_WEEK": "Thursday", "NUMBER_OF_CRASHES": 10444},
          {"HOUR": 10, "DAY_OF_WEEK": "Tuesday", "NUMBER_OF_CRASHES": 10512},
          {"HOUR": 10, "DAY_OF_WEEK": "Wednesday", "NUMBER_OF_CRASHES": 10684},
          {"HOUR": 11, "DAY_OF_WEEK": "Friday", "NUMBER_OF_CRASHES": 13368},
          {"HOUR": 11, "DAY_OF_WEEK": "Monday", "NUMBER_OF_CRASHES": 11046},
          {"HOUR": 11, "DAY_OF_WEEK": "Saturday", "NUMBER_OF_CRASHES": 14112},
          {"HOUR": 11, "DAY_OF_WEEK": "Sunday", "NUMBER_OF_CRASHES": 10498},
          {"HOUR": 11, "DAY_OF_WEEK": "Thursday", "NUMBER_OF_CRASHES": 11596},
          {"HOUR": 11, "DAY_OF_WEEK": "Tuesday", "NUMBER_OF_CRASHES": 11701},
          {"HOUR": 11, "DAY_OF_WEEK": "Wednesday", "NUMBER_OF_CRASHES": 11329},
          {"HOUR": 12, "DAY_OF_WEEK": "Friday", "NUMBER_OF_CRASHES": 15322},
          {"HOUR": 12, "DAY_OF_WEEK": "Monday", "NUMBER_OF_CRASHES": 13190},
          {"HOUR": 12, "DAY_OF_WEEK": "Saturday", "NUMBER_OF_CRASHES": 17077},
          {"HOUR": 12, "DAY_OF_WEEK": "Sunday", "NUMBER_OF_CRASHES": 12802},
          {"HOUR": 12, "DAY_OF_WEEK": "Thursday", "NUMBER_OF_CRASHES": 13339},
          {"HOUR": 12, "DAY_OF_WEEK": "Tuesday", "NUMBER_OF_CRASHES": 13334},
          {"HOUR": 12, "DAY_OF_WEEK": "Wednesday", "NUMBER_OF_CRASHES": 13339},
          {"HOUR": 13, "DAY_OF_WEEK": "Friday", "NUMBER_OF_CRASHES": 16784},
          {"HOUR": 13, "DAY_OF_WEEK": "Monday", "NUMBER_OF_CRASHES": 13965},
          {"HOUR": 13, "DAY_OF_WEEK": "Saturday", "NUMBER_OF_CRASHES": 17832},
          {"HOUR": 13, "DAY_OF_WEEK": "Sunday", "NUMBER_OF_CRASHES": 13785},
          {"HOUR": 13, "DAY_OF_WEEK": "Thursday", "NUMBER_OF_CRASHES": 13900},
          {"HOUR": 13, "DAY_OF_WEEK": "Tuesday", "NUMBER_OF_CRASHES": 13863},
          {"HOUR": 13, "DAY_OF_WEEK": "Wednesday", "NUMBER_OF_CRASHES": 14073},
          {"HOUR": 14, "DAY_OF_WEEK": "Friday", "NUMBER_OF_CRASHES": 19111},
          {"HOUR": 14, "DAY_OF_WEEK": "Monday", "NUMBER_OF_CRASHES": 15812},
          {"HOUR": 14, "DAY_OF_WEEK": "Saturday", "NUMBER_OF_CRASHES": 18325},
          {"HOUR": 14, "DAY_OF_WEEK": "Sunday", "NUMBER_OF_CRASHES": 14875},
          {"HOUR": 14, "DAY_OF_WEEK": "Thursday", "NUMBER_OF_CRASHES": 15942},
          {"HOUR": 14, "DAY_OF_WEEK": "Tuesday", "NUMBER_OF_CRASHES": 16027},
          {"HOUR": 14, "DAY_OF_WEEK": "Wednesday", "NUMBER_OF_CRASHES": 16539},
          {"HOUR": 15, "DAY_OF_WEEK": "Friday", "NUMBER_OF_CRASHES": 23301},
          {"HOUR": 15, "DAY_OF_WEEK": "Monday", "NUMBER_OF_CRASHES": 20230},
          {"HOUR": 15, "DAY_OF_WEEK": "Saturday", "NUMBER_OF_CRASHES": 18252},
          {"HOUR": 15, "DAY_OF_WEEK": "Sunday", "NUMBER_OF_CRASHES": 14338},
          {"HOUR": 15, "DAY_OF_WEEK": "Thursday", "NUMBER_OF_CRASHES": 20902},
          {"HOUR": 15, "DAY_OF_WEEK": "Tuesday", "NUMBER_OF_CRASHES": 20618},
          {"HOUR": 15, "DAY_OF_WEEK": "Wednesday", "NUMBER_OF_CRASHES": 20534},
          {"HOUR": 16, "DAY_OF_WEEK": "Friday", "NUMBER_OF_CRASHES": 23786},
          {"HOUR": 16, "DAY_OF_WEEK": "Monday", "NUMBER_OF_CRASHES": 20215},
          {"HOUR": 16, "DAY_OF_WEEK": "Saturday", "NUMBER_OF_CRASHES": 17214},
          {"HOUR": 16, "DAY_OF_WEEK": "Sunday", "NUMBER_OF_CRASHES": 13684},
          {"HOUR": 16, "DAY_OF_WEEK": "Thursday", "NUMBER_OF_CRASHES": 21509},
          {"HOUR": 16, "DAY_OF_WEEK": "Tuesday", "NUMBER_OF_CRASHES": 21434},
          {"HOUR": 16, "DAY_OF_WEEK": "Wednesday", "NUMBER_OF_CRASHES": 20564},
          {"HOUR": 17, "DAY_OF_WEEK": "Friday", "NUMBER_OF_CRASHES": 22842},
          {"HOUR": 17, "DAY_OF_WEEK": "Monday", "NUMBER_OF_CRASHES": 18449},
          {"HOUR": 17, "DAY_OF_WEEK": "Saturday", "NUMBER_OF_CRASHES": 16908},
          {"HOUR": 17, "DAY_OF_WEEK": "Sunday", "NUMBER_OF_CRASHES": 13325},
          {"HOUR": 17, "DAY_OF_WEEK": "Thursday", "NUMBER_OF_CRASHES": 20742},
          {"HOUR": 17, "DAY_OF_WEEK": "Tuesday", "NUMBER_OF_CRASHES": 21120},
          {"HOUR": 17, "DAY_OF_WEEK": "Wednesday", "NUMBER_OF_CRASHES": 20602},
          {"HOUR": 18, "DAY_OF_WEEK": "Friday", "NUMBER_OF_CRASHES": 19185},
          {"HOUR": 18, "DAY_OF_WEEK": "Monday", "NUMBER_OF_CRASHES": 14044},
          {"HOUR": 18, "DAY_OF_WEEK": "Saturday", "NUMBER_OF_CRASHES": 15054},
          {"HOUR": 18, "DAY_OF_WEEK": "Sunday", "NUMBER_OF_CRASHES": 12490},
          {"HOUR": 18, "DAY_OF_WEEK": "Thursday", "NUMBER_OF_CRASHES": 16808},
          {"HOUR": 18, "DAY_OF_WEEK": "Tuesday", "NUMBER_OF_CRASHES": 16450},
          {"HOUR": 18, "DAY_OF_WEEK": "Wednesday", "NUMBER_OF_CRASHES": 16012},
          {"HOUR": 19, "DAY_OF_WEEK": "Friday", "NUMBER_OF_CRASHES": 14261},
          {"HOUR": 19, "DAY_OF_WEEK": "Monday", "NUMBER_OF_CRASHES": 9538},
          {"HOUR": 19, "DAY_OF_WEEK": "Saturday", "NUMBER_OF_CRASHES": 12909},
          {"HOUR": 19, "DAY_OF_WEEK": "Sunday", "NUMBER_OF_CRASHES": 10194},
          {"HOUR": 19, "DAY_OF_WEEK": "Thursday", "NUMBER_OF_CRASHES": 11301},
          {"HOUR": 19, "DAY_OF_WEEK": "Tuesday", "NUMBER_OF_CRASHES": 10621},
          {"HOUR": 19, "DAY_OF_WEEK": "Wednesday", "NUMBER_OF_CRASHES": 10696},
          {"HOUR": 20, "DAY_OF_WEEK": "Friday", "NUMBER_OF_CRASHES": 10890},
          {"HOUR": 20, "DAY_OF_WEEK": "Monday", "NUMBER_OF_CRASHES": 7300},
          {"HOUR": 20, "DAY_OF_WEEK": "Saturday", "NUMBER_OF_CRASHES": 11246},
          {"HOUR": 20, "DAY_OF_WEEK": "Sunday", "NUMBER_OF_CRASHES": 8507},
          {"HOUR": 20, "DAY_OF_WEEK": "Thursday", "NUMBER_OF_CRASHES": 8860},
          {"HOUR": 20, "DAY_OF_WEEK": "Tuesday", "NUMBER_OF_CRASHES": 7687},
          {"HOUR": 20, "DAY_OF_WEEK": "Wednesday", "NUMBER_OF_CRASHES": 7882},
          {"HOUR": 21, "DAY_OF_WEEK": "Friday", "NUMBER_OF_CRASHES": 10337},
          {"HOUR": 21, "DAY_OF_WEEK": "Monday", "NUMBER_OF_CRASHES": 6318},
          {"HOUR": 21, "DAY_OF_WEEK": "Saturday", "NUMBER_OF_CRASHES": 10641},
          {"HOUR": 21, "DAY_OF_WEEK": "Sunday", "NUMBER_OF_CRASHES": 7942},
          {"HOUR": 21, "DAY_OF_WEEK": "Thursday", "NUMBER_OF_CRASHES": 7503},
          {"HOUR": 21, "DAY_OF_WEEK": "Tuesday", "NUMBER_OF_CRASHES": 6663},
          {"HOUR": 21, "DAY_OF_WEEK": "Wednesday", "NUMBER_OF_CRASHES": 6940},
          {"HOUR": 22, "DAY_OF_WEEK": "Friday", "NUMBER_OF_CRASHES": 10407},
          {"HOUR": 22, "DAY_OF_WEEK": "Monday", "NUMBER_OF_CRASHES": 5232},
          {"HOUR": 22, "DAY_OF_WEEK": "Saturday", "NUMBER_OF_CRASHES": 10909},
          {"HOUR": 22, "DAY_OF_WEEK": "Sunday", "NUMBER_OF_CRASHES": 6923},
          {"HOUR": 22, "DAY_OF_WEEK": "Thursday", "NUMBER_OF_CRASHES": 6574},
          {"HOUR": 22, "DAY_OF_WEEK": "Tuesday", "NUMBER_OF_CRASHES": 5534},
          {"HOUR": 22, "DAY_OF_WEEK": "Wednesday", "NUMBER_OF_CRASHES": 5564},
          {"HOUR": 23, "DAY_OF_WEEK": "Friday", "NUMBER_OF_CRASHES": 8979},
          {"HOUR": 23, "DAY_OF_WEEK": "Monday", "NUMBER_OF_CRASHES": 3702},
          {"HOUR": 23, "DAY_OF_WEEK": "Saturday", "NUMBER_OF_CRASHES": 10883},
          {"HOUR": 23, "DAY_OF_WEEK": "Sunday", "NUMBER_OF_CRASHES": 5571},
          {"HOUR": 23, "DAY_OF_WEEK": "Thursday", "NUMBER_OF_CRASHES": 5277},
          {"HOUR": 23, "DAY_OF_WEEK": "Tuesday", "NUMBER_OF_CRASHES": 4148},
          {"HOUR": 23, "DAY_OF_WEEK": "Wednesday", "NUMBER_OF_CRASHES": 4416}
        ]
      },
      {
        "name": "data_0",
        "source": "data-18bc52e2bff14767bb5c92aab508ac7c",
        "transform": [
          {
            "type": "filter",
            "expr": "isValid(datum[\"NUMBER_OF_CRASHES\"]) && isFinite(+datum[\"NUMBER_OF_CRASHES\"])"
          }
        ]
      }
    ],
    "marks": [
      {
        "name": "marks",
        "type": "rect",
        "style": ["rect"],
        "from": {"data": "data_0"},
        "encode": {
          "update": {
            "fill": {"scale": "color", "field": "NUMBER_OF_CRASHES"},
            "tooltip": {
              "signal": "{\"HOUR\": format(datum[\"HOUR\"], \"\"), \"DAY_OF_WEEK\": isValid(datum[\"DAY_OF_WEEK\"]) ? datum[\"DAY_OF_WEEK\"] : \"\"+datum[\"DAY_OF_WEEK\"], \"NUMBER_OF_CRASHES\": format(datum[\"NUMBER_OF_CRASHES\"], \"\")}"
            },
            "description": {
              "signal": "\"NUMBER_OF_CRASHES: \" + (format(datum[\"NUMBER_OF_CRASHES\"], \"\")) + \"; HOUR: \" + (format(datum[\"HOUR\"], \"\")) + \"; DAY_OF_WEEK: \" + (isValid(datum[\"DAY_OF_WEEK\"]) ? datum[\"DAY_OF_WEEK\"] : \"\"+datum[\"DAY_OF_WEEK\"])"
            },
            "x": {"scale": "x", "field": "HOUR"},
            "width": {"scale": "x", "band": 1},
            "y": {"scale": "y", "field": "DAY_OF_WEEK"},
            "height": {"scale": "y", "band": 1}
          }
        }
      }
    ],
    "scales": [
      {
        "name": "x",
        "type": "band",
        "domain": {"data": "data_0", "field": "HOUR", "sort": true},
        "range": [0, {"signal": "width"}],
        "paddingInner": 0,
        "paddingOuter": 0
      },
      {
        "name": "y",
        "type": "band",
        "domain": {"data": "data_0", "field": "DAY_OF_WEEK", "sort": true},
        "range": [0, {"signal": "height"}],
        "paddingInner": 0,
        "paddingOuter": 0
      },
      {
        "name": "color",
        "type": "linear",
        "domain": {"data": "data_0", "field": "NUMBER_OF_CRASHES"},
        "range": {"scheme": "oranges"},
        "interpolate": "hcl",
        "zero": false
      }
    ],
    "axes": [
      {
        "scale": "x",
        "orient": "bottom",
        "grid": false,
        "title": "HOUR",
        "labelAlign": "right",
        "labelAngle": 270,
        "labelBaseline": "middle",
        "zindex": 1
      },
      {
        "scale": "y",
        "orient": "left",
        "grid": false,
        "title": "DAY_OF_WEEK",
        "zindex": 1
      }
    ],
    "legends": [
      {
        "title": "Number of Crashes",
        "fill": "color",
        "gradientLength": {"signal": "clamp(height, 64, 200)"}
      }
    ]
  };

  var spec3 = {
    "$schema": "https://vega.github.io/schema/vega/v5.json",
    "background": "white",
    "padding": 5,
    "width": 800,
    "height": 600,
    "title": {
      "text": "Distribution and Trend of Crashes by Person Type",
      "frame": "group"
    },
    "style": "cell",
    "data": [
      {"name": "selector001_store"},
      {
        "name": "data-ab5efea7acaef2f5467cece64c22c8e2",
        "values": [
          {
            "YEAR_MONTH": "2013-03",
            "PERSON_TYPE": "DRIVER",
            "NUMBER_OF_CRASHES": 2
          },
          {
            "YEAR_MONTH": "2013-03",
            "PERSON_TYPE": "PASSENGER",
            "NUMBER_OF_CRASHES": 1
          },
          {
            "YEAR_MONTH": "2013-06",
            "PERSON_TYPE": "DRIVER",
            "NUMBER_OF_CRASHES": 1
          },
          {
            "YEAR_MONTH": "2013-06",
            "PERSON_TYPE": "PEDESTRIAN",
            "NUMBER_OF_CRASHES": 1
          },
          {
            "YEAR_MONTH": "2014-01",
            "PERSON_TYPE": "DRIVER",
            "NUMBER_OF_CRASHES": 3
          },
          {
            "YEAR_MONTH": "2014-01",
            "PERSON_TYPE": "PASSENGER",
            "NUMBER_OF_CRASHES": 1
          },
          {
            "YEAR_MONTH": "2014-02",
            "PERSON_TYPE": "DRIVER",
            "NUMBER_OF_CRASHES": 2
          },
          {
            "YEAR_MONTH": "2014-06",
            "PERSON_TYPE": "DRIVER",
            "NUMBER_OF_CRASHES": 2
          },
          {
            "YEAR_MONTH": "2014-08",
            "PERSON_TYPE": "DRIVER",
            "NUMBER_OF_CRASHES": 2
          },
          {
            "YEAR_MONTH": "2014-11",
            "PERSON_TYPE": "DRIVER",
            "NUMBER_OF_CRASHES": 1
          },
          {
            "YEAR_MONTH": "2015-01",
            "PERSON_TYPE": "DRIVER",
            "NUMBER_OF_CRASHES": 4
          },
          {
            "YEAR_MONTH": "2015-02",
            "PERSON_TYPE": "DRIVER",
            "NUMBER_OF_CRASHES": 2
          },
          {
            "YEAR_MONTH": "2015-04",
            "PERSON_TYPE": "DRIVER",
            "NUMBER_OF_CRASHES": 5
          },
          {
            "YEAR_MONTH": "2015-05",
            "PERSON_TYPE": "DRIVER",
            "NUMBER_OF_CRASHES": 5
          },
          {
            "YEAR_MONTH": "2015-06",
            "PERSON_TYPE": "DRIVER",
            "NUMBER_OF_CRASHES": 5
          },
          {
            "YEAR_MONTH": "2015-06",
            "PERSON_TYPE": "PASSENGER",
            "NUMBER_OF_CRASHES": 3
          },
          {
            "YEAR_MONTH": "2015-07",
            "PERSON_TYPE": "DRIVER",
            "NUMBER_OF_CRASHES": 21
          },
          {
            "YEAR_MONTH": "2015-07",
            "PERSON_TYPE": "PASSENGER",
            "NUMBER_OF_CRASHES": 6
          },
          {
            "YEAR_MONTH": "2015-08",
            "PERSON_TYPE": "BICYCLE",
            "NUMBER_OF_CRASHES": 5
          },
          {
            "YEAR_MONTH": "2015-08",
            "PERSON_TYPE": "DRIVER",
            "NUMBER_OF_CRASHES": 790
          },
          {
            "YEAR_MONTH": "2015-08",
            "PERSON_TYPE": "NON-MOTOR VEHICLE",
            "NUMBER_OF_CRASHES": 1
          },
          {
            "YEAR_MONTH": "2015-08",
            "PERSON_TYPE": "PASSENGER",
            "NUMBER_OF_CRASHES": 165
          },
          {
            "YEAR_MONTH": "2015-08",
            "PERSON_TYPE": "PEDESTRIAN",
            "NUMBER_OF_CRASHES": 2
          },
          {
            "YEAR_MONTH": "2015-09",
            "PERSON_TYPE": "BICYCLE",
            "NUMBER_OF_CRASHES": 29
          },
          {
            "YEAR_MONTH": "2015-09",
            "PERSON_TYPE": "DRIVER",
            "NUMBER_OF_CRASHES": 2622
          },
          {
            "YEAR_MONTH": "2015-09",
            "PERSON_TYPE": "NON-MOTOR VEHICLE",
            "NUMBER_OF_CRASHES": 4
          },
          {
            "YEAR_MONTH": "2015-09",
            "PERSON_TYPE": "PASSENGER",
            "NUMBER_OF_CRASHES": 549
          },
          {
            "YEAR_MONTH": "2015-09",
            "PERSON_TYPE": "PEDESTRIAN",
            "NUMBER_OF_CRASHES": 18
          },
          {
            "YEAR_MONTH": "2015-10",
            "PERSON_TYPE": "BICYCLE",
            "NUMBER_OF_CRASHES": 22
          },
          {
            "YEAR_MONTH": "2015-10",
            "PERSON_TYPE": "DRIVER",
            "NUMBER_OF_CRASHES": 4952
          },
          {
            "YEAR_MONTH": "2015-10",
            "PERSON_TYPE": "NON-MOTOR VEHICLE",
            "NUMBER_OF_CRASHES": 9
          },
          {
            "YEAR_MONTH": "2015-10",
            "PERSON_TYPE": "PASSENGER",
            "NUMBER_OF_CRASHES": 950
          },
          {
            "YEAR_MONTH": "2015-10",
            "PERSON_TYPE": "PEDESTRIAN",
            "NUMBER_OF_CRASHES": 24
          },
          {
            "YEAR_MONTH": "2015-11",
            "PERSON_TYPE": "BICYCLE",
            "NUMBER_OF_CRASHES": 21
          },
          {
            "YEAR_MONTH": "2015-11",
            "PERSON_TYPE": "DRIVER",
            "NUMBER_OF_CRASHES": 4512
          },
          {
            "YEAR_MONTH": "2015-11",
            "PERSON_TYPE": "NON-CONTACT VEHICLE",
            "NUMBER_OF_CRASHES": 1
          },
          {
            "YEAR_MONTH": "2015-11",
            "PERSON_TYPE": "NON-MOTOR VEHICLE",
            "NUMBER_OF_CRASHES": 6
          },
          {
            "YEAR_MONTH": "2015-11",
            "PERSON_TYPE": "PASSENGER",
            "NUMBER_OF_CRASHES": 983
          },
          {
            "YEAR_MONTH": "2015-11",
            "PERSON_TYPE": "PEDESTRIAN",
            "NUMBER_OF_CRASHES": 26
          },
          {
            "YEAR_MONTH": "2015-12",
            "PERSON_TYPE": "BICYCLE",
            "NUMBER_OF_CRASHES": 21
          },
          {
            "YEAR_MONTH": "2015-12",
            "PERSON_TYPE": "DRIVER",
            "NUMBER_OF_CRASHES": 4204
          },
          {
            "YEAR_MONTH": "2015-12",
            "PERSON_TYPE": "NON-CONTACT VEHICLE",
            "NUMBER_OF_CRASHES": 1
          },
          {
            "YEAR_MONTH": "2015-12",
            "PERSON_TYPE": "NON-MOTOR VEHICLE",
            "NUMBER_OF_CRASHES": 5
          },
          {
            "YEAR_MONTH": "2015-12",
            "PERSON_TYPE": "PASSENGER",
            "NUMBER_OF_CRASHES": 933
          },
          {
            "YEAR_MONTH": "2015-12",
            "PERSON_TYPE": "PEDESTRIAN",
            "NUMBER_OF_CRASHES": 25
          },
          {
            "YEAR_MONTH": "2016-01",
            "PERSON_TYPE": "BICYCLE",
            "NUMBER_OF_CRASHES": 9
          },
          {
            "YEAR_MONTH": "2016-01",
            "PERSON_TYPE": "DRIVER",
            "NUMBER_OF_CRASHES": 4883
          },
          {
            "YEAR_MONTH": "2016-01",
            "PERSON_TYPE": "NON-CONTACT VEHICLE",
            "NUMBER_OF_CRASHES": 1
          },
          {
            "YEAR_MONTH": "2016-01",
            "PERSON_TYPE": "NON-MOTOR VEHICLE",
            "NUMBER_OF_CRASHES": 4
          },
          {
            "YEAR_MONTH": "2016-01",
            "PERSON_TYPE": "PASSENGER",
            "NUMBER_OF_CRASHES": 1100
          },
          {
            "YEAR_MONTH": "2016-01",
            "PERSON_TYPE": "PEDESTRIAN",
            "NUMBER_OF_CRASHES": 28
          },
          {
            "YEAR_MONTH": "2016-02",
            "PERSON_TYPE": "BICYCLE",
            "NUMBER_OF_CRASHES": 8
          },
          {
            "YEAR_MONTH": "2016-02",
            "PERSON_TYPE": "DRIVER",
            "NUMBER_OF_CRASHES": 4440
          },
          {
            "YEAR_MONTH": "2016-02",
            "PERSON_TYPE": "NON-MOTOR VEHICLE",
            "NUMBER_OF_CRASHES": 5
          },
          {
            "YEAR_MONTH": "2016-02",
            "PERSON_TYPE": "PASSENGER",
            "NUMBER_OF_CRASHES": 970
          },
          {
            "YEAR_MONTH": "2016-02",
            "PERSON_TYPE": "PEDESTRIAN",
            "NUMBER_OF_CRASHES": 24
          },
          {
            "YEAR_MONTH": "2016-03",
            "PERSON_TYPE": "BICYCLE",
            "NUMBER_OF_CRASHES": 14
          },
          {
            "YEAR_MONTH": "2016-03",
            "PERSON_TYPE": "DRIVER",
            "NUMBER_OF_CRASHES": 5112
          },
          {
            "YEAR_MONTH": "2016-03",
            "PERSON_TYPE": "NON-MOTOR VEHICLE",
            "NUMBER_OF_CRASHES": 8
          },
          {
            "YEAR_MONTH": "2016-03",
            "PERSON_TYPE": "PASSENGER",
            "NUMBER_OF_CRASHES": 1244
          },
          {
            "YEAR_MONTH": "2016-03",
            "PERSON_TYPE": "PEDESTRIAN",
            "NUMBER_OF_CRASHES": 36
          },
          {
            "YEAR_MONTH": "2016-04",
            "PERSON_TYPE": "BICYCLE",
            "NUMBER_OF_CRASHES": 20
          },
          {
            "YEAR_MONTH": "2016-04",
            "PERSON_TYPE": "DRIVER",
            "NUMBER_OF_CRASHES": 5123
          },
          {
            "YEAR_MONTH": "2016-04",
            "PERSON_TYPE": "NON-CONTACT VEHICLE",
            "NUMBER_OF_CRASHES": 1
          },
          {
            "YEAR_MONTH": "2016-04",
            "PERSON_TYPE": "NON-MOTOR VEHICLE",
            "NUMBER_OF_CRASHES": 5
          },
          {
            "YEAR_MONTH": "2016-04",
            "PERSON_TYPE": "PASSENGER",
            "NUMBER_OF_CRASHES": 1132
          },
          {
            "YEAR_MONTH": "2016-04",
            "PERSON_TYPE": "PEDESTRIAN",
            "NUMBER_OF_CRASHES": 23
          },
          {
            "YEAR_MONTH": "2016-05",
            "PERSON_TYPE": "BICYCLE",
            "NUMBER_OF_CRASHES": 21
          },
          {
            "YEAR_MONTH": "2016-05",
            "PERSON_TYPE": "DRIVER",
            "NUMBER_OF_CRASHES": 5430
          },
          {
            "YEAR_MONTH": "2016-05",
            "PERSON_TYPE": "NON-MOTOR VEHICLE",
            "NUMBER_OF_CRASHES": 11
          },
          {
            "YEAR_MONTH": "2016-05",
            "PERSON_TYPE": "PASSENGER",
            "NUMBER_OF_CRASHES": 1366
          },
          {
            "YEAR_MONTH": "2016-05",
            "PERSON_TYPE": "PEDESTRIAN",
            "NUMBER_OF_CRASHES": 23
          },
          {
            "YEAR_MONTH": "2016-06",
            "PERSON_TYPE": "BICYCLE",
            "NUMBER_OF_CRASHES": 32
          },
          {
            "YEAR_MONTH": "2016-06",
            "PERSON_TYPE": "DRIVER",
            "NUMBER_OF_CRASHES": 4930
          },
          {
            "YEAR_MONTH": "2016-06",
            "PERSON_TYPE": "NON-CONTACT VEHICLE",
            "NUMBER_OF_CRASHES": 3
          },
          {
            "YEAR_MONTH": "2016-06",
            "PERSON_TYPE": "NON-MOTOR VEHICLE",
            "NUMBER_OF_CRASHES": 8
          },
          {
            "YEAR_MONTH": "2016-06",
            "PERSON_TYPE": "PASSENGER",
            "NUMBER_OF_CRASHES": 1081
          },
          {
            "YEAR_MONTH": "2016-06",
            "PERSON_TYPE": "PEDESTRIAN",
            "NUMBER_OF_CRASHES": 29
          },
          {
            "YEAR_MONTH": "2016-07",
            "PERSON_TYPE": "BICYCLE",
            "NUMBER_OF_CRASHES": 36
          },
          {
            "YEAR_MONTH": "2016-07",
            "PERSON_TYPE": "DRIVER",
            "NUMBER_OF_CRASHES": 5799
          },
          {
            "YEAR_MONTH": "2016-07",
            "PERSON_TYPE": "NON-CONTACT VEHICLE",
            "NUMBER_OF_CRASHES": 4
          },
          {
            "YEAR_MONTH": "2016-07",
            "PERSON_TYPE": "NON-MOTOR VEHICLE",
            "NUMBER_OF_CRASHES": 10
          },
          {
            "YEAR_MONTH": "2016-07",
            "PERSON_TYPE": "PASSENGER",
            "NUMBER_OF_CRASHES": 1311
          },
          {
            "YEAR_MONTH": "2016-07",
            "PERSON_TYPE": "PEDESTRIAN",
            "NUMBER_OF_CRASHES": 34
          },
          {
            "YEAR_MONTH": "2016-08",
            "PERSON_TYPE": "BICYCLE",
            "NUMBER_OF_CRASHES": 62
          },
          {
            "YEAR_MONTH": "2016-08",
            "PERSON_TYPE": "DRIVER",
            "NUMBER_OF_CRASHES": 7749
          },
          {
            "YEAR_MONTH": "2016-08",
            "PERSON_TYPE": "NON-MOTOR VEHICLE",
            "NUMBER_OF_CRASHES": 11
          },
          {
            "YEAR_MONTH": "2016-08",
            "PERSON_TYPE": "PASSENGER",
            "NUMBER_OF_CRASHES": 1761
          },
          {
            "YEAR_MONTH": "2016-08",
            "PERSON_TYPE": "PEDESTRIAN",
            "NUMBER_OF_CRASHES": 39
          },
          {
            "YEAR_MONTH": "2016-09",
            "PERSON_TYPE": "BICYCLE",
            "NUMBER_OF_CRASHES": 64
          },
          {
            "YEAR_MONTH": "2016-09",
            "PERSON_TYPE": "DRIVER",
            "NUMBER_OF_CRASHES": 8208
          },
          {
            "YEAR_MONTH": "2016-09",
            "PERSON_TYPE": "NON-CONTACT VEHICLE",
            "NUMBER_OF_CRASHES": 2
          },
          {
            "YEAR_MONTH": "2016-09",
            "PERSON_TYPE": "NON-MOTOR VEHICLE",
            "NUMBER_OF_CRASHES": 10
          },
          {
            "YEAR_MONTH": "2016-09",
            "PERSON_TYPE": "PASSENGER",
            "NUMBER_OF_CRASHES": 1756
          },
          {
            "YEAR_MONTH": "2016-09",
            "PERSON_TYPE": "PEDESTRIAN",
            "NUMBER_OF_CRASHES": 46
          },
          {
            "YEAR_MONTH": "2016-10",
            "PERSON_TYPE": "BICYCLE",
            "NUMBER_OF_CRASHES": 62
          },
          {
            "YEAR_MONTH": "2016-10",
            "PERSON_TYPE": "DRIVER",
            "NUMBER_OF_CRASHES": 8680
          },
          {
            "YEAR_MONTH": "2016-10",
            "PERSON_TYPE": "NON-CONTACT VEHICLE",
            "NUMBER_OF_CRASHES": 3
          },
          {
            "YEAR_MONTH": "2016-10",
            "PERSON_TYPE": "NON-MOTOR VEHICLE",
            "NUMBER_OF_CRASHES": 5
          },
          {
            "YEAR_MONTH": "2016-10",
            "PERSON_TYPE": "PASSENGER",
            "NUMBER_OF_CRASHES": 2035
          },
          {
            "YEAR_MONTH": "2016-10",
            "PERSON_TYPE": "PEDESTRIAN",
            "NUMBER_OF_CRASHES": 71
          },
          {
            "YEAR_MONTH": "2016-11",
            "PERSON_TYPE": "BICYCLE",
            "NUMBER_OF_CRASHES": 46
          },
          {
            "YEAR_MONTH": "2016-11",
            "PERSON_TYPE": "DRIVER",
            "NUMBER_OF_CRASHES": 8298
          },
          {
            "YEAR_MONTH": "2016-11",
            "PERSON_TYPE": "NON-CONTACT VEHICLE",
            "NUMBER_OF_CRASHES": 1
          },
          {
            "YEAR_MONTH": "2016-11",
            "PERSON_TYPE": "NON-MOTOR VEHICLE",
            "NUMBER_OF_CRASHES": 5
          },
          {
            "YEAR_MONTH": "2016-11",
            "PERSON_TYPE": "PASSENGER",
            "NUMBER_OF_CRASHES": 1857
          },
          {
            "YEAR_MONTH": "2016-11",
            "PERSON_TYPE": "PEDESTRIAN",
            "NUMBER_OF_CRASHES": 67
          },
          {
            "YEAR_MONTH": "2016-12",
            "PERSON_TYPE": "BICYCLE",
            "NUMBER_OF_CRASHES": 12
          },
          {
            "YEAR_MONTH": "2016-12",
            "PERSON_TYPE": "DRIVER",
            "NUMBER_OF_CRASHES": 8904
          },
          {
            "YEAR_MONTH": "2016-12",
            "PERSON_TYPE": "NON-CONTACT VEHICLE",
            "NUMBER_OF_CRASHES": 3
          },
          {
            "YEAR_MONTH": "2016-12",
            "PERSON_TYPE": "NON-MOTOR VEHICLE",
            "NUMBER_OF_CRASHES": 9
          },
          {
            "YEAR_MONTH": "2016-12",
            "PERSON_TYPE": "PASSENGER",
            "NUMBER_OF_CRASHES": 1888
          },
          {
            "YEAR_MONTH": "2016-12",
            "PERSON_TYPE": "PEDESTRIAN",
            "NUMBER_OF_CRASHES": 50
          },
          {
            "YEAR_MONTH": "2017-01",
            "PERSON_TYPE": "BICYCLE",
            "NUMBER_OF_CRASHES": 25
          },
          {
            "YEAR_MONTH": "2017-01",
            "PERSON_TYPE": "DRIVER",
            "NUMBER_OF_CRASHES": 7459
          },
          {
            "YEAR_MONTH": "2017-01",
            "PERSON_TYPE": "NON-CONTACT VEHICLE",
            "NUMBER_OF_CRASHES": 2
          },
          {
            "YEAR_MONTH": "2017-01",
            "PERSON_TYPE": "NON-MOTOR VEHICLE",
            "NUMBER_OF_CRASHES": 11
          },
          {
            "YEAR_MONTH": "2017-01",
            "PERSON_TYPE": "PASSENGER",
            "NUMBER_OF_CRASHES": 1579
          },
          {
            "YEAR_MONTH": "2017-01",
            "PERSON_TYPE": "PEDESTRIAN",
            "NUMBER_OF_CRASHES": 58
          },
          {
            "YEAR_MONTH": "2017-02",
            "PERSON_TYPE": "BICYCLE",
            "NUMBER_OF_CRASHES": 18
          },
          {
            "YEAR_MONTH": "2017-02",
            "PERSON_TYPE": "DRIVER",
            "NUMBER_OF_CRASHES": 7207
          },
          {
            "YEAR_MONTH": "2017-02",
            "PERSON_TYPE": "NON-MOTOR VEHICLE",
            "NUMBER_OF_CRASHES": 7
          },
          {
            "YEAR_MONTH": "2017-02",
            "PERSON_TYPE": "PASSENGER",
            "NUMBER_OF_CRASHES": 1692
          },
          {
            "YEAR_MONTH": "2017-02",
            "PERSON_TYPE": "PEDESTRIAN",
            "NUMBER_OF_CRASHES": 62
          },
          {
            "YEAR_MONTH": "2017-03",
            "PERSON_TYPE": "BICYCLE",
            "NUMBER_OF_CRASHES": 19
          },
          {
            "YEAR_MONTH": "2017-03",
            "PERSON_TYPE": "DRIVER",
            "NUMBER_OF_CRASHES": 8890
          },
          {
            "YEAR_MONTH": "2017-03",
            "PERSON_TYPE": "NON-CONTACT VEHICLE",
            "NUMBER_OF_CRASHES": 4
          },
          {
            "YEAR_MONTH": "2017-03",
            "PERSON_TYPE": "NON-MOTOR VEHICLE",
            "NUMBER_OF_CRASHES": 6
          },
          {
            "YEAR_MONTH": "2017-03",
            "PERSON_TYPE": "PASSENGER",
            "NUMBER_OF_CRASHES": 2026
          },
          {
            "YEAR_MONTH": "2017-03",
            "PERSON_TYPE": "PEDESTRIAN",
            "NUMBER_OF_CRASHES": 55
          },
          {
            "YEAR_MONTH": "2017-04",
            "PERSON_TYPE": "BICYCLE",
            "NUMBER_OF_CRASHES": 51
          },
          {
            "YEAR_MONTH": "2017-04",
            "PERSON_TYPE": "DRIVER",
            "NUMBER_OF_CRASHES": 8743
          },
          {
            "YEAR_MONTH": "2017-04",
            "PERSON_TYPE": "NON-CONTACT VEHICLE",
            "NUMBER_OF_CRASHES": 2
          },
          {
            "YEAR_MONTH": "2017-04",
            "PERSON_TYPE": "NON-MOTOR VEHICLE",
            "NUMBER_OF_CRASHES": 5
          },
          {
            "YEAR_MONTH": "2017-04",
            "PERSON_TYPE": "PASSENGER",
            "NUMBER_OF_CRASHES": 2242
          },
          {
            "YEAR_MONTH": "2017-04",
            "PERSON_TYPE": "PEDESTRIAN",
            "NUMBER_OF_CRASHES": 69
          },
          {
            "YEAR_MONTH": "2017-05",
            "PERSON_TYPE": "BICYCLE",
            "NUMBER_OF_CRASHES": 54
          },
          {
            "YEAR_MONTH": "2017-05",
            "PERSON_TYPE": "DRIVER",
            "NUMBER_OF_CRASHES": 10158
          },
          {
            "YEAR_MONTH": "2017-05",
            "PERSON_TYPE": "NON-CONTACT VEHICLE",
            "NUMBER_OF_CRASHES": 4
          },
          {
            "YEAR_MONTH": "2017-05",
            "PERSON_TYPE": "NON-MOTOR VEHICLE",
            "NUMBER_OF_CRASHES": 6
          },
          {
            "YEAR_MONTH": "2017-05",
            "PERSON_TYPE": "PASSENGER",
            "NUMBER_OF_CRASHES": 2773
          },
          {
            "YEAR_MONTH": "2017-05",
            "PERSON_TYPE": "PEDESTRIAN",
            "NUMBER_OF_CRASHES": 85
          },
          {
            "YEAR_MONTH": "2017-06",
            "PERSON_TYPE": "BICYCLE",
            "NUMBER_OF_CRASHES": 96
          },
          {
            "YEAR_MONTH": "2017-06",
            "PERSON_TYPE": "DRIVER",
            "NUMBER_OF_CRASHES": 10856
          },
          {
            "YEAR_MONTH": "2017-06",
            "PERSON_TYPE": "NON-CONTACT VEHICLE",
            "NUMBER_OF_CRASHES": 5
          },
          {
            "YEAR_MONTH": "2017-06",
            "PERSON_TYPE": "NON-MOTOR VEHICLE",
            "NUMBER_OF_CRASHES": 10
          },
          {
            "YEAR_MONTH": "2017-06",
            "PERSON_TYPE": "PASSENGER",
            "NUMBER_OF_CRASHES": 2892
          },
          {
            "YEAR_MONTH": "2017-06",
            "PERSON_TYPE": "PEDESTRIAN",
            "NUMBER_OF_CRASHES": 103
          },
          {
            "YEAR_MONTH": "2017-07",
            "PERSON_TYPE": "BICYCLE",
            "NUMBER_OF_CRASHES": 129
          },
          {
            "YEAR_MONTH": "2017-07",
            "PERSON_TYPE": "DRIVER",
            "NUMBER_OF_CRASHES": 11551
          },
          {
            "YEAR_MONTH": "2017-07",
            "PERSON_TYPE": "NON-CONTACT VEHICLE",
            "NUMBER_OF_CRASHES": 1
          },
          {
            "YEAR_MONTH": "2017-07",
            "PERSON_TYPE": "NON-MOTOR VEHICLE",
            "NUMBER_OF_CRASHES": 15
          },
          {
            "YEAR_MONTH": "2017-07",
            "PERSON_TYPE": "PASSENGER",
            "NUMBER_OF_CRASHES": 3077
          },
          {
            "YEAR_MONTH": "2017-07",
            "PERSON_TYPE": "PEDESTRIAN",
            "NUMBER_OF_CRASHES": 135
          },
          {
            "YEAR_MONTH": "2017-08",
            "PERSON_TYPE": "BICYCLE",
            "NUMBER_OF_CRASHES": 195
          },
          {
            "YEAR_MONTH": "2017-08",
            "PERSON_TYPE": "DRIVER",
            "NUMBER_OF_CRASHES": 13088
          },
          {
            "YEAR_MONTH": "2017-08",
            "PERSON_TYPE": "NON-CONTACT VEHICLE",
            "NUMBER_OF_CRASHES": 3
          },
          {
            "YEAR_MONTH": "2017-08",
            "PERSON_TYPE": "NON-MOTOR VEHICLE",
            "NUMBER_OF_CRASHES": 22
          },
          {
            "YEAR_MONTH": "2017-08",
            "PERSON_TYPE": "PASSENGER",
            "NUMBER_OF_CRASHES": 3527
          },
          {
            "YEAR_MONTH": "2017-08",
            "PERSON_TYPE": "PEDESTRIAN",
            "NUMBER_OF_CRASHES": 192
          },
          {
            "YEAR_MONTH": "2017-09",
            "PERSON_TYPE": "BICYCLE",
            "NUMBER_OF_CRASHES": 297
          },
          {
            "YEAR_MONTH": "2017-09",
            "PERSON_TYPE": "DRIVER",
            "NUMBER_OF_CRASHES": 15320
          },
          {
            "YEAR_MONTH": "2017-09",
            "PERSON_TYPE": "NON-CONTACT VEHICLE",
            "NUMBER_OF_CRASHES": 1
          },
          {
            "YEAR_MONTH": "2017-09",
            "PERSON_TYPE": "NON-MOTOR VEHICLE",
            "NUMBER_OF_CRASHES": 12
          },
          {
            "YEAR_MONTH": "2017-09",
            "PERSON_TYPE": "PASSENGER",
            "NUMBER_OF_CRASHES": 4236
          },
          {
            "YEAR_MONTH": "2017-09",
            "PERSON_TYPE": "PEDESTRIAN",
            "NUMBER_OF_CRASHES": 277
          },
          {
            "YEAR_MONTH": "2017-10",
            "PERSON_TYPE": "BICYCLE",
            "NUMBER_OF_CRASHES": 233
          },
          {
            "YEAR_MONTH": "2017-10",
            "PERSON_TYPE": "DRIVER",
            "NUMBER_OF_CRASHES": 17250
          },
          {
            "YEAR_MONTH": "2017-10",
            "PERSON_TYPE": "NON-CONTACT VEHICLE",
            "NUMBER_OF_CRASHES": 6
          },
          {
            "YEAR_MONTH": "2017-10",
            "PERSON_TYPE": "NON-MOTOR VEHICLE",
            "NUMBER_OF_CRASHES": 22
          },
          {
            "YEAR_MONTH": "2017-10",
            "PERSON_TYPE": "PASSENGER",
            "NUMBER_OF_CRASHES": 4603
          },
          {
            "YEAR_MONTH": "2017-10",
            "PERSON_TYPE": "PEDESTRIAN",
            "NUMBER_OF_CRASHES": 348
          },
          {
            "YEAR_MONTH": "2017-11",
            "PERSON_TYPE": "BICYCLE",
            "NUMBER_OF_CRASHES": 125
          },
          {
            "YEAR_MONTH": "2017-11",
            "PERSON_TYPE": "DRIVER",
            "NUMBER_OF_CRASHES": 16469
          },
          {
            "YEAR_MONTH": "2017-11",
            "PERSON_TYPE": "NON-CONTACT VEHICLE",
            "NUMBER_OF_CRASHES": 6
          },
          {
            "YEAR_MONTH": "2017-11",
            "PERSON_TYPE": "NON-MOTOR VEHICLE",
            "NUMBER_OF_CRASHES": 24
          },
          {
            "YEAR_MONTH": "2017-11",
            "PERSON_TYPE": "PASSENGER",
            "NUMBER_OF_CRASHES": 4215
          },
          {
            "YEAR_MONTH": "2017-11",
            "PERSON_TYPE": "PEDESTRIAN",
            "NUMBER_OF_CRASHES": 298
          },
          {
            "YEAR_MONTH": "2017-12",
            "PERSON_TYPE": "BICYCLE",
            "NUMBER_OF_CRASHES": 65
          },
          {
            "YEAR_MONTH": "2017-12",
            "PERSON_TYPE": "DRIVER",
            "NUMBER_OF_CRASHES": 17422
          },
          {
            "YEAR_MONTH": "2017-12",
            "PERSON_TYPE": "NON-CONTACT VEHICLE",
            "NUMBER_OF_CRASHES": 6
          },
          {
            "YEAR_MONTH": "2017-12",
            "PERSON_TYPE": "NON-MOTOR VEHICLE",
            "NUMBER_OF_CRASHES": 19
          },
          {
            "YEAR_MONTH": "2017-12",
            "PERSON_TYPE": "PASSENGER",
            "NUMBER_OF_CRASHES": 4566
          },
          {
            "YEAR_MONTH": "2017-12",
            "PERSON_TYPE": "PEDESTRIAN",
            "NUMBER_OF_CRASHES": 299
          },
          {
            "YEAR_MONTH": "2018-01",
            "PERSON_TYPE": "BICYCLE",
            "NUMBER_OF_CRASHES": 57
          },
          {
            "YEAR_MONTH": "2018-01",
            "PERSON_TYPE": "DRIVER",
            "NUMBER_OF_CRASHES": 16513
          },
          {
            "YEAR_MONTH": "2018-01",
            "PERSON_TYPE": "NON-CONTACT VEHICLE",
            "NUMBER_OF_CRASHES": 5
          },
          {
            "YEAR_MONTH": "2018-01",
            "PERSON_TYPE": "NON-MOTOR VEHICLE",
            "NUMBER_OF_CRASHES": 20
          },
          {
            "YEAR_MONTH": "2018-01",
            "PERSON_TYPE": "PASSENGER",
            "NUMBER_OF_CRASHES": 4233
          },
          {
            "YEAR_MONTH": "2018-01",
            "PERSON_TYPE": "PEDESTRIAN",
            "NUMBER_OF_CRASHES": 346
          },
          {
            "YEAR_MONTH": "2018-02",
            "PERSON_TYPE": "BICYCLE",
            "NUMBER_OF_CRASHES": 47
          },
          {
            "YEAR_MONTH": "2018-02",
            "PERSON_TYPE": "DRIVER",
            "NUMBER_OF_CRASHES": 14788
          },
          {
            "YEAR_MONTH": "2018-02",
            "PERSON_TYPE": "NON-CONTACT VEHICLE",
            "NUMBER_OF_CRASHES": 2
          },
          {
            "YEAR_MONTH": "2018-02",
            "PERSON_TYPE": "NON-MOTOR VEHICLE",
            "NUMBER_OF_CRASHES": 19
          },
          {
            "YEAR_MONTH": "2018-02",
            "PERSON_TYPE": "PASSENGER",
            "NUMBER_OF_CRASHES": 3709
          },
          {
            "YEAR_MONTH": "2018-02",
            "PERSON_TYPE": "PEDESTRIAN",
            "NUMBER_OF_CRASHES": 265
          },
          {
            "YEAR_MONTH": "2018-03",
            "PERSON_TYPE": "BICYCLE",
            "NUMBER_OF_CRASHES": 79
          },
          {
            "YEAR_MONTH": "2018-03",
            "PERSON_TYPE": "DRIVER",
            "NUMBER_OF_CRASHES": 16062
          },
          {
            "YEAR_MONTH": "2018-03",
            "PERSON_TYPE": "NON-CONTACT VEHICLE",
            "NUMBER_OF_CRASHES": 2
          },
          {
            "YEAR_MONTH": "2018-03",
            "PERSON_TYPE": "NON-MOTOR VEHICLE",
            "NUMBER_OF_CRASHES": 19
          },
          {
            "YEAR_MONTH": "2018-03",
            "PERSON_TYPE": "PASSENGER",
            "NUMBER_OF_CRASHES": 4531
          },
          {
            "YEAR_MONTH": "2018-03",
            "PERSON_TYPE": "PEDESTRIAN",
            "NUMBER_OF_CRASHES": 260
          },
          {
            "YEAR_MONTH": "2018-04",
            "PERSON_TYPE": "BICYCLE",
            "NUMBER_OF_CRASHES": 106
          },
          {
            "YEAR_MONTH": "2018-04",
            "PERSON_TYPE": "DRIVER",
            "NUMBER_OF_CRASHES": 16673
          },
          {
            "YEAR_MONTH": "2018-04",
            "PERSON_TYPE": "NON-CONTACT VEHICLE",
            "NUMBER_OF_CRASHES": 2
          },
          {
            "YEAR_MONTH": "2018-04",
            "PERSON_TYPE": "NON-MOTOR VEHICLE",
            "NUMBER_OF_CRASHES": 16
          },
          {
            "YEAR_MONTH": "2018-04",
            "PERSON_TYPE": "PASSENGER",
            "NUMBER_OF_CRASHES": 4525
          },
          {
            "YEAR_MONTH": "2018-04",
            "PERSON_TYPE": "PEDESTRIAN",
            "NUMBER_OF_CRASHES": 274
          },
          {
            "YEAR_MONTH": "2018-05",
            "PERSON_TYPE": "BICYCLE",
            "NUMBER_OF_CRASHES": 220
          },
          {
            "YEAR_MONTH": "2018-05",
            "PERSON_TYPE": "DRIVER",
            "NUMBER_OF_CRASHES": 18430
          },
          {
            "YEAR_MONTH": "2018-05",
            "PERSON_TYPE": "NON-CONTACT VEHICLE",
            "NUMBER_OF_CRASHES": 8
          },
          {
            "YEAR_MONTH": "2018-05",
            "PERSON_TYPE": "NON-MOTOR VEHICLE",
            "NUMBER_OF_CRASHES": 21
          },
          {
            "YEAR_MONTH": "2018-05",
            "PERSON_TYPE": "PASSENGER",
            "NUMBER_OF_CRASHES": 5611
          },
          {
            "YEAR_MONTH": "2018-05",
            "PERSON_TYPE": "PEDESTRIAN",
            "NUMBER_OF_CRASHES": 294
          },
          {
            "YEAR_MONTH": "2018-06",
            "PERSON_TYPE": "BICYCLE",
            "NUMBER_OF_CRASHES": 238
          },
          {
            "YEAR_MONTH": "2018-06",
            "PERSON_TYPE": "DRIVER",
            "NUMBER_OF_CRASHES": 18165
          },
          {
            "YEAR_MONTH": "2018-06",
            "PERSON_TYPE": "NON-CONTACT VEHICLE",
            "NUMBER_OF_CRASHES": 2
          },
          {
            "YEAR_MONTH": "2018-06",
            "PERSON_TYPE": "NON-MOTOR VEHICLE",
            "NUMBER_OF_CRASHES": 25
          },
          {
            "YEAR_MONTH": "2018-06",
            "PERSON_TYPE": "PASSENGER",
            "NUMBER_OF_CRASHES": 5068
          },
          {
            "YEAR_MONTH": "2018-06",
            "PERSON_TYPE": "PEDESTRIAN",
            "NUMBER_OF_CRASHES": 260
          },
          {
            "YEAR_MONTH": "2018-07",
            "PERSON_TYPE": "BICYCLE",
            "NUMBER_OF_CRASHES": 294
          },
          {
            "YEAR_MONTH": "2018-07",
            "PERSON_TYPE": "DRIVER",
            "NUMBER_OF_CRASHES": 17475
          },
          {
            "YEAR_MONTH": "2018-07",
            "PERSON_TYPE": "NON-CONTACT VEHICLE",
            "NUMBER_OF_CRASHES": 2
          },
          {
            "YEAR_MONTH": "2018-07",
            "PERSON_TYPE": "NON-MOTOR VEHICLE",
            "NUMBER_OF_CRASHES": 21
          },
          {
            "YEAR_MONTH": "2018-07",
            "PERSON_TYPE": "PASSENGER",
            "NUMBER_OF_CRASHES": 4989
          },
          {
            "YEAR_MONTH": "2018-07",
            "PERSON_TYPE": "PEDESTRIAN",
            "NUMBER_OF_CRASHES": 266
          },
          {
            "YEAR_MONTH": "2018-08",
            "PERSON_TYPE": "BICYCLE",
            "NUMBER_OF_CRASHES": 316
          },
          {
            "YEAR_MONTH": "2018-08",
            "PERSON_TYPE": "DRIVER",
            "NUMBER_OF_CRASHES": 17337
          },
          {
            "YEAR_MONTH": "2018-08",
            "PERSON_TYPE": "NON-CONTACT VEHICLE",
            "NUMBER_OF_CRASHES": 5
          },
          {
            "YEAR_MONTH": "2018-08",
            "PERSON_TYPE": "NON-MOTOR VEHICLE",
            "NUMBER_OF_CRASHES": 22
          },
          {
            "YEAR_MONTH": "2018-08",
            "PERSON_TYPE": "PASSENGER",
            "NUMBER_OF_CRASHES": 4756
          },
          {
            "YEAR_MONTH": "2018-08",
            "PERSON_TYPE": "PEDESTRIAN",
            "NUMBER_OF_CRASHES": 272
          },
          {
            "YEAR_MONTH": "2018-09",
            "PERSON_TYPE": "BICYCLE",
            "NUMBER_OF_CRASHES": 258
          },
          {
            "YEAR_MONTH": "2018-09",
            "PERSON_TYPE": "DRIVER",
            "NUMBER_OF_CRASHES": 16947
          },
          {
            "YEAR_MONTH": "2018-09",
            "PERSON_TYPE": "NON-CONTACT VEHICLE",
            "NUMBER_OF_CRASHES": 3
          },
          {
            "YEAR_MONTH": "2018-09",
            "PERSON_TYPE": "NON-MOTOR VEHICLE",
            "NUMBER_OF_CRASHES": 22
          },
          {
            "YEAR_MONTH": "2018-09",
            "PERSON_TYPE": "PASSENGER",
            "NUMBER_OF_CRASHES": 4769
          },
          {
            "YEAR_MONTH": "2018-09",
            "PERSON_TYPE": "PEDESTRIAN",
            "NUMBER_OF_CRASHES": 299
          },
          {
            "YEAR_MONTH": "2018-10",
            "PERSON_TYPE": "BICYCLE",
            "NUMBER_OF_CRASHES": 178
          },
          {
            "YEAR_MONTH": "2018-10",
            "PERSON_TYPE": "DRIVER",
            "NUMBER_OF_CRASHES": 17848
          },
          {
            "YEAR_MONTH": "2018-10",
            "PERSON_TYPE": "NON-CONTACT VEHICLE",
            "NUMBER_OF_CRASHES": 5
          },
          {
            "YEAR_MONTH": "2018-10",
            "PERSON_TYPE": "NON-MOTOR VEHICLE",
            "NUMBER_OF_CRASHES": 13
          },
          {
            "YEAR_MONTH": "2018-10",
            "PERSON_TYPE": "PASSENGER",
            "NUMBER_OF_CRASHES": 4763
          },
          {
            "YEAR_MONTH": "2018-10",
            "PERSON_TYPE": "PEDESTRIAN",
            "NUMBER_OF_CRASHES": 311
          },
          {
            "YEAR_MONTH": "2018-11",
            "PERSON_TYPE": "BICYCLE",
            "NUMBER_OF_CRASHES": 99
          },
          {
            "YEAR_MONTH": "2018-11",
            "PERSON_TYPE": "DRIVER",
            "NUMBER_OF_CRASHES": 16317
          },
          {
            "YEAR_MONTH": "2018-11",
            "PERSON_TYPE": "NON-CONTACT VEHICLE",
            "NUMBER_OF_CRASHES": 6
          },
          {
            "YEAR_MONTH": "2018-11",
            "PERSON_TYPE": "NON-MOTOR VEHICLE",
            "NUMBER_OF_CRASHES": 19
          },
          {
            "YEAR_MONTH": "2018-11",
            "PERSON_TYPE": "PASSENGER",
            "NUMBER_OF_CRASHES": 4432
          },
          {
            "YEAR_MONTH": "2018-11",
            "PERSON_TYPE": "PEDESTRIAN",
            "NUMBER_OF_CRASHES": 287
          },
          {
            "YEAR_MONTH": "2018-12",
            "PERSON_TYPE": "BICYCLE",
            "NUMBER_OF_CRASHES": 70
          },
          {
            "YEAR_MONTH": "2018-12",
            "PERSON_TYPE": "DRIVER",
            "NUMBER_OF_CRASHES": 17265
          },
          {
            "YEAR_MONTH": "2018-12",
            "PERSON_TYPE": "NON-CONTACT VEHICLE",
            "NUMBER_OF_CRASHES": 3
          },
          {
            "YEAR_MONTH": "2018-12",
            "PERSON_TYPE": "NON-MOTOR VEHICLE",
            "NUMBER_OF_CRASHES": 7
          },
          {
            "YEAR_MONTH": "2018-12",
            "PERSON_TYPE": "PASSENGER",
            "NUMBER_OF_CRASHES": 4764
          },
          {
            "YEAR_MONTH": "2018-12",
            "PERSON_TYPE": "PEDESTRIAN",
            "NUMBER_OF_CRASHES": 374
          },
          {
            "YEAR_MONTH": "2019-01",
            "PERSON_TYPE": "BICYCLE",
            "NUMBER_OF_CRASHES": 46
          },
          {
            "YEAR_MONTH": "2019-01",
            "PERSON_TYPE": "DRIVER",
            "NUMBER_OF_CRASHES": 15603
          },
          {
            "YEAR_MONTH": "2019-01",
            "PERSON_TYPE": "NON-CONTACT VEHICLE",
            "NUMBER_OF_CRASHES": 3
          },
          {
            "YEAR_MONTH": "2019-01",
            "PERSON_TYPE": "NON-MOTOR VEHICLE",
            "NUMBER_OF_CRASHES": 16
          },
          {
            "YEAR_MONTH": "2019-01",
            "PERSON_TYPE": "PASSENGER",
            "NUMBER_OF_CRASHES": 4070
          },
          {
            "YEAR_MONTH": "2019-01",
            "PERSON_TYPE": "PEDESTRIAN",
            "NUMBER_OF_CRASHES": 257
          },
          {
            "YEAR_MONTH": "2019-02",
            "PERSON_TYPE": "BICYCLE",
            "NUMBER_OF_CRASHES": 45
          },
          {
            "YEAR_MONTH": "2019-02",
            "PERSON_TYPE": "DRIVER",
            "NUMBER_OF_CRASHES": 14620
          },
          {
            "YEAR_MONTH": "2019-02",
            "PERSON_TYPE": "NON-CONTACT VEHICLE",
            "NUMBER_OF_CRASHES": 2
          },
          {
            "YEAR_MONTH": "2019-02",
            "PERSON_TYPE": "NON-MOTOR VEHICLE",
            "NUMBER_OF_CRASHES": 21
          },
          {
            "YEAR_MONTH": "2019-02",
            "PERSON_TYPE": "PASSENGER",
            "NUMBER_OF_CRASHES": 3888
          },
          {
            "YEAR_MONTH": "2019-02",
            "PERSON_TYPE": "PEDESTRIAN",
            "NUMBER_OF_CRASHES": 264
          },
          {
            "YEAR_MONTH": "2019-03",
            "PERSON_TYPE": "BICYCLE",
            "NUMBER_OF_CRASHES": 79
          },
          {
            "YEAR_MONTH": "2019-03",
            "PERSON_TYPE": "DRIVER",
            "NUMBER_OF_CRASHES": 16696
          },
          {
            "YEAR_MONTH": "2019-03",
            "PERSON_TYPE": "NON-CONTACT VEHICLE",
            "NUMBER_OF_CRASHES": 1
          },
          {
            "YEAR_MONTH": "2019-03",
            "PERSON_TYPE": "NON-MOTOR VEHICLE",
            "NUMBER_OF_CRASHES": 20
          },
          {
            "YEAR_MONTH": "2019-03",
            "PERSON_TYPE": "PASSENGER",
            "NUMBER_OF_CRASHES": 4736
          },
          {
            "YEAR_MONTH": "2019-03",
            "PERSON_TYPE": "PEDESTRIAN",
            "NUMBER_OF_CRASHES": 270
          },
          {
            "YEAR_MONTH": "2019-04",
            "PERSON_TYPE": "BICYCLE",
            "NUMBER_OF_CRASHES": 128
          },
          {
            "YEAR_MONTH": "2019-04",
            "PERSON_TYPE": "DRIVER",
            "NUMBER_OF_CRASHES": 16190
          },
          {
            "YEAR_MONTH": "2019-04",
            "PERSON_TYPE": "NON-CONTACT VEHICLE",
            "NUMBER_OF_CRASHES": 4
          },
          {
            "YEAR_MONTH": "2019-04",
            "PERSON_TYPE": "NON-MOTOR VEHICLE",
            "NUMBER_OF_CRASHES": 17
          },
          {
            "YEAR_MONTH": "2019-04",
            "PERSON_TYPE": "PASSENGER",
            "NUMBER_OF_CRASHES": 4574
          },
          {
            "YEAR_MONTH": "2019-04",
            "PERSON_TYPE": "PEDESTRIAN",
            "NUMBER_OF_CRASHES": 256
          },
          {
            "YEAR_MONTH": "2019-05",
            "PERSON_TYPE": "BICYCLE",
            "NUMBER_OF_CRASHES": 166
          },
          {
            "YEAR_MONTH": "2019-05",
            "PERSON_TYPE": "DRIVER",
            "NUMBER_OF_CRASHES": 18390
          },
          {
            "YEAR_MONTH": "2019-05",
            "PERSON_TYPE": "NON-CONTACT VEHICLE",
            "NUMBER_OF_CRASHES": 5
          },
          {
            "YEAR_MONTH": "2019-05",
            "PERSON_TYPE": "NON-MOTOR VEHICLE",
            "NUMBER_OF_CRASHES": 11
          },
          {
            "YEAR_MONTH": "2019-05",
            "PERSON_TYPE": "PASSENGER",
            "NUMBER_OF_CRASHES": 5287
          },
          {
            "YEAR_MONTH": "2019-05",
            "PERSON_TYPE": "PEDESTRIAN",
            "NUMBER_OF_CRASHES": 283
          },
          {
            "YEAR_MONTH": "2019-06",
            "PERSON_TYPE": "BICYCLE",
            "NUMBER_OF_CRASHES": 226
          },
          {
            "YEAR_MONTH": "2019-06",
            "PERSON_TYPE": "DRIVER",
            "NUMBER_OF_CRASHES": 18212
          },
          {
            "YEAR_MONTH": "2019-06",
            "PERSON_TYPE": "NON-CONTACT VEHICLE",
            "NUMBER_OF_CRASHES": 6
          },
          {
            "YEAR_MONTH": "2019-06",
            "PERSON_TYPE": "NON-MOTOR VEHICLE",
            "NUMBER_OF_CRASHES": 29
          },
          {
            "YEAR_MONTH": "2019-06",
            "PERSON_TYPE": "PASSENGER",
            "NUMBER_OF_CRASHES": 5387
          },
          {
            "YEAR_MONTH": "2019-06",
            "PERSON_TYPE": "PEDESTRIAN",
            "NUMBER_OF_CRASHES": 301
          },
          {
            "YEAR_MONTH": "2019-07",
            "PERSON_TYPE": "BICYCLE",
            "NUMBER_OF_CRASHES": 305
          },
          {
            "YEAR_MONTH": "2019-07",
            "PERSON_TYPE": "DRIVER",
            "NUMBER_OF_CRASHES": 18164
          },
          {
            "YEAR_MONTH": "2019-07",
            "PERSON_TYPE": "NON-CONTACT VEHICLE",
            "NUMBER_OF_CRASHES": 9
          },
          {
            "YEAR_MONTH": "2019-07",
            "PERSON_TYPE": "NON-MOTOR VEHICLE",
            "NUMBER_OF_CRASHES": 20
          },
          {
            "YEAR_MONTH": "2019-07",
            "PERSON_TYPE": "PASSENGER",
            "NUMBER_OF_CRASHES": 5318
          },
          {
            "YEAR_MONTH": "2019-07",
            "PERSON_TYPE": "PEDESTRIAN",
            "NUMBER_OF_CRASHES": 284
          },
          {
            "YEAR_MONTH": "2019-08",
            "PERSON_TYPE": "BICYCLE",
            "NUMBER_OF_CRASHES": 300
          },
          {
            "YEAR_MONTH": "2019-08",
            "PERSON_TYPE": "DRIVER",
            "NUMBER_OF_CRASHES": 16997
          },
          {
            "YEAR_MONTH": "2019-08",
            "PERSON_TYPE": "NON-CONTACT VEHICLE",
            "NUMBER_OF_CRASHES": 4
          },
          {
            "YEAR_MONTH": "2019-08",
            "PERSON_TYPE": "NON-MOTOR VEHICLE",
            "NUMBER_OF_CRASHES": 20
          },
          {
            "YEAR_MONTH": "2019-08",
            "PERSON_TYPE": "PASSENGER",
            "NUMBER_OF_CRASHES": 4957
          },
          {
            "YEAR_MONTH": "2019-08",
            "PERSON_TYPE": "PEDESTRIAN",
            "NUMBER_OF_CRASHES": 278
          },
          {
            "YEAR_MONTH": "2019-09",
            "PERSON_TYPE": "BICYCLE",
            "NUMBER_OF_CRASHES": 264
          },
          {
            "YEAR_MONTH": "2019-09",
            "PERSON_TYPE": "DRIVER",
            "NUMBER_OF_CRASHES": 16836
          },
          {
            "YEAR_MONTH": "2019-09",
            "PERSON_TYPE": "NON-CONTACT VEHICLE",
            "NUMBER_OF_CRASHES": 6
          },
          {
            "YEAR_MONTH": "2019-09",
            "PERSON_TYPE": "NON-MOTOR VEHICLE",
            "NUMBER_OF_CRASHES": 13
          },
          {
            "YEAR_MONTH": "2019-09",
            "PERSON_TYPE": "PASSENGER",
            "NUMBER_OF_CRASHES": 4825
          },
          {
            "YEAR_MONTH": "2019-09",
            "PERSON_TYPE": "PEDESTRIAN",
            "NUMBER_OF_CRASHES": 289
          },
          {
            "YEAR_MONTH": "2019-10",
            "PERSON_TYPE": "BICYCLE",
            "NUMBER_OF_CRASHES": 201
          },
          {
            "YEAR_MONTH": "2019-10",
            "PERSON_TYPE": "DRIVER",
            "NUMBER_OF_CRASHES": 17190
          },
          {
            "YEAR_MONTH": "2019-10",
            "PERSON_TYPE": "NON-CONTACT VEHICLE",
            "NUMBER_OF_CRASHES": 6
          },
          {
            "YEAR_MONTH": "2019-10",
            "PERSON_TYPE": "NON-MOTOR VEHICLE",
            "NUMBER_OF_CRASHES": 25
          },
          {
            "YEAR_MONTH": "2019-10",
            "PERSON_TYPE": "PASSENGER",
            "NUMBER_OF_CRASHES": 4619
          },
          {
            "YEAR_MONTH": "2019-10",
            "PERSON_TYPE": "PEDESTRIAN",
            "NUMBER_OF_CRASHES": 378
          },
          {
            "YEAR_MONTH": "2019-11",
            "PERSON_TYPE": "BICYCLE",
            "NUMBER_OF_CRASHES": 112
          },
          {
            "YEAR_MONTH": "2019-11",
            "PERSON_TYPE": "DRIVER",
            "NUMBER_OF_CRASHES": 16674
          },
          {
            "YEAR_MONTH": "2019-11",
            "PERSON_TYPE": "NON-CONTACT VEHICLE",
            "NUMBER_OF_CRASHES": 3
          },
          {
            "YEAR_MONTH": "2019-11",
            "PERSON_TYPE": "NON-MOTOR VEHICLE",
            "NUMBER_OF_CRASHES": 18
          },
          {
            "YEAR_MONTH": "2019-11",
            "PERSON_TYPE": "PASSENGER",
            "NUMBER_OF_CRASHES": 4402
          },
          {
            "YEAR_MONTH": "2019-11",
            "PERSON_TYPE": "PEDESTRIAN",
            "NUMBER_OF_CRASHES": 346
          },
          {
            "YEAR_MONTH": "2019-12",
            "PERSON_TYPE": "BICYCLE",
            "NUMBER_OF_CRASHES": 74
          },
          {
            "YEAR_MONTH": "2019-12",
            "PERSON_TYPE": "DRIVER",
            "NUMBER_OF_CRASHES": 16352
          },
          {
            "YEAR_MONTH": "2019-12",
            "PERSON_TYPE": "NON-MOTOR VEHICLE",
            "NUMBER_OF_CRASHES": 20
          },
          {
            "YEAR_MONTH": "2019-12",
            "PERSON_TYPE": "PASSENGER",
            "NUMBER_OF_CRASHES": 4268
          },
          {
            "YEAR_MONTH": "2019-12",
            "PERSON_TYPE": "PEDESTRIAN",
            "NUMBER_OF_CRASHES": 321
          },
          {
            "YEAR_MONTH": "2020-01",
            "PERSON_TYPE": "BICYCLE",
            "NUMBER_OF_CRASHES": 48
          },
          {
            "YEAR_MONTH": "2020-01",
            "PERSON_TYPE": "DRIVER",
            "NUMBER_OF_CRASHES": 15108
          },
          {
            "YEAR_MONTH": "2020-01",
            "PERSON_TYPE": "NON-CONTACT VEHICLE",
            "NUMBER_OF_CRASHES": 2
          },
          {
            "YEAR_MONTH": "2020-01",
            "PERSON_TYPE": "NON-MOTOR VEHICLE",
            "NUMBER_OF_CRASHES": 13
          },
          {
            "YEAR_MONTH": "2020-01",
            "PERSON_TYPE": "PASSENGER",
            "NUMBER_OF_CRASHES": 3887
          },
          {
            "YEAR_MONTH": "2020-01",
            "PERSON_TYPE": "PEDESTRIAN",
            "NUMBER_OF_CRASHES": 323
          },
          {
            "YEAR_MONTH": "2020-02",
            "PERSON_TYPE": "BICYCLE",
            "NUMBER_OF_CRASHES": 52
          },
          {
            "YEAR_MONTH": "2020-02",
            "PERSON_TYPE": "DRIVER",
            "NUMBER_OF_CRASHES": 15586
          },
          {
            "YEAR_MONTH": "2020-02",
            "PERSON_TYPE": "NON-CONTACT VEHICLE",
            "NUMBER_OF_CRASHES": 3
          },
          {
            "YEAR_MONTH": "2020-02",
            "PERSON_TYPE": "NON-MOTOR VEHICLE",
            "NUMBER_OF_CRASHES": 20
          },
          {
            "YEAR_MONTH": "2020-02",
            "PERSON_TYPE": "PASSENGER",
            "NUMBER_OF_CRASHES": 4256
          },
          {
            "YEAR_MONTH": "2020-02",
            "PERSON_TYPE": "PEDESTRIAN",
            "NUMBER_OF_CRASHES": 320
          },
          {
            "YEAR_MONTH": "2020-03",
            "PERSON_TYPE": "BICYCLE",
            "NUMBER_OF_CRASHES": 61
          },
          {
            "YEAR_MONTH": "2020-03",
            "PERSON_TYPE": "DRIVER",
            "NUMBER_OF_CRASHES": 11372
          },
          {
            "YEAR_MONTH": "2020-03",
            "PERSON_TYPE": "NON-CONTACT VEHICLE",
            "NUMBER_OF_CRASHES": 1
          },
          {
            "YEAR_MONTH": "2020-03",
            "PERSON_TYPE": "NON-MOTOR VEHICLE",
            "NUMBER_OF_CRASHES": 9
          },
          {
            "YEAR_MONTH": "2020-03",
            "PERSON_TYPE": "PASSENGER",
            "NUMBER_OF_CRASHES": 3152
          },
          {
            "YEAR_MONTH": "2020-03",
            "PERSON_TYPE": "PEDESTRIAN",
            "NUMBER_OF_CRASHES": 192
          },
          {
            "YEAR_MONTH": "2020-04",
            "PERSON_TYPE": "BICYCLE",
            "NUMBER_OF_CRASHES": 36
          },
          {
            "YEAR_MONTH": "2020-04",
            "PERSON_TYPE": "DRIVER",
            "NUMBER_OF_CRASHES": 7285
          },
          {
            "YEAR_MONTH": "2020-04",
            "PERSON_TYPE": "NON-CONTACT VEHICLE",
            "NUMBER_OF_CRASHES": 2
          },
          {
            "YEAR_MONTH": "2020-04",
            "PERSON_TYPE": "NON-MOTOR VEHICLE",
            "NUMBER_OF_CRASHES": 8
          },
          {
            "YEAR_MONTH": "2020-04",
            "PERSON_TYPE": "PASSENGER",
            "NUMBER_OF_CRASHES": 1838
          },
          {
            "YEAR_MONTH": "2020-04",
            "PERSON_TYPE": "PEDESTRIAN",
            "NUMBER_OF_CRASHES": 112
          },
          {
            "YEAR_MONTH": "2020-05",
            "PERSON_TYPE": "BICYCLE",
            "NUMBER_OF_CRASHES": 99
          },
          {
            "YEAR_MONTH": "2020-05",
            "PERSON_TYPE": "DRIVER",
            "NUMBER_OF_CRASHES": 10950
          },
          {
            "YEAR_MONTH": "2020-05",
            "PERSON_TYPE": "NON-CONTACT VEHICLE",
            "NUMBER_OF_CRASHES": 4
          },
          {
            "YEAR_MONTH": "2020-05",
            "PERSON_TYPE": "NON-MOTOR VEHICLE",
            "NUMBER_OF_CRASHES": 14
          },
          {
            "YEAR_MONTH": "2020-05",
            "PERSON_TYPE": "PASSENGER",
            "NUMBER_OF_CRASHES": 3156
          },
          {
            "YEAR_MONTH": "2020-05",
            "PERSON_TYPE": "PEDESTRIAN",
            "NUMBER_OF_CRASHES": 176
          },
          {
            "YEAR_MONTH": "2020-06",
            "PERSON_TYPE": "BICYCLE",
            "NUMBER_OF_CRASHES": 169
          },
          {
            "YEAR_MONTH": "2020-06",
            "PERSON_TYPE": "DRIVER",
            "NUMBER_OF_CRASHES": 12849
          },
          {
            "YEAR_MONTH": "2020-06",
            "PERSON_TYPE": "NON-CONTACT VEHICLE",
            "NUMBER_OF_CRASHES": 5
          },
          {
            "YEAR_MONTH": "2020-06",
            "PERSON_TYPE": "NON-MOTOR VEHICLE",
            "NUMBER_OF_CRASHES": 21
          },
          {
            "YEAR_MONTH": "2020-06",
            "PERSON_TYPE": "PASSENGER",
            "NUMBER_OF_CRASHES": 3550
          },
          {
            "YEAR_MONTH": "2020-06",
            "PERSON_TYPE": "PEDESTRIAN",
            "NUMBER_OF_CRASHES": 176
          },
          {
            "YEAR_MONTH": "2020-07",
            "PERSON_TYPE": "BICYCLE",
            "NUMBER_OF_CRASHES": 233
          },
          {
            "YEAR_MONTH": "2020-07",
            "PERSON_TYPE": "DRIVER",
            "NUMBER_OF_CRASHES": 15020
          },
          {
            "YEAR_MONTH": "2020-07",
            "PERSON_TYPE": "NON-CONTACT VEHICLE",
            "NUMBER_OF_CRASHES": 4
          },
          {
            "YEAR_MONTH": "2020-07",
            "PERSON_TYPE": "NON-MOTOR VEHICLE",
            "NUMBER_OF_CRASHES": 25
          },
          {
            "YEAR_MONTH": "2020-07",
            "PERSON_TYPE": "PASSENGER",
            "NUMBER_OF_CRASHES": 4218
          },
          {
            "YEAR_MONTH": "2020-07",
            "PERSON_TYPE": "PEDESTRIAN",
            "NUMBER_OF_CRASHES": 195
          },
          {
            "YEAR_MONTH": "2020-08",
            "PERSON_TYPE": "BICYCLE",
            "NUMBER_OF_CRASHES": 249
          },
          {
            "YEAR_MONTH": "2020-08",
            "PERSON_TYPE": "DRIVER",
            "NUMBER_OF_CRASHES": 15237
          },
          {
            "YEAR_MONTH": "2020-08",
            "PERSON_TYPE": "NON-CONTACT VEHICLE",
            "NUMBER_OF_CRASHES": 7
          },
          {
            "YEAR_MONTH": "2020-08",
            "PERSON_TYPE": "NON-MOTOR VEHICLE",
            "NUMBER_OF_CRASHES": 25
          },
          {
            "YEAR_MONTH": "2020-08",
            "PERSON_TYPE": "PASSENGER",
            "NUMBER_OF_CRASHES": 4048
          },
          {
            "YEAR_MONTH": "2020-08",
            "PERSON_TYPE": "PEDESTRIAN",
            "NUMBER_OF_CRASHES": 197
          },
          {
            "YEAR_MONTH": "2020-09",
            "PERSON_TYPE": "BICYCLE",
            "NUMBER_OF_CRASHES": 192
          },
          {
            "YEAR_MONTH": "2020-09",
            "PERSON_TYPE": "DRIVER",
            "NUMBER_OF_CRASHES": 13818
          },
          {
            "YEAR_MONTH": "2020-09",
            "PERSON_TYPE": "NON-CONTACT VEHICLE",
            "NUMBER_OF_CRASHES": 3
          },
          {
            "YEAR_MONTH": "2020-09",
            "PERSON_TYPE": "NON-MOTOR VEHICLE",
            "NUMBER_OF_CRASHES": 20
          },
          {
            "YEAR_MONTH": "2020-09",
            "PERSON_TYPE": "PASSENGER",
            "NUMBER_OF_CRASHES": 3383
          },
          {
            "YEAR_MONTH": "2020-09",
            "PERSON_TYPE": "PEDESTRIAN",
            "NUMBER_OF_CRASHES": 183
          },
          {
            "YEAR_MONTH": "2020-10",
            "PERSON_TYPE": "BICYCLE",
            "NUMBER_OF_CRASHES": 135
          },
          {
            "YEAR_MONTH": "2020-10",
            "PERSON_TYPE": "DRIVER",
            "NUMBER_OF_CRASHES": 14125
          },
          {
            "YEAR_MONTH": "2020-10",
            "PERSON_TYPE": "NON-CONTACT VEHICLE",
            "NUMBER_OF_CRASHES": 2
          },
          {
            "YEAR_MONTH": "2020-10",
            "PERSON_TYPE": "NON-MOTOR VEHICLE",
            "NUMBER_OF_CRASHES": 16
          },
          {
            "YEAR_MONTH": "2020-10",
            "PERSON_TYPE": "PASSENGER",
            "NUMBER_OF_CRASHES": 3540
          },
          {
            "YEAR_MONTH": "2020-10",
            "PERSON_TYPE": "PEDESTRIAN",
            "NUMBER_OF_CRASHES": 205
          },
          {
            "YEAR_MONTH": "2020-11",
            "PERSON_TYPE": "BICYCLE",
            "NUMBER_OF_CRASHES": 88
          },
          {
            "YEAR_MONTH": "2020-11",
            "PERSON_TYPE": "DRIVER",
            "NUMBER_OF_CRASHES": 11731
          },
          {
            "YEAR_MONTH": "2020-11",
            "PERSON_TYPE": "NON-CONTACT VEHICLE",
            "NUMBER_OF_CRASHES": 4
          },
          {
            "YEAR_MONTH": "2020-11",
            "PERSON_TYPE": "NON-MOTOR VEHICLE",
            "NUMBER_OF_CRASHES": 18
          },
          {
            "YEAR_MONTH": "2020-11",
            "PERSON_TYPE": "PASSENGER",
            "NUMBER_OF_CRASHES": 2738
          },
          {
            "YEAR_MONTH": "2020-11",
            "PERSON_TYPE": "PEDESTRIAN",
            "NUMBER_OF_CRASHES": 168
          },
          {
            "YEAR_MONTH": "2020-12",
            "PERSON_TYPE": "BICYCLE",
            "NUMBER_OF_CRASHES": 52
          },
          {
            "YEAR_MONTH": "2020-12",
            "PERSON_TYPE": "DRIVER",
            "NUMBER_OF_CRASHES": 12181
          },
          {
            "YEAR_MONTH": "2020-12",
            "PERSON_TYPE": "NON-MOTOR VEHICLE",
            "NUMBER_OF_CRASHES": 9
          },
          {
            "YEAR_MONTH": "2020-12",
            "PERSON_TYPE": "PASSENGER",
            "NUMBER_OF_CRASHES": 2909
          },
          {
            "YEAR_MONTH": "2020-12",
            "PERSON_TYPE": "PEDESTRIAN",
            "NUMBER_OF_CRASHES": 150
          },
          {
            "YEAR_MONTH": "2021-01",
            "PERSON_TYPE": "BICYCLE",
            "NUMBER_OF_CRASHES": 40
          },
          {
            "YEAR_MONTH": "2021-01",
            "PERSON_TYPE": "DRIVER",
            "NUMBER_OF_CRASHES": 11721
          },
          {
            "YEAR_MONTH": "2021-01",
            "PERSON_TYPE": "NON-CONTACT VEHICLE",
            "NUMBER_OF_CRASHES": 3
          },
          {
            "YEAR_MONTH": "2021-01",
            "PERSON_TYPE": "NON-MOTOR VEHICLE",
            "NUMBER_OF_CRASHES": 13
          },
          {
            "YEAR_MONTH": "2021-01",
            "PERSON_TYPE": "PASSENGER",
            "NUMBER_OF_CRASHES": 2751
          },
          {
            "YEAR_MONTH": "2021-01",
            "PERSON_TYPE": "PEDESTRIAN",
            "NUMBER_OF_CRASHES": 155
          },
          {
            "YEAR_MONTH": "2021-02",
            "PERSON_TYPE": "BICYCLE",
            "NUMBER_OF_CRASHES": 14
          },
          {
            "YEAR_MONTH": "2021-02",
            "PERSON_TYPE": "DRIVER",
            "NUMBER_OF_CRASHES": 13649
          },
          {
            "YEAR_MONTH": "2021-02",
            "PERSON_TYPE": "NON-CONTACT VEHICLE",
            "NUMBER_OF_CRASHES": 5
          },
          {
            "YEAR_MONTH": "2021-02",
            "PERSON_TYPE": "NON-MOTOR VEHICLE",
            "NUMBER_OF_CRASHES": 11
          },
          {
            "YEAR_MONTH": "2021-02",
            "PERSON_TYPE": "PASSENGER",
            "NUMBER_OF_CRASHES": 2870
          },
          {
            "YEAR_MONTH": "2021-02",
            "PERSON_TYPE": "PEDESTRIAN",
            "NUMBER_OF_CRASHES": 135
          },
          {
            "YEAR_MONTH": "2021-03",
            "PERSON_TYPE": "BICYCLE",
            "NUMBER_OF_CRASHES": 71
          },
          {
            "YEAR_MONTH": "2021-03",
            "PERSON_TYPE": "DRIVER",
            "NUMBER_OF_CRASHES": 12849
          },
          {
            "YEAR_MONTH": "2021-03",
            "PERSON_TYPE": "NON-CONTACT VEHICLE",
            "NUMBER_OF_CRASHES": 2
          },
          {
            "YEAR_MONTH": "2021-03",
            "PERSON_TYPE": "NON-MOTOR VEHICLE",
            "NUMBER_OF_CRASHES": 5
          },
          {
            "YEAR_MONTH": "2021-03",
            "PERSON_TYPE": "PASSENGER",
            "NUMBER_OF_CRASHES": 3153
          },
          {
            "YEAR_MONTH": "2021-03",
            "PERSON_TYPE": "PEDESTRIAN",
            "NUMBER_OF_CRASHES": 179
          },
          {
            "YEAR_MONTH": "2021-04",
            "PERSON_TYPE": "BICYCLE",
            "NUMBER_OF_CRASHES": 106
          },
          {
            "YEAR_MONTH": "2021-04",
            "PERSON_TYPE": "DRIVER",
            "NUMBER_OF_CRASHES": 13713
          },
          {
            "YEAR_MONTH": "2021-04",
            "PERSON_TYPE": "NON-CONTACT VEHICLE",
            "NUMBER_OF_CRASHES": 3
          },
          {
            "YEAR_MONTH": "2021-04",
            "PERSON_TYPE": "NON-MOTOR VEHICLE",
            "NUMBER_OF_CRASHES": 11
          },
          {
            "YEAR_MONTH": "2021-04",
            "PERSON_TYPE": "PASSENGER",
            "NUMBER_OF_CRASHES": 3419
          },
          {
            "YEAR_MONTH": "2021-04",
            "PERSON_TYPE": "PEDESTRIAN",
            "NUMBER_OF_CRASHES": 156
          },
          {
            "YEAR_MONTH": "2021-05",
            "PERSON_TYPE": "BICYCLE",
            "NUMBER_OF_CRASHES": 148
          },
          {
            "YEAR_MONTH": "2021-05",
            "PERSON_TYPE": "DRIVER",
            "NUMBER_OF_CRASHES": 16267
          },
          {
            "YEAR_MONTH": "2021-05",
            "PERSON_TYPE": "NON-CONTACT VEHICLE",
            "NUMBER_OF_CRASHES": 2
          },
          {
            "YEAR_MONTH": "2021-05",
            "PERSON_TYPE": "NON-MOTOR VEHICLE",
            "NUMBER_OF_CRASHES": 13
          },
          {
            "YEAR_MONTH": "2021-05",
            "PERSON_TYPE": "PASSENGER",
            "NUMBER_OF_CRASHES": 4540
          },
          {
            "YEAR_MONTH": "2021-05",
            "PERSON_TYPE": "PEDESTRIAN",
            "NUMBER_OF_CRASHES": 194
          },
          {
            "YEAR_MONTH": "2021-06",
            "PERSON_TYPE": "BICYCLE",
            "NUMBER_OF_CRASHES": 203
          },
          {
            "YEAR_MONTH": "2021-06",
            "PERSON_TYPE": "DRIVER",
            "NUMBER_OF_CRASHES": 17403
          },
          {
            "YEAR_MONTH": "2021-06",
            "PERSON_TYPE": "NON-CONTACT VEHICLE",
            "NUMBER_OF_CRASHES": 4
          },
          {
            "YEAR_MONTH": "2021-06",
            "PERSON_TYPE": "NON-MOTOR VEHICLE",
            "NUMBER_OF_CRASHES": 17
          },
          {
            "YEAR_MONTH": "2021-06",
            "PERSON_TYPE": "PASSENGER",
            "NUMBER_OF_CRASHES": 4799
          },
          {
            "YEAR_MONTH": "2021-06",
            "PERSON_TYPE": "PEDESTRIAN",
            "NUMBER_OF_CRASHES": 212
          },
          {
            "YEAR_MONTH": "2021-07",
            "PERSON_TYPE": "BICYCLE",
            "NUMBER_OF_CRASHES": 234
          },
          {
            "YEAR_MONTH": "2021-07",
            "PERSON_TYPE": "DRIVER",
            "NUMBER_OF_CRASHES": 16828
          },
          {
            "YEAR_MONTH": "2021-07",
            "PERSON_TYPE": "NON-CONTACT VEHICLE",
            "NUMBER_OF_CRASHES": 4
          },
          {
            "YEAR_MONTH": "2021-07",
            "PERSON_TYPE": "NON-MOTOR VEHICLE",
            "NUMBER_OF_CRASHES": 13
          },
          {
            "YEAR_MONTH": "2021-07",
            "PERSON_TYPE": "PASSENGER",
            "NUMBER_OF_CRASHES": 4581
          },
          {
            "YEAR_MONTH": "2021-07",
            "PERSON_TYPE": "PEDESTRIAN",
            "NUMBER_OF_CRASHES": 204
          },
          {
            "YEAR_MONTH": "2021-08",
            "PERSON_TYPE": "BICYCLE",
            "NUMBER_OF_CRASHES": 216
          },
          {
            "YEAR_MONTH": "2021-08",
            "PERSON_TYPE": "DRIVER",
            "NUMBER_OF_CRASHES": 16774
          },
          {
            "YEAR_MONTH": "2021-08",
            "PERSON_TYPE": "NON-CONTACT VEHICLE",
            "NUMBER_OF_CRASHES": 2
          },
          {
            "YEAR_MONTH": "2021-08",
            "PERSON_TYPE": "NON-MOTOR VEHICLE",
            "NUMBER_OF_CRASHES": 18
          },
          {
            "YEAR_MONTH": "2021-08",
            "PERSON_TYPE": "PASSENGER",
            "NUMBER_OF_CRASHES": 4277
          },
          {
            "YEAR_MONTH": "2021-08",
            "PERSON_TYPE": "PEDESTRIAN",
            "NUMBER_OF_CRASHES": 240
          },
          {
            "YEAR_MONTH": "2021-09",
            "PERSON_TYPE": "BICYCLE",
            "NUMBER_OF_CRASHES": 207
          },
          {
            "YEAR_MONTH": "2021-09",
            "PERSON_TYPE": "DRIVER",
            "NUMBER_OF_CRASHES": 16782
          },
          {
            "YEAR_MONTH": "2021-09",
            "PERSON_TYPE": "NON-CONTACT VEHICLE",
            "NUMBER_OF_CRASHES": 4
          },
          {
            "YEAR_MONTH": "2021-09",
            "PERSON_TYPE": "NON-MOTOR VEHICLE",
            "NUMBER_OF_CRASHES": 16
          },
          {
            "YEAR_MONTH": "2021-09",
            "PERSON_TYPE": "PASSENGER",
            "NUMBER_OF_CRASHES": 4334
          },
          {
            "YEAR_MONTH": "2021-09",
            "PERSON_TYPE": "PEDESTRIAN",
            "NUMBER_OF_CRASHES": 259
          },
          {
            "YEAR_MONTH": "2021-10",
            "PERSON_TYPE": "BICYCLE",
            "NUMBER_OF_CRASHES": 174
          },
          {
            "YEAR_MONTH": "2021-10",
            "PERSON_TYPE": "DRIVER",
            "NUMBER_OF_CRASHES": 17500
          },
          {
            "YEAR_MONTH": "2021-10",
            "PERSON_TYPE": "NON-CONTACT VEHICLE",
            "NUMBER_OF_CRASHES": 1
          },
          {
            "YEAR_MONTH": "2021-10",
            "PERSON_TYPE": "NON-MOTOR VEHICLE",
            "NUMBER_OF_CRASHES": 11
          },
          {
            "YEAR_MONTH": "2021-10",
            "PERSON_TYPE": "PASSENGER",
            "NUMBER_OF_CRASHES": 4430
          },
          {
            "YEAR_MONTH": "2021-10",
            "PERSON_TYPE": "PEDESTRIAN",
            "NUMBER_OF_CRASHES": 278
          },
          {
            "YEAR_MONTH": "2021-11",
            "PERSON_TYPE": "BICYCLE",
            "NUMBER_OF_CRASHES": 87
          },
          {
            "YEAR_MONTH": "2021-11",
            "PERSON_TYPE": "DRIVER",
            "NUMBER_OF_CRASHES": 15001
          },
          {
            "YEAR_MONTH": "2021-11",
            "PERSON_TYPE": "NON-CONTACT VEHICLE",
            "NUMBER_OF_CRASHES": 3
          },
          {
            "YEAR_MONTH": "2021-11",
            "PERSON_TYPE": "NON-MOTOR VEHICLE",
            "NUMBER_OF_CRASHES": 8
          },
          {
            "YEAR_MONTH": "2021-11",
            "PERSON_TYPE": "PASSENGER",
            "NUMBER_OF_CRASHES": 3806
          },
          {
            "YEAR_MONTH": "2021-11",
            "PERSON_TYPE": "PEDESTRIAN",
            "NUMBER_OF_CRASHES": 235
          },
          {
            "YEAR_MONTH": "2021-12",
            "PERSON_TYPE": "BICYCLE",
            "NUMBER_OF_CRASHES": 68
          },
          {
            "YEAR_MONTH": "2021-12",
            "PERSON_TYPE": "DRIVER",
            "NUMBER_OF_CRASHES": 14538
          },
          {
            "YEAR_MONTH": "2021-12",
            "PERSON_TYPE": "NON-CONTACT VEHICLE",
            "NUMBER_OF_CRASHES": 3
          },
          {
            "YEAR_MONTH": "2021-12",
            "PERSON_TYPE": "NON-MOTOR VEHICLE",
            "NUMBER_OF_CRASHES": 8
          },
          {
            "YEAR_MONTH": "2021-12",
            "PERSON_TYPE": "PASSENGER",
            "NUMBER_OF_CRASHES": 3581
          },
          {
            "YEAR_MONTH": "2021-12",
            "PERSON_TYPE": "PEDESTRIAN",
            "NUMBER_OF_CRASHES": 233
          },
          {
            "YEAR_MONTH": "2022-01",
            "PERSON_TYPE": "BICYCLE",
            "NUMBER_OF_CRASHES": 29
          },
          {
            "YEAR_MONTH": "2022-01",
            "PERSON_TYPE": "DRIVER",
            "NUMBER_OF_CRASHES": 13942
          },
          {
            "YEAR_MONTH": "2022-01",
            "PERSON_TYPE": "NON-CONTACT VEHICLE",
            "NUMBER_OF_CRASHES": 4
          },
          {
            "YEAR_MONTH": "2022-01",
            "PERSON_TYPE": "NON-MOTOR VEHICLE",
            "NUMBER_OF_CRASHES": 13
          },
          {
            "YEAR_MONTH": "2022-01",
            "PERSON_TYPE": "PASSENGER",
            "NUMBER_OF_CRASHES": 2983
          },
          {
            "YEAR_MONTH": "2022-01",
            "PERSON_TYPE": "PEDESTRIAN",
            "NUMBER_OF_CRASHES": 193
          },
          {
            "YEAR_MONTH": "2022-02",
            "PERSON_TYPE": "BICYCLE",
            "NUMBER_OF_CRASHES": 33
          },
          {
            "YEAR_MONTH": "2022-02",
            "PERSON_TYPE": "DRIVER",
            "NUMBER_OF_CRASHES": 13457
          },
          {
            "YEAR_MONTH": "2022-02",
            "PERSON_TYPE": "NON-CONTACT VEHICLE",
            "NUMBER_OF_CRASHES": 2
          },
          {
            "YEAR_MONTH": "2022-02",
            "PERSON_TYPE": "NON-MOTOR VEHICLE",
            "NUMBER_OF_CRASHES": 12
          },
          {
            "YEAR_MONTH": "2022-02",
            "PERSON_TYPE": "PASSENGER",
            "NUMBER_OF_CRASHES": 3177
          },
          {
            "YEAR_MONTH": "2022-02",
            "PERSON_TYPE": "PEDESTRIAN",
            "NUMBER_OF_CRASHES": 192
          },
          {
            "YEAR_MONTH": "2022-03",
            "PERSON_TYPE": "BICYCLE",
            "NUMBER_OF_CRASHES": 77
          },
          {
            "YEAR_MONTH": "2022-03",
            "PERSON_TYPE": "DRIVER",
            "NUMBER_OF_CRASHES": 14513
          },
          {
            "YEAR_MONTH": "2022-03",
            "PERSON_TYPE": "NON-CONTACT VEHICLE",
            "NUMBER_OF_CRASHES": 5
          },
          {
            "YEAR_MONTH": "2022-03",
            "PERSON_TYPE": "NON-MOTOR VEHICLE",
            "NUMBER_OF_CRASHES": 6
          },
          {
            "YEAR_MONTH": "2022-03",
            "PERSON_TYPE": "PASSENGER",
            "NUMBER_OF_CRASHES": 3511
          },
          {
            "YEAR_MONTH": "2022-03",
            "PERSON_TYPE": "PEDESTRIAN",
            "NUMBER_OF_CRASHES": 194
          },
          {
            "YEAR_MONTH": "2022-04",
            "PERSON_TYPE": "BICYCLE",
            "NUMBER_OF_CRASHES": 102
          },
          {
            "YEAR_MONTH": "2022-04",
            "PERSON_TYPE": "DRIVER",
            "NUMBER_OF_CRASHES": 14402
          },
          {
            "YEAR_MONTH": "2022-04",
            "PERSON_TYPE": "NON-CONTACT VEHICLE",
            "NUMBER_OF_CRASHES": 2
          },
          {
            "YEAR_MONTH": "2022-04",
            "PERSON_TYPE": "NON-MOTOR VEHICLE",
            "NUMBER_OF_CRASHES": 4
          },
          {
            "YEAR_MONTH": "2022-04",
            "PERSON_TYPE": "PASSENGER",
            "NUMBER_OF_CRASHES": 3790
          },
          {
            "YEAR_MONTH": "2022-04",
            "PERSON_TYPE": "PEDESTRIAN",
            "NUMBER_OF_CRASHES": 178
          },
          {
            "YEAR_MONTH": "2022-05",
            "PERSON_TYPE": "BICYCLE",
            "NUMBER_OF_CRASHES": 185
          },
          {
            "YEAR_MONTH": "2022-05",
            "PERSON_TYPE": "DRIVER",
            "NUMBER_OF_CRASHES": 16784
          },
          {
            "YEAR_MONTH": "2022-05",
            "PERSON_TYPE": "NON-CONTACT VEHICLE",
            "NUMBER_OF_CRASHES": 3
          },
          {
            "YEAR_MONTH": "2022-05",
            "PERSON_TYPE": "NON-MOTOR VEHICLE",
            "NUMBER_OF_CRASHES": 13
          },
          {
            "YEAR_MONTH": "2022-05",
            "PERSON_TYPE": "PASSENGER",
            "NUMBER_OF_CRASHES": 4203
          },
          {
            "YEAR_MONTH": "2022-05",
            "PERSON_TYPE": "PEDESTRIAN",
            "NUMBER_OF_CRASHES": 188
          },
          {
            "YEAR_MONTH": "2022-06",
            "PERSON_TYPE": "BICYCLE",
            "NUMBER_OF_CRASHES": 240
          },
          {
            "YEAR_MONTH": "2022-06",
            "PERSON_TYPE": "DRIVER",
            "NUMBER_OF_CRASHES": 16289
          },
          {
            "YEAR_MONTH": "2022-06",
            "PERSON_TYPE": "NON-CONTACT VEHICLE",
            "NUMBER_OF_CRASHES": 5
          },
          {
            "YEAR_MONTH": "2022-06",
            "PERSON_TYPE": "NON-MOTOR VEHICLE",
            "NUMBER_OF_CRASHES": 19
          },
          {
            "YEAR_MONTH": "2022-06",
            "PERSON_TYPE": "PASSENGER",
            "NUMBER_OF_CRASHES": 4413
          },
          {
            "YEAR_MONTH": "2022-06",
            "PERSON_TYPE": "PEDESTRIAN",
            "NUMBER_OF_CRASHES": 204
          },
          {
            "YEAR_MONTH": "2022-07",
            "PERSON_TYPE": "BICYCLE",
            "NUMBER_OF_CRASHES": 240
          },
          {
            "YEAR_MONTH": "2022-07",
            "PERSON_TYPE": "DRIVER",
            "NUMBER_OF_CRASHES": 15528
          },
          {
            "YEAR_MONTH": "2022-07",
            "PERSON_TYPE": "NON-CONTACT VEHICLE",
            "NUMBER_OF_CRASHES": 2
          },
          {
            "YEAR_MONTH": "2022-07",
            "PERSON_TYPE": "NON-MOTOR VEHICLE",
            "NUMBER_OF_CRASHES": 9
          },
          {
            "YEAR_MONTH": "2022-07",
            "PERSON_TYPE": "PASSENGER",
            "NUMBER_OF_CRASHES": 4065
          },
          {
            "YEAR_MONTH": "2022-07",
            "PERSON_TYPE": "PEDESTRIAN",
            "NUMBER_OF_CRASHES": 219
          },
          {
            "YEAR_MONTH": "2022-08",
            "PERSON_TYPE": "BICYCLE",
            "NUMBER_OF_CRASHES": 232
          },
          {
            "YEAR_MONTH": "2022-08",
            "PERSON_TYPE": "DRIVER",
            "NUMBER_OF_CRASHES": 15407
          },
          {
            "YEAR_MONTH": "2022-08",
            "PERSON_TYPE": "NON-CONTACT VEHICLE",
            "NUMBER_OF_CRASHES": 6
          },
          {
            "YEAR_MONTH": "2022-08",
            "PERSON_TYPE": "NON-MOTOR VEHICLE",
            "NUMBER_OF_CRASHES": 21
          },
          {
            "YEAR_MONTH": "2022-08",
            "PERSON_TYPE": "PASSENGER",
            "NUMBER_OF_CRASHES": 3836
          },
          {
            "YEAR_MONTH": "2022-08",
            "PERSON_TYPE": "PEDESTRIAN",
            "NUMBER_OF_CRASHES": 251
          },
          {
            "YEAR_MONTH": "2022-09",
            "PERSON_TYPE": "BICYCLE",
            "NUMBER_OF_CRASHES": 238
          },
          {
            "YEAR_MONTH": "2022-09",
            "PERSON_TYPE": "DRIVER",
            "NUMBER_OF_CRASHES": 16292
          },
          {
            "YEAR_MONTH": "2022-09",
            "PERSON_TYPE": "NON-CONTACT VEHICLE",
            "NUMBER_OF_CRASHES": 2
          },
          {
            "YEAR_MONTH": "2022-09",
            "PERSON_TYPE": "NON-MOTOR VEHICLE",
            "NUMBER_OF_CRASHES": 22
          },
          {
            "YEAR_MONTH": "2022-09",
            "PERSON_TYPE": "PASSENGER",
            "NUMBER_OF_CRASHES": 4183
          },
          {
            "YEAR_MONTH": "2022-09",
            "PERSON_TYPE": "PEDESTRIAN",
            "NUMBER_OF_CRASHES": 253
          },
          {
            "YEAR_MONTH": "2022-10",
            "PERSON_TYPE": "BICYCLE",
            "NUMBER_OF_CRASHES": 164
          },
          {
            "YEAR_MONTH": "2022-10",
            "PERSON_TYPE": "DRIVER",
            "NUMBER_OF_CRASHES": 16933
          },
          {
            "YEAR_MONTH": "2022-10",
            "PERSON_TYPE": "NON-CONTACT VEHICLE",
            "NUMBER_OF_CRASHES": 1
          },
          {
            "YEAR_MONTH": "2022-10",
            "PERSON_TYPE": "NON-MOTOR VEHICLE",
            "NUMBER_OF_CRASHES": 19
          },
          {
            "YEAR_MONTH": "2022-10",
            "PERSON_TYPE": "PASSENGER",
            "NUMBER_OF_CRASHES": 4205
          },
          {
            "YEAR_MONTH": "2022-10",
            "PERSON_TYPE": "PEDESTRIAN",
            "NUMBER_OF_CRASHES": 308
          },
          {
            "YEAR_MONTH": "2022-11",
            "PERSON_TYPE": "BICYCLE",
            "NUMBER_OF_CRASHES": 121
          },
          {
            "YEAR_MONTH": "2022-11",
            "PERSON_TYPE": "DRIVER",
            "NUMBER_OF_CRASHES": 14995
          },
          {
            "YEAR_MONTH": "2022-11",
            "PERSON_TYPE": "NON-CONTACT VEHICLE",
            "NUMBER_OF_CRASHES": 3
          },
          {
            "YEAR_MONTH": "2022-11",
            "PERSON_TYPE": "NON-MOTOR VEHICLE",
            "NUMBER_OF_CRASHES": 16
          },
          {
            "YEAR_MONTH": "2022-11",
            "PERSON_TYPE": "PASSENGER",
            "NUMBER_OF_CRASHES": 3431
          },
          {
            "YEAR_MONTH": "2022-11",
            "PERSON_TYPE": "PEDESTRIAN",
            "NUMBER_OF_CRASHES": 261
          },
          {
            "YEAR_MONTH": "2022-12",
            "PERSON_TYPE": "BICYCLE",
            "NUMBER_OF_CRASHES": 63
          },
          {
            "YEAR_MONTH": "2022-12",
            "PERSON_TYPE": "DRIVER",
            "NUMBER_OF_CRASHES": 15230
          },
          {
            "YEAR_MONTH": "2022-12",
            "PERSON_TYPE": "NON-CONTACT VEHICLE",
            "NUMBER_OF_CRASHES": 3
          },
          {
            "YEAR_MONTH": "2022-12",
            "PERSON_TYPE": "NON-MOTOR VEHICLE",
            "NUMBER_OF_CRASHES": 14
          },
          {
            "YEAR_MONTH": "2022-12",
            "PERSON_TYPE": "PASSENGER",
            "NUMBER_OF_CRASHES": 3599
          },
          {
            "YEAR_MONTH": "2022-12",
            "PERSON_TYPE": "PEDESTRIAN",
            "NUMBER_OF_CRASHES": 274
          },
          {
            "YEAR_MONTH": "2023-01",
            "PERSON_TYPE": "BICYCLE",
            "NUMBER_OF_CRASHES": 37
          },
          {
            "YEAR_MONTH": "2023-01",
            "PERSON_TYPE": "DRIVER",
            "NUMBER_OF_CRASHES": 13777
          },
          {
            "YEAR_MONTH": "2023-01",
            "PERSON_TYPE": "NON-CONTACT VEHICLE",
            "NUMBER_OF_CRASHES": 2
          },
          {
            "YEAR_MONTH": "2023-01",
            "PERSON_TYPE": "NON-MOTOR VEHICLE",
            "NUMBER_OF_CRASHES": 8
          },
          {
            "YEAR_MONTH": "2023-01",
            "PERSON_TYPE": "PASSENGER",
            "NUMBER_OF_CRASHES": 3371
          },
          {
            "YEAR_MONTH": "2023-01",
            "PERSON_TYPE": "PEDESTRIAN",
            "NUMBER_OF_CRASHES": 230
          },
          {
            "YEAR_MONTH": "2023-02",
            "PERSON_TYPE": "BICYCLE",
            "NUMBER_OF_CRASHES": 50
          },
          {
            "YEAR_MONTH": "2023-02",
            "PERSON_TYPE": "DRIVER",
            "NUMBER_OF_CRASHES": 13844
          },
          {
            "YEAR_MONTH": "2023-02",
            "PERSON_TYPE": "NON-CONTACT VEHICLE",
            "NUMBER_OF_CRASHES": 3
          },
          {
            "YEAR_MONTH": "2023-02",
            "PERSON_TYPE": "NON-MOTOR VEHICLE",
            "NUMBER_OF_CRASHES": 8
          },
          {
            "YEAR_MONTH": "2023-02",
            "PERSON_TYPE": "PASSENGER",
            "NUMBER_OF_CRASHES": 3432
          },
          {
            "YEAR_MONTH": "2023-02",
            "PERSON_TYPE": "PEDESTRIAN",
            "NUMBER_OF_CRASHES": 235
          },
          {
            "YEAR_MONTH": "2023-03",
            "PERSON_TYPE": "BICYCLE",
            "NUMBER_OF_CRASHES": 69
          },
          {
            "YEAR_MONTH": "2023-03",
            "PERSON_TYPE": "DRIVER",
            "NUMBER_OF_CRASHES": 15224
          },
          {
            "YEAR_MONTH": "2023-03",
            "PERSON_TYPE": "NON-CONTACT VEHICLE",
            "NUMBER_OF_CRASHES": 2
          },
          {
            "YEAR_MONTH": "2023-03",
            "PERSON_TYPE": "NON-MOTOR VEHICLE",
            "NUMBER_OF_CRASHES": 10
          },
          {
            "YEAR_MONTH": "2023-03",
            "PERSON_TYPE": "PASSENGER",
            "NUMBER_OF_CRASHES": 3885
          },
          {
            "YEAR_MONTH": "2023-03",
            "PERSON_TYPE": "PEDESTRIAN",
            "NUMBER_OF_CRASHES": 222
          },
          {
            "YEAR_MONTH": "2023-04",
            "PERSON_TYPE": "BICYCLE",
            "NUMBER_OF_CRASHES": 114
          },
          {
            "YEAR_MONTH": "2023-04",
            "PERSON_TYPE": "DRIVER",
            "NUMBER_OF_CRASHES": 15391
          },
          {
            "YEAR_MONTH": "2023-04",
            "PERSON_TYPE": "NON-CONTACT VEHICLE",
            "NUMBER_OF_CRASHES": 2
          },
          {
            "YEAR_MONTH": "2023-04",
            "PERSON_TYPE": "NON-MOTOR VEHICLE",
            "NUMBER_OF_CRASHES": 17
          },
          {
            "YEAR_MONTH": "2023-04",
            "PERSON_TYPE": "PASSENGER",
            "NUMBER_OF_CRASHES": 4031
          },
          {
            "YEAR_MONTH": "2023-04",
            "PERSON_TYPE": "PEDESTRIAN",
            "NUMBER_OF_CRASHES": 228
          },
          {
            "YEAR_MONTH": "2023-05",
            "PERSON_TYPE": "BICYCLE",
            "NUMBER_OF_CRASHES": 183
          },
          {
            "YEAR_MONTH": "2023-05",
            "PERSON_TYPE": "DRIVER",
            "NUMBER_OF_CRASHES": 17652
          },
          {
            "YEAR_MONTH": "2023-05",
            "PERSON_TYPE": "NON-CONTACT VEHICLE",
            "NUMBER_OF_CRASHES": 3
          },
          {
            "YEAR_MONTH": "2023-05",
            "PERSON_TYPE": "NON-MOTOR VEHICLE",
            "NUMBER_OF_CRASHES": 13
          },
          {
            "YEAR_MONTH": "2023-05",
            "PERSON_TYPE": "PASSENGER",
            "NUMBER_OF_CRASHES": 4670
          },
          {
            "YEAR_MONTH": "2023-05",
            "PERSON_TYPE": "PEDESTRIAN",
            "NUMBER_OF_CRASHES": 255
          },
          {
            "YEAR_MONTH": "2023-06",
            "PERSON_TYPE": "BICYCLE",
            "NUMBER_OF_CRASHES": 259
          },
          {
            "YEAR_MONTH": "2023-06",
            "PERSON_TYPE": "DRIVER",
            "NUMBER_OF_CRASHES": 16555
          },
          {
            "YEAR_MONTH": "2023-06",
            "PERSON_TYPE": "NON-CONTACT VEHICLE",
            "NUMBER_OF_CRASHES": 6
          },
          {
            "YEAR_MONTH": "2023-06",
            "PERSON_TYPE": "NON-MOTOR VEHICLE",
            "NUMBER_OF_CRASHES": 23
          },
          {
            "YEAR_MONTH": "2023-06",
            "PERSON_TYPE": "PASSENGER",
            "NUMBER_OF_CRASHES": 4432
          },
          {
            "YEAR_MONTH": "2023-06",
            "PERSON_TYPE": "PEDESTRIAN",
            "NUMBER_OF_CRASHES": 265
          },
          {
            "YEAR_MONTH": "2023-07",
            "PERSON_TYPE": "BICYCLE",
            "NUMBER_OF_CRASHES": 267
          },
          {
            "YEAR_MONTH": "2023-07",
            "PERSON_TYPE": "DRIVER",
            "NUMBER_OF_CRASHES": 16377
          },
          {
            "YEAR_MONTH": "2023-07",
            "PERSON_TYPE": "NON-CONTACT VEHICLE",
            "NUMBER_OF_CRASHES": 6
          },
          {
            "YEAR_MONTH": "2023-07",
            "PERSON_TYPE": "NON-MOTOR VEHICLE",
            "NUMBER_OF_CRASHES": 19
          },
          {
            "YEAR_MONTH": "2023-07",
            "PERSON_TYPE": "PASSENGER",
            "NUMBER_OF_CRASHES": 4648
          },
          {
            "YEAR_MONTH": "2023-07",
            "PERSON_TYPE": "PEDESTRIAN",
            "NUMBER_OF_CRASHES": 241
          },
          {
            "YEAR_MONTH": "2023-08",
            "PERSON_TYPE": "BICYCLE",
            "NUMBER_OF_CRASHES": 293
          },
          {
            "YEAR_MONTH": "2023-08",
            "PERSON_TYPE": "DRIVER",
            "NUMBER_OF_CRASHES": 17010
          },
          {
            "YEAR_MONTH": "2023-08",
            "PERSON_TYPE": "NON-CONTACT VEHICLE",
            "NUMBER_OF_CRASHES": 2
          },
          {
            "YEAR_MONTH": "2023-08",
            "PERSON_TYPE": "NON-MOTOR VEHICLE",
            "NUMBER_OF_CRASHES": 27
          },
          {
            "YEAR_MONTH": "2023-08",
            "PERSON_TYPE": "PASSENGER",
            "NUMBER_OF_CRASHES": 4348
          },
          {
            "YEAR_MONTH": "2023-08",
            "PERSON_TYPE": "PEDESTRIAN",
            "NUMBER_OF_CRASHES": 229
          },
          {
            "YEAR_MONTH": "2023-09",
            "PERSON_TYPE": "BICYCLE",
            "NUMBER_OF_CRASHES": 263
          },
          {
            "YEAR_MONTH": "2023-09",
            "PERSON_TYPE": "DRIVER",
            "NUMBER_OF_CRASHES": 16499
          },
          {
            "YEAR_MONTH": "2023-09",
            "PERSON_TYPE": "NON-CONTACT VEHICLE",
            "NUMBER_OF_CRASHES": 2
          },
          {
            "YEAR_MONTH": "2023-09",
            "PERSON_TYPE": "NON-MOTOR VEHICLE",
            "NUMBER_OF_CRASHES": 14
          },
          {
            "YEAR_MONTH": "2023-09",
            "PERSON_TYPE": "PASSENGER",
            "NUMBER_OF_CRASHES": 4311
          },
          {
            "YEAR_MONTH": "2023-09",
            "PERSON_TYPE": "PEDESTRIAN",
            "NUMBER_OF_CRASHES": 285
          },
          {
            "YEAR_MONTH": "2023-10",
            "PERSON_TYPE": "BICYCLE",
            "NUMBER_OF_CRASHES": 107
          },
          {
            "YEAR_MONTH": "2023-10",
            "PERSON_TYPE": "DRIVER",
            "NUMBER_OF_CRASHES": 5992
          },
          {
            "YEAR_MONTH": "2023-10",
            "PERSON_TYPE": "NON-MOTOR VEHICLE",
            "NUMBER_OF_CRASHES": 5
          },
          {
            "YEAR_MONTH": "2023-10",
            "PERSON_TYPE": "PASSENGER",
            "NUMBER_OF_CRASHES": 1478
          },
          {
            "YEAR_MONTH": "2023-10",
            "PERSON_TYPE": "PEDESTRIAN",
            "NUMBER_OF_CRASHES": 113
          }
        ]
      },
      {
        "name": "data_0",
        "source": "data-ab5efea7acaef2f5467cece64c22c8e2",
        "transform": [
          {
            "type": "formula",
            "expr": "toDate(datum[\"YEAR_MONTH\"])",
            "as": "YEAR_MONTH"
          }
        ]
      },
      {
        "name": "data_1",
        "source": "data_0",
        "transform": [
          {
            "type": "filter",
            "expr": "isValid(datum[\"NUMBER_OF_CRASHES\"]) && isFinite(+datum[\"NUMBER_OF_CRASHES\"])"
          }
        ]
      },
      {
        "name": "data_2",
        "source": "data_0",
        "transform": [
          {
            "type": "aggregate",
            "groupby": ["PERSON_TYPE", "YEAR_MONTH"],
            "ops": ["mean"],
            "fields": ["NUMBER_OF_CRASHES"],
            "as": ["mean_NUMBER_OF_CRASHES"]
          }
        ]
      }
    ],
    "signals": [
      {
        "name": "unit",
        "value": {},
        "on": [
          {"events": "mousemove", "update": "isTuple(group()) ? group() : unit"}
        ]
      },
      {
        "name": "selector001",
        "update": "vlSelectionResolve(\"selector001_store\", \"union\")"
      },
      {
        "name": "selector001_PERSON_TYPE",
        "on": [
          {
            "events": {"signal": "selector001_translate_delta"},
            "update": "panLinear(selector001_translate_anchor.extent_x, -selector001_translate_delta.x / width)"
          },
          {
            "events": {"signal": "selector001_zoom_delta"},
            "update": "zoomLinear(domain(\"x\"), selector001_zoom_anchor.x, selector001_zoom_delta)"
          },
          {"events": [{"source": "scope", "type": "dblclick"}], "update": "null"}
        ]
      },
      {
        "name": "selector001_NUMBER_OF_CRASHES",
        "on": [
          {
            "events": {"signal": "selector001_translate_delta"},
            "update": "panLinear(selector001_translate_anchor.extent_y, selector001_translate_delta.y / height)"
          },
          {
            "events": {"signal": "selector001_zoom_delta"},
            "update": "zoomLinear(domain(\"y\"), selector001_zoom_anchor.y, selector001_zoom_delta)"
          },
          {"events": [{"source": "scope", "type": "dblclick"}], "update": "null"}
        ]
      },
      {
        "name": "selector001_tuple",
        "on": [
          {
            "events": [
              {
                "signal": "selector001_PERSON_TYPE || selector001_NUMBER_OF_CRASHES"
              }
            ],
            "update": "selector001_PERSON_TYPE && selector001_NUMBER_OF_CRASHES ? {unit: \"layer_0\", fields: selector001_tuple_fields, values: [selector001_PERSON_TYPE,selector001_NUMBER_OF_CRASHES]} : null"
          }
        ]
      },
      {
        "name": "selector001_tuple_fields",
        "value": [
          {"field": "PERSON_TYPE", "channel": "x", "type": "E"},
          {"field": "NUMBER_OF_CRASHES", "channel": "y", "type": "R"}
        ]
      },
      {
        "name": "selector001_translate_anchor",
        "value": {},
        "on": [
          {
            "events": [{"source": "scope", "type": "mousedown"}],
            "update": "{x: x(unit), y: y(unit), extent_x: domain(\"x\"), extent_y: domain(\"y\")}"
          }
        ]
      },
      {
        "name": "selector001_translate_delta",
        "value": {},
        "on": [
          {
            "events": [
              {
                "source": "window",
                "type": "mousemove",
                "consume": true,
                "between": [
                  {"source": "scope", "type": "mousedown"},
                  {"source": "window", "type": "mouseup"}
                ]
              }
            ],
            "update": "{x: selector001_translate_anchor.x - x(unit), y: selector001_translate_anchor.y - y(unit)}"
          }
        ]
      },
      {
        "name": "selector001_zoom_anchor",
        "on": [
          {
            "events": [{"source": "scope", "type": "wheel", "consume": true}],
            "update": "{x: invert(\"x\", x(unit)), y: invert(\"y\", y(unit))}"
          }
        ]
      },
      {
        "name": "selector001_zoom_delta",
        "on": [
          {
            "events": [{"source": "scope", "type": "wheel", "consume": true}],
            "force": true,
            "update": "pow(1.001, event.deltaY * pow(16, event.deltaMode))"
          }
        ]
      },
      {
        "name": "selector001_modify",
        "on": [
          {
            "events": {"signal": "selector001_tuple"},
            "update": "modify(\"selector001_store\", selector001_tuple, true)"
          }
        ]
      }
    ],
    "marks": [
      {
        "name": "layer_0_marks",
        "type": "rect",
        "clip": true,
        "style": ["bar"],
        "interactive": true,
        "from": {"data": "data_1"},
        "encode": {
          "update": {
            "opacity": {"value": 0.5},
            "fill": {"scale": "color", "field": "PERSON_TYPE"},
            "ariaRoleDescription": {"value": "bar"},
            "description": {
              "signal": "\"PERSON_TYPE: \" + (isValid(datum[\"PERSON_TYPE\"]) ? datum[\"PERSON_TYPE\"] : \"\"+datum[\"PERSON_TYPE\"]) + \"; NUMBER_OF_CRASHES: \" + (format(datum[\"NUMBER_OF_CRASHES\"], \"\"))"
            },
            "x": {"scale": "x", "field": "PERSON_TYPE"},
            "width": {"scale": "x", "band": 1},
            "y": {"scale": "y", "field": "NUMBER_OF_CRASHES"},
            "y2": {"scale": "y", "value": 0}
          }
        }
      },
      {
        "name": "layer_1_pathgroup",
        "type": "group",
        "from": {
          "facet": {
            "name": "faceted_path_layer_1_main",
            "data": "data_2",
            "groupby": ["PERSON_TYPE"]
          }
        },
        "encode": {
          "update": {
            "width": {"field": {"group": "width"}},
            "height": {"field": {"group": "height"}}
          }
        },
        "marks": [
          {
            "name": "layer_1_marks",
            "type": "line",
            "clip": true,
            "style": ["line"],
            "sort": {"field": "datum[\"YEAR_MONTH\"]"},
            "interactive": true,
            "from": {"data": "faceted_path_layer_1_main"},
            "encode": {
              "update": {
                "stroke": {"scale": "color", "field": "PERSON_TYPE"},
                "tooltip": {
                  "signal": "{\"YEAR_MONTH\": isValid(datum[\"YEAR_MONTH\"]) ? datum[\"YEAR_MONTH\"] : \"\"+datum[\"YEAR_MONTH\"], \"PERSON_TYPE\": isValid(datum[\"PERSON_TYPE\"]) ? datum[\"PERSON_TYPE\"] : \"\"+datum[\"PERSON_TYPE\"], \"Mean of NUMBER_OF_CRASHES\": format(datum[\"mean_NUMBER_OF_CRASHES\"], \"\")}"
                },
                "description": {
                  "signal": "\"PERSON_TYPE: \" + (isValid(datum[\"PERSON_TYPE\"]) ? datum[\"PERSON_TYPE\"] : \"\"+datum[\"PERSON_TYPE\"]) + \"; YEAR_MONTH: \" + (isValid(datum[\"YEAR_MONTH\"]) ? datum[\"YEAR_MONTH\"] : \"\"+datum[\"YEAR_MONTH\"]) + \"; Mean of NUMBER_OF_CRASHES: \" + (format(datum[\"mean_NUMBER_OF_CRASHES\"], \"\"))"
                },
                "x": {"scale": "x", "field": "YEAR_MONTH", "band": 0.5},
                "y": {"scale": "y", "field": "mean_NUMBER_OF_CRASHES"},
                "defined": {
                  "signal": "isValid(datum[\"mean_NUMBER_OF_CRASHES\"]) && isFinite(+datum[\"mean_NUMBER_OF_CRASHES\"])"
                }
              }
            }
          }
        ]
      }
    ],
    "scales": [
      {
        "name": "x",
        "type": "band",
        "domain": {
          "fields": [
            {"data": "data_1", "field": "PERSON_TYPE"},
            {"data": "data_2", "field": "YEAR_MONTH"}
          ],
          "sort": true
        },
        "range": [0, {"signal": "width"}],
        "paddingInner": 0.1,
        "paddingOuter": 0.05
      },
      {
        "name": "y",
        "type": "linear",
        "domain": {
          "fields": [
            {"data": "data_1", "field": "NUMBER_OF_CRASHES"},
            {"data": "data_2", "field": "mean_NUMBER_OF_CRASHES"}
          ]
        },
        "domainRaw": {"signal": "selector001[\"NUMBER_OF_CRASHES\"]"},
        "range": [{"signal": "height"}, 0],
        "nice": true,
        "zero": true
      },
      {
        "name": "color",
        "type": "ordinal",
        "domain": {
          "fields": [
            {"data": "data_1", "field": "PERSON_TYPE"},
            {"data": "data_2", "field": "PERSON_TYPE"}
          ],
          "sort": true
        },
        "range": {"scheme": "category20b"}
      }
    ],
    "axes": [
      {
        "scale": "y",
        "orient": "left",
        "gridScale": "x",
        "grid": true,
        "tickCount": {"signal": "ceil(height/40)"},
        "domain": false,
        "labels": false,
        "aria": false,
        "maxExtent": 0,
        "minExtent": 0,
        "ticks": false,
        "zindex": 0
      },
      {
        "scale": "x",
        "orient": "bottom",
        "grid": false,
        "title": "PERSON_TYPE, YEAR_MONTH",
        "formatType": "time",
        "labelAlign": "right",
        "labelAngle": 270,
        "labelBaseline": "middle",
        "labelFlush": true,
        "labelOverlap": true,
        "zindex": 0
      },
      {
        "scale": "y",
        "orient": "left",
        "grid": false,
        "title": "NUMBER_OF_CRASHES, Mean of NUMBER_OF_CRASHES",
        "labelOverlap": true,
        "tickCount": {"signal": "ceil(height/40)"},
        "zindex": 0
      }
    ],
    "legends": [
      {
        "fill": "color",
        "symbolType": "square",
        "title": "PERSON_TYPE",
        "encode": {"symbols": {"update": {"opacity": {"value": 0.5}}}},
        "stroke": "color"
      }
    ]
  };
  

  // Embed the Vega-Lite visualization in the HTML div with id 'vis'
  vegaEmbed('#vis1', spec1);
  vegaEmbed('#vis2', spec2);
  vegaEmbed('#vis3', spec3);
  