import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css'


function App() {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const notifySuccess = () => toast("You have successfully registered");
  const notifyFailure = () => toast("Kindly fill the form completely")

  const registerUser = (e) => {
    e.preventDefault();
    if (userName === '' || email === '' || password === '') {
      notifyFailure();
    } else {
      notifySuccess();
      setUserName('');
      setEmail('');
      setPassword('');
    }
  };

  return (
    <div>
      <form onSubmit={registerUser}>
        <ToastContainer/>
        <h1>Registration Form</h1>
        <input value={userName} onChange={(e) => setUserName(e.target.value)} type="text" placeholder="Name" /><br/>
        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email" /><br/>
        <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" /><br/>
        <button type="submit"><p>Submit</p></button>
      </form>
    </div>
  );
}

export default App;
