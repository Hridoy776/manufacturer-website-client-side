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
          console.log(data)
        });
    }
  }, [user]);
  return [token];
}

export default UseToken;