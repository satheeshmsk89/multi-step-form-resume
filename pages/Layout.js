import Header from "./Header";
import Head from "next/head";

export default function Layout({ children }) {
  return (
    <>
      <Head>
      <title>Multi Step Form</title>
      </Head>
      <Header />
      <main>{children}</main>
    </>
  );
}
