function newPrice(currentPrice, discount) {
  if (
    typeof currentPrice !== "number" ||
    typeof discount !== "number" ||
    discount < 0 ||
    discount > 100
  ) {
    return "Invalid";
  }
  const amountOfDiscount = (currentPrice * discount) / 100;
  const newAmount = currentPrice - amountOfDiscount;
  return newAmount.toFixed(3);
}
