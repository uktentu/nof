document.addEventListener('DOMContentLoaded', function() {
    const yesButton = document.getElementById('yesButton');
    const noButton = document.getElementById('noButton');
    const dateSelector = document.getElementById('dateSelector');

    // Set the placeholder of the date input to today's date
    const today = new Date();
    const todayString = today.toISOString().split('T')[0];
    dateSelector.value = todayString;

    yesButton.addEventListener('click', function() {
        const selectedDate = dateSelector.value;
        const url = `https://script.google.com/macros/s/AKfycbwbiYmAIyJr2fVx-hN_jKNpfAv6LP7UwtXtApDhzsHDIcPZxyRdgHuPG82GcIaiZE4K/exec?stat=1&dat=${selectedDate}`;
        
        // Send a GET request to the URL in the background
        fetch(url)
            .then(response => {
                // Handle the response as needed (optional)
                console.log('GET request sent successfully:', response);
            })
            .catch(error => {
                console.error('Error sending GET request:', error);
            });

        // Display an alert to notify the user
        alert(`You selected the date: ${selectedDate}. The URL was opened in the background.`);
    });

    noButton.addEventListener('click', function() {
        const selectedDate = dateSelector.value;
        const url = `https://script.google.com/macros/s/AKfycbwbiYmAIyJr2fVx-hN_jKNpfAv6LP7UwtXtApDhzsHDIcPZxyRdgHuPG82GcIaiZE4K/exec?stat=0&dat=${selectedDate}`;
        
        // Send a GET request to the URL in the background
        fetch(url)
            .then(response => {
                // Handle the response as needed (optional)
                console.log('GET request sent successfully:', response);
            })
            .catch(error => {
                console.error('Error sending GET request:', error);
            });

        // Display an alert to notify the user
        alert(`You selected the date: ${selectedDate}. The URL was opened in the background.`);
    });
});
