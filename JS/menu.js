    function menu() {
        document.getElementById("menu").classList.toggle("show");
    }

    window.onclick = function(event) {
        if (!event.target.matches('.list')) {
            var dropdowns = document.getElementsByClassName("menub");
            var i;
            for (i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
                }
            }
        }
    }
