// Register the service worker for offline support.
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('./sw.js')
        .then(registration => {
          console.log('Service Worker registered with scope:', registration.scope);
        })
        .catch(error => {
          console.error('Service Worker registration failed:', error);
        });
    });
  }
  
  // Add click listener to the button.
  document.getElementById('rollButton').addEventListener('click', function() {
    const speedInput = document.getElementById('speedInput').value;
    const speed = parseInt(speedInput, 10);
  
    if (isNaN(speed)) {
      document.getElementById('result').textContent = 'Please enter a valid speed value.';
      return;
    }
    
    // Roll a single d6.
    const roll = Math.floor(Math.random() * 6) + 1;
    
    // Calculate initiative (speed + roll).
    const initiative = speed + roll;
    
    // Display the result.
    document.getElementById('result').textContent = `Initiative: ${initiative} (Roll: ${roll})`;
  });