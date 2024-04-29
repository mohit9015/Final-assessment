// FormComponent.js
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addFormData } from '../redux/actions';

const FormComponent = ({ addFormData }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    address: '',
    postalCode: '',
    phoneNumber: '',
    highestEducation: '',
    passingYear: '2020', // Default value for passing year dropdown
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addFormData(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Full Name:
        <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required />
      </label>
      <br />
      <label>
        Address:
        <input type="text" name="address" value={formData.address} onChange={handleChange}
        //  pattern="[a-zA-Z0-9,-]*"
          required />
      </label>
      <br />
      <label>
        Postal Code:
        <input type="text" name="postalCode" value={formData.postalCode} onChange={handleChange}
        //  pattern="[a-zA-Z0-9]*"
          required />
      </label>
      <br />
      <label>
        Phone Number:
        <input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange}
        //  pattern="[0-9]*"
          required />
      </label>
      <br />
      <label>
        Highest Education:
        <input type="text" name="highestEducation" value={formData.highestEducation} onChange={handleChange} required />
      </label>
      <br />
      <label>
        Passing Year:
        <select name="passingYear" value={formData.passingYear} onChange={handleChange} required>
          <option value="2020">2020</option>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
          <option value="2023">2023</option>
        </select>
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addFormData: (formData) => dispatch(addFormData(formData)),
});

export default connect(null, mapDispatchToProps)(FormComponent);