import React, { useEffect, useState } from 'react';

const UseToken = (user) => {
  const [token, setToken] = useState("");

  useEffect(() => {
    const email = user?.user?.email;

    const updatedUser = {
      name: user?.user?.displayName,
      email: email
    };
    if (user) {
      fetch(`https://tranquil-brook-25862.herokuapp.com/user/${email}`, {
        method: "PUT",
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(updatedUser),
      })
        .then((res) => res.json())
        .then((data) => {
          const token = data.token;
          localStorage.setItem('access-token', token)
          setToken(token)
        });
    }
  }, [user]);
  return [token];
}

export default UseToken;