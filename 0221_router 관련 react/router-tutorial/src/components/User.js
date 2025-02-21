import React from "react";

const User = ({user : {name, address }}) => {
  return (
    <div>
      <h3>User page..</h3>
      <p>About page User / {name} - {address}</p>
    </div>
  );
};

export default User;
