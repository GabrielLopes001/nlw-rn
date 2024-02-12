import { Feather } from '@expo/vector-icons'
import { Link } from 'expo-router'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import colors from 'tailwindcss/colors'

type HeaderProps = {
  title: string
  cartQuantity?: number
}

export function Header({ title, cartQuantity = 0 }: HeaderProps) {
  return (
    <View className="mx-5 flex-row items-center border-b border-slate-700 pb-5">
      <View className="flex-1">
        <Image source={require('@/assets/logo.png')} className="h-6 w-32" />

        <Text className="mt-2 font-heading text-xl text-white">{title}</Text>
      </View>

      {cartQuantity > 0 && (
        <Link href="/cart" asChild>
          <TouchableOpacity
            style={{ position: 'relative' }}
            activeOpacity={0.7}
          >
            <View className="-right-3.5 top-2 z-10 h-4 w-4 items-center justify-center rounded-full bg-lime-300">
              <Text className="text-xs font-bold text-slate-900">
                {cartQuantity}
              </Text>
            </View>

            <Feather name="shopping-bag" color={colors.white} size={24} />
          </TouchableOpacity>
        </Link>
      )}
    </View>
  )
}
