


let makeGrid = function() {
    const table = document.getElementById("table");

    for(i=0;i<256;i++){
        table.appendChild(document.createElement("div"));
                
    }
    
}

  

var addingColor = function() 
{
    let d = document.querySelectorAll("div");

    d.forEach(function(div){
        div.addEventListener('mouseover', function hover(){
            div.classList.remove("remove");
            div.classList.add("color");
        })
    })

}

var clearColor = function() {

    let d = document.querySelectorAll("div");
    console.log("hi");
    d.forEach(function(div){
        div.classList.remove("color");
        div.classList.add("remove");     
        })
    
    addingColor();
}




