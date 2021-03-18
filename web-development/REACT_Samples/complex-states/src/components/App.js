import React, {useState} from "react";

function App() {

    // Complex State
    const [ fullName, setFullName ] = useState({
        fName: "",
        lName: ""
    });

    function updateName(event) {

        const { name, value } = event.target;

        // Maintain previous state value when setting new state
        setFullName( prevValue => {

            if (name === "fName") {
                return {
                    fName: value,
                    lName: prevValue.lName
                };

            } else if (name === "lName") {
                return {
                    fName: prevValue.fName,
                    lName: value
                };
            }
        });
    }

    return (
        <div className="container">
            <h1>Hello {fullName.fName} {fullName.lName}</h1>
            <form>
                <input name="fName" onChange={updateName} placeholder="First Name" value={fullName.fName}/>
                <input name="lName" onChange={updateName} placeholder="Last Name" value={fullName.lName}/>
                <button>Submit</button>
            </form>
        </div>
    );
}

export default App;
