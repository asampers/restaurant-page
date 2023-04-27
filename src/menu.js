const menu = () => {
  

  const menu = document.getElementById('menu');
  menu.classList.add('active');

  let container = document.createElement('div');
  container.classList.add('container', 'menu');
  let headline = document.createElement('h1');
  let tagline = document.createElement('p');
  tagline.classList.add('text');

  headline.innerHTML = 'Lots of good things to eat';
  tagline.innerHTML = 'Here you will find our menu!';

  container.appendChild(headline);
  container.appendChild(tagline);

  const content = document.querySelector('#content');
  let footer = document.querySelector('footer');
  let nav = document.querySelector('nav');
  content.appendChild(container, footer);
}

export default menu;