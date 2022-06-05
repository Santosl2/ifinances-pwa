export function moneyFormat(amount: number, type?: string) {
  const prefix = type === "outcome" ? "- " : "";

  return (
    prefix +
    new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(amount)
  );
}

export function dateFormat(date: number) {
  return new Intl.DateTimeFormat("pt-BR").format(date);
}
