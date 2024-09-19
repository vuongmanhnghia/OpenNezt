import React from 'react';
import './styles.scss';
import {Select} from "antd";
import PropTypes from "prop-types";

SelectCustom.prototype = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,

}

SelectCustom.defaultProps = {
  options: [],
  value: '',
}

function SelectCustom (props) {
  let {onChange, value, options} = props

  return (
    <Select
      className={`select-custom`}
      defaultValue={value}
      onChange={onChange}
      options={options}
    />
  );
}

export default SelectCustom
