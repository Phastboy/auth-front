import { getStats } from "@/utils/actions/get";
import { User, PieChart } from "lucide-react";

export default async function Page() {
  const stats = await getStats();

  console.log("Total Users:", stats.totalUsers);
  console.table(stats.rolesDistribution);

  return (
    <div className="p-6 bg-gray-100 rounded-md shadow-md">
      <h1 className="text-2xl font-bold mb-4 text-center">Admin Dashboard</h1>

      <div className="mb-6 flex items-center space-x-4">
        <User className="w-6 h-6 text-gray-700" />
        <div>
          <h2 className="text-xl font-semibold">
            Total Users: {stats.totalUsers}
          </h2>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-2 flex items-center space-x-2">
          <PieChart className="w-6 h-6 text-gray-700" />
          <span>Roles Distribution:</span>
        </h2>
        <ul className="list-disc pl-5">
          {stats.rolesDistribution.map((role: any) => (
            <li key={role._id} className="text-lg">
              {role._id}: {role.count}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
