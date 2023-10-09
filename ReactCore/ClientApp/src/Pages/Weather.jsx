import { Table } from "@mantine/core";
import Layout from "../components/Layout";

export default function Weather({ forecasts }) {
  const rows = forecasts.map((forecast) => (
    <Table.Tr key={forecast.date}>
      <Table.Td>{forecast.date}</Table.Td>
      <Table.Td>{forecast.temperatureC}</Table.Td>
      <Table.Td>{forecast.temperatureF}</Table.Td>
      <Table.Td>{forecast.summary}</Table.Td>
    </Table.Tr>
  ));

  return (
    <Table
      striped
      highlightOnHover
      withTableBorder
      withColumnBorders
      withRowBorders
      verticalSpacing="lg"
      horizontalSpacing="lg"
      caption="Weather forecast"
      aria-labelledby="tableLabel"
    >
      <Table.Thead>
        <Table.Tr>
          <Table.Th>Date</Table.Th>
          <Table.Th>Temp. (C)</Table.Th>
          <Table.Th>Temp. (F)</Table.Th>
          <Table.Th>Summary</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>{rows}</Table.Tbody>
    </Table>
  );
}

Weather.layout = (page) => <Layout title="Weather" children={page} />;
