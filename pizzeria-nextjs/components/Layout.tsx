import Footer from "./Footer";
import Nav from "./Nav";

type LayoutProps = {
    children: React.ReactNode,
  };

function Layout ({children}: LayoutProps) {

    return (
        <>
         <Nav/>
        <main>{children}</main>
        <Footer/>
        </>
    )
}

export default Layout;