import Form1 from './formcomponent/Form1';
import Form2 from './formcomponent/Form2';
import Form3 from './formcomponent/Form3';
import Form4 from './formcomponent/Form4';
import Form5 from './formcomponent/Form5';
import './App.css';

function App() {
  return (
    <div className="flex justify-center flex-wrap bg-gradient-to-t from-slate-400 w-full h-full">
      <Form1/>
      <Form2/>
      <Form3/>
      <Form4/>
      <Form5/>
    </div>
  );
}

export default App;
