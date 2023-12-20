interface PopupProps {
  isOpen: boolean;
  onClose: () => void;
  message: string;
}

export default function Popup({ isOpen, onClose, message }: PopupProps) {
  return (
    <div
      className={`fixed inset-0 flex items-center justify-center ${
        isOpen ? "visible" : "invisible"
      }`}
    >
      <div className="bg-white p-10 rounded shadow-lg text-center">
        <p className="text-xl">{message}</p>
        <button
          onClick={onClose}
          className="mt-10 bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-10 rounded"
        >
          Close
        </button>
      </div>
    </div>
  );
}
