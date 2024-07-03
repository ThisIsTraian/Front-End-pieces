var centerX = window.innerWidth / 2;
var centerY = window.innerHeight / 2;




// Function to generate a random color from a spectrum of rainbow colors
function getRandomColor() {
    var hue = Math.random() * 360; // random hue
    var saturation = 10 + Math.random() * 87; // random saturation between 70-80%
    var lightness = (100 - saturation )* 0.80; // random lightness between 50-60%
    var transparency = (Math.random()/10 + 0.90)-(lightness/100*0.1);
    return `hsl(${hue}, ${saturation}%, ${lightness}%, ${transparency})`;
}

// Function to generate a random size between 2em and 6em
function getRandomSize() {
    return Math.random() * 2 + 1; // range from 1 to 3 (adjusted to fit Mercury as smallest)
}

// Function to create a sphere element
function createSphere(speed, size) {
    var sphere = document.createElement('div');
    sphere.classList.add('sphere');
    sphere.style.background = getRandomColor();
    sphere.style.width = size + 'em';
    sphere.style.height = size + 'em';
    sphere.speed = Math.min(speed, 5); // limit speed to maximum of 5 pixels per second
    
    return sphere;
}

// Constants for sizes and speeds relative to a base size and speed (adjusted for 60 frames per second)
const BASE_SPEED = 5000 / 60; // base speed in pixels per frame
const MERCURY_SPEED = 47.87 / BASE_SPEED;
const VENUS_SPEED = 35.02 / BASE_SPEED;
const EARTH_SPEED = 29.78 / BASE_SPEED;

const MERCURY_SIZE = 1;  // Smallest size for Mercury
const VENUS_SIZE = 2;    // Larger size for Venus
const EARTH_SIZE = 3;    // Largest size for Earth

// Function to create a circular trajectory
function createTrajectory(speed, distance) {
    return {
        speed: speed,
        distance: distance,
        angle: 0
    };
}

// Number of spheres to create
var numSpheres = 3;

// Container for spheres
var orbitContainer = document.getElementById('orbit-container');

// Calculate distances from center of the page
var maxDistance = 0.7 * (Math.min(window.innerWidth, window.innerHeight) / 2 - 0.5 * getRandomSize()); // adjust as needed
var minDistance = maxDistance - getRandomSize();

// Create trajectories for each sphere
var trajectories = [
    createTrajectory(MERCURY_SPEED, minDistance*    0.3),
    createTrajectory(VENUS_SPEED, maxDistance *     0.6),
    createTrajectory(EARTH_SPEED, maxDistance *1)
];

// Function to position spheres and animate
function positionAndAnimateSpheres() {
    for (var i = 0; i < numSpheres; i++) {
        var size;
        switch (i) {
            case 0:
                size = MERCURY_SIZE;
                break;
            case 1:
                size = VENUS_SIZE;
                break;
            case 2:
                size = EARTH_SIZE;
                break;
            default:
                size = getRandomSize(); // fallback to random size
                break;
        }
        var sphere = createSphere(trajectories[i].speed, size);
        orbitContainer.appendChild(sphere);

        // Position spheres along their circular trajectory
        var angle = (i / numSpheres) * 2 * Math.PI; // evenly distribute spheres
        var x = Math.cos(angle) * trajectories[i].distance;
        var y = Math.sin(angle) * trajectories[i].distance;
        sphere.style.transform = `translate(${x}px, ${y}px)`;

        // Store the initial angle for animation purposes
        sphere.initialAngle = angle;
    }

    // Animation loop limited to 60 frames per second
    var lastFrameTime = 0;
    function animate(currentTime) {
        var deltaTime = currentTime - lastFrameTime;
        requestAnimationFrame(animate);

        if (deltaTime > 1000 / 60) {
            for (var i = 0; i < numSpheres; i++) {
                var sphere = orbitContainer.children[i];
                sphere.initialAngle += sphere.speed * deltaTime / 1000; // update angle based on speed and deltaTime
                var angle = sphere.initialAngle;

                var x = Math.cos(angle) * trajectories[i].distance;
                var y = Math.sin(angle) * trajectories[i].distance;
                sphere.style.transform = `translate(${x}px, ${y}px)`;
            }
            lastFrameTime = currentTime;
        }
    }

    animate(0); // start the animation loop
}

// Call the function to position and animate spheres
positionAndAnimateSpheres();
