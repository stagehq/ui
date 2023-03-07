interface InputProps {
  label: string;
  placeholder: string;
  type: string;
  value: string;
}

export const Input = ({ label, placeholder, type }: InputProps) => {
  return (
    <div className="flex flex-col">
      <label className="text-left text-sm font-medium text-[#1eb7a6]">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className="rounded-md border border-gray-300 px-4 py-2 text-left text-sm font-medium text-gray-600 focus:border-[#1eb7a6] focus:outline-none"
      />
    </div>
  );
};
