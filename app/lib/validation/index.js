const validation = async (decoded, request) => {
    //orm get
    try {
      // do your checks to see if the person is valid
      let userId = decoded.userId;
      // Set user id in every request header.
      request.headers.userId = userId;
      //search 
      let user = await User.findOne({});
      if (user) {
        return {
          isValid: true
        };
      } else {
        console.log('Invalid Credential');
        return {
          isValid: false
        };
      }
    } catch (error) {
      return {
        isValid: false
      };
    }
}
  
module.exports = validation