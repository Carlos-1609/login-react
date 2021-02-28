function FormField({ type, id, fname, onChange, caption, value, error, ...attr}){
  let lblclasses=[
    "block",
    "text-gray-400",
    "text-sm",
    "font-bold",
    "mb-2"
  ];

  let inclasses=[
    "shadow",
    "appereance-none",
    "rounded",
    "w-full",
    "py-2",
    "px-3",
    "text-gray-400",
    "mb-3",
    "shadow-md"

  ];

  return (
    <section>
    <label className={lblclasses.join(" ")} >{caption}</label>
    <input
        type={type}
        id={id}
        name={fname}
        onChange={onChange}
        value={value}
        {...attr}
        className={inclasses.join(" ")}
    />
      {(error && true) ? (<section>{error}</section>):null }
    </section>
  )
}

export default FormField;
