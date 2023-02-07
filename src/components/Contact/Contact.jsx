export const Contact = ({ contacts }) => {
  // console.log(contacts, "In Contact");
  return (
    <>
      {contacts.map(contact => {
        // console.log(contact.id, "Contact ID In Contact")
        return <li key={contact.id}>{contact.name}</li>;
      })}
    </>
  );
};
