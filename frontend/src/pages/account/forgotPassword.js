import { useState } from "react";
const ForgotPassword = () => {
  const [emailInput, setEmailInput] = useState("");
  console.log(emailInput);
  return (
    <div>
      <h2>To reset your password, enter your email address</h2>
      <form>
        <input
          type="email"
          placeholder="john@example.com"
          value={emailInput}
          onChange={(e) => setEmailInput(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ForgotPassword;
