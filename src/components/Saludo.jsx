const MyFriend = ({ name }) => {
    return (
      <section className="container text-center my-3">
          <h1 className="display-2">Hello {name}!</h1>
          <button className="btn btn-primary">Click me!</button>
      </section>
    );
  };
  
  export default MyFriend;