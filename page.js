// REFRESH

// Remove the star sign icon and start again from date selection
function refresh() {

    var child = document.getElementById('changed-box');
    var box = document.getElementById('box');

    // Only do the actions if child (icon) is actually there
    // i.e. don't refresh twice
    if (child) {
        var parent = child.parentElement;
        parent.removeChild(child);

        var text = document.getElementsByClassName('astro-text')[0];
        box.removeChild(text);

        const triangle = document.createElement('div');
        triangle.classList = 'primary-shape triangle position-two background-image-one';
        triangle.setAttribute('id', 'original-triangle');
        const circle = document.createElement('div');
        circle.classList = 'primary-shape circle position-one background-image-two';
        circle.setAttribute('id', 'original-circle');

        box.appendChild(triangle);
        box.appendChild(circle);
    }

    // Remove refresh button
    var refreshButton = document.getElementById('button-refresh');
    refreshButton.style.display = 'none';

    // Add date picker back
    var datePicker = document.getElementById('date-picker');
    datePicker.classList.remove('fade-out');
    datePicker.classList.add('fade-in');
    datePicker.style.display = 'block';

    // Add star signs back
    var allSigns = document.getElementById('all-signs');
    allSigns.classList.remove('fade-out');
    allSigns.classList.add('fade-in');
    allSigns.style.display = 'grid';
}

// HELP MODAL

// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("help");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal 
btn.onclick = function () {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// DATE PICKER

// Make sure that no illegal dates can be entered (e.g. Feb 30)
addEventHandler(document, 'DOMContentLoaded', function () {
    addEventHandler(document.getElementById('select-month'), 'change', function () {

        const dayDropdown = document.getElementById("select-day");
        const day = parseInt(dayDropdown.selectedIndex) + 1;

        // February
        if (this.value == 2) {
            // Change day to 29 if month Feb is selected and day > 29
            if (day > 29) {
                dayDropdown.selectedIndex = "28";
            }
            document.getElementById('30').style.display = 'none';
            document.getElementById('31').style.display = 'none';
        } else if (this.value == 9 || this.value == 4 || this.value == 6 || this.value == 11) {
            if (day > 30) {
                dayDropdown.selectedIndex = "29";
            }
            document.getElementById('31').style.display = 'none';

            // Other months
        } else {
            document.getElementById('29').style.display = 'block';
            document.getElementById('30').style.display = 'block';
            document.getElementById('31').style.display = 'block';
        }
    });
});

//https://stackoverflow.com/questions/24172963/jquery-change-method-in-vanilla-javascript
function addEventHandler(elem, eventType, handler) {
    if (elem.addEventListener)
        elem.addEventListener(eventType, handler, false);
    else if (elem.attachEvent)
        elem.attachEvent('on' + eventType, handler);
}
