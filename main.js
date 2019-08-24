


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
            div.style.background = "#D46855";
        })
    })

}

var clearColor = function() {

    let d = document.querySelectorAll("div");

    d.forEach(function(div){
        div.addEventListener('onClick', function hover(){
            div.style.background = "#00000";
        })
    })

}



