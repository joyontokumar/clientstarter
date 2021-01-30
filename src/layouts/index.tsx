import React, { Children, ReactElement } from "react";
import Header from "./headers/header";
import Footer from "./footers/footer";
interface Layout {
  children:ReactElement | ReactElement[]
}

 const Layout = ({children}: Layout): ReactElement =>{
    return (
      <React.Fragment>
        <Header/>
        <div className="content">
          {children}
        </div>
        <Footer/>
      </React.Fragment>
    );
};
export default Layout;
