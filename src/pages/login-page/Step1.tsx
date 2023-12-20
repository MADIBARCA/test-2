import { useEffect, useState } from "react";

import FormCheckbox from "./components/FormCheckbox";
import FormInput from "./components/FormInput";
import HoldButton from "./components/HoldButton";

export default function Step1() {
  const [email, setEmail] = useState(localStorage.getItem("email") ?? "");
  const [isChecked, setIsChecked] = useState(false);

  function isValidEmail(email: string) {
    return /\S+@\S+\.\S+/.test(email);
  }

  useEffect(() => {
    if (isValidEmail(email)) {
      localStorage.setItem("email", email);
    } else {
      localStorage.setItem("email", "");
    }
  }, [email]);

  return (
    <>
      <FormInput email={email} setEmail={setEmail} />
      <div className="p-1" />
      <FormCheckbox isChecked={isChecked} setIsChecked={setIsChecked} />
      <HoldButton
        email={email}
        isValidEmail={isValidEmail}
        isChecked={isChecked}
      />
    </>
  );
}
