type StatusProps = {
  // Currently it is defined as string but user can assign any value in string to prevent that we will use another method
  //   status: string;
  status: "loading" | "success" | "error";
};

export default function Status({ status }: StatusProps) {
  let message;
  if (status === "loading") {
    return (message = "The Data is Loading");
  } else if (status === "success") {
    return (message = "The Data Loaded Successfully");
  } else if (status === "error") {
    return message === "An Error Occured While Fetching Data";
  }

  return (
    <div>
      <h1>Advanced Props in React Typescript</h1>

      <h5>Status -{message}</h5>
    </div>
  );
}
