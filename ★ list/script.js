// Wait for the DOM content to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Select all elements with class "actor-img"
    var imgElements = document.querySelectorAll('.actor-img');

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

function addRandomButton(clickedButton) {
    // Create a new button element
    const newButton = document.createElement('button');
    
    // Inherit text content from the clicked button
    newButton.textContent = clickedButton.textContent;
    
    // Inherit styles from the clicked button (optional if you want to keep some styles)
    const computedStyle = window.getComputedStyle(clickedButton);
    newButton.style.position = 'absolute';
    newButton.style.width = computedStyle.width;
    newButton.style.height = computedStyle.height;
    newButton.style.backgroundColor = computedStyle.backgroundColor;
    newButton.style.color = computedStyle.color;
    newButton.style.fontFamily = computedStyle.fontFamily;
    newButton.style.fontSize = computedStyle.fontSize;
    newButton.style.padding = computedStyle.padding;
    newButton.style.margin = computedStyle.margin;
    newButton.style.border = computedStyle.border;
   // Optional: inherit border style
    
    // Generate random positions within the window dimensions
    const randomLeft = Math.random() * (window.innerWidth - newButton.clientWidth);
    const randomTop = Math.random() * (window.innerHeight - newButton.clientHeight);
    
    newButton.style.left = `${randomLeft}px`;
    newButton.style.top = `${randomTop}px`;
    
    // Add hover effect
    newButton.addEventListener('mouseenter', function() {
        newButton.style.backgroundColor = '#2f074593';
        newButton.style.color = 'white';
        newButton.style.cursor = 'pointer';
        newButton.style.border.radius = 0.25;
    });
    
    newButton.addEventListener('mouseleave', function() {
        newButton.style.backgroundColor = computedStyle.backgroundColor;
        newButton.style.color = computedStyle.color;
    });
    
    // Click functionality (optional)
    newButton.addEventListener('click', function() {
        addRandomButton(clickedButton);
        // Add any other functionality you want for the new button click
    });
    
    // Append the button to the body or a specific container
    document.body.appendChild(newButton);
}

// Add event listeners to all "Mai multe informații" buttons
const moreInfoButtons = document.querySelectorAll('.more-info-btn');

moreInfoButtons.forEach(button => {
    button.addEventListener('click', function(event) {
        // Call the function to add a new button at a random position
        addRandomButton(event.target);
    });
});