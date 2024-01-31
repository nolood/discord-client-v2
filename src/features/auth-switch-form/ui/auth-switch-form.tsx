import { type FC } from "react";
import { Link, useLocation } from "react-router-dom";
import { paths } from "~/shared/constants/paths.ts";

const AuthSwitchForm: FC = () => {
  const location = useLocation();

  const wrapperClassName = "flex gap-[1rem]";
  const linkClassName = "underline cursor-pointer text-primary";

  if (location.pathname === "/register") {
    return (
      <div className={wrapperClassName}>
        <p>Already have an account?</p>
        <Link className={linkClassName} to={paths.login}>
          Login!
        </Link>
      </div>
    );
  }

  if (location.pathname === "/login") {
    return (
      <div className={wrapperClassName}>
        <p>Dont have an account?</p>
        <Link className={linkClassName} to={paths.register}>
          Register!
        </Link>
      </div>
    );
  }

  return null;
};

export default AuthSwitchForm;
