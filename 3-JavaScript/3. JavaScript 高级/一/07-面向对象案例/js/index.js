let that;
class Tab {
    constructor(id) {
        that = this

        // 获取元素
        this.main = document.querySelector(id)
        this.add = this.main.querySelector('.tabadd')
        this.ul = this.main.querySelector('.fisrstnav ul:first-child')
        this.tabscon = this.main.querySelector('.tabscon')
        this.init()
    }
    init() {
        this.updateNode()
            // init 初始化操作让相关的元素绑定事件
        this.add.onclick = this.addTab
        for (let i = 0; i < this.lis.length; i++) {
            this.lis[i].index = i
            this.lis[i].onclick = this.toggleTab
            this.remove[i].onclick = this.removeTab
            this.spans[i].ondblclick = this.editTab
            this.sections[i].ondblclick = this.editTab
        }
    }

    // 动态添加元素 需要重新获取元素
    updateNode() {
        this.lis = this.main.querySelectorAll('li')
        this.sections = this.main.querySelectorAll('section')
        this.remove = this.main.querySelectorAll('.icon-guanbi')
        this.spans = this.main.querySelectorAll('.fisrstnav li span:first-child')
    }

    // 1. 切换功能
    toggleTab() {
        that.clearClass()
        this.className = 'liactive'
        that.sections[this.index].className = 'conactive'
    }

    // 清除所有li 和 section 的类
    clearClass() {
        for (let i = 0; i < this.lis.length; i++) {
            this.lis[i].className = ''
            this.sections[i].className = ''
        }
    }

    // 2. 添加功能
    addTab() {
        that.clearClass()
            // (1) 创建li元素和section元素
        let random = Math.random()
        let li = '<li class="liactive"><span></span>新选项卡<span class="iconfont icon-guanbi"></span></li>'
        let section = `<section class="conactive">测试${random}</section>`
            // (2) 追加元素
        that.ul.insertAdjacentHTML('beforeend', li)
        that.tabscon.insertAdjacentHTML('beforeend', section)
        that.init()
    }

    // 3. 删除功能
    removeTab(e) {
        e.stopPropagation() // 阻止冒泡 防止触发li 的切换事件
        let index = this.parentNode.index
            // remove()方法可以直接删除指定元素
        that.lis[index].remove()
        that.sections[index].remove()
        that.init()
        if (document.querySelector('.liactive')) return
        index--
        // 手动调用我们的点击事件 不需要鼠标触发
        that.lis[index] && that.lis[index].click()
    }

    // 4. 修改功能
    editTab() {
        let str = this.innerHTML
            // 双击禁止选中文字
        window.getSelection ? window.getSelection().removeAllRanges() : document.getselection.empty()
        this.innerHTML = `<input type="text">`
        let input = this.children[0]
        input.value = str
        input.select() // 文本框里面的文字处于选中状态

        // 离开文本框把文本框值给span
        input.onblur = function() {
            this.parentNode.innerHTML = this.value
        }

        // 按下回车把文本框值给span
        input.onkeyup = function(e) {
            if (e.key == 'Enter') {
                // 手动调用表单失去焦点事件 不需要鼠标离开操作
                this.blur()
            }
        }
    }

}
new Tab('#tab')