import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import UsersRow from './UsersRow';

const MakeAdmin = () => {

  const { data: users, isLoading, refetch } = useQuery('users', () => fetch(`https://tranquil-brook-25862.herokuapp.com/user`, {
    method: 'GET',
    headers: {
      'authorization': `Bearer ${localStorage.getItem("access-token")}`
    }
  }).then(res => res.json()))
  if (isLoading) {
    return <Loading />
  }


  return (
    <div className="overflow-x-auto">
      <table className="table w-full">

        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Job</th>
            
          </tr>
        </thead>
        <tbody>

          {
            users.map((user, index) => <UsersRow index={index} refetch={refetch} key={user._id} user={user} />)
          }

        </tbody>
      </table>
    </div>
  );
};

export default MakeAdmin;