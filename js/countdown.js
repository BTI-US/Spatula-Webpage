document.addEventListener("DOMContentLoaded", function() {
    // Replace with your API endpoint
    const apiEndpoint = "https://api.example.com/countdown";
  
    // Function to fetch data from the API
    function fetchCountdownData() {
      fetch(apiEndpoint)
        .then(response => response.json())
        .then(data => {
          // Assuming the API returns an object with days, hours, minutes, and seconds
          const { days, hours, minutes, seconds } = data;
  
          // Update the days
          document.getElementById("days-num-1").textContent = Math.floor(days / 100);
          document.getElementById("days-num-2").textContent = Math.floor((days % 100) / 10);
          document.getElementById("days-num-3").textContent = days % 10;
  
          // Update the hours
          document.getElementById("hours-num-1").textContent = Math.floor(hours / 10);
          document.getElementById("hours-num-2").textContent = hours % 10;
  
          // Update the minutes
          document.getElementById("minutes-num-1").textContent = Math.floor(minutes / 10);
          document.getElementById("minutes-num-2").textContent = minutes % 10;
  
          // Update the seconds
          document.getElementById("seconds-num-1").textContent = Math.floor(seconds / 10);
          document.getElementById("seconds-num-2").textContent = seconds % 10;
        })
        .catch(error => console.error("Error fetching countdown data:", error));
    }
  
    // Fetch the countdown data initially
    fetchCountdownData();
  
    // Optionally, set an interval to update the countdown every second
    setInterval(fetchCountdownData, 1000);
  });