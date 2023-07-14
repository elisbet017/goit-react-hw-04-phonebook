import React from 'react';
import PropTypes from 'prop-types';
import { ContactItem, ButtonDelete } from './Contact.styled';

const Contact = ({ contact: { name, number, id }, onDelete }) => {
  return (
    <ContactItem>
      <p>
        {name}: {number}
      </p>
      <ButtonDelete
        type="button"
        onClick={() => {
          onDelete(id);
        }}
      >
        Delete
      </ButtonDelete>
    </ContactItem>
  );
};

export default Contact;

Contact.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
};
