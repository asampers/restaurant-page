const menu = () => {
  const menuBtn = document.getElementById('menu');
  menuBtn.classList.add('active');

  const container = document.createElement('div');
  container.classList.add('container', 'menu');
  const headline = document.createElement('h1');
  headline.innerHTML = 'Lots of good things to eat';


  const menu = document.createElement('div');
  menu.classList.add('menu-group');
  const items = [['Pasta', '€25', 'noodles, red sauce, garlic, basil'], 
                 ['Pizza', '€30', 'dough, red sauce, pepperoni, mozzarella'],
                 ['Charcuterie Place', '€15', 'daily selection with grain mustard, cornichons and crackers'],
                 ['Fresh Oysters', '€3 each', 'shucked to order'],
                 ['Chocolate Ganache Cake', '€6', 'served with raspberry sauce and crème anglaise'],
                 ['Pot De Creme', '€5', 'changes daily, served with a madeliene cake and fresh berries']
                ];

  for (let i=0; i < items.length; i++) {
    let item = document.createElement('div');
    item.classList.add('menu-item');
    let title = document.createElement('h3');
    title.classList.add('menu-item-heading');
    let name = document.createElement('span');
    name.classList.add('menu-item-name');
    let price = document.createElement('span');
    let desc = document.createElement('p');
    desc.classList.add('menu-item-desc');
    name.innerHTML = items[i][0];
    price.innerHTML = items[i][1];
    desc.innerHTML = items[i][2];
    title.appendChild(name);
    title.appendChild(price);
    item.appendChild(title);
    item.appendChild(desc);
    menu.appendChild(item);
  }

  container.appendChild(headline);
  container.appendChild(menu);

  const content = document.querySelector('#content');
  let footer = document.querySelector('footer');
  let nav = document.querySelector('nav');
  content.appendChild(container, footer);
}

export default menu;