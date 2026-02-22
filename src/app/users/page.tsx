"use client";
import axios from "axios";
import React, { useEffect } from "react";

function Users() {
  const [users, setUsers] = React.useState([]);
  useEffect(() => {
    axios.get("/api/users").then((res) => setUsers(res.data.users));
  }, []);
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Users</h1>
      <ul className="space-y-2">
        {users.map((user: any) => (
          <li key={user.id} className="p-4 bg-white rounded shadow">
            <p className="text-lg font-semibold">{user.email}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Users;
