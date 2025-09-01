const bcrypt = require('bcrypt');

async function hashPassworfk(params) {
  const myPassword = 'admin456';
  const hash = await  bcrypt.hash(myPassword, 10);
  console.log(hash)
}

hashPassworfk()
