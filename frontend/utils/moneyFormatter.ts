export default function moneyFormat(amount) {
  const options = {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  };

  if (!amount) {
    return 0;
  }

  if (amount % 100 === 0) {
    options.minimumFractionDigits = 0;
  }

  const formatter = Intl.NumberFormat("en-US", options);

  return formatter.format(amount);
}
