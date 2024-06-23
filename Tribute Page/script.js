        // Script pentru funcționalitatea butonului "înapoi sus" (optional)
const backToTopButton = document.querySelector(".back-to-top");

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 100) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
});

backToTopButton.addEventListener("click", () => {
    window.scrollTo(0, 0);
});

// Wait for the DOM content to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Select all elements with class "actor-img"
    var imgElements = document.querySelectorAll('.img');

    // Loop through each image element
    imgElements.forEach(function(img) {
        // Get the URL from the "src" attribute
        var imgSrc = img.getAttribute('src');

        // Create a new Image object
        var newImg = new Image();
        
        // When the new image is loaded, replace the existing <img> with it
        newImg.onload = function() {
            img.src = newImg.src; // Update the source of the original <img>
        };

        // Set the source of the new Image object to start loading the image
        newImg.src = imgSrc; // This triggers the loading process
    });
});