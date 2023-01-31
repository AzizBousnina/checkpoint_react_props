import React from "react";
import PropTypes from "prop-types";

const Profile = (props) => {
  const handleName = (ab) => {
    ab.preventDefault();
    alert("Aziz Bousnina");
  };
  return (
    <div>
      <img
        src={props.children} alt="pic"style={{width: "200px",display: "flex",margin: "auto",borderRadius: "100px"}}/>
      <div style={{ color: " rgb(154, 148, 148)", textAlign: "center" }}>
        <h1>{props.fullName}</h1>
        <h3>{props.bio}</h3>
        <h4>{props.profession}</h4>
        <a href="/" onClick={handleName}>
          Click here !
        </a>
      </div>
    </div>
  );
};
Profile.defaultProps = {fullName: "User",bio: "Hello Im a user",profession: "Web Developper, Musician"};
Profile.propTypes = {stringProp: PropTypes.string,functionProp: PropTypes.func};

export default Profile;
