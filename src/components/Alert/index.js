import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Header, Segment, Portal } from "semantic-ui-react";
import { SET_ALERT } from "../../redux/actions/alertActions";

const TIMEOUT = 3000;

const Alert = ({ alert, closeAlert }) => {
  useEffect(() => {
    setTimeout(closeAlert, TIMEOUT);
  }, [alert]);

  if (!alert) return null;

  const { title, message } = alert;

  return (
    <Portal open={!!alert}>
      <Segment
        style={{
          right: "2em",
          position: "fixed",
          top: "2em",
          zIndex: 1000,
          background: "crimson",
        }}
      >
        <Header>{title}</Header>
        <p>{message}</p>
      </Segment>
    </Portal>
  );
};

const mapStateToProps = (state) => ({
  alert: state.alert,
});

const mapDispatchToProps = (dispatch) => ({
  closeAlert: () => dispatch({ type: SET_ALERT, payload: null }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Alert);
