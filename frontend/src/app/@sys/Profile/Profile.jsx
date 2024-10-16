import React from "react";
import logo from "../logos/mine.jpg";
import "./Profile.css";
import { Button } from "antd";


function Profile() {
  return (
    <>
      <div className="profile-wrapper">
        <img src={logo} alt="" className="profile-pic"></img>

        <div className="name">
          <h1>Kshitiz Choudhary</h1>
        </div>

        <div className="email">
          <h4>kshitiz2603@gmail.com</h4>
        </div>

        <div className="signOut">
        <Button type="primary" htmlType="signOut">
                Sign Out
              </Button>
        </div>
      </div>
    </>
  );
}

export default Profile;
