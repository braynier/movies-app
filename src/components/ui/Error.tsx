import { useRouteError } from "react-router-dom";
import BackButton from "../BackButton";

function Error() {
  const error = useRouteError();
  console.log(error);

  let errorMessage: string;
  if (typeof error === "object" && error !== null) {
    if ("data" in error && typeof error.data === "string") {
      errorMessage = error.data;
    } else if ("message" in error && typeof error.message === "string") {
      errorMessage = error.message;
    } else {
      errorMessage = "An unknown error occurred.";
    }
  } else {
    errorMessage = "An unknown error occurred.";
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="mb-2 text-center text-2xl text-neutral-700/75 dark:text-neutral-300">
        Something went wrong 😐
      </h1>
      <p className="text-center text-neutral-700/75 dark:text-neutral-300">
        {errorMessage}
      </p>

      <BackButton />
    </div>
  );
}

export default Error;
