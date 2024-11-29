
    $(document).ready(function () { 
        var modal = document.getElementById("myModal");
        console.log("kkkkk")

        $('.btn-info').on('click', function(req,res) {
            // $('#openModal').show();
            console.log("helo")
            modal.style.display = "block";          
            
        })
        

        $('#close').on('click', function() {
            // $('#openModal').show();
            modal.style.display = "none";
            console.log("helo")
            
        })


        

    });

    
