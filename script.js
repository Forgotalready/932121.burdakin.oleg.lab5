function createAdditionalInfo(header)
{
    let info = document.createElement("div")
    info.appendChild(header)
    document.querySelector("body").appendChild(info)

    info.style.position = "fixed"
    info.style.top = 0
    mainBlock = document.querySelector("main")
    mainBlock.style.opacity = 0.5;
}

function showWindow(clicked)
{
    let newsBlock = clicked.parentNode.parentNode
    let header = newsBlock.querySelector(".newsBoxHeader > h2")
    console.log(header.innerHTML)
    createAdditionalInfo(header.innerHTML)
}