window.addEventListener('load', function() {
    let preview_img = document.querySelector('.preview_img')
    let mask = document.querySelector('.mask')
    let big = this.document.querySelector('.big');
    // 1. 当鼠标经过 preview_img 就显示和隐藏 mask 和 big
    preview_img.addEventListener('mouseover', function() {
        mask.style.display = 'block'
        big.style.display = 'block'
    })
    preview_img.addEventListener('mouseout', function() {
        mask.style.display = 'none'
        big.style.display = 'none'
    });
    //2. 鼠标移动的时候，让黄色的盒子跟着鼠标来走
    preview_img.addEventListener('mousemove', function(e) {
        let x = e.pageX - this.offsetLeft
        let y = e.pageY - this.offsetTop
            // console.log(x, y);
        let maskX = x - mask.offsetHeight / 2
        let maskY = y - mask.offsetWidth / 2
        let maskMax = preview_img.offsetWidth - mask.offsetWidth
        if (maskX <= 0) {
            maskX = 0
        } else if (maskX >= maskMax) {
            maskX = maskMax
        }
        if (maskY <= 0) {
            maskY = 0
        } else if (maskY >= maskMax) {
            maskY = maskMax
        }
        mask.style.left = `${maskX}px`
        mask.style.top = `${maskY}px`;
        // 大图片的移动距离 = 遮挡层移动距离 * 大图片的最大移动距离 / 遮挡层的最大移动距离
        let bigIMg = document.querySelector('.bigImg')
        let bigIMgMax = big.offsetWidth - bigIMg.offsetWidth
        let bigIMgX = maskX * bigIMgMax / maskMax
        let bigIMgY = maskY * bigIMgMax / maskMax
        bigIMg.style.left = `${bigIMgX}px`
        bigIMg.style.top = `${bigIMgY}px`
    })
})