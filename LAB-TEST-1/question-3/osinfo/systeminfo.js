

var os = require('os');

var getSysteminfo = function() {
    architecture = os.arch();
    hostname = os.hostname();
    osName = os.type();
    str = "Operating System Info: CPU architecture: " + architecture + " - Host name: " + hostname + " - OS name: " + osName;
    return str;
}

var getUserInfo = function() {
    userInfo = os.userInfo();
    userName = os.userInfo().username;
    homeDirectory = os.homedir();
    str = "User Info: User name: " + userInfo + " - User name: " + userName + " - Home dir: " + homeDirectory;
    return str;
}

module.exports = {
    getSysteminfo: getSysteminfo,
    getUserInfo: getUserInfo
}