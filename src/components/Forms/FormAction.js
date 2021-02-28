function FormAction({caption, onClick}){
  let myClasses = [
    "bg-blue-500",
    "hover:bg-blue-700",
    "text-white",
    "font-bold",
    "py-2",
    "px-4",
    "rounded",
    "w-full"

  ];
  return(
    <button
      onClick={onClick}
      className={myClasses.join(" ")}
    >
      {caption}
    </button>
  );
}

export default FormAction;
