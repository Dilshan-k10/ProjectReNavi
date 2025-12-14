import React from 'react'

const ContactCard = ({contact}) => {
  return (
    <div className="flex flex-col text-center items-center text-greyColor gap-2 lg:gap-4">
      <img src={contact.image} alt={contact.name} />
      <h2 className="font-bold text-[16px]">{contact.title}</h2>
      <p className="text-[16px] px-8 lg:px-0">{contact.description}</p>
    </div>
  );
}

export default ContactCard