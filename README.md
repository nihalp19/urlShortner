
# Url Shortner - URLify

Overview A full-stack URL shortening service that allows users to create short links, track analytics, and manage their links. The application features user authentication, link management, and detailed analytics visualization.



# Credentials 

email - test123@gmail.com
password - test123

## Tech Stack

**Client:** React, zustand, TailwindCSS , axios , recharts , react-simple-maps

**Server:** Node, Express , jwt 


## Installation

Install my-project with npm

```bash
  clone https://github.com/nihalp19/urlShortner
  cd frontend
  npm run dev
```
```bash
  clone https://github.com/nihalp19/urlShortner
  cd backend
  npm run dev
```
    
## Deployment
Frontend is deployed on Vercel

Backend is deployed on Railway


## 🔗 Links

Backend Url - https://urlshortner-production-e39c.up.railway.app/

Frontend Url - https://url-shortner-three-sooty.vercel.app/




## Features
- User authentication (login/signup)

- URL shortening functionality

- Detailed analytics including:

- Geographic distribution

- Device and browser breakdown

- Responsive dashboard with data visualizations

- Multiuser support 




### Multiuser Support 

#### Signup function is commented , you can use it to make new users

```javascript
// import User from "../models/user.models.js";
// import bcrypt from "bcryptjs"

// export async function signup (name,email,password){
//     try {
        
//         if(!name || !email || !password )
//         {
//             console.log("missing fields")
//         }

//         const userExists = await User.findOne({email : email})

//         if(userExists){
//             console.log("user already exits")
//             return
//         }

//         const hashedPassword = await bcrypt.hash(password,10)

//         const userCount = await User.find({})
//         await User.create({
//             name,
//             email,
//             password : hashedPassword,
//             userId : userCount.length + 1
//         })

//     } catch (error) {
//         console.log(error.message)
//     }

// }


