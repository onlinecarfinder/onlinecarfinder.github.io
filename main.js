document.addEventListener("DOMContentLoaded", function() {
    let carsData = []; // Initialize carsData as an empty array

    const carList = document.getElementById('carList');
    const sortSelect = document.getElementById('sortSelect');
    const filterSelect = document.getElementById('filterSelect');
    const searchInput = document.getElementById('searchInput');

    // Function to fetch data from the JSON file
    async function fetchData() {
        try {
            const response = await fetch('fewdatas.json'); // Fetch the JSON file
            carsData = await response.json(); // Parse the JSON response
            displayCars(carsData); // Display cars once data is fetched
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    // Function to display cars
    function displayCars(cars) {
        carList.innerHTML = ''; // Clear previous content
        cars.forEach(car => {
            const carItem = document.createElement('div');
            carItem.innerHTML = `
                <h3>${car.DisplayName}</h3>
                <p>Make: ${car.Make}</p>
                <p>Model: ${car.Model}</p>
                <p>Year: ${car.Year}</p>
                <p>Body: ${car.Body}</p>
                <p>Engine: ${car.Engine}</p>
                <!-- Add more properties as needed -->
            `;
            carList.appendChild(carItem);
        });
    }

    // Function to apply filters
    function applyFilters() {
        const filterValue = filterSelect.value;
        const filteredCars = carsData.filter(car => car[filterValue] === filterValue);
        displayCars(filteredCars);
    }

    // Function to apply search
    function applySearch() {
        const searchValue = searchInput.value.toLowerCase();
        const filteredCars = carsData.filter(car => car.DisplayName.toLowerCase().includes(searchValue));
        displayCars(filteredCars);
    }

    // Event listener for sortSelect
    sortSelect.addEventListener('change', function() {
        // Apply filters if needed
        applyFilters();
        // Add sorting logic here if needed
    });

    // Event listener for filterSelect
    filterSelect.addEventListener('change', function() {
        applyFilters(); // Apply filters on selection change
    });

    // Event listener for searchInput
    searchInput.addEventListener('input', function() {
        applySearch(); // Apply search on input change
    });

    // Fetch data when DOM content is loaded
    fetchData();
});
