import { ColorSchemeToggle } from "../components/ColorSchemeToggle";
import Layout from "../components/Layout";
import { Welcome } from "../components/Welcome/Welcome";

export default function IndexPage(props) {
  return (
    <>
      <Welcome />
      <ColorSchemeToggle />
    </>
  );
}

IndexPage.layout = (page) => <Layout title="Home" children={page} />;
