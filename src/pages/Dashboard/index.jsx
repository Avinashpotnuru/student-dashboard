import StatCard from "../../components/StatCard";

import Header from "../../components/Header";
import TransactionTable from "../../components/TransactionTable";
import DashboardCard from "../../components/DashboardCard";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header title="Dashboard Overview" />
      <div className="grid grid-cols-1 gap-4 p-4 md:grid-cols-4">
        <StatCard label="Students" value="560" />
        <StatCard label="Today's Transaction" value="25,000" />
        <StatCard label="Wallet Balance" value="2,50,750" />
        <StatCard label="Wallet Balance" value="2,50,750" />
      </div>
      <div className="grid grid-cols-2 gap-4 p-4 md:grid-cols-4">
        <DashboardCard title="Student" to="/students" />
        <DashboardCard title="Vendor/Menu" to="/vendors" />
        <DashboardCard title="Inventory/Stock" to="/inventory" />
        <DashboardCard title="Transaction Wallet" to="/wallet" />
        <DashboardCard title="UPI Manual" to="/upi" />
        <DashboardCard title="Report" to="/reports" />
        <DashboardCard title="RFID" to="/rfid" />
        <DashboardCard title="User Role" to="/user-role" />
      </div>
      <div className="p-4">
        <h3 className="mb-2 text-lg font-semibold">Recent Transactions</h3>
        <TransactionTable />
      </div>
    </div>
  );
}
