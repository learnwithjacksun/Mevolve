import { ChevronDown } from 'lucide-react'

const Select = ({label, name, value, onChange, options, error}: SelectProps) => {
  return (
    <div className="space-y-2">
    <label className="block text-sm font-sans font-medium text-gray-500">
      {label}
    </label>
    <div className="relative">
      <select
        name={name}
        value={value}
        onChange={onChange}
        className="w-full px-4 h-10 font-mont rounded-lg border border-gray-300
                  focus:border-green-700 bg-background text-main
                  appearance-none cursor-pointer pr-10 text-sm"
      >
        <option value="" disabled defaultValue={value}>Select a {name}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>{option.label}</option>
        ))}
      </select>
      <ChevronDown
        size={18}
        className="absolute right-3 top-1/2 -translate-y-1/2 text-green-700 pointer-events-none"
      />
    </div>
    {error && <p className="text-red-500 font-sans text-xs font-medium">{error}</p>}
  </div>
  )
}

export default Select