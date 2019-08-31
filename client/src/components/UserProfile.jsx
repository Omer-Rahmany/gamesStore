import Cookies from 'js-cookie';

let UserProfile = (function() {
    let getName = function() {
        return Cookies.get('name')
    };

    let setName = function(name) {
        return Cookies.set('name',name)
    };

    return {
        getName: getName,
        setName: setName
    }

})();

export default UserProfile;