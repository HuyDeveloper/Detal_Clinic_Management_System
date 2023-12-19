import "../App.css";
import DateFilterComponent from "../components/DateFilterComponent";
export default function ListAppointment() {
  const data = [
    { id: 1, name: "Item 1", price: "$10" },
    { id: 2, name: "Item 2", price: "$20" },
    { id: 3, name: "Item 2", price: "$20" },
    { id: 4, name: "Item 2", price: "$20" },
    { id: 5, name: "Item 2", price: "$20" },
    { id: 6, name: "Item 2", price: "$20" },
    { id: 7, name: "Item 2", price: "$20" },
    { id: 8, name: "Item 2", price: "$20" },
    { id: 9, name: "Item 2", price: "$20" },
    { id: 10, name: "Item 2", price: "$20" },
    { id: 11, name: "Item 2", price: "$20" },
    { id: 12, name: "Item 2", price: "$20" },
  ];

  return (
    <div>
      <h3>Appointments</h3>
      <DateFilterComponent />
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>
                  <button className="gray-button">Edit</button>
                  <button className="red-button">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
