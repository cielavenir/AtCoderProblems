import React from "react";
import { Alert } from "reactstrap";
import { Link } from "react-router-dom";
import { UserResponse } from "../Internal/types";
import { ACCOUNT_INFO } from "../../utils/RouterPath";
import { useLoginLink } from "../../utils/Url";

interface Props {
  user: UserResponse | undefined;
  loading: boolean;
}
export const LoginAdvice: React.FC<Props> = (props) => {
  const loginLink = useLoginLink();

  if (props.loading) {
    return <Alert color="primary">Loading user info...</Alert>;
  }
  if (!props.user) {
    return (
      <Alert color="danger">
        <a href={loginLink}>Login</a> to record your progress.
      </Alert>
    );
  }
  if (!props.user.atcoder_user_id) {
    return (
      <Alert color="warning">
        <Link to={ACCOUNT_INFO}>Set your AtCoder ID.</Link>
      </Alert>
    );
  }

  return (
    <Alert color="success">Training as {props.user.atcoder_user_id}</Alert>
  );
};
