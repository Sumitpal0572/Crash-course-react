import React, { useEffect, useState } from "react";

const User = () => {
  const [users, setUsers] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    setMessage("Welcome! Here is the list of users.");

    const fetchedUsers = [
      { id: 1, name: "John Doe", email: "john@example.com" },
      { id: 2, name: "Jane Smith", email: "jane@example.com" },
      { id: 3, name: "Michael Johnson", email: "michael@example.com" },
    ];
    setUsers(fetchedUsers);
  }, []);

  return (
    <div>
      <h2>User</h2>
      {message && <p>{message}</p>}

      <ul>
        {users.length > 0 ? (
          users.map((user) => (
            <li key={user.id}>
              {user.name} - {user.email}
            </li>
          ))
        ) : (
          <p>No users found.</p>
        )}
      </ul>
    </div>
  );
};

export default User;
