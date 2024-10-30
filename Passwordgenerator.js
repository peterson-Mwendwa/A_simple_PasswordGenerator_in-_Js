function generateStrongPassword(length) {
    // Define character sets
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const specialChars = "!@#$%^&*()_+~`|}{[]:;?><,./-=";
  
    // Ensure the password has at least one of each character type
    if (length < 4) {
      throw new Error("Password length must be at least 4 characters.");
    }
  
    const passwordArray = [
      uppercase[Math.floor(Math.random() * uppercase.length)],
      lowercase[Math.floor(Math.random() * lowercase.length)],
      numbers[Math.floor(Math.random() * numbers.length)],
      specialChars[Math.floor(Math.random() * specialChars.length)],
    ];
  
    // Fill the rest of the password length with random characters
    const allCharacters = uppercase + lowercase + numbers + specialChars;
    for (let i = 4; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * allCharacters.length);
      passwordArray.push(allCharacters[randomIndex]);
    }
  
    // Shuffle the password to ensure randomness
    const shuffledPassword = passwordArray.sort(() => Math.random() - 0.5).join('');
    return shuffledPassword;
  }
  
  // Example: Generate a strong password of length 12
  const password = generateStrongPassword(12);
  console.log("Generated Strong Password: ", password);
  