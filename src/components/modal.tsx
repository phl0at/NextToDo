import React from "react";

const Modal = ({
  show,
  onClose,
  onConfirm,
  children,
}: {
  show: boolean;
  onClose: () => void;
  onConfirm: () => void;
  children: string;
}) => {
  if (!show) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white p-6 rounded-md max-w-md w-full text-center"
        onClick={(e) => e.stopPropagation()} // Prevents closing when clicking inside the modal content
      >
        {children}
        <div className="mt-6 flex justify-center">
          <button
            onClick={onConfirm}
            className="bg-red-600 text-white px-4 py-2 mr-4 rounded-md hover:bg-red-700 focus:outline-none"
          >
            Yes, Delete
          </button>
          <button
            onClick={onClose}
            className="bg-gray-600 text-white px-4 py-2 rounded-md hover:bg-gray-700 focus:outline-none"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
