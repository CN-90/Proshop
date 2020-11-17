import bcrypt from 'bcryptjs';

const users = [
  {
    name: "Admin Man",
    email: "AdminMan@gmail.com",
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true
  },
  {
    name: "Tina Rhino",
    email: "Trhino@gmail.com",
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: "Elizabeth Muffintop",
    email: "Emuffintop@gmail.com",
    password: bcrypt.hashSync('123456', 10),
  },
]

export default users;