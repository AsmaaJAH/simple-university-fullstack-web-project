import React, { Component } from 'react';

export class Register extends Component {
  static displayName = Register.name;

  constructor(props) {
    super(props);
    this.state = { 
      currentCount: 0,
      name: '',
      studentId: '',
      zewailStudent: 'yes',
      academicYear: '',
      submitted: false
    };

    this.incrementCounter = this.incrementCounter.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  incrementCounter() {
    this.setState({
      currentCount: this.state.currentCount + 1,
      submitted: true
    });
  }

  handleInputChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  async handleSubmit(event) {
    event.preventDefault();
    this.incrementCounter();

    const registrationData = {
      name: this.state.name,
      studentId: this.state.studentId,
      zewailStudent: this.state.zewailStudent,
      academicYear: parseInt(this.state.academicYear),
      applyCount: this.state.currentCount
    };

    try {
      const response = await fetch('/api/registration', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(registrationData)
      });

      if (response.ok) {
        console.log('Data submitted successfully');
      } else {
        console.error('Failed to submit data');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }

  render() {
    return (
      <div>
        <h1>Register</h1>
        <p>Fill the following registration form then press apply:</p>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Student Name:</label>
            <input 
              type="text" 
              className="form-control" 
              name="name" 
              value={this.state.name} 
              onChange={this.handleInputChange} 
              required 
            />
          </div>
          <span>&nbsp;&nbsp;</span>
          <div className="form-group">
            <label>Student ID:</label>
            <input 
              type="text" 
              className="form-control" 
              name="studentId" 
              value={this.state.studentId} 
              onChange={this.handleInputChange} 
              required 
            />
          </div>
          <span>&nbsp;&nbsp;</span>
          <div className="form-group">
            <label>Are you a current Zewail City student?</label>
            <select 
              className="form-control" 
              name="zewailStudent" 
              value={this.state.zewailStudent} 
              onChange={this.handleInputChange}
            >
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <span>&nbsp;&nbsp;</span>
          <div className="form-group">
            <label>Current Academic Year:</label>
            <div>
              <label>
                <input 
                  type="radio" 
                  name="academicYear" 
                  value="1" 
                  checked={this.state.academicYear === '1'} 
                  onChange={this.handleInputChange} 
                /> Year 1
              </label>
              <span>&nbsp;&nbsp;</span>
              <label>
                <input 
                  type="radio" 
                  name="academicYear" 
                  value="2" 
                  checked={this.state.academicYear === '2'} 
                  onChange={this.handleInputChange} 
                /> Year 2
              </label>
              <span>&nbsp;&nbsp;</span>
              <label>
                <input 
                  type="radio" 
                  name="academicYear" 
                  value="3" 
                  checked={this.state.academicYear === '3'} 
                  onChange={this.handleInputChange} 
                /> Year 3 
              </label>
              <span>&nbsp;&nbsp;</span>
              <label>
                <input 
                  type="radio" 
                  name="academicYear" 
                  value="4" 
                  checked={this.state.academicYear === '4'} 
                  onChange={this.handleInputChange} 
                /> Year 4 
              </label>
            </div>
          </div>
          <span>&nbsp;&nbsp;</span>
          <p aria-live="polite">Total number of applicants: <strong>{this.state.currentCount}</strong></p>

          <button type="submit" className="btn btn-primary">Apply</button>
        </form>
      </div>
    );
  }
}
