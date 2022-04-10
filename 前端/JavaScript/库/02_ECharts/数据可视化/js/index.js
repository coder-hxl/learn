// 监控区域模块
(function() {
    $(".monitor .tabs").on("click", "a", function() {
        $(this).addClass("active").siblings().removeClass("active")
        $(".monitor .content").eq($(this).index()).show().siblings(".content").hide()
    })
    $(".marquee-view .marquee").each(function() {
        let rows = $(this).children().clone()
        $(this).append(rows)
    })
})();

// 点位分布统计模块
(function() {
    // 1. 实例化对象
    let myChart = echarts.init(document.querySelector('.pie'))
        // 2. 指定配置项和数据
    let option = {
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        color: ["#006cff", "#60cda0", "#ed8884", "#ff9f7f", "#0096ff", "#9fe6b8", "#32c5e9", "#1d9dff"],
        series: [{
            name: '点位统计',
            type: 'pie',
            radius: ["10%", "80%"],
            center: ['50%', '50%'],
            roseType: 'radius',
            data: [
                { value: 20, name: "云南" },
                { value: 26, name: "北京" },
                { value: 24, name: "山东" },
                { value: 25, name: "河北" },
                { value: 20, name: "江苏" },
                { value: 25, name: "浙江" },
                { value: 30, name: "四川" },
                { value: 42, name: "湖北" }
            ],
            label: {
                fontSize: 10,
                color: "#006cff"
            },
            labelLine: {
                length: 6,
                length2: 8
            }
        }]
    };
    // 3. 配置项和数据给我们实例化对象
    myChart.setOption(option)
})();

// 全国用户总量统计模块制作
(function() {
    let myChart = echarts.init(document.querySelector(".bar"))
    option = {
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c}'
        },
        xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
            type: 'value'
        },
        series: [{
            name: '直接访问',
            radius: ["10%", "100%"],
            data: [120, 200, 150, 80, 70, 110, 130],
            type: 'bar'
        }]
    };
    myChart.setOption(option)
})()