import { TextInput, TextInputProps } from 'react-native'
import colors from 'tailwindcss/colors'

export function Input({ ...rest }: TextInputProps) {
  return (
    <TextInput
      multiline
      verticalAlign="top"
      placeholderTextColor={colors.slate[400]}
      className="h-32 rounded-md bg-slate-800 px-4 py-3 font-body text-sm text-white"
      {...rest}
    />
  )
}
