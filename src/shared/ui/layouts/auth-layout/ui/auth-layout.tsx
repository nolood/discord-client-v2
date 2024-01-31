import { type FC } from "react";
import { Outlet } from "react-router-dom";
import { Card, CardContent, CardFooter, CardHeader } from "~/shared/ui/card";
import { AuthSwitchForm } from "~/features/auth-switch-form/ui";

const AuthLayout: FC = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center px-[40px]">
      <Card className="max-w-[900px] w-full">
        <CardHeader>
          <h1 className="text-2xl text-center font-bold">Welcome!</h1>
        </CardHeader>
        <CardContent>
          <Outlet />
        </CardContent>
        <CardFooter>
          <AuthSwitchForm />
        </CardFooter>
      </Card>
    </div>
  );
};

export default AuthLayout;
