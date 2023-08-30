import Table from "./Table";
import { Users } from "../utils/constants";
import React, { useState, useEffect } from "react";

const userData = [
  { name: "id" },
  { name: "first_name" },
  { name: "last_name" },
  { name: "email" },
  { name: "gender" },
  { name: "ip_address" },
];

const Body = () => {
  const [query, setQuery] = useState("");
  const [users, setUsers] = useState([]);
  const [keys, setKeys] = useState([]);

  useEffect(() => {
    setUsers(userData);
  }, []);

  useEffect(() => {
    setKeys(
      users.map((user) => {
        if (user.isChecked) {
          return user.name;
        }
      })
    );
  }, [users]);

  const search = (data) => {
    return data.filter((item) =>
      keys?.some((key) => item[key]?.toString()?.toLowerCase()?.includes(query))
    );
  };

  const handleChange = (e) => {
    const { name, checked } = e.target;
    if (name === "allSelect") {
      let tempUser = users.map((user) => {
        return { ...user, isChecked: checked };
      });
      setUsers(tempUser);
    } else {
      let tempUser = users.map((user) =>
        user.name === name ? { ...user, isChecked: checked } : user
      );
      setUsers(tempUser);
    }
  };

  return (
    <>

      <div className="search">
        <input
          type="text"
          placeholder="Search.."
          className="search-box"
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>


      {/* <CheckBox /> */}
      
      <div className="container-main">
        <div className="container-heading">
        </div>

        <form className="container">
        <span className="checkbox-text">Select Users : </span>
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              name="allSelect"
              // checked={
              //   users.filter((user) => user?.isChecked !== true).length < 1
              // }
              checked={!users.some((user) => user?.isChecked !== true)}
              onChange={handleChange}
            />
            <label  className="form-check-text">All Select</label>
          </div>
          {users.map((user, index) => (
            <div className="form-check" key={index}>
              <input
                type="checkbox"
                className="form-check-input"
                name={user.name}
                checked={user?.isChecked || false}
                onChange={handleChange}
              />
              <label className="form-check-text">{user.name}</label>
            </div>
          ))}
        </form>
      </div>

      
    <Table data={search(Users)} />
    
    </>
  );
};

export default Body;
