import Users from "@/components/users";
import { getAllUser } from "@/utils/actions/users";

export default async function Page() {
  const users = await getAllUser();

  return (
    <div className="max-w-4xl mx-auto p-6">
      <Users users={users} />
    </div>
  );
}
