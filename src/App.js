import * as React from "react";
import Header from "./components/Header";
import Signin from "./components/Signin";

export default function App() {
  const [isLogged, setIsLogged] = React.useState(false);
  return (
    <>
      <Header />
      {isLogged === true ? (
        <p>User is logged in</p>
      ) : (
        <Signin setIsLogged={setIsLogged} />
      )}
    </>
  );
}
