import Header from "./Header";

export default function Layout({ children }) {
  return (
    <>
      <head><title>Multi Step Form</title></head>
      <Header />
      <main>{children}</main>
    </>
  );
}
