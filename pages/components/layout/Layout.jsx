import Meta from "./Meta";
import Nav from "./Nav";

const Layout = ({ children }) => {
  return (
    <>
      <Meta />
      <Nav />
      <div style={{ width: "90%", margin: "0 auto" }}>{children}</div>
    </>
  );
};

export default Layout;
