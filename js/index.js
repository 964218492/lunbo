// 首先可以将整体分装成一个匿名的自运行函数
(function () {
    // 规定好每张图片处于的位置和状态
    var states = [
        { ZIndex: 1, width: 120, height: 150, top: 69, left: 134, opac: 0.2 },
        { ZIndex: 2, width: 130, height: 170, top: 59, left: 0, opac: 0.5 },
        { ZIndex: 3, width: 170, height: 218, top: 24, left: 110, opac: 0.7 },
        { ZIndex: 4, width: 224, height: 288, top: 0, left: 263, opac: 1 },
        { ZIndex: 3, width: 170, height: 218, top: 24, left: 470, opac: 0.7 },
        { ZIndex: 2, width: 130, height: 170, top: 59, left: 620, opac: 0.5 },
        { ZIndex: 1, width: 120, height: 150, top: 69, left: 500, opac: 0.2 },
    ];

    // 将状态和位置付给li

    var lis = $('#box li');
    lis.each(function (index, ele) {
        var state = states[index]
        $(ele).css('z-index', state.ZIndex).stop().animate(state, 1000).find('img').css('opacity', state.opac)
    })

    function dongs() {
        states.push(states.shift())
        console.log(states)
        lis.each(function (index, item) {
            var state = states[index]
            $(item).css('z-index', state.ZIndex).stop().animate(state, 1000).find('img').css('opacity', state.opac)
        })
    }
    var num = setInterval(dongs, 2000)
    $('.prev,.next,ul').hover(function () {
        clearInterval(num)
    }, function () {
        num = setInterval(dongs, 2000)
    })
    $('.prev').click(function () {
        states.unshift(states.pop())

        lis.each(function (index, item) {
            var state = states[index]
            $(item).css('z-index', state.ZIndex).stop().animate(state, 1000).find('img').css('opacity', state.opac)
        })
    })
    $('.next').click(function () {
        dongs()
    })
})()

// 变量的作用域问题:
// 1.全局域[window]  2.函数域[function]
// 1.全局域：从页面被打开之后到页面关闭之前，始终都是存在的
// 2.函数域：存在函数被调用的一瞬间(也不一定，考虑到闭包的使用)

// 闭包作用：可以保留函数的作用域(所以move可以使用当前自运行函数中的states)
// 闭包产生的必要条件：函数里面套函数(内层的函数要使用外部的变量)

// 全局变量会产生闭包吗?
// 不会，因为全局变量存在全局域