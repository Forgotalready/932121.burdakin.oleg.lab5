const veryLongString = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet asperiores aut nihil! Corporis debitis labore fugiat id, eligendi ratione veritatis!"
const anotherVeryLongString = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam hic, ipsa, ullam, cupiditate eveniet at voluptate corrupti commodi nobis ratione voluptatem! Vel animi totam cupiditate doloribus ad ab exercitationem officia eveniet impedit? Deleniti quasi nisi consectetur perspiciatis quibusdam nostrum, enim perferendis nam, magni molestias recusandae id libero vitae, repudiandae praesentium."

const mapping = 
{
    "Новость 1" : veryLongString + "<br/>" + anotherVeryLongString,
    "Новость 2" : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, alias" + "<br/>" + anotherVeryLongString,
    "Новость 3" : veryLongString + "<br/>" + anotherVeryLongString
}

function createWrapper()
{
    let infoWrapper = document.createElement("div")
    infoWrapper.className = "pop-up-wrapper"
    return infoWrapper
}

function createInfoBlock()
{
    let info = document.createElement("div")
    info.className = "pop-up"
    return info
}

function createHeader(headerText)
{
    let header = document.createElement("h2")
    header.style.marginBottom = "20px"
    header.innerHTML = headerText
    return header
}

function createMainBlock(mainBlockText)
{
    let infoMainBlock = document.createElement("div")
    infoMainBlock.innerHTML = mainBlockText
    return infoMainBlock
}

function createAdditionalInfo(headerText, mainBlockText)
{

    let infoWrapper = createWrapper()
    let info = createInfoBlock()

    let header = createHeader(headerText)
    let infoMainBlock = createMainBlock(headerText + ": " + mainBlockText)

    info.appendChild(header)
    info.appendChild(infoMainBlock)

    infoWrapper.appendChild(info)
    document.querySelector("body").appendChild(infoWrapper)

    let mainBlock = document.querySelector("main")
    mainBlock.style.opacity = 0.2;
}

function getHeader(elem)
{
    let newsBlock = elem.parentNode.parentNode
    let header = newsBlock.querySelector(".newsBoxHeader > h2")
    return header
}

function showWindow(clicked)
{
    if(document.querySelector(".pop-up") == null)
    {
        let header = getHeader(clicked)
        createAdditionalInfo(header.textContent, mapping[header.textContent.trim()])
    }
}

window.addEventListener('click', function(e)
{
    let additinalInfo = document.querySelector('.pop-up-wrapper')
    if(additinalInfo != null && e.target.tagName != 'BUTTON')
    {
        additinalInfo.remove()
        document.querySelector("main").style.opacity = 1.0
    }
})