import logo from './logo.svg';
import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
      <PersonCard lastName={"Doe"} firstName={"Jane"} age={45} hairColor={"Black"}></PersonCard>
      <PersonCard lastName={"Suyat"} firstName={"Patrick"} age={22} hairColor={"Black"}></PersonCard>
      <PersonCard lastName={"Kempf"} firstName={"Kimi"} age={23} hairColor={"Blonde"}></PersonCard>
      <PersonCard lastName={"Ford-Roshon"} firstName={"Chagall"} age={23} hairColor={"Brown"}></PersonCard>
      <PersonCard lastName={"Dimawea"} firstName={"Jonathan"} age={21} hairColor={"Black"}></PersonCard>
    </div>
  );
}

export default App;
