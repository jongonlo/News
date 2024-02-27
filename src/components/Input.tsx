
interface InputProps {
  label?: string;
  value?: string;
  placeholder?: string;
  inputClassName?:string;
  labelClassName?:string;
  type: string;
  _default?: boolean;
  onChange: (value: any) => void; 
  onKeyUp: (value: any) => void;
}

export const Input: React.FC<InputProps> = ({label, value, placeholder, onChange, type='text', labelClassName, inputClassName, onKeyUp}) => {
  return (
    <>
      {label && <label className={ `mb-[10px] block text-base font-medium text-dark dark:text-white ${labelClassName}`}>{label}</label>}
      <input
        type={type}
        placeholder={placeholder}
        value={value} onChange={(e) => onChange(e.target.value)}
        onKeyUp={(e) => onKeyUp(e)}
        className={`w-full bg-transparent rounded-md border-stroke dark:border-dark-3 py-[10px] px-5 text-dark-6 outline-none transition border-2 focus:border-cyan-400 active:border-cyan-400 disabled:cursor-default disabled:bg-gray-2 disabled:border-gray-2 ${inputClassName}`}
      />
    </>
  )
}
