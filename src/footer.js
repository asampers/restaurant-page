const footer = () => {
  const footer = document.createElement('footer');
  const footerText = document.createElement('p');
  footerText.innerText = 'Created by Anna Sampers';
  footer.appendChild(footerText);
  const body = document.querySelector('body');
  body.appendChild(footer);
}

export default footer