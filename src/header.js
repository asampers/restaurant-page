const header = () => {
  const header = document.createElement('nav');
  
  const welcome = document.createElement('button');
  welcome.innerHTML = 'Welcome';
  welcome.id = 'welcome';

  const about = document.createElement('button');
  about.innerHTML = 'About';
  about.id = 'about';

  const menu = document.createElement('button');
  menu.innerHTML = 'Menu';
  menu.id = 'menu';

  const contact = document.createElement('button');
  contact.innerHTML = 'Contact';
  contact.id = 'contact';

  header.appendChild(welcome);
  header.appendChild(about);
  header.appendChild(menu);
  header.appendChild(contact);
  
  return header;
 };

 export default header;