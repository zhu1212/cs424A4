function loadDataset(url, callback) {
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(csvText => {
            callback(csvText); // Correctly pass the fetched CSV text to the callback
        })
        .catch(error => console.error('Error loading data:', error));
}