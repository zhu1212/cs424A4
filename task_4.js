
// // Initial call to display the visualization
// updateVisualization();
// Simulated data
const data = Array.from({ length: 100 }, () => ({
    AGE: Math.floor(Math.random() * (80 - 18 + 1) + 18),
    Crashes: Math.floor(Math.random() * 100) + 1
}));

// Function to update the visualization based on the selected age range
function updateVisualization(selectedAge) {
    // Filter the data based on the selected age
    const filteredData = data.filter(d => d.AGE == selectedAge);

    const spec = {
        $schema: 'https://vega.github.io/schema/vega-lite/v5.json',
        data: {
            values: filteredData
        },
        mark: 'bar',
        encoding: {
            x: { field: 'AGE', type: 'ordinal', axis: { title: 'Age' } },
            y: { field: 'Crashes', type: 'quantitative', axis: { title: 'Number of Crashes' } }
        }
    };

    // Embed the visualization in the container with id 'vis'
    vegaEmbed('#visTask4', spec).catch(console.error);
}

// Function to populate the dropdown with age ranges and add event listener
function populateDropdownAndAddListener() {
    const ageRangeSelect = document.getElementById('ageRangeSelect');
    const ages = new Set(data.map(d => d.AGE));
    ages.forEach(age => {
        const option = document.createElement('option');
        option.value = age;
        option.text = `Age ${age}`;
        ageRangeSelect.appendChild(option);
    });

    // Event listener for dropdown changes
    ageRangeSelect.addEventListener('change', () => {
        updateVisualization(ageRangeSelect.value);
    });

    // Initial visualization
    updateVisualization(ageRangeSelect.value);
}

populateDropdownAndAddListener();

// Example of how to load and link spatial data with other views
document.addEventListener('DOMContentLoaded', function() {
    // Load your spatial data
    const spatialData = []; // Load your data here

    // Populate the filter dropdown
    const filterSelect = document.getElementById('filterSelect');
    // Populate with options based on your data

    // A function to update the map visualization
    function updateMap(filterValue) {
        // Use filterValue to filter your spatialData if needed

        const mapSpec = {
            $schema: 'https://vega.github.io/schema/vega-lite/v5.json',
            // Vega-Lite spec for the map visualization
        };

        // Embed the map visualization in the container with id 'visMap'
        vegaEmbed('#visMap', mapSpec).catch(console.error);
    }

    // A function to update the other linked visualization
    function updateOtherView(filterValue) {
        // Use filterValue to filter your data if needed

        const otherSpec = {
            $schema: 'https://vega.github.io/schema/vega-lite/v5.json',
            // Vega-Lite spec for the other visualization
        };

        // Embed the other visualization in the container with id 'visOther'
        vegaEmbed('#visOther', otherSpec).catch(console.error);
    }

    // Event listener for the filter dropdown
    filterSelect.addEventListener('change', () => {
        const filterValue = filterSelect.value;
        updateMap(filterValue);
        updateOtherView(filterValue);
    });

    // Initial update
    updateMap(filterSelect.value);
    updateOtherView(filterSelect.value);
});





