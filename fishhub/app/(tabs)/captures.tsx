import { View, Text, FlatList, RefreshControl } from 'react-native'
import { useState, useEffect } from 'react'
import { CaptureCard } from '@/components/captures/CaptureCard'
import { supabase } from '@/lib/supabase'
import type { Catch, User, Fishery } from '@/types/database'

type CatchWithRelations = Catch & {
  user?: User
  fishery?: Fishery
}

export default function CapturesScreen() {
  const [captures, setCaptures] = useState<CatchWithRelations[]>([])
  const [refreshing, setRefreshing] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchCaptures()
  }, [])

  async function fetchCaptures() {
    try {
      const { data, error } = await supabase
        .from('catches')
        .select('*, user:users(*), fishery:fisheries(*)')
        .order('caught_at', { ascending: false })
        .limit(20)

      if (error) throw error
      setCaptures(data || [])
    } catch (error) {
      console.error('Error fetching captures:', error)
    } finally {
      setLoading(false)
    }
  }

  async function onRefresh() {
    setRefreshing(true)
    await fetchCaptures()
    setRefreshing(false)
  }

  if (loading) {
    return (
      <View className="flex-1 bg-gray-50 items-center justify-center">
        <Text className="text-gray-500">Carregando capturas...</Text>
      </View>
    )
  }

  return (
    <View className="flex-1 bg-gray-50">
      <FlatList
        data={captures}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <CaptureCard
            capture={item}
            onPress={() => console.log('Navigate to capture', item.id)}
          />
        )}
        contentContainerClassName="p-4"
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        ListEmptyComponent={
          <View className="items-center justify-center py-12">
            <Text className="text-4xl mb-4">🐟</Text>
            <Text className="text-gray-500 text-center">
              Nenhuma captura registrada.{'\n'}
              Registre seu primeiro peixe!
            </Text>
          </View>
        }
      />
    </View>
  )
}
