const registeUser = async (req, res) => {
  // Create user in database
  // Validate user data
  // Check if user already exists
  // Create a new user record in the database
  // Create a Verification token then save token in Database and send it to the user email
  // Send verification email to the user
  // Send response to the client

  res.send('User Registered');
};

const loginUser = async (req, res) => {
  res.send('User Logged In');
};


export { registeUser, loginUser };
