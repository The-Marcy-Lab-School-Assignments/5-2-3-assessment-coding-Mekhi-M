const bankAccountFactory = (amount = 0) => {
  let balance = amount;

  const bankAcc = {
    checkBalance() {
      return balance;
    },
    add(amount) {
      balance += amount;
      console.log(`$${amount} added.`);

      return balance;
    },
    subtract(amount) {
      balance -= amount;
      console.log(`$${amount} subtracted.`);

      return balance;
    },
  };

  return bankAcc;
};

module.exports = {
  bankAccountFactory,
};
