/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable unused-imports/no-unused-vars */
import { useEffect, useRef } from "react";

import { OrderHeader, OrderWrapper } from "./Order.styles";
import { OrderProps } from "./Order.types";

const OrderVariants = {
  visible: {
    opacity: 1,
    y: 0,
  },
  hidden: {
    opacity: 0,
    y: "50%",
  },
};

export function Order({ amount, icon, title }: OrderProps): JSX.Element {
  const moneyRef = useRef<HTMLSpanElement>(null);

  function animateNumber(speed = 100) {
    let timeout!: NodeJS.Timeout;

    const moneyDiv = moneyRef.current!;
    const actualValue = Number(moneyDiv.innerText?.replace("R$ ", ""));
    const endValue = Number(moneyRef.current!.dataset.amount);
    const time = endValue / speed;

    if (actualValue < endValue) {
      moneyDiv.innerText = Math.ceil(actualValue + time).toFixed(2);
      timeout = setTimeout(() => animateNumber(speed), 1);
      return;
    }

    moneyDiv.innerText = endValue
      .toFixed(2)
      .replace(/\d(?=(\d{3})+\.)/g, "$&,");

    if (timeout !== undefined) clearTimeout(timeout);
  }

  useEffect(() => {
    animateNumber(100);
  }, []);

  return (
    <OrderWrapper
      initial="hidden"
      animate="visible"
      variants={OrderVariants}
      transition={{ duration: 0 }}
      whileHover={{ y: "-16px" }}
    >
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
