let $buttonTag=$(".wrapper>button")
let switchCheck=true
$buttonTag.eq(0).on('click',function(){
    if (switchCheck) {
        buttonSwitch.textContent="点击关闭浮层"
        popover.style.display="block"
        switchCheck=false
    } else {
        buttonSwitch.textContent="点击打开浮层"
        popover.style.display="none"
        switchCheck=true
    }
    $(document).one('click',function(){
        popover.style.display="none"
        buttonSwitch.textContent="点击打开浮层" 
        switchCheck=true
    })
})
$('.wrapper').on('click',function(preventBubble){
    preventBubble.stopPropagation()
})