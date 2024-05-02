import HomeStats from "@/components/HomeStats";
import Layout from "../components/Layout";
import HomeHeader from "@/components/HomeHeader";

export default function Home() {
  return (
    <Layout>
      <HomeHeader />
      <HomeStats />
    </Layout>
  );
}
