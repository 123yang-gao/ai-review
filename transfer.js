export function transferBalance(sender, receiver, amount) {
  if (!sender || !receiver) {
    throw new Error("Account is required");
  }

  sender.balance -= amount;
  receiver.balance += amount;

  return { sender, receiver };
}
