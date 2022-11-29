interface InputProps {
  label: string;
  placeholder: string;
  type: string;
  value: string;
}

export const Input = ({ label, placeholder, type }: InputProps) => {
  return (
    <div className="flex flex-col">
      <label className="text-sm font-medium text-left text-[#1eb7a6]">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className="px-4 py-2 text-sm font-medium text-left text-gray-600 border border-gray-300 rounded-md focus:outline-none focus:border-[#1eb7a6]"
      />
    </div>
  );
};
