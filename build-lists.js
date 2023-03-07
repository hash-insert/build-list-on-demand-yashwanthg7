const listDiv = document.getElementById("lists");
const totalNum = 50;
const numsPerList = 5;

const addListColumn = (start) => {
    const listColDiv = document.createElement("DIV");
    listColDiv.setAttribute("class", "list-col");
    const ulElem = document.createElement("UL");
    for (let i=0; i< numsPerList; i++) {
        const lielem = document.createElement("LI");
        let liContent = document.createTextNode(i+start);
        lielem.appendChild(liContent)
        ulElem.appendChild(lielem)
    }
    listColDiv.appendChild(ulElem);
    listDiv.appendChild(listColDiv);    
}

let i = 1;

const onButtonClick = () => {
    i = i + numsPerList
    addListColumn(i);
}

addListColumn(i);





