import React from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends React.Component {
  constructor(props) {
    console.log("Parent constructor");
    super(props);
  }

  componentDidMount() {
    console.log("Parent component did mount");
  }

  render() {
    console.log("Parent Render");
    return (
      <div>
        <h1>About</h1>
        <h2>I am in about page</h2>
        <UserClass
          name={"First"}
          email={"yash@gmail.com"}
          designation={"Web Developer"}
        />
        <User />
      </div>
    );
  }
}

export default About;
//ketan
//Parent const
//Parent Render
//Child const
// Child render
//Parent did mount
//Child did mount

//shivani
//Parent const
//Parent Render
//Parent did mount
//Child const
// Child render
//Child did mount

//Priyanshu
//Parent const
//Parent Render
// First Child const
// First Child render
// Second Child const
// Second Child render
// First Child mount
// Second Child mount
// Parent mount

//Ketan and Shivani
//Parent const
//Parent Render
// First Child const
// First Child render
// First Child mount
// Second Child const
// Second Child render
// Second Child mount
// Parent mount
