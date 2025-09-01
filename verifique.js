const bcrypt = require('bcrypt');

async function hashPassworfk(params) {
  const myPassword = 'admin456';
  const hash = '$2b$10$dsn8e7EBS8pGWQLlqgMKG.WuvgogFSREr9y5a27KluknE04Gmhy/W'
  const isMactch = await  bcrypt.compare(myPassword, hash);
  console.log(isMactch)
}

hashPassworfk()
