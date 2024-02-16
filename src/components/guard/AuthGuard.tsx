import { useUserState } from "@/zustand/store";
import { Navigate, Outlet } from "react-router-dom";

interface Props {
  privateValidation: boolean;
}

const PrivateValidationFragment = <Outlet />;
const PublicValidationFragment = <Navigate replace to={"/tasks"} />;

export const AuthGuard = ({ privateValidation }: Props) => {
  const userState = useUserState((state) => state.user);

  return userState.email ? (
    privateValidation ? (
      PrivateValidationFragment
    ) : (
      PublicValidationFragment
    )
  ) : (
    <Navigate replace to={"/login"} />
  );
};

export default AuthGuard;
