interface User {
  _id: string;
  username: string;
  email: string;
  role: string;
  createdAt: string;
  updatedAt: string;
}

const UserCard = ({ user }: { user: User }) => {
  return (
    <li className="p-4 bg-white rounded-md shadow hover:shadow-lg transition-shadow">
      <p className="text-lg">
        <strong>Username:</strong> {user.username}
      </p>
      <p className="text-lg">
        <strong>Email:</strong> {user.email}
      </p>
      <p className="text-lg">
        <strong>Role:</strong> {user.role}
      </p>
      <p className="text-sm text-gray-500">
        <strong>Created At:</strong> {new Date(user.createdAt).toLocaleString()}
      </p>
      <p className="text-sm text-gray-500">
        <strong>Updated At:</strong> {new Date(user.updatedAt).toLocaleString()}
      </p>
    </li>
  );
};

export default UserCard;
