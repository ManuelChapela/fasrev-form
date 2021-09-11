import './App.css';
import {useState} from 'react'
import {Client} from './pages/Client'
import {Admin} from './pages/Admin'

export const App = () => {


  const [data, setData] = useState([])

  const dataFn = (name, mail, phone, question) => {
     setData( [...data, {name: name, mail: mail, phone: phone, question: question}])
  }

  console.log('APP DATA', data);


  return (
    <div className="App">
     <Client dataFn={dataFn}/>
     <Admin data={data}/>
    </div>
  );
}

export default App;
