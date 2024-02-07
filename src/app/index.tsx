import { useState } from 'react'
import { FlatList, View } from 'react-native'

import { CategoryButton } from '@/components/category-button'
import { Header } from '@/components/header'
import { CATEGORIES } from '@/utils/data/products'

export default function Home() {
  const [categorySelected, isCategorySelected] = useState(CATEGORIES[0])

  function handleCategorySelect(category: string) {
    isCategorySelected(category)
  }
  return (
    <View className="mt-8 flex-1">
      <Header title="Faça seu pedido" cartQuantity={10} />

      <FlatList
        data={CATEGORIES}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <CategoryButton
            title={item}
            isSelected={item === categorySelected}
            onPress={() => handleCategorySelect(item)}
          />
        )}
        horizontal
        className="mt-5 max-h-10"
        contentContainerStyle={{ gap: 12, paddingHorizontal: 20 }}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  )
}
