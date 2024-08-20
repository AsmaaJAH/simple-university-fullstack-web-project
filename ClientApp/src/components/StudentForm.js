import React, { useState } from 'react';
import axios from 'axios';

export function StudentForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [academicYear, setAcademicYear] = useState('year1');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const student = { name, email, academicYear };

        try {
            await axios.post('/api/student', student);
            setName('');
            setEmail('');
            setAcademicYear('year1');
            setSubmitted(true);
        } catch (error) {
            console.error("There was an error submitting the form!", error);
        }
    };

    return (
        <div style={{ margin: '50px' }}>
            <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '20px' }}>
                    <label>Student Name:</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
                </div>
                <div style={{ marginBottom: '20px' }}>
                    <label>Zewail University Email:</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div style={{ marginBottom: '20px' }}>
                    <label>Current Academic Year:</label>
                    <select value={academicYear} onChange={(e) => setAcademicYear(e.target.value)}>
                        <option value="year1">Year 1</option>
                        <option value="year2">Year 2</option>
                        <option value="year3">Year 3</option>
                        <option value="year4">Year 4</option>
                    </select>
                </div>
                <button type="submit">Apply</button>
                {submitted && <p>Submitted successfully!</p>}
            </form>
        </div>
    );
}

export default StudentForm;

