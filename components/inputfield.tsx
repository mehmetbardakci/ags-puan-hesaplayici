// components/InputField.tsx
interface InputFieldProps {
  id: string;
  label: string;
  max: number;
}

export default function InputField({ id, label, max }: InputFieldProps) {
  return (
    <div>
      <label htmlFor={id} className="block font-medium">
        {label}
      </label>
      <input
        placeholder="Net giriniz."
        type="number"
        id={id}
        name={id}
        max={max}
        min={0}
        step={0.01}
        className="w-full px-3 py-2 border rounded-lg"
      />
    </div>
  );
}
