import React from "react";
import "./FilterCheckbox.css";

const FilterCheckbox = ({ toggleState, changeToggleState }) => {
  return (
    <form className="filter-checkbox">
      <label className="filter-checkbox__switch">
        <input
          className="filter-checkbox__input"
          type="checkbox"
          checked={toggleState}
          onChange={changeToggleState}
        />

        <span className="filter-checkbox__slider filter-checkbox__slider_type_round"></span>
      </label>
      <p className="filter-checkbox__text">
        <span onClick={changeToggleState}>Короткометражки</span>
      </p>
    </form>
  );
};

export default FilterCheckbox;
