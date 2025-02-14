//-------------------------------------------product page-------------------------------------------
document.addEventListener("DOMContentLoaded", function() {
    // Initialize product categories to "none" explicitly
    const categories = ["banana", "sweet", "kappa", "murukk", "kadalamavu", "special", "other"];
    
    categories.forEach(category => {
        const items = document.querySelectorAll(`.${category}`);
        items.forEach(item => item.style.display = "none"); // Ensuring display is explicitly set
    });

    const categoryFunctions = {
        banana: () => toggleCategory(document.querySelectorAll(".banana")),
        sweet: () => toggleCategory(document.querySelectorAll(".sweet")),
        kappa: () => toggleCategory(document.querySelectorAll(".kappa")),
        murukk: () => toggleCategory(document.querySelectorAll(".murukk")),
        kadalamavu: () => toggleCategory(document.querySelectorAll(".kadalamavu")),
        special: () => toggleCategory(document.querySelectorAll(".special")),
        other: () => toggleCategory(document.querySelectorAll(".other"))
    };

    for (const category in categoryFunctions) {
        const element = document.getElementById(`category${category}`);
        if (element) {
            element.addEventListener("click", categoryFunctions[category]);
        }
    }

    function toggleCategory(items) {
        if (items.length === 0) return; // No elements to toggle

        const firstItem = items[0];
        const isCurrentlyVisible = firstItem.style.display === "block"; // Explicit check

        // Toggle all items
        items.forEach(item => item.style.display = isCurrentlyVisible ? "none" : "block");
    }
});

//-------------------------------------------sliding images (ONLY on index.html) -------------------------------------------
document.addEventListener("DOMContentLoaded", function () {
    console.log("✅ script.js initialized.");

    // Ensure the slideshow runs on GitHub Pages and local servers
    const isIndexPage = window.location.pathname.endsWith("index.html") || window.location.pathname === "/";
    
    if (isIndexPage) {
        console.log("✅ Running slideshow code on index.html.");

        let slideIndex = 0;
        let slides = document.querySelectorAll(".slide");

        function showSlide(index) {
            if (!slides.length) {
                console.error("❌ No slides found! Skipping showSlide().");
                return;
            }
            slides.forEach(slide => slide.classList.remove("active"));
            slides[index].classList.add("active");
        }

        function changeSlide(n) {
            slideIndex += n;
            if (slideIndex < 0) { slideIndex = slides.length - 1; }
            if (slideIndex >= slides.length) { slideIndex = 0; }
            showSlide(slideIndex);
        }

        // Auto slideshow
        function autoSlide() {
            slideIndex++;
            if (slideIndex >= slides.length) { slideIndex = 0; }
            showSlide(slideIndex);
            setTimeout(autoSlide, 5000); // Change every 5s
        }

        // Initialize Slideshow
        showSlide(slideIndex);
        setTimeout(autoSlide, 5000);

        // ✅ Ensure `changeSlide` is always available
        window.changeSlide = changeSlide;
    }
});
//-------------------------------------------menu button-------------------------------------------
document.addEventListener("DOMContentLoaded", function () {
    console.log("✅ script.js initialized.");

    function attachMenuDropdown() {
        console.log("🔍 Checking for menu button...");

        const menuButton = document.querySelector(".dropbtn");
        const menuContent = document.querySelector(".dropdown-content");

        if (!menuButton || !menuContent) {
            console.error("❌ Menu button or dropdown content not found!");
            return;
        }

        console.log("✅ Menu button found! Attaching event listener.");
        
        // Remove any old event listeners before adding a new one
        menuButton.removeEventListener("click", toggleMenu);
        menuButton.addEventListener("click", toggleMenu);

        document.addEventListener("click", function (event) {
            if (!menuButton.contains(event.target) && !menuContent.contains(event.target)) {
                console.log("🔒 Clicking outside, hiding menu.");
                menuContent.style.display = "none";
            }
        });

        console.log("✅ Menu dropdown initialized.");
    }

    function toggleMenu(event) {
        event.stopPropagation();
        const menuContent = document.querySelector(".dropdown-content");
        menuContent.style.display = (menuContent.style.display === "block") ? "none" : "block";
        console.log("📂 Menu button clicked.");
    }

    console.log("🔄 Running attachMenuDropdown()...");
    attachMenuDropdown();
});
