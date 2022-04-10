function fn(n) {
    if (n < 1) {
        return 1
    }
    return fn(n - 1) + fn(n - 2)
}
let onmessage = function(e) {
    let num = e.data
    console.log('分线程接收到主线程发送的数据' + num);
    let result = fn(num)
    postMessage(result)
    console.log('分线程向主线程返回数据' + result);
}