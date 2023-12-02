import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom'; 


import './Register.css'; 
import Login from './Login.js'

const Register = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        username: '',
        email: '',
        password: '',
        goal: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission (e.g., send data to server)
        console.log('Form submitted:', formData);
    };

    return (
        <div className="register-container">
            <h2 className="register-title">Register</h2>
            <form onSubmit={handleSubmit} className="register-form">
                <label className="register-label">
                    First Name:
                    <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        className="register-input"
                        required
                    />
                </label>
                <label className="register-label">
                    Last Name:
                    <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        className="register-input"
                        required
                    />
                </label>
                
                <label className="register-label">
                    Email:
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="register-input"
                        required
                    />
                </label>
                <label className="register-label">
                    Password:
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        className="register-input"
                        required
                    />
                </label>
                <label className="register-label">
                    What is your goal for using MacroBuddy?
                    <select
                        name="goal"
                        value={formData.goal}
                        onChange={handleChange}
                        className="register-input"
                        required
                    >
                        <option value="">Select your goal</option>
                        <option value="lose_weight">Lose Weight</option>
                        <option value="build_muscle">Build Muscle</option>
                        <option value="maintain_health">Maintain Health</option>
                        <option value="other">Other</option>
                    </select>
                </label>
                <button type="submit" className="register-button">
                    Register
                </button>
            </form>
            <p className="login-link">
                Already a user? <Link to="/login">Login here</Link>
            </p>
        </div>
    );
};

export default Register;
