import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "Dummy",
        email: "test@test.com",
      },
    };
  }

  async componentDidMount() {
    let data = await fetch("https://api.github.com/users/pgaikwad203");
    let json = await data.json();
    console.log(json);
    this.setState({
      userInfo: json,
    });
  }
  render() {
    const { name, designation, email } = this.state.userInfo;
    return (
      <div>
        <h1>{name}</h1>
        <h2>{designation}</h2>
        <h3>{email}</h3>
      </div>
    );
  }
}

export default UserClass;
