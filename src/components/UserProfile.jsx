import React from "react";

function UserProfile({ email, username }) {
  return (
    <div className="container mt-5 pt-5">
    <div className="row justify-content-center">
      <div className="col-md-12 mt-5">
        <h2>User Profile</h2>
        <p><strong>Email:</strong> {email}</p>
        <p><strong>Username:</strong> {username}</p>
      </div>
    </div>
  </div>
  );
}

export default UserProfile;