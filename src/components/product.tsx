import {
  Image,
  ImageProps,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from 'react-native'

type ProductsDataProps = {
  title: string
  description: string
  thumbnail: ImageProps
}

type ProductProps = TouchableOpacityProps & {
  data: ProductsDataProps
}

export function Product({ data, ...rest }: ProductProps) {
  return (
    <TouchableOpacity className="w-full flex-row items-center pb-4" {...rest}>
      <Image source={data.thumbnail} className="h-20 w-20 rounded-md" />

      <View className="ml-3 flex-1">
        <Text className="flex-1 font-subtitle text-base text-slate-100">
          {data.title}
        </Text>
        <Text className="mt-0.5 text-xs leading-5 text-slate-400">
          {data.description}
        </Text>
      </View>
    </TouchableOpacity>
  )
}
