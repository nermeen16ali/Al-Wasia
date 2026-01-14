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
});
