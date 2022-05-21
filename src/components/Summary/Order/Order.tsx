import { moneyFormat } from "@/utils/Format";

import { OrderHeader, OrderWrapper } from "./Order.styles";
import { OrderProps } from "./Order.types";

export function Order({ amount, icon, title }: OrderProps): JSX.Element {
  return (
    <OrderWrapper>
      <OrderHeader>
        <p>{title}</p>
        <img src={icon} alt="Imagem Order" />
      </OrderHeader>
      <strong>{moneyFormat(amount)}</strong>
    </OrderWrapper>
  );
}
