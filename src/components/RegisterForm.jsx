import React, { useState, useContext } from "react";
import { TextField, Button, MenuItem } from '@mui/material';
import { RegistrationContext } from '../context/RegistrationContext';
import courses from '../data/courses';

const RegisterForm = () => {
    const { registerCourse } = useContext(RegistrationContext);
    const [formData, setFormData] = useState({ name: '', email: '', courseId: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const course = courses.find(c => c.id === formData.courseId);
        if (course) {
        registerCourse({ ...formData, course });
        alert(`You registered for ${course.name}`);
    }
    };

    return (
    <form onSubmit={handleSubmit} style={{ maxWidth: 400, margin: '0 auto' }}>
        <TextField
            fullWidth
            label="Name"
            name="name"
            margin="normal"
            value={formData.name}
            onChange={handleChange}
            required
        />
        <TextField
            fullWidth
            label="Email"
            name="email"
            type="email"
            margin="normal"
            value={formData.email}
            onChange={handleChange}
            required
        />
        <TextField
            select
            fullWidth
            label="Select Course"
            name="courseId"
            margin="normal"
            value={formData.courseId}
            onChange={handleChange}
            required
        >
        {courses.map(course => (
            <MenuItem key={course.id} value={course.id}>{course.name}</MenuItem>
        ))}
        </TextField>
        <Button type="submit" variant="contained" fullWidth>Register</Button>
    </form>
    );
};

export default RegisterForm;