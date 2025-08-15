

// --- Protect Images --- //

// Create a <style> element to add CSS rules dynamically
const style = document.createElement("style");

// Add CSS rules to prevent user interactions on all images:
// pointer-events: none disables mouse events on images (e.g., right-click, drag)
// user-select: none prevents selecting the image content (no text/image selection)
style.textContent = `
    img {
        pointer-events: none; /* No right-click, no drag */
        user-select: none;    /* Can't select */
    }
`;

// Append the style element into <head> so CSS applies to the page
document.head.appendChild(style);

// Listen for right-click (contextmenu) events on the entire document
document.addEventListener('contextmenu', function(e) {
    // If the right-click target is an image (<img> element)
    if (e.target.tagName === 'IMG') {
        e.preventDefault();  // Prevent the default context menu from appearing
        alert("Image protection: Right-click disabled."); // Show alert warning
    }
});

// Listen for drag start events (when user tries to drag something)
document.addEventListener('dragstart', function(e) {
    // Prevent dragging images to block saving or dragging them out
    if (e.target.tagName === 'IMG') {
        e.preventDefault();
    }
});

// Listen for copy events (when user tries to copy content)
document.addEventListener('copy', function(e) {
    // Prevent copying images from the page
    if (e.target.tagName === 'IMG') {
        e.preventDefault(); // Block the copy action
        alert("Copying images is disabled."); // Alert user that copying is disabled
    }
});


// --- Disable Right-click globally on page --- //

// Not needed :[