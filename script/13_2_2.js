document.addEventListener("DOMContentLoaded",
    function(e){
        let input = document.querySelector("input")
        input.addEventListener("click",
        function(e){
            console.log("허허허허")
            console.log(e.target.getAttribute("type", "text"))
        })
    }
)