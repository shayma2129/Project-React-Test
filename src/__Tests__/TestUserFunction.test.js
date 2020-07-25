import {listUsers,addUser,fetchUserByEmail} 
from "../services/Userservice"

describe("test function of users", () => {
    
   
    test("Testing add a User to the list of users",()=>{
        const expectedUser=[
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
              },{
                id : 3,
                firstname :"Jihen",
                lastname :"Ben Mohamed",
                email :"jihenbenmohamedd@gmail.com",
                password :"111222333",
                confirmPassword:"111222333"

              }
        ]
        addUser("Jihen","Ben Mohamed","jihenbenmohamedd@gmail.com","111222333","111222333")
       // console.log(listUsers)
        expect(listUsers).toEqual(expectedUser)
    })

    test("Testing get user by email", () => {
        //const promise=Promise.resolve()
        let  mockgoodresult=
            {
                id : 1,
                firstname :"chaima",
                lastname :"Haj mohamed",
                email :"chaimahm530@gmail.com",
                password :"123456789",
                confirmPassword:"123456789",
                loggedIn :'false',
                permission :"enable"
            }
        let badresult=
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
        const email="chaimahm530@gmail.com"
        const result=fetchUserByEmail(email)
        //console.log(result)
        expect(result).toEqual(mockgoodresult)
       //expect(result).toEqual(badresult)
       
    })
})