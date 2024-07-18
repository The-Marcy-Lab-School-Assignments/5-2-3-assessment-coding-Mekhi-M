class Phone {
  constructor(phoneNumber) {
    this.phoneNumber = phoneNumber;
    this.contacts = [];
  }

  makeCall(searchTerm) {
    const contact = this.contacts.find(
      ({ name, phoneNumber }) =>
        searchTerm === name || searchTerm === phoneNumber
    );

    if (contact) {
      return `Calling ${contact.name}...`;
    }

    return /^\d{10}$/.test(searchTerm) ? `Calling ${searchTerm}...` : `Invalid`;
  }

  addContact({ name, phoneNumber }) {
    if (!name || !phoneNumber) {
      return "Invalid";
    }

    if (!/^\d{10}$/.test(phoneNumber)) {
      return "Invalid";
    }

    const newContact = { name, phoneNumber };

    this.contacts.push(newContact);
    return `${newContact.name} added.`;
  }

  removeContact(searchTerm) {
    const idxToRmv = this.contacts.findIndex(({ name }) => name === searchTerm);

    if (idxToRmv < 0) {
      return `Contact not found.`;
    }

    this.contacts.splice(idxToRmv, 1);

    return `${searchTerm} removed.`;
  }
}

class AppleIPhone extends Phone {
  constructor(phoneNumber, model) {
    super(phoneNumber);
    this.model = model;
  }

  sendIMessage(phone, message) {
    if (!(phone instanceof AppleIPhone)) return `Message could not be sent.`;
    return `Message: ${message} - sent from ${this.model}`;
  }
}

module.exports = {
  Phone,
  AppleIPhone,
};
