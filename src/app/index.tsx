import { useRef, useState } from 'react'
import { FlatList, SectionList, Text, View } from 'react-native'

import { CategoryButton } from '@/components/category-button'
import { Header } from '@/components/header'
import { Product } from '@/components/product'
import { CATEGORIES, MENU } from '@/utils/data/products'

export default function Home() {
  const [categorySelected, isCategorySelected] = useState(CATEGORIES[0])

  const sectionListRef = useRef<SectionList>(null)

  function handleCategorySelect(category: string) {
    isCategorySelected(category)

    const sectionIndex = CATEGORIES.findIndex(
      (category) => category === categorySelected,
    )

    if (sectionListRef.current) {
      sectionListRef.current.scrollToLocation({
        animated: true,
        itemIndex: 0,
        sectionIndex,
      })
    }
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

      <SectionList
        ref={sectionListRef}
        sections={MENU}
        keyExtractor={(item) => item.id}
        stickySectionHeadersEnabled={false}
        renderSectionHeader={({ section: { title } }) => (
          <Text className="mb-3 mt-8 font-heading text-xl text-white">
            {title}
          </Text>
        )}
        renderItem={({ item }) => <Product data={item} />}
        className="flex-1 p-5"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
      />
    </View>
  )
}
