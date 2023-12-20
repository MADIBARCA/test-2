import { useRef, useState } from "react";

import { useHistory } from "react-router";

interface HoldButtonProps {
  email: string;
  isValidEmail: (email: string) => boolean;
  isChecked: boolean;
}

export default function HoldButton({
  email,
  isValidEmail,
  isChecked,
}: HoldButtonProps) {
  const history = useHistory();

  let counter = 0;
  let timerinterval = useRef((null as unknown) as any);

  const [ms, setMs] = useState(counter);

  const timer = (start: any) => {
    if (start === true && counter >= 50) {
      timerinterval.current = setInterval(() => {
        setMs(counter);
        counter += 50;

        if (counter > 500) {
          clearInterval(timerinterval.current);
          history.push("/login/step-2");
        }
        //@ts-ignore
      }, [50]);
    } else {
      setMs(0);
    }
  };

  const pressingDown = (e: any) => {
    e.preventDefault();
    counter = 50;
    timer(true);
  };

  const notPressingDown = (e: any) => {
    e.preventDefault();
    timer(false);
    setMs(0);
    clearInterval(timerinterval.current);
  };

  return (
    <button
      onMouseDown={pressingDown}
      onMouseUp={notPressingDown}
      onTouchStart={pressingDown}
      onTouchEnd={notPressingDown}
      disabled={!isValidEmail(email) || !isChecked}
      className="btn btn-primary mt-auto"
    >
      Hold to proceed {ms !== 0 && ms + `ms`}
    </button>
  );
}
