import React from 'react';
import User from '../User/User.js';



export default function MembersList({users,updateUser}) {
  return (
   <>
   
   {
       users.map(user => (
         <User 
         key={user.id}
         id={user.id}
         firstname={user.firstname}
         lastname={user.lastname}
         email={user.email}
         permission={user.permission}
         updateUser={updateUser}>

         </User>
        ))
     }
   
      
   </>
  );
}


