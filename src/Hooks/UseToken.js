import React, { useEffect, useState } from 'react';

const UseToken = (user) => {
    const [token, setToken] = useState("");

  useEffect(() => {
    const email = user?.user?.email;
    const updatedUser = { email };
    if (user) {
      fetch(`http://localhost:5000/user/${email}`, {
        method: "PUT",
        
        body: JSON.stringify(updatedUser),
      })
        .then((res) => res.json())
        .then((data) => {
          const token=data.token;
          localStorage.setItem('access-token',token)
        });
    }
  }, [user]);
  return [token];
}

export default UseToken;