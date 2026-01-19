document.addEventListener('DOMContentLoaded', function () {
    console.log('Alwasia Mobile App Initialized');

    // Notification Modal Logic
    const notificationModal = document.getElementById('notificationModal');
    if (notificationModal) {
        // Example: Toggle between list and empty state
        // In a real app, this would depend on actual data
        const showEmptyState = false; // Set to true to see empty state

        const listState = document.getElementById('notificationList');
        const emptyState = document.getElementById('notificationEmpty');

        if (showEmptyState) {
            listState.classList.add('d-none');
            emptyState.classList.remove('d-none');
        } else {
            listState.classList.remove('d-none');
            emptyState.classList.add('d-none');
        }
    }

    // Log Button Toggle
    const logBtn = document.querySelector('.log-btn');
    if (logBtn) {
        logBtn.addEventListener('click', function() {
            const images = this.querySelectorAll('img');
            images.forEach(img => {
                img.classList.toggle('d-none');
            });
            
            // Toggle the 'open' class on the button
            this.classList.toggle('open');
        });
    }

    // Initialize Flatpickr
    flatpickr(".flatpickr-input", {
        locale: "ar",
        dateFormat: "Y-m-d",
        allowInput: true,
        disableMobile: "true"
    });
});
