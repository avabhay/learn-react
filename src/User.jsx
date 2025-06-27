function User(props) {
  return (
    <div>
      <h2>User Component</h2>
      <p>Name: {props.name}</p>
      <p>Email: {props.email}</p>
    </div>
  );
}

export default User; // This is a simple User component that can be used in your application.