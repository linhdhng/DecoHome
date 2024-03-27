import React, { useState } from 'react';

function EditForm({ data, onClose, onSubmit }) {
  // State to manage form data
  const [formData, setFormData] = useState(data);

  // Function to handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Call the onSubmit function with the updated data
    onSubmit(formData);
  };

  return (
    <div >
      <h2>Edit Item</h2>
      <form className="edit-form" onSubmit={handleSubmit}>
        <label className='form-item'>Title:</label>
        <input className="form-input" type="text" name="title" value={formData.title} onChange={handleChange} />
        <label >Description:</label>
        <input className="form-input" type="text" name="description" value={formData.description} onChange={handleChange} />
        <label >Category:</label>
        <input className="form-input" type="text" name="category" value={formData.category} onChange={handleChange} />
        <label >Material:</label>
        <input className="form-input" type="text" name="material" value={formData.material} onChange={handleChange} />
        <label>Price:</label>
        <input className="form-input" type="text" name="price" value={formData.price} onChange={handleChange} />
        <button className="form-button" type="submit">Submit</button>
        <button className ="form-button" type="button" onClick={onClose}>Cancel</button>
      </form>
    </div>
  );
}

export default EditForm;
