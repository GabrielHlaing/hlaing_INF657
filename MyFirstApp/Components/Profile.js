import React from 'react';

export default function Profile({name}) {
    return (
      <div>
        <img
          src="https://i.pravatar.cc/150?img=13" // I cannot use my photo, so I use a link for placeholder
          alt="User Profile"
        />
        <h3>My name is {name}</h3>
      </div>
    );
  };
