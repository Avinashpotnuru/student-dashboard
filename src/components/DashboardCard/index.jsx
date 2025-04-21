/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

export default function DashboardCard({ title, to }) {
  return (
    <Link to={to} className="block">
      <div className="p-4 text-center transition bg-white rounded shadow cursor-pointer hover:shadow-md">
        <h4 className="font-semibold text-gray-700 text-md">{title}</h4>
      </div>
    </Link>
  );
}
