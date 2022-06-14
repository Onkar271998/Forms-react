import React, { useState } from 'react'
import Table from './table';


const Form = () => {
    const [form, setForm] = useState({});
    
    const [details, setDetails] = useState([])
    console.log('details:', details)
   
    const handleChange = (e) => {
        let { checked, type, name, value, files } = e.target;

        if (type === "checkbox") {
            setForm({
                ...form,
                [name]: checked,
            });
        }
        else if (type === "file") {
            setForm({
                ...form,
                [name]: files,
            });
        }
        else {
            setForm({
                ...form,
                [name]: value,
            });
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setDetails([...details,form ]);
    }
    return (
        <div>
            Form
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name :</label>
                    <input type="text" name="username" placeholder="Enter Name..." onChange={handleChange} />
                </div>
                <div>
                    <label>Age :</label>
                    <input type="number" name="age"
                        placeholder="Enter Age..." onChange={handleChange} />
                </div>
                <div>
                    <label>Address :</label>
                    <input type="text" name="address"
                        placeholder="Enter Address..." onChange={handleChange} />
                </div>
                <div>
                    <label>Department : </label>
                    <select
                        name="selectdept"
                        onChange={handleChange} >
                        <option value=""></option>
                        <option value="marketing">Marketing Department</option>
                        <option value="operations">Operations Department</option>
                        <option value="finance">Finance Department</option>
                        <option value="sales">Sales Department</option>
                    </select>
                </div>
                <div>
                    <label>Salary :</label>
                    <input type="number" name="salary"
                        placeholder="Enter Salary..." onChange={handleChange} />
                </div>
                <div>
                    <label>Marital Status : </label>
                    <input type="checkbox" name="isMarried"
                        onChange={handleChange} />
                    <label>Married</label>
                </div>

                {/* <div>
                    <label>Profile Photo : </label>
                    <input type="file"
                        name="photo"
                        onChange={handleChange} />
                </div> */}
                <br />
                <button type="submit">Submit</button>
            </form>
            <Table form={details}/>
        </div>
    )
}

export default Form