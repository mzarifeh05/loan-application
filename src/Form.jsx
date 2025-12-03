import "./App.css"
import Popup from "./Popup";
import { useState } from "react";
import InputComp from "./InputComp";

export default function Form() {
    const [request, setRequest] = useState({
        name: "",
        phone: "",
        age: "",
        employee: false,
        salary: "opt1",
    });
    const [status, setStatus] = useState(null); 

    function handleSubmit() {
        if (request.name 
            && request.age > 22 && request.age < 100 
            && request.phone.length >= 9 && request.phone.length <=13
            && request.employee
            && request.salary !== "opt1") {
                setStatus(true);
                setRequest({name: "", phone: "", age: "", employee: false, salary: "opt1"});
            }
        else {
            setStatus(false);
        }
    }

    function isValid() {
        return (
            request.name.trim() !== "" &&
            request.phone.trim() !== "" &&
            request.age !== null && request.age !== ""
        );
    }

    function hanldeNameChange(value) {
        setRequest(prev => ({...prev, name: value}))
    }

    function hanldePhoneChange(value) {
        setRequest(prev => ({...prev, phone: value}))
    }

    function hanldeAgeChange(value) {
        setRequest(prev => ({...prev, age: value}))
    }

    return (
        <>
            <div className="form">
                <h1>Requesting a Loan</h1>
                <hr /><br />

                <InputComp title="Name: " value={request.name} handleChange={hanldeNameChange} />
                <br />

                <InputComp title="Phone: " value={request.phone} handleChange={hanldePhoneChange} />
                <br />

                <InputComp title="Age: " value={request.age} handleChange={hanldeAgeChange} />
                <br />

                <input
                checked={request.employee}
                type="checkbox"
                id="employee"
                onChange={(e) =>
                    setRequest((prev) => ({ ...prev, employee: e.target.checked }))
                }
                />&nbsp;
                <label htmlFor="employee">Are you an employee?</label>
                <br />

                <label htmlFor="salary">Salary: </label>
                <select
                id="salary"
                value={request.salary}
                onChange={(e) =>
                    setRequest((prev) => ({ ...prev, salary: e.target.value }))
                }
                >
                <option value="opt1">less than 500$</option>
                <option value="opt2">between 500$ and 2000$</option>
                <option value="opt3">more than 2000$</option>
                </select>

                <br />
                <br />

                <button
                    disabled={!isValid()}
                    className={isValid() ? "submit-button" : "button"}
                    onClick={handleSubmit}
                >
                    Submit
                </button>
            </div>
            {status !== null && <Popup status={status} onClose={() => setStatus(null)} />}
        </>
    );
}
