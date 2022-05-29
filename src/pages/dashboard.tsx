import { useEffect } from "react";

import { Header } from "@/components";
import { Summary } from "@/components/Summary";
import { Table } from "@/components/Table";
import { SEO } from "@/SEO";
import { api } from "@/services/api";

export default function Home() {
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
