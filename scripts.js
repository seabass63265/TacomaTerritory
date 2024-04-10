function activate() {
    // Hide the button
    document.getElementById('activateButton').style.display = 'none';

    // Show the center-and-fade div with "Tacoma Territory"
    document.getElementById('centerAndFade').style.display = 'block';

    // After a delay, change the text to the longer welcome message and then fade to the main content
    setTimeout(() => {
        const textElement = document.getElementById('textChange');
        textElement.textContent = 'From City Streets to Mountain Peaks to Every West Coast Beach';
        textElement.classList.add('fade-in'); // Ensure this class triggers the fade-in animation

        // After displaying the welcome message, start fading it out and show the main content
        setTimeout(() => {
            textElement.classList.remove('fade-in');
            textElement.classList.add('fade-out');

            // After the fade-out completes, hide the text and show the main content
            setTimeout(() => {
                document.getElementById('centerAndFade').style.display = 'none'; // Hide the text message

                // Show the "About Me" section and ensure it's ready to be seen
                const aboutMeSection = document.getElementById('aboutMe');
                aboutMeSection.style.display = 'block';
                aboutMeSection.classList.add('fade-in'); // Apply fade-in to make it smooth

            }, 1000); // Matches the fade-out duration

        }, 4000); // Time you want the welcome message to remain visible before fading out

    }, 4000); // Initial delay before changing text to the welcome message
}






let vehicleCatalog = [
    { id: 1, make: 'Tacoma', model: 'Off-Road', year: 2020, color: 'red' },
    { id: 2, make: 'Tacoma', model: 'Sport', year: 2021, color: 'blue' }
];

function displayCatalog(catalog) {
    const catalogElement = document.getElementById('catalog');
    catalogElement.innerHTML = ''; // Clear existing catalog display
    catalog.forEach(vehicle => {
        const vehicleElement = document.createElement('div');
        vehicleElement.textContent = `${vehicle.make} ${vehicle.model} - ${vehicle.year} (${vehicle.color})`;
        catalogElement.appendChild(vehicleElement);
    });
}
document.getElementById('addVehicleForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form from submitting traditionally
    const newVehicle = {
        id: vehicleCatalog.length + 1,
        make: document.getElementById('make').value,
        model: document.getElementById('model').value,
        year: parseInt(document.getElementById('year').value, 10),
        color: document.getElementById('color').value
    };
    vehicleCatalog.push(newVehicle);
    displayCatalog(vehicleCatalog); // Refresh the catalog display
});

// Initial display of the catalog
displayCatalog(vehicleCatalog);








const votes = {
    "Tacoma1": 0,
    "Tacoma2": 0,
    "Tacoma3": 0
};

function vote(option) {
    votes[option]++; // Increment the vote count for the selected option
    document.getElementById(option).textContent = votes[option]; // Update the displayed count
}










function addItem() {
    const itemValue = document.getElementById('itemInput').value.trim();
    if (!itemValue) {
        alert("Please enter an item.");
        return;
    }

    const itemDiv = document.createElement('div');
    const newItem = document.createTextNode(itemValue);
    const removeBtn = document.createElement('button');

    removeBtn.textContent = "Remove";
    removeBtn.onclick = function() {
        itemDiv.remove();
    };

    itemDiv.appendChild(newItem);
    itemDiv.appendChild(removeBtn);
    document.getElementById('items').appendChild(itemDiv);

    // Clear the input after adding
    document.getElementById('itemInput').value = '';
}










