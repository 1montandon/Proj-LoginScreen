const users = [
  {
    email: 'lucas',
    senha: 'lucas..99'
  },
  {
    email: 'emontandon11@gmail.com',
    senha: 'eduardo..99'
  },
  {
    email: 'j.vitor10gomes@gmail.com',
    senha: 'lucas..99'
  }
]

function validaUser(email, password) {
  const user = users.find((user) => user.email === email && user.senha === password)
  return user === undefined ? false : true
}
function crearUser(email, password) {
    
}

export { validaUser }
