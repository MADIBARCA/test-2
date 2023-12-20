interface FormInputProps {
  isChecked: boolean;
  setIsChecked: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function FormCheckbox({
  isChecked,
  setIsChecked,
}: FormInputProps) {
  return (
    <div className="form-control">
      <label className="label cursor-pointer justify-start gap-2">
        <input
          type="checkbox"
          className="checkbox checkbox-primary"
          onClick={() => setIsChecked(!isChecked)}
        />
        <span className="label-text">I agree</span>
      </label>
    </div>
  );
}
