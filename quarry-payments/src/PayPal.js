import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const PayPal = () => {
    return (
        <PayPalScriptProvider options={{ clientId: "ATWVrlZkEf_wQpVXgvu3fvGLq6fe2tyiFU_GIBkjk0X2AK745Wth6swp5x7y6ANi3Og3d836BZjaEatz" }}>
            <PayPalButtons style={{ layout: "horizontal" }} />
        </PayPalScriptProvider>
    );
}

export default PayPal;
