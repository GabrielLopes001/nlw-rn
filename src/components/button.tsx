import { ReactNode } from 'react'
import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native'

type ButtonRootProps = TouchableOpacityProps & {
  children: ReactNode
}

type ButtonTextProps = {
  children: ReactNode
}

type ButtonIconProps = {
  children: ReactNode
}

function ButtonRoot({ children, ...rest }: ButtonRootProps) {
  return (
    <TouchableOpacity
      className="h-12 flex-row items-center justify-center rounded-md bg-lime-400"
      activeOpacity={0.7}
      {...rest}
    >
      {children}
    </TouchableOpacity>
  )
}

function ButtonText({ children }: ButtonTextProps) {
  return (
    <Text className="mx-2 font-heading text-base text-black">{children}</Text>
  )
}

function ButtonIcon({ children }: ButtonIconProps) {
  return children
}

export { ButtonRoot, ButtonText, ButtonIcon }
