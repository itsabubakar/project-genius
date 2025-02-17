import { Controller } from "react-hook-form";


const SelectField = ({ label, name, control, options, errors, onChange }) => (
  <div className="flex flex-col gap-2">
    <label className="font-medium text-greyscale_subtitle">{label}</label>
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <select
          {...field}
          onChange={(e) => {
            field.onChange(e);
            if (onChange) onChange(e.target.value);
          }}
          className="inter w-full md:w-[340px] px-4 py-3 text-greyscale_text bg-greyscale_surface_subtle rounded-lg shadow-sm focus:outline-primary_hover"
        >
          <option value="">Select an option</option>
          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      )}
    />
    {errors && <span className="text-red-500 text-sm">{errors.message}</span>}
  </div>
);
export default SelectField;
