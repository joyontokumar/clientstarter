import React, { ReactElement } from "react";

interface Props {

}

const Footer = ({}: Props): ReactElement => {
    return (
      <div style={{minHeight:"300px"}} className="footer">
        <h3>This is Footer Content</h3>
      </div>
    );
};

export default Footer;
