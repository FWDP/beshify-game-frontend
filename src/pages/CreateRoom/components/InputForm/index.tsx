import { Controller, useFormContext } from "react-hook-form";
import { FormInputProps } from "./types";

export const FormInput: React.FC<FormInputProps> = ({
  name,
  label,
  type = "text",
  defaultValue = "",
  trigger,
  minLength,
  maxLength,
  ...restProps
}) => {
  const { control, formState } = useFormContext();
  const { errors } = formState;

  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      rules={{
        required: true,
        minLength: minLength,
        maxLength: maxLength,
      }}
      render={({ field }) => {
        const isInvalid = formState.touchedFields[name] && !!errors[name];
        const isRequired = errors[name]?.type === "required";
        const isMaxLength = errors[name]?.type === "maxLength";

        return (
          <div className="flex flex-col md:flex-wrap max-w-[36rem] item-center justify-center">
            <label className="text-2xl">✨{label}✨</label>
            <input
              {...field}
              onChange={(e) => {
                field.onChange(e);
                trigger(name);
              }}
              id={name}
              type={type}
              placeholder={label}
              className="custom-placeholder input input-bordered input-sm my-3 h-[3.5rem] w-full"
              {...restProps}
            />

            <span className="text-[#FF3737]">
              {isInvalid
                ? isRequired
                  ? `${label} is required`
                  : isMaxLength
                  ? `${label} should not be more than ${maxLength} characters`
                  : `${label} should not be less than ${minLength} characters`
                : ""}
            </span>
          </div>
        );
      }}
    />
  );
};
