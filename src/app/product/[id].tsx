import { Feather } from '@expo/vector-icons'
import { useLocalSearchParams, useNavigation } from 'expo-router'
import { Image, Text, View } from 'react-native'

import { ButtonIcon, ButtonRoot, ButtonText } from '@/components/button'
import { LinkButton } from '@/components/link-button'
import { useCartStore } from '@/stores/cart-state'
import { PRODUCTS } from '@/utils/data/products'
import { FormatCurrency } from '@/utils/functions/formatter-currency'

export default function Product() {
  const { id } = useLocalSearchParams()
  const cartStore = useCartStore()
  const navigation = useNavigation()
  const product = PRODUCTS.filter((item) => item.id === id)[0]

  const priceFormatted = FormatCurrency(product.price)

  console.log(cartStore.products)

  function handleAddToCart() {
    cartStore.add(product)
    navigation.goBack()
  }

  return (
    <View className="flex-1">
      <Image
        source={product.cover}
        className="h-52 w-full"
        resizeMode="cover"
      />

      <View className="mt-8 flex-1 p-5">
        <Text className="my-2 font-heading text-2xl text-lime-400">
          {priceFormatted}
        </Text>

        <Text className="mb-6 font-body text-base leading-6 text-slate-400">
          {product.description}
        </Text>

        {product.ingredients.map((ingredients) => (
          <Text
            key={ingredients}
            className="font-body text-base leading-6 text-slate-400"
          >
            {'\u2022'} {ingredients}
          </Text>
        ))}

        <View className="gap-5 p-5 pb-8">
          <ButtonRoot onPress={handleAddToCart}>
            <ButtonIcon>
              <Feather name="plus-circle" size={20} />
            </ButtonIcon>
            <ButtonText>Adcionar ao pedido</ButtonText>
          </ButtonRoot>

          <LinkButton title="Voltar ao cardápio" href="/" />
        </View>
      </View>
    </View>
  )
}
