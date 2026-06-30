import { View, Text } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

export default function MapScreen() {
  return (
    <View className="flex-1 bg-gray-50 items-center justify-center p-6">
      <View className="bg-white rounded-2xl p-8 items-center shadow-sm">
        <Ionicons name="map" size={64} color="#0066CC" />
        <Text className="text-xl font-bold text-gray-900 mt-4 mb-2">
          Mapa de Pesqueiros
        </Text>
        <Text className="text-gray-500 text-center">
          Em breve você poderá explorar todos os pesqueiros do Brasil no mapa!
        </Text>
      </View>
    </View>
  )
}
