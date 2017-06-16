var geoCoordMap = {
    "上海":[121.48,31.22],
    "玉溪":[102.52,24.35],
    "连云港":[119.16,34.59],
    "东莞":[113.75,23.04],
    "惠州":[114.4,23.09],
    "广州":[113.23,23.16],
    "昆明":[102.73,25.04],
    "深圳":[114.07,22.62],
    "珠海":[113.52,22.3],
    "嘉兴":[120.76,30.77],
    "自贡":[104.778442,29.33903],
    "宜宾":[104.56,29.77],
    "成都":[104.06,30.67],
    "扬州":[119.42,32.39],
    "重庆":[106.54,29.59],
    "南京":[118.78,32.04],
    "北京":[116.46,39.92],
    "杭州":[120.19,30.26],
    "九江":[115.97,29.71],
    "天津":[117.2,39.13],
    "芜湖":[118.38,31.33],
    "秦皇岛":[119.57,39.95],
    "合肥":[117.27,31.86],
    "香港":[114.183,22.283],
    "澳门":[113.557,22.196],
    "大理":[100.223,25.617],
    "丽江":[100.222934,26.882114],
    "香格里拉":[99.711,27.835],
    "水富":[104.421833,28.629915],
    "高县":[104.528408,28.439705],
    "镇沅":[101.113377,24.013201],
    "黄山":[118.268345,29.718103],
    "苏州":[120.577924,31.304233],
    "西安":[108.946881,34.220491],
    "西宁":[100.786219,36.856535],
    "呼伦贝尔":[119.764305,49.225791],
    "敦煌":[94.692095,40.164884],
    "嘉峪关":[98.255421,39.78625],
    "哈尔滨":[126.582659,45.804677],
    "漠河":[122.49156,52.992888],
    "敦化":[128.255663,43.37551],
    "丹东":[124.353712,40.02889],
    "哈密":[93.528035,42.938924],
    "和田":[79.904837,37.125219],
    "阿坝":[101.707933,32.906991],
    "厦门":[118.095325,24.508829],
    "台北":[121.577014,25.049489],
    "三亚":[109.526784,18.260423],
    "桂林":[110.286248,25.270311],
    "拉萨":[91.112815,29.673768],
    "济南":[117.007035,36.668631]
};

let data = [
    {name: '上海', value: 20},
    {name: '玉溪', value: 20},
    {name: '连云港', value: 20},
    {name: '东莞', value: 20},
    {name: '惠州', value: 20},
    {name: '广州', value: 20},
    {name: '昆明', value: 20},
    {name: '深圳', value: 20},
    {name: '珠海', value: 20},
    {name: '嘉兴', value: 20},
    {name: '自贡', value: 20},
    {name: '宜宾', value: 20},
    {name: '成都', value: 20},
    {name: '扬州', value: 20},
    {name: '重庆', value: 20},
    {name: '南京', value: 20},
    {name: '北京', value: 20},
    {name: '杭州', value: 20},
    {name: '九江', value: 20},
    {name: '天津', value: 20},
    {name: '芜湖', value: 20},
    {name: '秦皇岛', value: 20},
    {name: '合肥', value: 20},
    {name: '济南', value: 20},
    {name: '香港', value: 20},
    {name: '澳门', value: 20},
    {name: '大理', value: 20},
    {name: '丽江', value: 20},
    {name: '香格里拉', value: 20},
    {name: '水富', value: 20},
    {name: '高县', value: 20},
    {name: '镇沅', value: 20},
    {name: '黄山', value: 20},
    {name: '苏州', value: 20},
]

let data2 = [
    {name: '西安', value: 20},
    {name: '西宁', value: 20},
    {name: '呼伦贝尔', value: 20},
    {name: '敦煌', value: 20},
    {name: '嘉峪关', value: 20},
    {name: '哈尔滨', value: 20},
    {name: '漠河', value: 20},
    {name: '敦化', value: 20},
    {name: '丹东', value: 20},
    {name: '哈密', value: 20},
    {name: '和田', value: 20},
    {name: '阿坝', value: 20},
    {name: '厦门', value: 20},
    {name: '台北', value: 20},
    {name: '三亚', value: 20},
    {name: '桂林', value: 20},
    {name: '拉萨', value: 20},
    {name: '济南', value: 20}
]

var convertData = function (data: any[]) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var geoCoord = geoCoordMap[data[i].name];
        if (geoCoord) {
            res.push({
                name: data[i].name,
                value: geoCoord.concat(data[i].value)
            });
        }
    }
    return res;
};

export const mapOptions = {
    backgroundColor: 'transparent',
    title: {
        text: '足迹',
        x:'center',
        textStyle: {
            color: '#fff',
            fontFamily: ["SF Pro SC","SF Pro Display","SF Pro Icons","PingFang SC","Helvetica Neue","Helvetica","Arial",'sans-serif'],
            fontSize: 40
        }
    },
    tooltip: {
        trigger: 'item',
        formatter: function (params: any) {
            return params.name + ' : ' + params.value[2];
        }
    },
    geo: {
        map: 'china',
        label: {
            emphasis: {
                show: false
            }
        },
        itemStyle: {
            normal: {
                areaColor: '#fff',
                borderColor: '#EEEEEE'
            },
            emphasis: {
                areaColor: '#fff'
            }
        }
    },
    series: [
        {
            name: '城市',
            type: 'scatter',
            coordinateSystem: 'geo',
            data: convertData(data),
            symbolSize: 10,
            label: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: false
                }
            },
            itemStyle: {
                normal: {
                    color: "#ffc107",
                },
                emphasis: {
                    borderColor: '#fff',
                    borderWidth: 1
                }
            }
        },
        {
            name: '想去的城市',
            type: 'scatter',
            coordinateSystem: 'geo',
            data: convertData(data2),
            symbolSize: 10,
            label: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: false
                }
            },
            itemStyle: {
                normal: {
                    color: "#2196f3",
                },
                emphasis: {
                    borderColor: '#fff',
                    borderWidth: 1
                }
            }
        }
    ]
}
