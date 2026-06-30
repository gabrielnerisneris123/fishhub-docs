import { View, Text, FlatList, RefreshControl } from 'react-native'
import { useState, useEffect } from 'react'
import { PostCard } from '@/components/feed/PostCard'
import { supabase } from '@/lib/supabase'
import type { Post, User } from '@/types/database'

export default function HomeScreen() {
  const [posts, setPosts] = useState<(Post & { user?: User })[]>([])
  const [refreshing, setRefreshing] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchPosts()
  }, [])

  async function fetchPosts() {
    try {
      const { data, error } = await supabase
        .from('posts')
        .select('*, user:users(*)')
        .order('created_at', { ascending: false })
        .limit(20)

      if (error) throw error
      setPosts(data || [])
    } catch (error) {
      console.error('Error fetching posts:', error)
    } finally {
      setLoading(false)
    }
  }

  async function onRefresh() {
    setRefreshing(true)
    await fetchPosts()
    setRefreshing(false)
  }

  if (loading) {
    return (
      <View className="flex-1 bg-gray-50 items-center justify-center">
        <Text className="text-gray-500">Carregando...</Text>
      </View>
    )
  }

  return (
    <View className="flex-1 bg-gray-50">
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <PostCard
            post={item}
            onPress={() => console.log('Navigate to post', item.id)}
            onLike={() => console.log('Like', item.id)}
            onComment={() => console.log('Comment', item.id)}
          />
        )}
        contentContainerClassName="p-4"
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        ListEmptyComponent={
          <View className="items-center justify-center py-12">
            <Text className="text-4xl mb-4">🎣</Text>
            <Text className="text-gray-500 text-center">
              Nenhuma publicação ainda.{'\n'}
              Comece compartilhando suas capturas!
            </Text>
          </View>
        }
      />
    </View>
  )
}
