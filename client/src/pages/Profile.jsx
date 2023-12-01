import { useAuth } from "../context/AuthContext";

export const Profile = () => {
  const { user } = useAuth();
  return (
    <>
      <div>Profile</div>
      {JSON.stringify(user, null, 3)}
    </>
  );
};
