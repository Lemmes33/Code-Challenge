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
  
  