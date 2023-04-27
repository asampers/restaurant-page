import './style.css';
import welcome from './welcome';
import about from './about';
import menu from './menu';
import contact from './contact';

welcome();

// welcome tab
const welcomeBtn = document.getElementById('welcome');
welcomeBtn.onclick = () => {

}

// about tab
const aboutBtn = document.getElementById('about');
aboutBtn.onclick = () => {
  about()
}

// menu tab
const menuBtn = document.getElementById('menu');
menuBtn.onclick = () => {
  menu()
}
 
// contact tab
const contactBtn = document.getElementById('contact');
contactBtn.onclick = () => {
  contact()
} 

 