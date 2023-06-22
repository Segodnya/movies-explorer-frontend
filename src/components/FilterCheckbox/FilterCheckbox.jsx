import React, { useState } from "react";
import "./FilterCheckbox.css";

const FilterCheckbox = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <form className="filter-checkbox">
      <label className="filter-checkbox__switch">
        <input
          className="filter-checkbox__input"
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        <span className="filter-checkbox__slider filter-checkbox__slider_type_round"></span>
      </label>
      <p className="filter-checkbox__text">
        <span onClick={handleCheckboxChange}>Короткометражки</span>
      </p>
    </form>
  );
};

export default FilterCheckbox;
