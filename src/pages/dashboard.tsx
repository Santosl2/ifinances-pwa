/* eslint-disable react/no-unstable-nested-components */
import { useMemo } from "react";

import { Header } from "@/components";
import { Summary } from "@/components/Summary";
import { Table } from "@/components/Table";
import { CellProps } from "@/components/Table/Table.types";
import { useSelectorUser } from "@/hooks/useSelectorUser";
import { useUsersFinances } from "@/hooks/useUsersFinances";
import { SEO } from "@/SEO";
import { AuthSSR } from "@/utils/auth/AuthSSR";
import { dateFormat, moneyFormat } from "@/utils/Format";

export default function Home() {
  const user = useSelectorUser();
  const { isLoading, data: registers, isFetching, error } = useUsersFinances();

  const formatedData = useMemo(() => {
    return (
      registers &&
      registers.data.map((res) => {
        return {
          title: res.title,
          amount: moneyFormat(res.amount, res.type),
          category: res.category,
          type: res.type,
          date: dateFormat(res.date),
        };
      })
    );
  }, [registers]);

  const columns = useMemo(
    () => [
      {
        Header: "Titulo",
        accessor: "title",
      },
      {
        Header: "Preço",
        accessor: "amount",
        Cell: ({ cell: { value } }: CellProps) => (
          <span className={value.startsWith("-") ? "outcome" : "income"}>
            {value}
          </span>
        ),
      },
      {
        Header: "Categoria",
        accessor: "category",
      },
      {
        Header: "Data",
        accessor: "date",
      },
    ],
    []
  );

  const values = useMemo(
    () => [...Object.values(formatedData || [])],
    [formatedData]
  );

  return (
    <>
      <SEO title="Teste" />
      <Header />
      <main>
        <Summary data={registers} isLoading={isLoading} />
        {registers && registers.data?.length >= 0 && (
          <Table data={values} columns={columns} />
        )}
      </main>
    </>
  );
}

export const getServerSideProps = AuthSSR(async (ctx) => {
  return {
    props: {},
  };
});
