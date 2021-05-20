var openedClass = "is-opened";

var openButton = document.querySelector("[data-open-modal-dialog]");
var closeButton = document.querySelectorAll("[data-close-modal-dialog]");
var dialog = document.querySelector("[data-dialog]");

// Listen for clicks on the open button
openButton.addEventListener("click", function (evnt) {
	// How you open the dialog is
	// your own concern
	// for simplicity's sake a class is
	// added in this example
	dialog.classList.add(openedClass);

	// After the dialog gets shown
	// make sure only elements inside
	// the dialog can be focused
	focusManager.capture(dialog);
});

// Listen for clicks on the close button
closeButton.addEventListener("click", function (evnt) {
	// How you close the dialog is
	// your own concern
	// for simplicity's sake a class is
	// removed in this example
	dialog.classList.remove(openedClass);

	// After the dialog gets closed
	// focus should resume to work as
	// normal so the focus capture is released
	// openButton is supplied as an argument
	// so that it will receive focus after
	// the dialog has been closed
	focusManager.release(openButton);
});