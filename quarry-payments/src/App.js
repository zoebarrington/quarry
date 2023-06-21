import './App.css';
import './InputBox.js';
import InputBox from './InputBox.js';
import Names from './Names.js';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

function App() {
  return (
    <div className="App">
               <InputBox></InputBox>
      <div className="payPalInnerContainer">
       <PayPalScriptProvider options={{ clientId: "test" }}>
            <PayPalButtons style={{ layout: "horizontal" }} />
        </PayPalScriptProvider>
        </div>
        <Names></Names>
    </div>
  );
}

export default App;
