document.addEventListener("DOMContentLoaded", function() {
    const menu = document.querySelector("#dropdown");
    const menucontent = document.querySelector(".dropdown-content");
    const categorybanana = document.querySelector("#categorybanana");
    const categorysweet = document.querySelector("#categorysweet");
    const categorykappa = document.querySelector("#categorykappa");
    const categorymurukk = document.querySelector("#categorymurukk");
    const categorykadalamavu = document.querySelector("#categorykadalamavu");
    const categoryspecial = document.querySelector("#categoryspecial");
    const categoryother = document.querySelector("#categoryother");

    const banana = document.querySelectorAll(".banana");
    const sweet = document.querySelectorAll(".sweet");
    const kappa = document.querySelectorAll(".kappa");
    const murukk = document.querySelectorAll(".murukk");
    const kadalamavu = document.querySelectorAll(".kadalamavu");
    const special = document.querySelectorAll(".special");
    const other = document.querySelectorAll(".other");

    function menudropdown() {
    	event.stopPropagation();
    	menucontent.style.display = "block"
    }

    function dropdownhide() {
    	event.stopPropagation();
    	menucontent.style.display = "none"
    }

	function bananafunction() {
		event.stopPropagation();
	    if (banana[0].style.display === "block") {
	    	for (item of banana) {
            	item.style.display = "none";
	    	}
	    }
         else {
            for (item of banana) {
            	item.style.display = "block";
        	}
    	}
	}

	function sweetfunction() {
		event.stopPropagation();
	    if (sweet[0].style.display === "block") {
	    	for (item of sweet) {
            	item.style.display = "none";
	    	}
	    }
         else {
            for (item of sweet) {
            	item.style.display = "block";
        	}
    	}
	}

	function kappafunction() {
		event.stopPropagation();
	    if (kappa[0].style.display === "block") {
	    	for (item of kappa) {
            	item.style.display = "none";
	    	}
	    }
         else {
            for (item of kappa) {
            	item.style.display = "block";
        	}
    	}
	}

	function murukkfunction() {
		event.stopPropagation();
	    if (murukk[0].style.display === "block") {
	    	for (item of murukk) {
            	item.style.display = "none";
	    	}
	    }
         else {
            for (item of murukk) {
            	item.style.display = "block";
        	}
    	}
    }

    function kadalamavufunction() {
		event.stopPropagation();
	    if (kadalamavu[0].style.display === "block") {
	    	for (item of kadalamavu) {
            	item.style.display = "none";
	    	}
	    }
         else {
            for (item of kadalamavu) {
            	item.style.display = "block";
        	}
    	}
    }

    function specialfunction() {
		event.stopPropagation();
	    if (special[0].style.display === "block") {
	    	for (item of special) {
            	item.style.display = "none";
	    	}
	    }
         else {
            for (item of special) {
            	item.style.display = "block";
        	}
    	}
    }

    function otherfunction() {
		event.stopPropagation();
	    if (other[0].style.display === "block") {
	    	for (item of other) {
            	item.style.display = "none";
	    	}
	    }
         else {
            for (item of other) {
            	item.style.display = "block";
        	}
    	}
    }

	  menu.addEventListener("click", menudropdown)
    document.addEventListener("click", dropdownhide)
    categorybanana.addEventListener("click", bananafunction);
    categorysweet.addEventListener("click", sweetfunction);
    categorykappa.addEventListener("click", kappafunction);
    categorymurukk.addEventListener("click", murukkfunction);
    categorykadalamavu.addEventListener("click", kadalamavufunction);
    categoryspecial.addEventListener("click", specialfunction);
    categoryother.addEventListener("click", otherfunction);

    const text = document.querySelector('#heading');

   function updateGradient() {
      // Generate random angle
      const angle = Math.floor(Math.random() * 360);
  
      // Apply the gradient
      text.style.background = 'linear-gradient(${angle}deg)';
  
      // Request the next animation frame
      requestAnimationFrame(updateGradient);
   }

   // Start the animation
      updateGradient();
});
