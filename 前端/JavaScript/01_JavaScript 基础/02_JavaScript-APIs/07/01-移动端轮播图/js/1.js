window.addEventListener('load', function() {
    // 1. 获取元素
    let focus = document.querySelector('.focus')
    let ul = focus.children[0]
    let ol = focus.children[1]
    let w = focus.offsetWidth
        // 2. 循环
    let index = 0
    let timer = setInterval(function() {
        index++
        let translateX = -index * w
        ul.style.transition = `all .3s`
        ul.style.transform = `translateX(${translateX}px)`
    }, 2000)

    // 3. 无缝连接
    ul.addEventListener('transitionend', function() {
        if (index >= 3) {
            index = 0
            let translateX = -index * w
            ul.style.transition = `none`
            ul.style.transform = `translateX(${translateX}px)`
        } else if (index < 0) {
            index = 2
            ul.style.transition = `none`
            let translateX = -index * w
            ul.style.transform = `translateX(${translateX}px)`
        }
        // 小圆圈
        ol.querySelector('.current').classList.remove('current')
        ol.children[index].classList.add('current')
    })

    // 4. 手指滑动轮播图
    let startX = 0
    let moveX = 0
    let flag = false
    ul.addEventListener('touchstart', function(e) {
        startX = e.targetTouches[0].pageX
        clearInterval(timer)
    })
    ul.addEventListener('touchmove', function(e) {
        moveX = e.targetTouches[0].pageX - startX
        let translatex = -index * w + moveX
        ul.style.transition = 'none'
        ul.style.transform = `translateX(${translatex}px)`
        flag = true
    })
    ul.addEventListener('touchend', function() {
        if (flag) {
            if (Math.abs(moveX) > 50) {
                if (moveX > 0) {
                    index--
                } else {
                    index++
                }
                let translatex = -index * w
                ul.style.transition = 'all .3s'
                ul.style.transform = `translateX(${translatex}px)`
            } else {
                let translatex = -index * w
                ul.style.transition = 'all .3s'
                ul.style.transform = `translateX(${translatex}px)`
            }
            timer = setInterval(function() {
                index++
                let translateX = -index * w
                ul.style.transition = `all .3s`
                ul.style.transform = `translateX(${translateX}px)`
            }, 2000)
        }
    })
})