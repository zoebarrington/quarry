import './App.css';
import './InputBox.js';
import InputBox from './InputBox.js';
import Names from './Names.js';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

function App() {
  return (
    <div className="App">
       <PayPalScriptProvider options={{ clientId: "test" }}>
            <PayPalButtons style={{ layout: "horizontal" }} />
        </PayPalScriptProvider>
         <InputBox></InputBox>
<Names></Names>
    </div>
  );
}

export default App;
