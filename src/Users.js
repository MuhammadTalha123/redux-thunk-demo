import React from "react";
import { fetchUser } from "./redux/actionCreator";
import { connect } from "react-redux";
import store from "./redux/store";

const Users = (props) => {
  return (
    <div>
      <h1>Users</h1>
      {props.loading ? (
        <div>Loading...</div>
      ) : (
        <ol style={{ listStyle: "none" }}>
          {props.users.map((data, i) => {
            return (
              <li key={i} style={{ marginTop: "20px" }}>
                {`Name: ${data.name}, Email: ${data.email} `}
              </li>
            );
          })}
        </ol>
      )}
      <button onClick={() => store.dispatch(fetchUser())} className="btn">
        Load Data
      </button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    loading: state.loading,
    users: state.users,
    error: state.error,
  };
};

export default connect(mapStateToProps)(Users);
