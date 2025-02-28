import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.name + "child constructor");

    this.state = {
      userInfo: {
        name: "Dummy",
        bio: "React app",
        location: "Nagpur IT",
      },
    };
  }

  async componentDidMount() {
    console.log(this.props.name + "component did mount");
    let data = await fetch("https://api.github.com/users/amitghade");
    let json = await data.json();
    console.log(json);
    this.setState({
      userInfo: json,
    });
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(" Child component did update");
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    console.log("Child component unmounted");
  }

  render() {
    console.log(this.props.name + "child render");
    const { name, bio, avatar_url, location } = this.state.userInfo;

    return (
      <div>
        <img
          src={avatar_url}
          style={{ width: "100px", height: "auto" }}
          alt=""
        />
        <h1>{name}</h1>
        <h2>{bio}</h2>
        <h3>{location}</h3>
      </div>
    );
  }
}

export default UserClass;
