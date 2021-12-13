
import './App.css';
import Profile from './profile/Profile';


function App() {
 const message = false
  const handlname =()=>{
   alert ("Marwa Ben Khalifa ")
  }
  return (
   <div>
<Profile fullname ={"Marwa Ben Khalifa"}  bio={"Flexibilité, motivation,gestion de projet et la capacité à travailler en équipe "} proffession ={"Project Manager"} handlname= {handlname} alert={alert} message={message}>
<img src='https://kinsta.com/wp-content/uploads/2018/09/linkedin-statistics.png' alt='#'/>
</Profile>
   </div>
  );
}

export default App;
