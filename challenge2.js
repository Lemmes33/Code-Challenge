function calculateDemeritPoints(speedLimit, speed) {
    // Validate input (optional)
    if (speed < 0) {
      return "Invalid speed. Please enter a non-negative value.";
    }
  
    const excessSpeed = Math.max(0, speed - speedLimit);
    const demeritPoints = Math.floor(excessSpeed / 5); // Calculate demerit points
  
    if (demeritPoints <= 0) {
      return "Ok";
    } else if (demeritPoints > 12) {
      return "License suspended";
    } else {
      return `Points: ${demeritPoints}`;
    }
  }
  
  // Example usage
  const speedLimit = 70; // Set speed limit
  const carSpeed = 180; // Input car speed
  
  const message = calculateDemeritPoints(speedLimit, carSpeed);
  console.log(message); // Output: Points: 2
  