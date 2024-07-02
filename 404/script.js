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
    newButton.style.borderRadius = computedStyle.borderRadius; // Optional: inherit border style
    newButton.style.border = computedStyle.border;
    newButton.style.appearance = computedStyle.appearance;
    newButton.style.zIndex = computedStyle.zIndex;
    newButton.onclick = computedStyle.onclick;
    newButton.style.lineBreak = computedStyle.lineBreak;
    newButton.style.whiteSpace = computedStyle.whiteSpace;
    newButton.style.textAlign = computedStyle.textAlign;

    // Generate random positions within the window dimensions
    const randomLeft = Math.random() * (window.innerWidth + 200) - 100; // Offset by 100 pixels to the left or right
    const randomTop = Math.random() * (window.innerHeight + 200) - 100; // Offset by 100 pixels up or down

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


function autoClickMoreInfoButton() {
    setInterval(function() {
        const moreInfoButton = document.querySelector('.more-info-btn');
        moreInfoButton.click(); // Trigger click on the button
    }, 10000);
}
    // Call the auto-click function when the page loads
window.onload = function() {
    autoClickMoreInfoButton();
};


// Function to raise the water level
function raiseWaterLevel() {
    const waterLayers = document.querySelectorAll('.waterLayer');

    // Loop through each water layer and raise the level by 10 pixels
    waterLayers.forEach(layer => {
        const currentHeight = parseFloat(layer.style.height) || 0; // Get current height of water layer
        const newHeight = currentHeight + 5; // Increase height by 10 pixels
        layer.style.height = `${newHeight}px`; // Set new height
    });
}
