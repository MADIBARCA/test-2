import { useState } from "react";
import { useHistory } from "react-router";

import FormInput from "./components/FormInput";
import Popup from "./components/Popup";

export default function Step2() {
  const baseUrl = window.location.origin;

  const email = localStorage.getItem("email") ?? "";

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const history = useHistory();

  const [isPopupOpen, setPopupOpen] = useState(false);

  const closePopup = () => {
    setPopupOpen(false);
  };

  const onSendEmail = () => {
    setLoading(true);
    const res = fetch(`${baseUrl}/api/endpoint`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    })
      .then((res) => {
        if (res.status === 200) {
          setMessage("Success!");
        } else {
          setMessage("Error!");
        }
        setPopupOpen(true);
        setLoading(false);
      })
      .catch(() => {
        setMessage("Error!");
        setPopupOpen(true);
        setLoading(false);
      });

    return res;
  };

  return (
    <>
      <Popup isOpen={isPopupOpen} onClose={closePopup} message={message} />
      <FormInput email={email} />

      <div className="flex space-x-4 mt-auto">
        <button
          className="btn btn-secondary  flex-1"
          onClick={() => history.push("/login/step-1")}
        >
          Back
        </button>
        {loading ? (
          "...Loading"
        ) : (
          <button className="btn btn-primary flex-1" onClick={onSendEmail}>
            Confirm
          </button>
        )}
      </div>
    </>
  );
}
