import { NextPage } from "next";
import Layout from "../components/Layout";

import IndexBody from "../components/IndexBody";

const Home: NextPage = () => {
  return (
    <Layout>
      <IndexBody />
    </Layout>
  );
};

export default Home;
