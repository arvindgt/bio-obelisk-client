import { Fragment, ReactNode } from "react";
import Header from "./header";
import Footer from "./footer";


const Layout = ({ children }: {
    children: ReactNode
  }) => {
    return (
        <Fragment>
            <Header />
                {children}
            <Footer />
        </Fragment>
    )
}

export default Layout;
