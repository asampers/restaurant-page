import './style.css';

 function component() {
   const element = document.querySelector('#content');

  element.innerHTML = "This is a restaurant page!";
  element.classList.add('hello');

   return element;
 }

 component();