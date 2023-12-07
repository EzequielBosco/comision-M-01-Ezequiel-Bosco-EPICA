import { useAuth } from "../context/AuthContext";

export const Profile = () => {
  const { user } = useAuth();

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-semibold mb-4">Perfil de Usuario</h1>
      <div className="mb-4">
        <span className="text-gray-600">Nombre de usuario:</span>
        <span className="ml-2">{user.username}</span>
      </div>
      <div className="mb-4">
        <span className="text-gray-600">Correo electrónico:</span>
        <span className="ml-2">{user.email}</span>
      </div>
    </div>
  );
};
