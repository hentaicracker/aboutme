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
                emphasis: {
                    borderColor: '#fff',
                    borderWidth: 1
                }
            }
        }
    ]
}
