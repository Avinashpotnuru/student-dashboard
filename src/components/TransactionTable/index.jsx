export default function TransactionTable() {
  const transactions = [
    { id: 1, name: "John Doe", amount: 500, date: "2025-04-20" },
    { id: 2, name: "Jane Smith", amount: 700, date: "2025-04-19" },
    { id: 3, name: "Alice Brown", amount: 1000, date: "2025-04-18" },
  ];

  return (
    <table className="min-w-full overflow-hidden bg-white rounded shadow">
      <thead>
        <tr>
          <th className="p-2 text-left border-b">ID</th>
          <th className="p-2 text-left border-b">Name</th>
          <th className="p-2 text-left border-b">Amount</th>
          <th className="p-2 text-left border-b">Date</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map((tx) => (
          <tr key={tx.id}>
            <td className="p-2 border-b">{tx.id}</td>
            <td className="p-2 border-b">{tx.name}</td>
            <td className="p-2 border-b">₹{tx.amount}</td>
            <td className="p-2 border-b">{tx.date}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
