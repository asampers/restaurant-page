import './style.css';
import welcome from './welcome';
import about from './about';
import menu from './menu';
import contact from './contact';
import clear from './clear';

welcome();

// welcome tab
const welcomeBtn = document.getElementById('welcome');
welcomeBtn.onclick = () => {
  clear();
  welcome();
}

// about tab
const aboutBtn = document.getElementById('about');
aboutBtn.onclick = () => {
  clear();
  about();
}

// menu tab
const menuBtn = document.getElementById('menu');
menuBtn.onclick = () => {
  clear();
  menu();
}
 
// contact tab
const contactBtn = document.getElementById('contact');
contactBtn.onclick = () => {
  clear();
  contact();
} 

 