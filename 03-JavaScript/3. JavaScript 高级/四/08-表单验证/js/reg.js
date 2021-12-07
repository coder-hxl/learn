window.addEventListener('load', function() {
    let regtel = /^1[3|4|5|7|8]\d{9}$/ // 手机号正则表达式
    let regqq = /^[1-9]\d{4,}$/ // qq号正则表达式
    let regnc = /^[\u4e00-\u9fa5]{2,8}$/ // 昵称
    let regmsg = /^\d{6}$/
    let regpwd = /^[a-zA-Z0-9_-]{6,16}$/
    let tel = document.querySelector('#tel')
    let qq = document.querySelector('#qq')
    let nc = document.querySelector('#nc')
    let msg = document.querySelector('#msg')
    let pwd = document.querySelector('#pwd')
    let surepwd = document.querySelector('#surepwd')
    regexp(tel, regtel) // 手机号码
    regexp(qq, regqq) // qq号码
    regexp(nc, regnc) // 昵称
    regexp(msg, regmsg) // 短信
    regexp(pwd, regpwd) // 密码

    function regexp(ele, reg) {
        ele.onblur = function() {
            if (reg.test(this.value)) {
                this.nextElementSibling.className = 'success'
                this.nextElementSibling.innerHTML = '<i class="success_icon"></i> 恭喜您输入正确'
            } else {
                this.nextElementSibling.className = 'error'
                this.nextElementSibling.innerHTML = '<i class="error_icon"></i> 格式不正确，请从新输入'
            }
        }
    }
    surepwd.onblur = function() {
        if (this.value === pwd.value) {
            this.nextElementSibling.className = 'success'
            this.nextElementSibling.innerHTML = '<i class="success_icon"></i> 恭喜您输入正确'
        } else {
            this.nextElementSibling.className = 'error'
            this.nextElementSibling.innerHTML = '<i class="error_icon"></i> 两次密码输入不一致'
        }
    }

})