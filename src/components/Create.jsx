import { useParams } from "react-router-dom"
import { supabase } from '../client'
import { useState } from 'react'
import './Create.css'

function Create() {
    const createCrewmate = async (event) => {
        event.preventDefault();
        
        // Debug: Check what data we're trying to send
        console.log('Form data:', form);

        try {
        const { data, error } = await supabase
            .from('crewmate')
            .insert({name: form.name, speed: form.speed, color: form.color})
            .select();
        
        if (error) {
            console.error('Supabase error:', error);
            alert('Error creating crewmate: ' + error.message);
            return;
        }
        
        console.log('Successfully created:', data);
        window.location = "/create"; 
        
        } catch (err) {
            console.error('Unexpected error:', err);
            alert('Unexpected error occurred');
        }
    }

    const [form, setForm] = useState({name: "", speed: 0, color: ""})

    const handleChange = (event) => {
        const {name, value} = event.target
        setForm( (prev) => {
            return {
                ...prev,
                [name]: value,
            }
        })
    }

    return (
        <div className="main-page">
            <div className="main-context">
                <h1>Create a New Crewmate</h1>
                <form onSubmit={createCrewmate}>
                    <div className="form-field">
                        <label htmlFor="name">Name:</label> <br />
                        <input type="text" id="name" name="name" value={form.name} onChange={handleChange} />
                    </div>
                    <div className="form-field">
                        <label htmlFor="speed">Speed (mph):</label> <br />
                        <input type="text" id="speed" name="speed" value={form.speed} onChange={handleChange} /> 
                    </div>
                    <label className="color-section">Color:</label> <br />
                    <div className="radio-group">
                    <div className="radio-option">
                        <input
                            type="radio"
                            id="red"
                            name="color"
                            value="red"
                            onChange={handleChange}
                            checked={form.color === "red"}
                        />
                        <label htmlFor="red">Red</label>
                    </div>
                    <div className="radio-option">
                        <input
                            type="radio"
                            id="green"
                            name="color"
                            value="green"
                            onChange={handleChange}
                            checked={form.color === "green"}
                        />
                        <label htmlFor="green">Green</label>
                    </div>
                    <div className="radio-option">
                        <input
                            type="radio"
                            id="blue"
                            name="color"
                            value="blue"
                            onChange={handleChange}
                            checked={form.color === "blue"}
                        />
                        <label htmlFor="blue">Blue</label>
                    </div>
                    <div className="radio-option">
                        <input
                            type="radio"
                            id="purple"
                            name="color"
                            value="purple"
                            onChange={handleChange}
                            checked={form.color === "purple"}
                        />
                        <label htmlFor="purple">Purple</label>
                    </div>
                    <div className="radio-option">
                        <input
                            type="radio"
                            id="yellow"
                            name="color"
                            value="yellow"
                            onChange={handleChange}
                            checked={form.color === "yellow"}
                        />
                        <label htmlFor="yellow">Yellow</label>
                    </div>
                    <div className="radio-option">
                        <input
                            type="radio"
                            id="orange"
                            name="color"
                            value="orange"
                            onChange={handleChange}
                            checked={form.color === "orange"}
                        />
                        <label htmlFor="orange">Orange</label>
                    </div>
                    <div className="radio-option">
                        <input
                            type="radio"
                            id="pink"
                            name="color"
                            value="pink"
                            onChange={handleChange}
                            checked={form.color === "pink"}
                        />
                        <label htmlFor="pink">Pink</label>
                    </div>
                    <div className="radio-option">
                        <input
                            type="radio"
                            id="rainbow"
                            name="color"
                            value="rainbow"
                            onChange={handleChange}
                            checked={form.color === "rainbow"}
                        />
                        <label htmlFor="rainbow">Rainbow</label>
                    </div>
                    <br />
                    </div>
                    <button type="submit">Create Crewmate</button>
                </form>
            </div>
        </div>

    )
}

export default Create;