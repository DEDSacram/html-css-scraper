// Select all elements in the body
var elements = document.querySelectorAll('*');

// Create an empty Set to store unique class names, ids, and tag names
var identifiers = new Set();

// Loop through each element
elements.forEach(function(element) {
    // If the element has a class
    if (element.classList.length > 0) {
        // Convert the DOMTokenList to an array
        var classes = Array.from(element.classList);
        
        // Add each class to the Set with a '.' in front
        classes.forEach(function(className) {
            identifiers.add('.' + className);
        });
    }

    // If the element has an id
    if (element.id) {
        // Add the id to the Set with a '#' in front
        identifiers.add('#' + element.id);
    }

    // Add the tag name to the Set
    identifiers.add(element.tagName.toLowerCase());
});

// Convert the Set to an Array
var uniqueIdentifiers = Array.from(identifiers);

console.log(uniqueIdentifiers);
