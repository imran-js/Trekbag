import React from "react";
import Logo from "./Logo";
import Counter from "./Counter";

function Header({ itemCount, packedItems }) {
  return (
    <header>
      <Logo />
      <Counter packedItems={packedItems} itemCount={itemCount} />
    </header>
  );
}

export default Header;
