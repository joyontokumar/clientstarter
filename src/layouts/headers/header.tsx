import React from "react";

interface Props {

}

export const Header = (props: Props) => {
    return (
      <div style={{minHeight:"300px"}} className="header-area">
        <h2>This is Header Content</h2>
      </div>
    );
};
export default Header;