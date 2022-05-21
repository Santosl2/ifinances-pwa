import { Order } from "./Order";
import { OrderIcons } from "./Order/Order.types";
import { SummaryWrapper } from "./Summary.styles";

export function Summary(): JSX.Element {
  return (
    <SummaryWrapper>
      <Order title="Entradas" amount={10000} icon={OrderIcons.income} />
      <Order title="Saídas" amount={0} icon={OrderIcons.outcome} />
      <Order title="Total" amount={10000} icon={OrderIcons.total} />
    </SummaryWrapper>
  );
}
