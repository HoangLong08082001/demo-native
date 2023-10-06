import Header from "./Header";
import Footer from "./Footer";
import HeaderLogin from "./HeaderLogin";

function DefaultLayout({ children }) {
  return (
    <div>
      <HeaderLogin />
      <div>{children}</div>
      <Footer />
    </div>
  );
}

export default DefaultLayout;
