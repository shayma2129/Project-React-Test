
export const listUsers =[
    {
      id : 1,
      firstname :"chaima",
      lastname :"Haj mohamed",
      email :"chaimahm530@gmail.com",
      password :"123456789",
      confirmPassword:"123456789",
      loggedIn :'false',
      permission :"enable"

    },
    {
      id : 2,
      firstname :"hatem",
      lastname :"Haj mohamed",
      email :"hatemhm@gmail.com",
      password :"123456789",
      confirmPassword:"123456789",
      loggedIn :'false',
      permission :"disable"
    }
  ];
export const addUser= (firstname,lastname,email,password,confirmPassword)=>{
    listUsers.push({id:listUsers.length+1,firstname,lastname,email,password,confirmPassword})
 } 
/*function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}*/
export const fetchUserByEmail =  (email) => {
  //await delay(500); async
  return listUsers.find((user) => user.email === email);
};