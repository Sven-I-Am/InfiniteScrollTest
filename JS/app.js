/*declare block as function*/
block = function() {
    this.div = document.createElement("div");
    this.div.className = "row";
    this.div.style.backgroundColor = "#" +  Math.floor(Math.random()*16777215).toString(16);
    document.getElementById("target").appendChild(this.div);
}

/*first time load*/
for(let i=0; i<5;i++){
    loadNext();
}

/*start listening to scroll*/
window.addEventListener('scroll', () => {
    const {
        scrollTop, //distance the top element has traveled above the viewport
        scrollHeight, //total height of the document
        clientHeight //same as window.innerHeight
    } = document.documentElement;

    if (scrollTop + clientHeight >= scrollHeight - 5){ //call loader at 5px from the bottom of the currently loaded content
        loadNext();
    }
});

/*call for new block*/
function loadNext(){
    new block();
}