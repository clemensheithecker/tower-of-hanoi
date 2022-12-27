type NotificationProps = {
  message: string;
  type: string;
};

const Notification = ({ message, type }: NotificationProps) => {
  if (!["error", "success"].includes(type)) {
    throw new Error("Invalid notification type.");
  }

  return (
    <div className="fixed top-0 z-10">
      <p
        className={`mt-4 flex w-full items-center rounded-lg px-4 py-3 leading-normal  shadow-sm ${
          type === "error"
            ? "bg-red-100 text-red-800"
            : "bg-green-100 text-green-800"
        }`}
      >
        {type === "error" && (
          <span className="mr-3">
            <svg
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        )}
        {message}
      </p>
    </div>
  );
};

export default Notification;
