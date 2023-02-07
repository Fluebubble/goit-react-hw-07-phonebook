import styled from 'styled-components';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors';
import { postContact } from 'redux/operations';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
  border: 2px solid black;
  padding: 15px;
  gap: 15px;
`;

const ContactForm = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();

    const form = e.target;
    for (const contact of contacts) {
      if (contact.name === form.elements.name.value.trim()) {
        alert(
          `Контакт с именем ${form.elements.name.value} уже существует. Выберите другое имя`
        );
        return;
      }
    }

    dispatch(
      postContact({
        createdAt: new Date(Date.now()).toISOString(),
        name: form.elements.name.value,
        phone: form.elements.number.value,
      })
    );

    form.reset();
  };

  return (
    <>
      <Form name="add_contact_form" onSubmit={e => handleSubmit(e)}>
        <label>
          Name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label>
          Number
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button type="submit">Add contact</button>
      </Form>
    </>
  );
};

export default ContactForm;
