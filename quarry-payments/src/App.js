import './App.css';
import './InputBox.js';
import InputBox from './InputBox.js';
import Names from './Names.js';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const initialOptions = {
  clientId: "ATWVrlZkEf_wQpVXgvu3fvGLq6fe2tyiFU_GIBkjk0X2AK745Wth6swp5x7y6ANi3Og3d836BZjaEatz",
  currency: "GBP",
  intent: "capture",
  vault: "true"
};

const onApprove = (data, actions) => {
  console.log("approved!");
  // return 1;
  // return actions.order.capture().then(function (details) {
  //   const {payer} = details;
  //   setBillingDetails(payer);
  //   setSucceeded(true);
  // })
};
// handles payment errors
// const onError = (data,actions)=>{
//  setPaypalErrorMessage("Something went wrong with your payment");
// }

function App() {
  return (
    <div className="App">
               <InputBox></InputBox>
      <div className="payPalInnerContainer">
       <PayPalScriptProvider options={initialOptions}>
            <PayPalButtons onApprove={onApprove} style={{ layout: "horizontal" }} />
        </PayPalScriptProvider>
        </div>
        <Names></Names>
    </div>
  );
}

export default App;
