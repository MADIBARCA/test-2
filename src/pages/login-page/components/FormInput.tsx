interface FormInputProps {
  email: string;
  setEmail?: React.Dispatch<React.SetStateAction<string>>;
}

export default function FormInput({ email, setEmail }: FormInputProps) {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Call the setEmail function to update the email state
    if (setEmail)
    setEmail(e.target.value);
  };

  return (
    <label className="form-control">
      <div className="label">
        <span className="label-text">Email</span>
      </div>
      <input
        type="text"
        placeholder="Type here"
        className="input"
        value={email}
        onChange={handleInputChange}
        disabled={setEmail? false : true}
      />
      {/* <div className="label">
                <span className="label-text-alt">Helper text</span>
            </div> */}
    </label>
  );
}
