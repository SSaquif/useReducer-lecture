const FormField = ({ label, value, onChange }) => {
  return (
    <div>
      <label>{label}</label>
      <input value={value} onChange={onChange} />
    </div>
  );
};

export default FormField;
