const FormInput = ({
  label,
  type,
  name,
  defaultValue,
  value,
  handleChange,
  notRequired,
}) => {
  return (
    <div className="form-row">
      <label htmlFor={name} className="form-label">
        {label}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        defaultValue={defaultValue}
        value={value}
        onChange={handleChange}
        required={notRequired ? false : true}
        className="form-input"
      />
    </div>
  );
};

export default FormInput;
