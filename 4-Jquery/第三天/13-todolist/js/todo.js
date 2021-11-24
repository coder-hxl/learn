$(function() {
    geng()

    // 1. 添加
    $("#title").keydown(function(e) {
        if (e.key === "Enter") {
            if ($(this).val() == "") {
                alert("请输入内容")
            } else {
                let local = getItem()
                local.push({
                    nei: $(this).val(),
                    flas: false
                })
                setItem(local)
                geng()
                $(this).val("")
            }
        }
    })

    // 2. 删除
    $("ol,ul").on("click", "a", function() {
        let data = getItem()
        let index = $(this).attr("id")
        console.log(index);
        data.splice(index, 1)
        setItem(data)
        geng()
    })

    // 3. 判断
    $("ol,ul").on("click", "input", function() {
        let data = getItem()
        let index = $(this).siblings("a").attr("id")
        console.log(index);
        data[index].flas = $(this).prop("checked")
        console.log(data[index].flas);
        setItem(data)
        geng()
    })

    // 获取本地存储
    function getItem() {
        let data = localStorage.getItem("local")
        if (data !== null) {
            return JSON.parse(data)
        } else {
            return []
        }
    }
    // 保存本地储存
    function setItem(data) {
        localStorage.setItem("local", JSON.stringify(data))
    }
    // 渲染页面
    function geng() {
        let data = getItem()
        $("ol,ul").empty()
        let todocount = 0 // 正在进行
        let donecount = 0 // 已经完成
        $.each(data, function(i, e) {
            if (e.flas) {
                $("ul").prepend($(`<li> <input type="checkbox" checked> <p>${e.nei}</p> <a href="javascript:;" id="${i}"></a> </li>`))
                donecount++
            } else {
                $("ol").prepend($(`<li> <input type="checkbox"> <p>${e.nei}</p> <a href="javascript:;" id="${i}"></a> </li>`))
                todocount++
            }
        })
        $("#todocount").text(todocount)
        $("#donecount").text(donecount)
    }

})