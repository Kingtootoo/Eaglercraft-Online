// Initialize the canvas using fabric.js
const canvas = new fabric.Canvas('myCanvas');
let shieldEquipped = false;  // Flag to track shield status
let shield = null;  // Store the shield object
let village = [];

// Create a simple shield as a rectangle
shield = new fabric.Rect({
    width: 100,
    height: 100,
    fill: 'blue',
    left: 450,
    top: 250,
    visible: false // Initially hidden
});

// Add the shield to the canvas
canvas.add(shield);

// Create a simple village with buildings
function createVillage() {
    // Example: 3 buildings in the village
    const building1 = new fabric.Rect({
        width: 150,
        height: 100,
        fill: 'brown',
        left: 100,
        top: 400
    });

    const building2 = new fabric.Rect({
        width: 120,
        height: 80,
        fill: 'darkgray',
        left: 300,
        top: 400
    });

    const building3 = new fabric.Rect({
        width: 140,
        height: 90,
        fill: 'saddlebrown',
        left: 500,
        top: 400
    });

    // Add buildings to the village
    village = [building1, building2, building3];
    
    // Add buildings to the canvas
    village.forEach(building => canvas.add(building));

    // Update village status
    document.getElementById('village_found').innerText = 'Yes';
}

// Locate a village and display it
function locateVillage() {
    createVillage(); // Generates the village when the button is clicked
}

// Toggle shield visibility when the button is clicked
function toggleShield() {
    shieldEquipped = !shieldEquipped;  // Toggle shield status
    shield.set('visible', shieldEquipped); // Show or hide the shield
    canvas.renderAll(); // Re-render the canvas to apply changes

    // Update shield count on the page
    const shieldCount = document.getElementById('shield_count');
    shieldCount.innerText = shieldEquipped ? '1' : '0';
    
    // Update the button text
    document.getElementById('shield').innerText = shieldEquipped ? 'Unequip Shield' : 'Equip Shield';
}
