import React from "react";

interface DropdownProps {
    label: string;
    options: string[];
    value: string;
    onChange: (value: string) => void;
}

const Dropdown: React.FC<DropdownProps> = ({ label, options, value, onChange }) => {
  return (
   
      <><label>{label}</label>
      <select value={value} onChange={(e) => onChange(e.target.value)}>
      <option value="">-- Select --</option>
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select></>
  
  );
};

export default Dropdown;
