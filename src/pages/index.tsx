import { Summary } from "@/components/Summary";
import { Table } from "@/components/Table";
import { SEO } from "@/SEO";

export default function Home() {
  return (
    <>
      <SEO title="Teste" />
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
