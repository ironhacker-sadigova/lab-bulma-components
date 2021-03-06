import React, { Component } from "react";
import Navbar from "./Navbar.js";
import FormField from "./FormField.js";
import CoolButton from "./CoolButton.js";

class App extends Component {

    render() {
        return (
            <div>
            

            <div className="App">
                <Navbar />

                    <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
                    <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />

                    <CoolButton isSmall isSuccess>Button 2</CoolButton>
            </div>




            </div>
        )
    }
}

export default App