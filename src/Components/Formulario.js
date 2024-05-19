import React, { useState } from 'react';

const Formulario = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        address: '',
        phoneNumbers: [''],
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e, index) => {
        if (e.target.name === 'phoneNumbers') {
            const phoneNumbers = [...formData.phoneNumbers];
            phoneNumbers[index] = e.target.value;
            setFormData({ ...formData, phoneNumbers });
        } else {
            setFormData({ ...formData, [e.target.name]: e.target.value });
        }
    };

    const addPhoneNumber = () => {
        setFormData({ ...formData, phoneNumbers: [...formData.phoneNumbers, ''] });
    };

    const validate = () => {
        const newErrors = {};
        if (!formData.name) newErrors.name = 'Name is required';
        if (!formData.email) newErrors.email = 'Email is required';
        if (!formData.password) newErrors.password = 'Password is required';
        if (formData.password !== formData.confirmPassword)
            newErrors.confirmPassword = 'Passwords do not match';
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            // Submit form data
            console.log('Form submitted', formData);
        }
    };

    return (
        <form className="advanced-form" onSubmit={handleSubmit}>
            <div className="form-group">
                <label>Name</label>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                />
                {errors.name && <p className="error">{errors.name}</p>}
            </div>
            <div className="form-group">
                <label>Email</label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                />
                {errors.email && <p className="error">{errors.email}</p>}
            </div>
            <div className="form-group">
                <label>Password</label>
                <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                />
                {errors.password && <p className="error">{errors.password}</p>}
            </div>
            <div className="form-group">
                <label>Confirm Password</label>
                <input
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                />
                {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}
            </div>
            <div className="form-group">
                <label>Address</label>
                <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                />
            </div>
            <div className="form-group">
                <label>Phone Numbers</label>
                {formData.phoneNumbers.map((phone, index) => (
                    <input
                        key={index}
                        type="text"
                        name="phoneNumbers"
                        value={phone}
                        onChange={(e) => handleChange(e, index)}
                    />
                ))}
                <button type="button" onClick={addPhoneNumber}>Add Phone Number</button>
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

export default Formulario;
