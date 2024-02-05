import { useState } from "react";


const MyFriend = ({ name }) => {
    const [mensaje, setMensaje] = useState("(from changed state)");
    
    const cambiar = ()=> {
        setMensaje("(changed state)")
    }

    return (
      <section className="container text-center my-3">
          <h1 className="display-2">Hello {name} {mensaje}!</h1>
          <button className="btn btn-primary" onClick={cambiar}>Click me!</button>
      </section>
    );
  };
  
  export default MyFriend;