/* eslint-disable unused-imports/no-unused-vars */
import { useEffect, useRef } from "react";

import { OrderHeader, OrderWrapper } from "./Order.styles";
import { OrderProps } from "./Order.types";

export function Order({ amount, icon, title }: OrderProps): JSX.Element {
  const moneyRef = useRef<HTMLSpanElement>(null);

  function animateNumber(speed = 100) {
    let timeout: ReturnType<typeof setTimeout>;

    const moneyDiv = moneyRef.current!;
    const actualValue = Number(moneyDiv.innerText.replace("R$ ", ""));
    const endValue = Number(moneyRef.current!.dataset.amount);
    const time = endValue / speed;

    if (actualValue < endValue) {
      moneyDiv.innerText = Math.ceil(actualValue + time).toFixed(2);
      timeout = setTimeout(() => animateNumber(speed), 1);
      return;
    }

    moneyDiv.innerText = endValue.toFixed(2);
    if (timeout !== undefined) clearTimeout(timeout);
  }

  useEffect(() => {
    animateNumber(100);
  }, []);

  return (
    <OrderWrapper>
      <OrderHeader>
        <p>{title}</p>
        <img src={icon} alt="Imagem Order" />
      </OrderHeader>

      <strong>
        R${" "}
        <span ref={moneyRef} data-amount={amount}>
          0
        </span>
      </strong>
    </OrderWrapper>
  );
}
