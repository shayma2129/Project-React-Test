import React, { useState } from "react";
import "./User.css";
import ModalUser from "../ModalUser/ModalUser.js";

export default function User({
  id,
  firstname,
  lastname,email,password,confirmPassword,loggedIn,permission,updateUser
}) {
 const [permissionToupdate ,setPermissionToupdate]=useState(permission);
 const [show, setShow] = useState(false);
 const [deatilsMode, setDetailsMode] = useState(false);

  const handlepermission = () => {
    if (permissionToupdate === "disable") {
      let permissionToupdate = "enable";
      updateUser(
        id,
        firstname,
        lastname,
        email,password,confirmPassword,loggedIn,
        permissionToupdate);
      setPermissionToupdate("enable");
      alert("User became enable ");
    }
    if (permissionToupdate === "enable") {
        let permissionToupdate = "disable";
        updateUser(
            id,
            firstname,
            lastname,
            email,password,confirmPassword,loggedIn,
            permissionToupdate);
        setPermissionToupdate("disable");
        alert("User became disable ");
    }
  };
  const handleShow = () => {
    setShow(true);
    setDetailsMode(true);
  };
  return (
    <>
    <div className="User">
    <div className="w3-container">
          <div className="w3-panel w3-card">
            <div className="details-container">
              <h6>
                <ul>
                  <li><b>Firstname :</b> {firstname} | </li>
                  <li><b>Lastname :</b> {lastname} | </li>
                  <li><b>Permission :</b> {permissionToupdate}</li>
                </ul>
              </h6>
            </div>
            <div className="actions">
              <button className="button-task-archive" onClick={handlepermission}>
                <i className="glyphicon glyphicon-paste	"></i>
              </button>
              <button
                className="button-task-view"
                variant="primary"
                onClick={handleShow}
              >
                <i className="glyphicon glyphicon-eye-open"></i>
              </button>
              {!deatilsMode ? (
                <div> </div>
              ) : (
                <>
                  <ModalUser
                    showh={show}
                    firstname={firstname}
                    lastname={lastname}
                    email={email}
                    permission={permissionToupdate}
                  />
                </>
              )}
            </div>
          </div>
       
      </div>
    </div>

    </>
  );
}
