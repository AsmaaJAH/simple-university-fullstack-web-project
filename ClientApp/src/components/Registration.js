import React, { Component } from 'react';

export class Registration extends Component {
  static displayName = Registration.name;

  constructor(props) {
    super(props);
    this.state = { 
      name: '',
      zewailEmail: '',
      academicYear: '',
      submitted: false
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  async handleSubmit(event) {
    event.preventDefault();

    const registrationData = {
      name: this.state.name,
      zewailEmail: this.state.zewailEmail,
      academicYear: this.state.academicYear
    };

    try {
      const response = await fetch('registration', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(registrationData)
      });

      if (response.ok) {
        this.setState({
          name: '',
          zewailEmail: '',
          academicYear: '',
          submitted: true
        });
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
        <h1>Applying Form</h1>
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
          <div style={{ margin: '10px 0' }}></div>
          <div className="form-group">
            <label>Zewail University Email:</label>
            <input 
              type="email" 
              className="form-control" 
              name="zewailEmail" 
              value={this.state.zewailEmail} 
              onChange={this.handleInputChange} 
              required 
            />
          </div>
          <div style={{ margin: '10px 0' }}></div>
          <div className="form-group">
            <label>Current Academic Year:</label>
            <select 
              className="form-control" 
              name="academicYear" 
              value={this.state.academicYear} 
              onChange={this.handleInputChange}
              required
            >
              <option value="">Select Year</option>
              <option value="year1">Year 1</option>
              <option value="year2">Year 2</option>
              <option value="year3">Year 3</option>
              <option value="year4">Year 4</option>
            </select>
          </div>
          <div style={{ margin: '10px 0 20px' }}></div>
          {this.state.submitted && <p>Submitted successfully!</p>}
          <button type="submit" className="btn btn-primary">Apply</button>
          <div style={{ margin: '10px 0 20px' }}></div>

        </form>
      </div>
    );
  }
}
