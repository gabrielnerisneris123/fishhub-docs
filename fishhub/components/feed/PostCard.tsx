import { View, Text, Image, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { Card } from '@/components/ui/Card'
import { Avatar } from '@/components/ui/Avatar'
import { timeAgo } from '@/lib/utils'
import type { Post, User } from '@/types/database'

type PostCardProps = {
  post: Post & { user?: User }
  onPress?: () => void
  onLike?: () => void
  onComment?: () => void
}

export function PostCard({ post, onPress, onLike, onComment }: PostCardProps) {
  return (
    <Card onPress={onPress} className="mb-4">
      <View className="flex-row items-center mb-3">
        <Avatar uri={post.user?.avatar_url} name={post.user?.full_name} size="sm" />
        <View className="ml-3 flex-1">
          <Text className="font-semibold text-gray-900">
            {post.user?.full_name || 'Pescador'}
          </Text>
          <Text className="text-sm text-gray-500">{timeAgo(post.created_at)}</Text>
        </View>
      </View>

      {post.content && (
        <Text className="text-gray-800 mb-3">{post.content}</Text>
      )}

      {post.photo_url && (
        <Image
          source={{ uri: post.photo_url }}
          className="w-full h-64 rounded-lg mb-3"
          resizeMode="cover"
        />
      )}

      {post.video_url && (
        <View className="w-full h-64 rounded-lg mb-3 bg-gray-900 items-center justify-center">
          <Ionicons name="play-circle" size={64} color="white" />
        </View>
      )}

      <View className="flex-row items-center justify-between pt-3 border-t border-gray-100">
        <TouchableOpacity
          onPress={onLike}
          className="flex-row items-center gap-1"
        >
          <Ionicons name="heart-outline" size={24} color="#666" />
          <Text className="text-gray-600">{post.likes_count}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={onComment}
          className="flex-row items-center gap-1"
        >
          <Ionicons name="chatbubble-outline" size={22} color="#666" />
          <Text className="text-gray-600">{post.comments_count}</Text>
        </TouchableOpacity>

        <TouchableOpacity className="flex-row items-center gap-1">
          <Ionicons name="share-outline" size={22} color="#666" />
        </TouchableOpacity>
      </View>
    </Card>
  )
}
