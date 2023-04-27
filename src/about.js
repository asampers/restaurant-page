const about = () => {
  

  const about = document.getElementById('about');
  about.classList.add('active');

  let container = document.createElement('div');
  container.classList.add('container', 'about');
  let headline = document.createElement('h1');
  let tagline = document.createElement('p');
  tagline.classList.add('text');

  headline.innerHTML = 'The Story of Tobago & Tripoli in San Diego';
  tagline.innerHTML = 'Since 2020, Tobago & Tripoli has been nowhere near the forefront of San Diego\' culinary scene. We invite you to experience our one-of-a-kind \'deficient delights\' which bridge the gap between the epicurean and the impecunius.';

  container.appendChild(headline);
  container.appendChild(tagline);

  const content = document.querySelector('#content');
  let footer = document.querySelector('footer');
  content.appendChild(container, footer);
}

export default about;
