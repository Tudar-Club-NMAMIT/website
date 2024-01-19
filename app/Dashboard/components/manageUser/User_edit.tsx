import React from 'react';

const User_edit = () => {
  const users = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Doe' },
    { id: 3, name: 'Bob Smith' },
    { id: 4, name: 'Alice Johnson' },
  ];

  return (
    <div className="container mx-auto mt-8">
      <div className="bg-white shadow-md rounded my-6 overflow-x-auto">
        <table className="min-w-full table-auto">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-2 px-4 text-left">User Name</th>
              <th className="py-2 px-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="border-b">
                <td className="py-2 px-4">{user.name}</td>
                <td className="py-2 px-4 text-right">
                  <button className="bg-red-500 hover:bg-red-700 text-white py-1 px-2 mr-2 rounded-md">
                    Delete
                  </button>
                  <button className="bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded-md">
                    Add Role
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default User_edit;
