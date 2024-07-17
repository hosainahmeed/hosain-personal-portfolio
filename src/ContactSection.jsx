import { useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";

function ContactSection() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [disabled, setDisabled] = useState(false);
  const [alertInfo, setAlertInfo] = useState({
    display: false,
    message: "",
    type: "",
  });

  const toggleAlert = (message, type) => {
    setAlertInfo({ display: true, message, type });
    setTimeout(() => {
      setAlertInfo({ display: false, message: "", type: "" });
    }, 5000);
  };

  const onSubmit = async (data) => {
    const { name, email, message } = data;
    try {
      setDisabled(true);
      const templateParams = {
        name,
        email,
        message,
      };

      await emailjs.send(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_PUBLIC_KEY
      );

      toggleAlert("Form submission was successful!", "success");
    } catch (e) {
      console.error(e);
      toggleAlert("Uh oh. Something went wrong.", "danger");
    } finally {
      setDisabled(false);
      reset();
    }
  };

  return (
    <div className="flex flex-col items-start md:items-center justify-center pb-[10vw] px-4 md:px-0 md:max-w-[1140px] md:mx-auto">
      <div className="mb-12 text-center">
        <h2 className="text-[12vw] mb-2 md:text-[8vw] md:mb-16 font-bold text-transparent contact">Let's talk</h2>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center w-full">
        <div className="w-full max-w-lg rounded">
          <form id="contact-form" onSubmit={handleSubmit(onSubmit)} noValidate>
            <div className="mb-4">
              <input
                type="text"
                name="name"
                {...register("name", {
                  required: "Please enter your name",
                  maxLength: {
                    value: 30,
                    message: "Please use 30 characters or less",
                  },
                })}
                className="w-full bg-[#1A1A1A] text-sm font-extralight px-4 py-2 border border-gray-600 rounded outline-none h-[4.5rem]"
                placeholder="Name"
              />
              {errors.name && (
                <span className="text-red-500 text-sm">
                  {errors.name.message}
                </span>
              )}
            </div>
            <div className="mb-4">
              <input
                type="email"
                name="email"
                {...register("email", {
                  required: "Please enter a valid email address",
                  pattern: {
                    value:
                      /^[a-zA-Z0-9.!#$%&’*+/=?^_{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                    message: "Please enter a valid email address",
                  },
                })}
                className="w-full bg-[#1A1A1A] text-sm font-extralight px-4 py-2 border border-gray-600 rounded outline-none h-[4.5rem]"
                placeholder="Email address"
              />
              {errors.email && (
                <span className="text-red-500 text-sm">
                  {errors.email.message}
                </span>
              )}
            </div>
            <div className="mb-4">
              <textarea
                rows={5}
                name="message"
                {...register("message", {
                  required: "Please enter a message",
                })}
                className="w-full bg-[#1A1A1A] text-sm font-extralight px-4 py-2 border border-gray-600 rounded outline-none text-gray-200"
                placeholder="Message"
                style={{ resize: "none" }}
              ></textarea>
              {errors.message && (
                <span className="text-red-500 text-sm">
                  {errors.message.message}
                </span>
              )}
            </div>
            <button
              className="w-full bg-white text-black py-2 px-4 rounded hover:opacity-70 transition-all font-bold disabled:opacity-50"
              disabled={disabled}
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
        <div className="p-4 h-full w-full mx-auto mt-16 md:w-auto md:mt-0 flex flex-col gap-12">
          <div className="flex items-center justify-start gap-12">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 256"
              focusable="true"
              style={{
                userSelect: "none",
                width: "71px",
                height: "71px",
                display: "inline-block",
                fill: "var(--token-6b60c4fa-a3b2-4ea3-8e1a-4202c7b68ede, rgba(255, 255, 255, 0.5))",
                color:
                  "var(--token-6b60c4fa-a3b2-4ea3-8e1a-4202c7b68ede, rgba(255, 255, 255, 0.5))",
                flexShrink: 0,
                border: "1px solid #fff",
                padding: "15px",
              }}
            >
              <g fill="rgba(255, 255, 255, 0.5)">
                <path d="M245.54,69.71A6,6,0,0,0,240,66H208.4a46.6,46.6,0,0,0-40.33-24,44.93,44.93,0,0,0-32.31,13.12A45.92,45.92,0,0,0,122,88v8.66c-42-10-76.6-44.52-77-44.88A6,6,0,0,0,34.8,55.46c-4.25,47.22,9.42,78.75,21.64,96.89a107.71,107.71,0,0,0,23.07,25c-15.49,19-41.34,28.89-41.62,29a6,6,0,0,0-2.88,9C36,216.83,45.78,230,80,230c69.88,0,128.23-54,133.82-123.34l30.42-30.41A6,6,0,0,0,245.54,69.71ZM203.76,99.76a6,6,0,0,0-1.75,3.86C197.93,167.76,144.33,218,80,218c-14,0-22.76-2.41-28.06-4.8,11.3-5.68,29.72-16.88,41.05-33.87a6,6,0,0,0,.85-4.67A6,6,0,0,0,91,170.82c-.13-.08-13.13-7.86-25-25.72C52,124,45.31,98.43,46,68.88c14.88,12.6,45.57,35.09,81,41a6,6,0,0,0,7-5.92V88a34,34,0,0,1,10.19-24.34A33.05,33.05,0,0,1,167.93,54c13.43.17,26,8.37,31.24,20.4a6,6,0,0,0,5.5,3.6h20.84Z" />
              </g>
            </svg>
            <span>Instagram</span>
          </div>
          <div className="flex items-center justify-start gap-12">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 256"
              focusable="false"
              style={{
                userSelect: "none",
                width: "71px",
                height: "71px",
                display: "inline-block",
                fill: "var(--token-6b60c4fa-a3b2-4ea3-8e1a-4202c7b68ede, rgba(255, 255, 255, 0.5))",
                color:
                  "var(--token-6b60c4fa-a3b2-4ea3-8e1a-4202c7b68ede, rgba(255, 255, 255, 0.5))",
                flexShrink: 0,
                border: "1px solid #fff",
                padding: "15px",
              }}
            >
              <g fill="rgba(255, 255, 255, 0.5)">
                <path d="M128,82a46,46,0,1,0,46,46A46.06,46.06,0,0,0,128,82Zm0,80a34,34,0,1,1,34-34A34,34,0,0,1,128,162ZM176,26H80A54.06,54.06,0,0,0,26,80v96a54.06,54.06,0,0,0,54,54h96a54.06,54.06,0,0,0,54-54V80A54.06,54.06,0,0,0,176,26Zm42,150a42,42,0,0,1-42,42H80a42,42,0,0,1-42-42V80A42,42,0,0,1,80,38h96a42,42,0,0,1,42,42ZM190,76a10,10,0,1,1-10-10A10,10,0,0,1,190,76Z"></path>
              </g>
            </svg>
            <span>Twitter</span>
          </div>
          <div className="flex items-center justify-start gap-12">
            <svg 
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 256"
              focusable="false"
              style={{
                userSelect: "none",
                width: "71px",
                height: "71px",
                display: "inline-block",
                fill: "var(--token-6b60c4fa-a3b2-4ea3-8e1a-4202c7b68ede, rgba(255, 255, 255, 0.5))",
                color:
                  "var(--token-6b60c4fa-a3b2-4ea3-8e1a-4202c7b68ede, rgba(255, 255, 255, 0.5))",
                flexShrink: 0,
                border: "1px solid #fff",
                padding: "15px",
                
              }}
            >
              <g fill="rgba(255, 255, 255, 0.5)">
                <path d="M128,82a46,46,0,1,0,46,46A46.06,46.06,0,0,0,128,82Zm0,80a34,34,0,1,1,34-34A34,34,0,0,1,128,162ZM176,26H80A54.06,54.06,0,0,0,26,80v96a54.06,54.06,0,0,0,54,54h96a54.06,54.06,0,0,0,54-54V80A54.06,54.06,0,0,0,176,26Zm42,150a42,42,0,0,1-42,42H80a42,42,0,0,1-42-42V80A42,42,0,0,1,80,38h96a42,42,0,0,1,42,42ZM190,76a10,10,0,1,1-10-10A10,10,0,0,1,190,76Z"></path>
              </g>
            </svg>
            <span>Instagram</span>
          </div>
        </div>
      </div>
      {alertInfo.display && (
        <div
          className={`mt-4 p-4 border rounded ${
            alertInfo.type === "success"
              ? "bg-green-100 border-green-400 text-green-700"
              : "bg-red-100 border-red-400 text-red-700"
          }`}
          role="alert"
        >
          {alertInfo.message}
          <button
            type="button"
            className="ml-2 text-lg font-bold"
            onClick={() =>
              setAlertInfo({ display: false, message: "", type: "" })
            }
          >
            &times;
          </button>
        </div>
      )}
    </div>
  );
}

export default ContactSection;
