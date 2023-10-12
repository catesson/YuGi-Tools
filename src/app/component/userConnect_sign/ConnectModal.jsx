import { useForm } from "react-hook-form";
import "@/app/styles/form.css";
export function ConnectModal({ visibility, setHidden }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <div
      className={`fixed top-0 left-0 right-0 bottom-0 bg-gray-400 bg-opacity-25 ${
        visibility ? "" : "hidden"
      } flex justify-center items-center minWidth`}
    >
      <div className="bg-white border-4 border-red-900 rounded-xl relative w-5/6 sm:w-1/2 connectForm">
        <form action="" className="flex flex-col justify-center items-center">
          <div className="label-input">
            <label htmlFor="Email">Email</label>
            <input
              id="Email"
              data-test-id="Email"
              type="email"
              placeholder="Email"
              {...register("Email")}
            />
          </div>
          <div className="label-input">
            <label htmlFor="Password">Password</label>
            <input
              id="Password"
              data-test-id="Password"
              type="password"
              placeholder="Password"
              {...register("Password")}
            />
          </div>
          <button onClick={setHidden}>Cancel</button>
        </form>
      </div>
    </div>
  );
}
