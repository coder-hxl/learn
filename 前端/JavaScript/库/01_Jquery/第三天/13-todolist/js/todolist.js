$(function() {
    // 1. 按下回车键 把完整数据 存储到本地存储里面
    load()
    $("#title").on("keydown", function(event) {
        if (event.key === 'Enter') {
            if ($(this).val() != "") {
                // 先读取本地存储原来的数据
                let local = getDate()
                    // 把local数组进行更新数据 把最新的数据追加给local数组
                local.push({
                    title: $(this).val(),
                    done: false
                });
                // 把这个数组local 存储给本地存储
                saveDate(local)
                    // 2. toDoList 本地存储数据渲染加载到页面
                load()
                $(this).val("")
            } else {
                alert("请输入内容")
            }
        }
    })

    // 3. toDolist 删除操作
    $("ol,ul").on("click", "a", function() {
        // 先获取本地存储
        let data = getDate()
        console.log(data);
        // 修改数据
        let index = $(this).attr("id")
        console.log(index);
        data.splice(index, 1)
            // 保存到本地存储
        saveDate(data)
            // 重新渲染页面
        load()
    })

    // 4. toDoList 正在进行和已经完成选项操作
    $("ol,ul").on("click", "input", function() {
        // 先获取本地存储的数据
        let data = getDate()
            // 修改数据
        let index = $(this).siblings("a").attr("id")
        data[index].done = $(this).prop("checked")
        console.log(data);
        // 保存到本地存储
        saveDate(data)
            // 重新渲染页面
        load()
    })

    // 读取本地存储的数据
    function getDate() {
        let data = localStorage.getItem("todolist")
        if (data !== null) {
            // 把字符串格式转为对象格式
            return JSON.parse(data)
        } else {
            return []
        }
    }
    // 保存本地存储数据
    function saveDate(data) {
        localStorage.setItem("todolist", JSON.stringify(data))
    }
    // 渲染加载数据
    function load() {
        // 读取本地存储这个数据
        let data = getDate()
        console.log(data);
        // 遍历之前要清空ol里面的元素内容
        $("ol,ul").empty()
            // 遍历这个数据
        let doneCout = 0; // 已经完成的个数
        let todocount = 0; // 正在进行的个数
        $.each(data, function(i, n) {
            // console.log($(n).title);
            if (n.done) {
                $("ul").prepend(`<li> <input type="checkbox" checked="checked"> <p>${n.title}</p> <a href="javascript:;" id="${i}"></a> </li>`)
                doneCout++
            } else {
                $("ol").prepend(`<li> <input type="checkbox"> <p>${n.title}</p> <a href="javascript:;" id="${i}"></a> </li>`)
                todocount++
            }
        })
        $("#donecount").text(doneCout)
        $("#todocount").text(todocount)
    }

})