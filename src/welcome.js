import nav from './nav';
import footer from './footer';

const welcome = () => {
  const content = document.querySelector('#content');
  //content.classList.add('welcome');

  if (!document.querySelector('nav')) {
    content.appendChild(nav());
  }

  const welcome = document.getElementById('welcome');
  welcome.classList.add('active');
  
  const container = document.createElement('div');
  container.classList.add('container', 'welcome');
  const header = document.createElement('header');
  const headline = document.createElement('h1');
  headline.innerHTML = 'Français et Français';
  header.appendChild(headline);
  container.appendChild(header);

  const tagline = document.createElement('p');
  tagline.innerHTML = '~ A very French restaurant for the very French ~';
  header.appendChild(tagline);

  content.appendChild(container);

  if (!document.querySelector('footer')) {
    footer();
  }
}

export default welcome