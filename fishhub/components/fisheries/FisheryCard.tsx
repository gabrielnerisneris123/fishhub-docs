import { View, Text, Image } from 'react-native'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Ionicons } from '@expo/vector-icons'
import type { Fishery } from '@/types/database'

type FisheryCardProps = {
  fishery: Fishery
  averageRating?: number
  onPress?: () => void
}

export function FisheryCard({ fishery, averageRating, onPress }: FisheryCardProps) {
  return (
    <Card onPress={onPress} className="mb-4">
      <View className="flex-row">
        {fishery.photos[0] ? (
          <Image
            source={{ uri: fishery.photos[0] }}
            className="w-24 h-24 rounded-lg"
            resizeMode="cover"
          />
        ) : (
          <View className="w-24 h-24 rounded-lg bg-gray-200 items-center justify-center">
            <Ionicons name="image-outline" size={32} color="#999" />
          </View>
        )}

        <View className="ml-4 flex-1">
          <View className="flex-row items-center gap-2">
            <Text className="font-semibold text-gray-900 text-lg" numberOfLines={1}>
              {fishery.name}
            </Text>
            {fishery.is_verified && (
              <Ionicons name="checkmark-circle" size={18} color="#0066CC" />
            )}
          </View>

          <View className="flex-row items-center mt-1">
            <Ionicons name="location" size={14} color="#666" />
            <Text className="text-gray-500 text-sm ml-1" numberOfLines={1}>
              {fishery.city}, {fishery.state}
            </Text>
          </View>

          {averageRating && (
            <View className="flex-row items-center mt-2">
              <Ionicons name="star" size={16} color="#FFD700" />
              <Text className="text-gray-700 font-medium ml-1">
                {averageRating.toFixed(1)}
              </Text>
            </View>
          )}

          <View className="flex-row flex-wrap gap-2 mt-2">
            {fishery.species_available.slice(0, 3).map((species) => (
              <Badge key={species} size="sm">
                {species}
              </Badge>
            ))}
            {fishery.species_available.length > 3 && (
              <Badge size="sm">+{fishery.species_available.length - 3}</Badge>
            )}
          </View>
        </View>
      </View>

      {fishery.entry_price !== null && (
        <View className="flex-row items-center mt-3 pt-3 border-t border-gray-100">
          <Text className="text-gray-600">Entrada: </Text>
          <Text className="font-semibold text-primary">
            R$ {fishery.entry_price.toFixed(2)}
          </Text>
        </View>
      )}
    </Card>
  )
}
