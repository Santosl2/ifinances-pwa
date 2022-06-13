/* eslint-disable react/no-unstable-nested-components */
import { useMemo } from "react";
import { toast } from "react-toastify";

import { Trash } from "phosphor-react";

import {
  Header,
  LoadingIndicator,
  Summary,
  Table,
  NoResults,
  Footer,
} from "@/components";
import { CellProps } from "@/components/Table/Table.types";
import { useMutationDeleteFinance } from "@/hooks/useMutations";
import { useUsersFinances } from "@/hooks/useUsersFinances";
import { SEO } from "@/SEO";
import { AuthSSR } from "@/utils/auth/AuthSSR";
import { dateFormat, moneyFormat } from "@/utils/Format";
import { DashboardWrapper } from "@styles/Dashboard.styles";

export default function Home() {
  const { isLoading, data: registers } = useUsersFinances();
  const deleteRegisterMutate = useMutationDeleteFinance();

  const deleteRegister = async (id: string | undefined) => {
    if (!id || id === "") return;

    toast.promise(deleteRegisterMutate.mutateAsync(id), {
      pending: "Transação está sendo deletada.",
      success: {
        render() {
          return "Transação deletada com sucesso!";
        },
        icon: "🟢",
      },
      error: "Transação falha ao remover transação!",
    });
  };

  const formattedData = useMemo(() => {
    return (
      registers &&
      registers.data?.map((res) => {
        return {
          title: res.title,
          amount: moneyFormat(res.amount, res.type),
          category: res.category,
          type: res.type,
          date: dateFormat(res.createdAt),
          actions: res.id ?? "",
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
      {
        Header: "#",
        accessor: "actions",
        disableSortBy: true,
        Cell: ({ cell: { value } }: CellProps) => (
          <Trash
            size={24}
            color="#e52e4d"
            cursor={!deleteRegisterMutate.isLoading ? "pointer" : "normal"}
            data-testid="deleteTest"
            onClick={() => {
              if (!deleteRegisterMutate.isLoading) deleteRegister(value);
            }}
          />
        ),
      },
    ],
    [deleteRegisterMutate.isLoading]
  );

  const values = useMemo(
    () => [...Object.values(formattedData || [])],
    [formattedData]
  );

  return (
    <>
      <SEO title="Dashboard" />
      <Header />
      <DashboardWrapper>
        <Summary data={registers} isLoading={isLoading} />
        {isLoading && (
          <LoadingIndicator
            width="40px"
            height="40px"
            color="var(--gray-900)"
            data-testid="loadingTest"
          />
        )}
        {!isLoading && formattedData && (
          <Table data={values} columns={columns} />
        )}
        {!formattedData && !isLoading && <NoResults />}
        <Footer />
      </DashboardWrapper>
    </>
  );
}

export const getServerSideProps = AuthSSR(async (ctx) => {
  return {
    props: {},
  };
});
