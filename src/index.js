import './style.css';
import welcome from './welcome';
import about from './about';

welcome();
//about();

// welcome tab
const welcomeBtn = document.getElementById('welcome');
welcomeBtn.onclick = () => {

}

// about tab
const aboutBtn = document.getElementById('about');
aboutBtn.onclick = () => {
  about()
}
 

 