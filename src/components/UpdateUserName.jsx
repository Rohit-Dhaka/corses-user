import React, { useState } from 'react';
import axios from 'axios';

const UpdateUsername = () => {
  const [email, setEmail] = useState('');
  const [newName, setNewName] = useState('');
  const [message, setMessage] = useState('');

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`http://localhost:3000/user/update-name`, {
        email, 
        newName,
      });
      setMessage(response.data.msg);      
      setEmail('');
      setNewName('');
    } catch (error) {
      setMessage(`Error: ${error.response ? error.response.data : 'Update failed'}`);
    }
  };

  return (
    <div>   
      <h2>Update Username</h2>
      <form onSubmit={handleUpdate}>
        <div>
          <label>User email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>New Username:</label>
          <input
            type="text"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            required
          />
        </div>
        <button type="submit">Update Username</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default UpdateUsername;
