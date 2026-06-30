import { View, Text, Image } from 'react-native'
import { Card } from '@/components/ui/Card'
import { Avatar } from '@/components/ui/Avatar'
import { Badge } from '@/components/ui/Badge'
import { formatDate, formatWeight } from '@/lib/utils'
import type { Catch, User } from '@/types/database'

type CaptureCardProps = {
  capture: Catch & { user?: User; fishery?: { name: string } }
  onPress?: () => void
}

export function CaptureCard({ capture, onPress }: CaptureCardProps) {
  return (
    <Card onPress={onPress} className="mb-4">
      <View className="flex-row items-center mb-3">
        <Avatar uri={capture.user?.avatar_url} name={capture.user?.full_name} size="sm" />
        <View className="ml-3 flex-1">
          <Text className="font-semibold text-gray-900">
            {capture.user?.full_name || 'Pescador'}
          </Text>
          <Text className="text-sm text-gray-500">
            {formatDate(capture.caught_at)}
          </Text>
        </View>
        <Badge variant="success">{formatWeight(capture.weight)}</Badge>
      </View>

      {capture.photo_url && (
        <Image
          source={{ uri: capture.photo_url }}
          className="w-full h-48 rounded-lg mb-3"
          resizeMode="cover"
        />
      )}

      <View className="flex-row flex-wrap gap-2 mb-3">
        <Badge variant="primary">{capture.species}</Badge>
        <Badge>{capture.bait}</Badge>
        {capture.fishery && <Badge>{capture.fishery.name}</Badge>}
      </View>

      {capture.notes && (
        <Text className="text-gray-600 text-sm">{capture.notes}</Text>
      )}
    </Card>
  )
}
