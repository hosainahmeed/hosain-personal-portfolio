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
    const { name, email, subject, message } = data;
    try {
      setDisabled(true);
      const templateParams = {
        name,
        email,
        subject,
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
    <div className="flex items-center justify-center min-h-screen">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl mb-5 md:text-[6vw] font-bold text-center md:text-center md:mb-24">Contact Us</h2>
        </div>
        <div className="max-w-lg mx-auto p-8 rounded shadow-md">
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
                className="w-full px-4 py-2 border border-gray-300 rounded outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Name"
              />
              {errors.name && (
                <span className="text-red-500 text-sm">{errors.name.message}</span>
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
                      /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                    message: "Please enter a valid email address",
                  },
                })}
                className="w-full px-4 py-2 border border-gray-300 rounded outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Email address"
              />
              {errors.email && (
                <span className="text-red-500 text-sm">
                  {errors.email.message}
                </span>
              )}
            </div>
            <div className="mb-4">
              <input
                type="text"
                name="subject"
                {...register("subject", {
                  required: "Please enter a subject",
                  maxLength: {
                    value: 75,
                    message: "Subject cannot exceed 75 characters",
                  },
                })}
                className="w-full px-4 py-2 border border-gray-300 rounded outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Subject"
              />
              {errors.subject && (
                <span className="text-red-500 text-sm">
                  {errors.subject.message}
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
                className="w-full px-4 py-2 border border-gray-300 rounded outline-none text-[#212121] focus:ring-2 focus:ring-indigo-500"
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
              className="w-full py-2 px-4 bg-indigo-600 text-white rounded hover:bg-indigo-700 disabled:opacity-50"
              disabled={disabled}
              type="submit"
            >
              Submit
            </button>
          </form>
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
    </div>
  );
}

export default ContactSection;
