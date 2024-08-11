import UserCard from "@/components/user-card";

interface User {
  _id: string;
  username: string;
  email: string;
  role: string;
  createdAt: string;
  updatedAt: string;
}

const Users = ({ users }: { users: User[] }) => {
  return (
    <div className="p-6 bg-gray-100 rounded-md shadow-md">
      <h1 className="text-2xl font-bold mb-4 text-center">User List</h1>
      {users && users.length > 0 ? (
        <ul className="space-y-4">
          {users.map((user) => (
            <UserCard key={user._id} user={user} />
          ))}
        </ul>
      ) : (
        <p className="text-center text-gray-500">No users found.</p>
      )}
    </div>
  );
};

export default Users;
