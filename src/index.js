import './style.css';

 function component() {
   const element = document.createElement('div');

  element.innerHTML = "This is a restaurant page!";
  element.classList.add('hello');

   return element;
 }

 document.body.appendChild(component());