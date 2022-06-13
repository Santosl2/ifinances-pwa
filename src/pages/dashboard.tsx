/* eslint-disable react/no-unstable-nested-components */
import { useMemo } from "react";
import { toast } from "react-toastify";

import { Trash } from "phosphor-react";

import { Header, LoadingIndicator, Summary, Table } from "@/components";
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

    const response = await deleteRegisterMutate.mutateAsync(id);

    toast(response.message ?? "Transação deletada com sucesso!", {
      type: `${response.success ? "success" : "error"}`,
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
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
        Cell: ({ cell: { value } }: CellProps) =>
          deleteRegisterMutate.isLoading ? (
            <LoadingIndicator data-testid="loadingTestTable" color="#e52e4d" />
          ) : (
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
      </DashboardWrapper>
    </>
  );
}

export const getServerSideProps = AuthSSR(async (ctx) => {
  return {
    props: {},
  };
});
