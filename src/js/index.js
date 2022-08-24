/* Feel free to delete the below and add
 * your own code.
 * A functional and classical module import
 * example are provided.
 * */
// import { functionExample } from "./modules/function-example.js";
// import { ClassExample } from "./modules/class-example.js";

// const title = document.querySelector("h1");

// if (title) {
//   functionExample(title);
//   new ClassExample(title);
// }

const tShirtForm = document.querySelector('.t-shirt-form');

if (tShirtForm) {
  tShirtForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const nameEl = document.querySelector('#name').value;
    const numberEl = document.querySelector('#count').value;
    const sizesEl = document.querySelector('input[name="shirt-size"]:checked').value;
    const shirtType = document.querySelector('#shirt-types');
    const shirtTypeValue = shirtType.options[shirtType.selectedIndex].text;

    // Set form values into message.
    document.querySelector('.message').innerHTML = `<strong>Hello ${nameEl}!</strong> You want ${numberEl} ${sizesEl} ${shirtTypeValue}`;
  });
}


// How I would handle the clear functionality.

// Add listener for clear

// Get elements to clear.

// Do element.value = '' or similar;