
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


//-------------------------------------------sliding images-------------------------------------------

let slideIndex = 0;
let slides = document.querySelectorAll(".slide");

function showSlide(index) {
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
    setTimeout(autoSlide, 5000); // Change every 3s
}

// Initialize Slideshow
showSlide(slideIndex);
setTimeout(autoSlide, 5000);




//-------------------------------------------menu button-------------------------------------------


document.addEventListener("DOMContentLoaded", function() {
  const dropdownBtn = document.querySelector(".dropbtn");
  const dropdownContent = document.querySelector(".dropdown-content");

  // Toggle dropdown on button click
  dropdownBtn.addEventListener("click", function(event) {
    event.stopPropagation(); // Prevents the click from immediately closing the dropdown
    dropdownContent.classList.toggle("active");
  });

  // Close dropdown when clicking outside of it
  document.addEventListener("click", function(event) {
    if (!dropdownBtn.contains(event.target) && !dropdownContent.contains(event.target)) {
      dropdownContent.classList.remove("active");
    }
  });
});


window.history.replaceState({}, document.title, window.location.pathname);

