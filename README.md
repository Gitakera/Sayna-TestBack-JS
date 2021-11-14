# Sayna-TestBack-JS
Une application de gestion de login (register, login, delete user, edit user) avec cryptage de mots de pass bcrypt et utilisation de token jsonwebtoken
#SCHEMA DE LA BASE DE DONNÉES

  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  email: { type: String, required: true, unique:true },
  date_naissance: { type: Date, required: true },
  token: {  type: String, required: false },
  password: { type: String, required:true},
  createdAt: { type: Date, required: true, default: Date.now}
  
  
