function Input(props) {
  return (
    <input
      className="w-full p-2 rounded border outline-slate-400"
      type={props.type}
      value={props.value}
      placeholder={props.placeholder}
      onChange={props.onChange}
    />
  )
}

export default Input;