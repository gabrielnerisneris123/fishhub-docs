import { View, Text, FlatList } from 'react-native'
import { useState, useEffect } from 'react'
import { Ionicons } from '@expo/vector-icons'
import { supabase } from '@/lib/supabase'
import type { Notification, User } from '@/types/database'
import { timeAgo } from '@/lib/utils'
import { Avatar } from '@/components/ui/Avatar'

type NotificationWithUser = Notification & {
  from_user?: User
}

export default function NotificationsScreen() {
  const [notifications, setNotifications] = useState<NotificationWithUser[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchNotifications()
  }, [])

  async function fetchNotifications() {
    try {
      const { data, error } = await supabase
        .from('notifications')
        .select('*, from_user:users!from_user_id(*)')
        .order('created_at', { ascending: false })
        .limit(50)

      if (error) throw error
      setNotifications(data || [])
    } catch (error) {
      console.error('Error fetching notifications:', error)
    } finally {
      setLoading(false)
    }
  }

  function getNotificationText(type: string) {
    switch (type) {
      case 'like':
        return 'curtiu sua publicação'
      case 'comment':
        return 'comentou na sua publicação'
      case 'follow':
        return 'começou a seguir você'
      case 'mention':
        return 'mencionou você'
      default:
        return 'interagiu com você'
    }
  }

  function getNotificationIcon(type: string) {
    switch (type) {
      case 'like':
        return 'heart'
      case 'comment':
        return 'chatbubble'
      case 'follow':
        return 'person-add'
      case 'mention':
        return 'at'
      default:
        return 'notifications'
    }
  }

  function getNotificationColor(type: string) {
    switch (type) {
      case 'like':
        return '#CC0000'
      case 'comment':
        return '#0066CC'
      case 'follow':
        return '#00AA55'
      case 'mention':
        return '#FF8800'
      default:
        return '#666666'
    }
  }

  if (loading) {
    return (
      <View className="flex-1 bg-gray-50 items-center justify-center">
        <Text className="text-gray-500">Carregando notificações...</Text>
      </View>
    )
  }

  return (
    <View className="flex-1 bg-gray-50">
      <FlatList
        data={notifications}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View
            className={`flex-row items-center p-4 bg-white border-b border-gray-100 ${
              !item.is_read ? 'bg-primary/5' : ''
            }`}
          >
            <View className="relative">
              <Avatar
                uri={item.from_user?.avatar_url}
                name={item.from_user?.full_name}
                size="md"
              />
              <View
                className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full items-center justify-center"
                style={{ backgroundColor: getNotificationColor(item.type) }}
              >
                <Ionicons
                  name={getNotificationIcon(item.type) as any}
                  size={12}
                  color="white"
                />
              </View>
            </View>

            <View className="flex-1 ml-3">
              <Text className="text-gray-900">
                <Text className="font-semibold">
                  {item.from_user?.full_name || 'Usuário'}
                </Text>{' '}
                {getNotificationText(item.type)}
              </Text>
              <Text className="text-gray-500 text-sm mt-1">
                {timeAgo(item.created_at)}
              </Text>
            </View>

            {!item.is_read && (
              <View className="w-2 h-2 rounded-full bg-primary" />
            )}
          </View>
        )}
        ListEmptyComponent={
          <View className="items-center justify-center py-12">
            <Text className="text-4xl mb-4">🔔</Text>
            <Text className="text-gray-500 text-center">
              Nenhuma notificação ainda.
            </Text>
          </View>
        }
      />
    </View>
  )
}
