// 规定好每张图片处于的位置和状态
var states = [{
        ZIndex: 1,
        width: 120,
        height: 150,
        top: 69,
        left: 134,
        opac: 0.2
    },
    {
        ZIndex: 2,
        width: 130,
        height: 170,
        top: 55,
        left: 0,
        opac: 0.5
    },
    {
        ZIndex: 3,
        width: 170,
        height: 218,
        top: 30,
        left: 110,
        opac: 0.7
    },
    {
        ZIndex: 4,
        width: 224,
        height: 288,
        top: 0,
        left: 263,
        opac: 1
    },
    {
        ZIndex: 3,
        width: 170,
        height: 218,
        top: 30,
        left: 470,
        opac: 0.7
    },
    {
        ZIndex: 2,
        width: 130,
        height: 170,
        top: 55,
        left: 620,
        opac: 0.5
    },
    {
        ZIndex: 1,
        width: 120,
        height: 150,
        top: 69,
        left: 500,
        opac: 0.2
    }
]

// 将状态和位置付给li

var lis = $('#box li');
lis.each(function (index, ele) {
    var state = states[index]
    $(ele).css('z-index',state.ZIndex).stop().animate(state, 1000).find('img').css('opacity',state.opac)
    // $('.next').click(function () {
    //     index++
    //     if(index>=lis.length-1){
    //         index=0
    //     }
    //     var add = index+1
    //     var statess = states[add]
    //     $(ele).css('z-index',state.ZIndex).stop().animate(statess, 1000)
        
    // })
    // $('.prev').click(function () {
    //     index--
    //     if(index<=0){
    //         index=lis.length-1
    //     }
    //     var add = index-1
    //     var statess = states[add]
    //     $(ele).css('z-index',state.ZIndex).stop().animate(statess, 1000)
    // })
})
function dongs(){
    states.push(states.shift())
    console.log(states)
    lis.each(function(index,item){
        var state = states[index]
        $(item).css('z-index',state.ZIndex).stop().animate(state, 1000).find('img').css('opacity',state.opac)
    })
}
var num = setInterval(dongs,2000)
$('.prev,.next,ul').hover(function(){
    clearInterval(num)
},function(){
    num = setInterval(dongs,2000)
})
$('.prev').click(function(){
    states.unshift(states.pop())
    
    lis.each(function(index,item){
        var state = states[index]
        $(item).css('z-index',state.ZIndex).stop().animate(state,1000).find('img').css('opacity',state.opac)
    })
})
$('.next').click(function(){
    dongs()
})
