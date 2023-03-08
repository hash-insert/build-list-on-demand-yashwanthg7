const listDiv = document.getElementById("lists");
const totalNum = 50;
const numsPerList = 5;

const addListColumn = (start) => {
    const listColDiv = document.createElement("DIV");
    listColDiv.setAttribute("class", "list-col");
    const ulElem = document.createElement("UL");
    for (let i = 0; i < numsPerList; i++) {
        const lielem = document.createElement("LI");
        let liContent = document.createTextNode(i + start);
        lielem.appendChild(liContent)
        ulElem.appendChild(lielem)
    }
    listColDiv.appendChild(ulElem);
    listDiv.appendChild(listColDiv);

}

let i = 1;

const onButtonClick = () => {
    i = i + numsPerList;
    const listCols = document.querySelectorAll(".list-col");
    listCols.forEach(col => col.remove());
    let start = 1;
    while (start <= i) {
        addListColumn(start);
        start += numsPerList;
    }
}

const onLessButtonClick = () => {
    if (i > numsPerList) {
        i = i - numsPerList;
        const listCols = document.querySelectorAll(".list-col");
        listCols.forEach(col => col.remove());
        // for (let start = 1; start <= i; start += numsPerList) {
        //     addListColumn(start); // Recreate all list columns up to the new value of "i"
        // }
        let start = 1;
        while (start <= i) {
            addListColumn(start);
            start += numsPerList;
        }
    }
}


addListColumn(i);