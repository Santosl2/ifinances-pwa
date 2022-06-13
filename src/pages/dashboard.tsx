/* eslint-disable react/no-unstable-nested-components */
import { useMemo } from "react";
import { CSVLink } from "react-csv";
import { toast } from "react-toastify";

import { Trash } from "phosphor-react";

import {
  Header,
  LoadingIndicator,
  Summary,
  Table,
  NoResults,
  Footer,
  Button,
} from "@/components";
import { CellProps } from "@/components/Table/Table.types";
import { CSV_EXPORT_FILE_NAME } from "@/constants";
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

    toast(response.message ?? "Transação deleta com sucesso!", {
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

  const csvExport = useMemo(() => {
    return (
      formattedData &&
      formattedData.map((res) => {
        return {
          Titulo: res.title,
          Valor: res.amount,
          Categoria: res.category,
          Tipo: res.type === "outcome" ? "Saída" : "Entrada",
          Data: res.date,
        };
      })
    );
  }, [formattedData]);

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

  const csvExportValues = useMemo(
    () => [...Object.values(csvExport || [])],
    [csvExport]
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
          <>
            <Table data={values} columns={columns} />
            <CSVLink
              data={csvExportValues}
              filename={`${CSV_EXPORT_FILE_NAME}-${dateFormat(
                new Date().getTime()
              )}`}
            >
              <Button>Exportar </Button>
            </CSVLink>
          </>
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
