import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import { deleteContact } from '../../redux/ContactSlice';
import { getContacts, getFilter } from '../../redux/selector';
import React from 'react';
import propTypes from 'prop-types';
import css from 'components/ListComponent/ListComponent.module.css';

const ListComponent = () => {
  const dispatch = useDispatch();

  const contact = useSelector(getContacts);
  const contactFilter = useSelector(getFilter);
  const visiblesContact = contact
    .filter(contact =>
      contact.name.toLowerCase().includes(contactFilter.toLowerCase())
    )
    .sort((firstName, secondName) =>
      firstName.name.localeCompare(secondName.name)
    );
  console.log('hahah' + visiblesContact);
  return (
    <ul>
      {visiblesContact.map(({ id, name, number }) => {
        return (
          <li key={id} className={css.contactList}>
            {name} : {number}
            <button
              className={css.btnContactList}
              onClick={() => dispatch(deleteContact(id))}
            >
              {' '}
              Delete{' '}
            </button>
          </li>
        );
      })}
    </ul>
  );
};
ListComponent.propTypes = {
  contacts: propTypes.arrayOf(propTypes.object),
  onDeleteContact: propTypes.func,
};
export default ListComponent;
