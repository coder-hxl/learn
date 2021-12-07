$(function() {
    let flag = true
    let recoTop = $(".recommend").offset().top

    function toggleTool() {
        if ($(document).scrollTop() >= recoTop) {
            $(".fixedtool").fadeIn()
        } else {
            $(".fixedtool").fadeOut()
        }
    }
    toggleTool()

    $(window).scroll(function() {
        // 1. 显示隐藏
        toggleTool()
        if (flag) {
            $(".floor .w").each(function(i, ele) {
                // 3. 页面滚动到某个内容区域，左侧电梯导航相应添加和删除current类名
                if ($(document).scrollTop() >= $(ele).offset().top) {
                    $(".fixedtool li").eq(i).addClass("current").siblings().removeClass()
                }
            })
        }
    })


    // 2. 点击电梯去往相应的内容区域
    $(".fixedtool li").click(function() {
        flag = false
        console.log($(this).index());
        // 选出对应索引号的内容区的盒子 就需要计算出页面要去往的位置
        let current = $(".floor .w").eq($(this).index()).offset().top
            // 页面动画滚动效果
        $("body,html").stop().animate({
            scrollTop: current
        }, function() {
            flag = true
        })

        // 当前小li添加 current类名，兄弟移除
        $(this).addClass("current").siblings().removeClass()
    })
})