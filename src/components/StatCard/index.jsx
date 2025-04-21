/* eslint-disable react/prop-types */
export default function StatCard({ label, value }) {
  return (
    <div className="p-4 bg-white rounded shadow">
      <p className="text-gray-600">{label}</p>
      <h3 className="text-xl font-bold">{value}</h3>
    </div>
  );
}
