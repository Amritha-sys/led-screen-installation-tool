import React, { useState } from "react";
import "./EquipmentSelection.css";
const UserInputForm = ({ onSubmit }: { onSubmit: (data: any) => void }) => {
  const [formData, setFormData] = useState({
    projectTitle: "",
    designerName: "",
    department: "",
    screenSize: "",
    date: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData); 
  };

  return (
    <form className="form-container" onSubmit={handleSubmit} >
        Description
  <div className="form-group">
    <label htmlFor="projectTitle">Project Title</label>
    <input
      type="text"
      id="projectTitle"
      name="projectTitle"
      value={formData.projectTitle}
      onChange={handleChange}
      placeholder="Enter project title"
      required
    />
  </div>
  <div className="form-group">
    <label htmlFor="designerName">Designer’s Name</label>
    <input
      type="text"
      id="designerName"
      name="designerName"
      value={formData.designerName}
      onChange={handleChange}
      placeholder="Enter designer's name"
      required
    />
  </div>
  <div className="form-group">
    <label htmlFor="department">Department</label>
    <input
      type="text"
      id="department"
      name="designerName"
      value={formData.department}
      onChange={handleChange}
      placeholder="Department"
      required
    />
  </div>
  <div className="form-group">
    <label htmlFor="screenSize">Screen Size</label>
    <input
      type="text"
      id="screenSize"
      name="screenSize"
      value={formData.screenSize}
      onChange={handleChange}
      placeholder="screen size"
      required
    />
  </div>
  <div className="form-group">
    <label htmlFor="date">Date</label>
    <input
      type="date"
      id="date"
      name="date"
      value={formData.date}
      onChange={handleChange}
      required
    />
  </div>
  {/* <button type="submit" className="submit-button">Submit</button> */}
</form>

  );
};

export default UserInputForm;
