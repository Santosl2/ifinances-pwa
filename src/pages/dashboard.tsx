import { useEffect } from "react";
import { useSelector } from "react-redux";

import { Header } from "@/components";
import { Summary } from "@/components/Summary";
import { Table } from "@/components/Table";
import { SEO } from "@/SEO";
import { api } from "@/services/api";
import { AuthSSR } from "@/utils/auth/AuthSSR";

export default function Home() {
  const user = useSelector((store) => store);

  console.log(user);

  useEffect(() => {
    api.get("/users").then((response) => {
      console.log(response);
    });
  }, []);
  return (
    <>
      <SEO title="Teste" />
      <Header />
      <main>
        <Summary />
        <Table
          headers={["Título", "Preço", "Categoria", "Data"]}
          values={[
            "Desenvolvimento de site",
            "R$ 12,000.00",
            "Venda",
            "13/04/2021",
          ]}
        />
      </main>
    </>
  );
}

export const getServerSideProps = AuthSSR(async (ctx) => {
  return {
    props: {},
  };
});
