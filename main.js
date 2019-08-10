let $buttonTag=document.querySelector(".wrapper>button")
let switchCheck=true
$buttonTag.addEventListener('click',function(){
    if (switchCheck) {
        buttonSwitch.textContent="点击关闭浮层"
        popover.style.display="block"
        switchCheck=false
    } else {
        buttonSwitch.textContent="点击打开浮层"
        popover.style.display="none"
        switchCheck=true
    }
    let clickDocument = function(){
        popover.style.display="none"
        buttonSwitch.textContent="点击打开浮层" 
        switchCheck=true
        document.removeEventListener('click',clickDocument)
    }
    document.addEventListener('click', clickDocument)
})
document.querySelector('.wrapper').addEventListener('click',function(preventBubble){
    preventBubble.stopPropagation()
})