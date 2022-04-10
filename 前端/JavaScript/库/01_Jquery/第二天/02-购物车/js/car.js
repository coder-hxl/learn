$(function() {
    // 1. 全选 全不选功能模块
    // 全选的状态赋值 三个小复选框
    $(".checkall").change(function() {
        $(".j-checkbox,.checkall").prop("checked", $(this).prop("checked"))
        getSum()
        if ($(this).prop("checked")) {
            // 让所有的商品添加 check-cart-item类名
            $(".cart-item").addClass("check-cart-item")
        } else {
            // 移除 check-cart-item类名
            $(".cart-item").removeClass("check-cart-item")
        }
    })

    // 2. 如果小复选框都被选中的个数等于3 就应该把全选按钮选上，否则全选按钮不选
    // $(".j-checkbox").length 是小复选框的个数
    $(".j-checkbox").change(function() {
        if ($(".j-checkbox:checked").length == $(".j-checkbox").length) {
            $(".checkall").prop("checked", true)
        } else {
            $(".checkall").prop("checked", false)
        }
        getSum()
        if ($(this).prop("checked")) {
            // 让当前的商品添加 check-cart-item类名
            $(this).parents(".cart-item").addClass("check-cart-item")
        } else {
            // 移除 check-cart-item类名
            $(this).parents(".cart-item").removeClass("check-cart-item")
        }
    })

    // 3. 增减商品 每次点击就 声明变量获取文本框的值，进行自增或自减，然后赋值给文本框
    $(".increment").click(function() {
        // 得到当前兄弟文本框的值
        let n = $(this).siblings("input").val()
        n++
        $(this).siblings("input").val(n)
            // 3. 计算小计模块
        let p = $(this).parents(".p-num").siblings(".p-price").html()
        p = p.substr(1)
        let price = (p * n).toFixed(2) // toFixed(2) 保留2位小数
        $(this).parents(".p-num").siblings(".p-sum").text(`￥${price}`)
        getSum()
    })
    $(".decrement").click(function() {
        let n = $(this).siblings("input").val()
        if (n == 1) {
            return false
        }
        n--
        $(this).siblings("input").val(n)
        let p = $(this).parents(".p-num").siblings(".p-price").html()
        p = p.substr(1)
        $(this).parents(".p-num").siblings(".p-sum").text(`￥${(p * n).toFixed(2)}`)
        getSum()
    })

    // 4. 用户修改文本框的值 计算 小计模块
    $(".itxt").change(function() {
        // 得到当前文本框的值 乘以 当前商品的单价
        let n = $(this).val()
            // 当前商品的单价
        let p = $(this).parents(".p-num").siblings(".p-price").html()
        p = p.substr(1)
        $(this).parents(".p-num").siblings(".p-sum").text(`￥${(p * n).toFixed(2)}`)
        getSum()
    })

    // 5. 计算被选中的 个数和总价格
    function getSum() {
        let count = 0 // 计算个数
        let money = 0 // 计算总价格
        $(".j-checkbox:checked").each(function(i, ele) {
            count += parseInt($(ele).parents(".p-checkbox").siblings(".p-num").find(".itxt").val())
        })
        $(".amount-sum em").text(count)
        $(".j-checkbox:checked").each(function(i, ele) {
            money += parseFloat($(ele).parent(".p-checkbox").siblings(".p-sum").text().substr(1))
        })
        $(".price-sum em").text(`￥${money.toFixed(2)}`)
    }

    // 6. 删除商品模块
    // (1) 商品后面的删除按钮
    $(".p-action a").click(function() {
        $(this).parents(".cart-item").remove()
        getSum()
    })

    // (2) 删除选中的商品
    $(".remove-batch").click(function() {
        $(".j-checkbox:checked").parents(".cart-item").remove()
        getSum()
    })

    // (3) 清理购物车
    $(".clear-all").click(function() {
        $(".cart-item").remove()
        getSum()
    })
})