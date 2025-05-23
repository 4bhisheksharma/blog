document.addEventListener('DOMContentLoaded', function() {
    // Set the launch date (3 months from now)
    const launchDate = new Date();
    launchDate.setMonth(launchDate.getMonth() + 3);
    
    // Update countdown
    function updateCountdown() {
        const currentDate = new Date();
        const difference = launchDate - currentDate;
        
        // Calculate time units
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        
        // Update DOM
        document.getElementById('days').textContent = days.toString().padStart(2, '0');
        document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
        document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
        document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
    }
    
    // Initial call and set interval
    updateCountdown();
    setInterval(updateCountdown, 1000);
    
    // Animate progress bar on load
    const progressBar = document.getElementById('progress-bar');
    const progressPercentage = document.getElementById('progress-percentage');
    const targetProgress = 5; // Current progress percentage
    
    let currentProgress = 0;
    const progressInterval = setInterval(() => {
        if (currentProgress >= targetProgress) {
            clearInterval(progressInterval);
        } else {
            currentProgress++;
            progressBar.style.width = `${currentProgress}%`;
            progressPercentage.textContent = currentProgress;
        }
    }, 20);
    
    
    
    // Add hover animations to features
    const features = document.querySelectorAll('.feature');
    features.forEach(feature => {
        feature.addEventListener('mouseenter', () => {
            feature.style.transform = 'translateY(-5px)';
            feature.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)';
        });
        
        feature.addEventListener('mouseleave', () => {
            feature.style.transform = 'translateY(0)';
            feature.style.boxShadow = 'none';
        });
    });
});