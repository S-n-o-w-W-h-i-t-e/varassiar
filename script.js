document.addEventListener("DOMContentLoaded", function() {
    const menu = document.querySelector("#dropdown");
    const menucontent = document.querySelector(".dropdown-content");
    const category = document.querySelector(".hidden");
    const content = document.querySelectorAll(".banana");

    function menudropdown() {
    	event.stopPropagation();
    	menucontent.style.display = "block"
    }

    function dropdownhide() {
    	event.stopPropagation();
    	menucontent.style.display = "none"
    }

	function myFunction() {
		event.stopPropagation();
	    if (content[0].style.display === "block") {
	    	for (item of content) {
            	item.style.display = "none";
	    	}
	    }
         else {
            for (item of content) {
            	item.style.display = "block";
        	}
    	}
	}

	menu.addEventListener("click", menudropdown)
    document.addEventListener("click", dropdownhide)
    category.addEventListener("click", myFunction);
});

