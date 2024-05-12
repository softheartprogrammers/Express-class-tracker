const bcrypt = require('bcryptjs');

exports.hashPassword = async password => {
    const salt = await bcrypt.genSalt(12);
    const hash = bcrypt.hash(password, salt);
    return hash;
}

exports.isPassMatched = async (password, hash)=>{
    return await bcrypt.compare(password, hash);
}