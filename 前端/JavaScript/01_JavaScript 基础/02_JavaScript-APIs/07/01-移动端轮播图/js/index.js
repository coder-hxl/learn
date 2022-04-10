window.addEventListener('load', function() {
    // 1. 获取元素
    let focus = document.querySelector('.focus')
    let ul = focus.children[0]
    let ol = focus.children[1]
        // 获得focus 的宽度
    let w = focus.offsetWidth
        // 2. 利用定时器自动轮播图片
    let index = 0
    let timer = setInterval(function() {
        index++
        let translateX = -index * w
        ul.style.transition = `all .3s`
        ul.style.transform = `translateX(${translateX}px)`
    }, 2000)

    // 等着过渡完成后，再去判断监听过渡完成的事件 transitionend
    ul.addEventListener('transitionend', function() {
        // 无缝滚动
        if (index >= 3) {
            index = 0
                // 去掉过渡效果 这样让ul 快速的跳到目标位置
            ul.style.transition = `none`
                // 利用最新的索引号乘以宽度 去滚动图片
            let translateX = -index * w
            ul.style.transform = `translateX(${translateX}px)`
        } else if (index < 0) {
            index = 2
            ul.style.transition = `none`
                // 利用最新的索引号乘以宽度 去滚动图片
            let translateX = -index * w
            ul.style.transform = `translateX(${translateX}px)`
        }
        // 小圆点跟随变化
        ol.querySelector('.current').classList.remove('current')
        ol.children[index].classList.add('current')
    })

    // 4. 手指滑动轮播图
    let startX = 0
    let moveX = 0
    let flag = false
    ul.addEventListener('touchstart', function(e) {
        startX = e.targetTouches[0].pageX
            // 手指触摸就停止定时器
        clearInterval(timer)
    })
    ul.addEventListener('touchmove', function(e) {
        // 计算移动距离
        moveX = e.targetTouches[0].pageX - startX
            // 移动盒子： 盒子原来的位置 + 手指移动的距离
        let translatex = -index * w + moveX
            // 手指拖动的时候，不需要动画效果所以取消过渡
        ul.style.transition = `none`
        ul.style.transform = `translateX(${translatex}px)`
        flag = true // 如果用户手指移动过我们再去判断是否不做判断效果
        e.preventDefault() // 阻止滚动屏幕的行为
    })

    // 手指离开 根据移动距离判断是否回弹还是播放上一张或下一张
    ul.addEventListener('touchend', function(e) {
        if (flag) {
            // (1) 如果移动距离大于50像素就播放上一张或下一张
            if (Math.abs(moveX) > 50) {
                // 右滑 播放上一张 moveX 是正值
                if (moveX > 0) {
                    index--
                } else {
                    // 左滑 播放下一张 moveX 是负值
                    index++
                }
                let translatex = -index * w
                ul.style.transition = `all .3s`
                ul.style.transform = `translateX(${translatex}px)`
            } else {
                // (2) 如果移动距离小于50像素就回弹
                let translatex = -index * w
                ul.style.transition = `all .1s`
                ul.style.transform = `translateX(${translatex}px)`
            }
            clearInterval(timer)
            timer = setInterval(function() {
                index++
                let translateX = -index * w
                ul.style.transition = `all .3s`
                ul.style.transform = `translateX(${translateX}px)`
            }, 2000)
        }
    })

    // 返回顶部操作
    let goBack = document.querySelector('.goBack')
    let nav = document.querySelector('nav')
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > nav.offsetTop) {
            goBack.style.display = 'block'
        } else {
            goBack.style.display = 'none'
        }
    })
    goBack.addEventListener('click', function() {
        window.scroll(0, 0)
    })
})