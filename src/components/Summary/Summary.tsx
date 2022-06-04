import { Order } from "./Order";
import { OrderIcons } from "./Order/Order.types";
import { SummaryWrapper } from "./Summary.styles";
import { SummaryProps } from "./Summary.types";

export function Summary({ data, isLoading }: SummaryProps): JSX.Element {
  return (
    <SummaryWrapper>
      <Order
        title="Entradas"
        amount={data?.total?.income || 0}
        icon={OrderIcons.income}
        isLoading={isLoading}
      />
      <Order
        title="Saídas"
        amount={data?.total?.outcome || 0}
        icon={OrderIcons.outcome}
        isLoading={isLoading}
      />
      <Order
        title="Total"
        amount={data?.total?.final || 0}
        icon={OrderIcons.total}
        isLoading={isLoading}
      />
    </SummaryWrapper>
  );
}
