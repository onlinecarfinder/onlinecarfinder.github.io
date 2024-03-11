document.addEventListener("DOMContentLoaded", function() {
    const carsData = <script src="fewdatas.js"></script>
    const carList = document.getElementById('carList');
    const sortSelect = document.getElementById('sortSelect');
    const filterSelect = document.getElementById('filterSelect');
    const searchInput = document.getElementById('searchInput');

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

    function applyFilters() {
        const filterValue = filterSelect.value;
        const filteredCars = carsData.filter(car => car[filterValue] === filterValue);
        displayCars(filteredCars);
    }

    function applySearch() {
        const searchValue = searchInput.value.toLowerCase();
        const filteredCars = carsData.filter(car => car.DisplayName.toLowerCase().includes(searchValue));
        displayCars(filteredCars);
    }

    sortSelect.addEventListener('change', function() {
        applyFilters();
        // Add sorting logic here if needed
    });

    filterSelect.addEventListener('change', function() {
        applyFilters();
        // Add sorting logic here if needed
    });

    searchInput.addEventListener('input', function() {
        applySearch();
    });

    // Initial display
    displayCars(carsData);
});
