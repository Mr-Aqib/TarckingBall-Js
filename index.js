let mball=document.querySelector('.ball')
window.addEventListener(('mousemove'),(e)=>
{
    
    let xcords=e.clientX
    let ycords=e.clientY
    mball.style.transform=`translate(${xcords}px,${ycords}px)`
})