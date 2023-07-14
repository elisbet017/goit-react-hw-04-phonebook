import React from 'react'
import PropTypes from 'prop-types'
import { Field, Input } from '../Form/Form.styled';

const Filter = ({ value, onChange }) => {
  return (
    <Field>
      Find contact by name
      <Input type="text" name="filter" value={value} onChange={onChange} />
    </Field>
  );
}
export default Filter

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}
