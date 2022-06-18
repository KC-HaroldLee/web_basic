document.addEventListener("DOMContentLoaded", 
    function(e){
        let nameEditbtn  = document.querySelector("#nameEditBtn")
        let editName = document.querySelector("#editNameField")
        let okBtn = document.querySelector("#okBtn")
        let newName = document.querySelector("#newName")
        let nameHere = document.querySelector("#nameHere")

        nameEditbtn.addEventListener("click", 
            function(e){
                editName.style.display = "block"
                nameEditbtn.style.display = "none"
            }
        )

        okBtn.addEventListener("click",
            function(e){
                nameHere.textContent = newName.value
                editName.style.display = "none"
                nameEditbtn.style.display = "inline"
            }
        )
    }
)