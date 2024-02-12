import { Feather } from '@expo/vector-icons'
import { useState } from 'react'
import { Alert, ScrollView, Text, View } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import { ButtonIcon, ButtonRoot, ButtonText } from '@/components/button'
import { Header } from '@/components/header'
import { Input } from '@/components/input'
import { LinkButton } from '@/components/link-button'
import { Product } from '@/components/product'
import { useCartStore } from '@/stores/cart-state'
import { ProductProps } from '@/utils/data/products'
import { FormatCurrency } from '@/utils/functions/formatter-currency'

export default function Cart() {
  const cartStore = useCartStore()
  const [address, setAddress] = useState('')

  const total = FormatCurrency(
    cartStore.products.reduce(
      (total, product) => total + product.price * product.quantity,
      0,
    ),
  )

  function handleRemoveItem(product: ProductProps) {
    Alert.alert('Remover', `Deseja remover o produto ${product.title}`, [
      {
        text: 'Cancelar',
      },
      {
        text: 'Remover',
        onPress: () => cartStore.remove(product.id),
        style: 'destructive',
      },
    ])
  }

  function handleOrder() {
    if (address.trim().length === 0) {
      return Alert.alert('Pedido', 'Informe o endereço de entrega.')
    }

    const products = cartStore.products
      .map((product) => `\n ${product.quantity} ${product.title}`)
      .join('')

    const message = `NOVO PEDIDO \n ENTREGAR EM: ${address} ${products} \n VALOR TOTAL: ${total}`

    console.log(message)
    cartStore.clear()
  }

  return (
    <View className="flex-1 pt-8">
      <Header title="Seu carrinho" />
      <KeyboardAwareScrollView
        showsVerticalScrollIndicator={false}
        extraHeight={100}
      >
        <ScrollView>
          <View className="flex-1 p-5">
            {cartStore.products.length > 0 ? (
              <View className="border-b border-slate-700">
                {cartStore.products.map((product) => (
                  <Product
                    key={product.id}
                    data={product}
                    onPress={() => handleRemoveItem(product)}
                  />
                ))}
              </View>
            ) : (
              <Text className="my-8 text-center font-body text-slate-400">
                Seu carrinho esta vazio
              </Text>
            )}

            <View className="mb-4 mt-5 flex-row items-center gap-2">
              <Text className="font-subtitle text-xl text-white">Total:</Text>
              <Text className="font-heading text-2xl text-lime-300">
                {total}
              </Text>
            </View>

            <Input
              placeholder="Informe o endereço de entrega"
              onChangeText={setAddress}
            />
          </View>
        </ScrollView>
      </KeyboardAwareScrollView>
      <View className="gap-5 p-5">
        <ButtonRoot onPress={handleOrder}>
          <ButtonText>Enviar pedido</ButtonText>
          <ButtonIcon>
            <Feather name="arrow-right-circle" size={20} />
          </ButtonIcon>
        </ButtonRoot>
        <LinkButton title="Voltar ao cardápio" href="/" />
      </View>
    </View>
  )
}
