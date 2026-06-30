import { View, Text, ScrollView, TouchableOpacity, Alert } from 'react-native'
import { router } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'
import { Avatar } from '@/components/ui/Avatar'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { useAuth } from '@/hooks/useAuth'

export default function ProfileScreen() {
  const { user, signOut } = useAuth()

  async function handleSignOut() {
    Alert.alert(
      'Sair da conta',
      'Tem certeza que deseja sair?',
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Sair',
          style: 'destructive',
          onPress: async () => {
            await signOut()
            router.replace('/(auth)/login')
          },
        },
      ]
    )
  }

  return (
    <ScrollView className="flex-1 bg-gray-50">
      <View className="items-center pt-8 pb-4 bg-white">
        <Avatar uri={user?.avatar_url} name={user?.full_name} size="xl" />
        <Text className="text-xl font-bold text-gray-900 mt-4">
          {user?.full_name || 'Pescador'}
        </Text>
        <Text className="text-gray-500">
          @{user?.username || 'usuario'}
        </Text>
        {user?.bio && (
          <Text className="text-gray-600 text-center mt-2 px-8">
            {user.bio}
          </Text>
        )}
        {(user?.city || user?.state) && (
          <View className="flex-row items-center mt-2">
            <Ionicons name="location" size={16} color="#666" />
            <Text className="text-gray-500 ml-1">
              {[user?.city, user?.state].filter(Boolean).join(', ')}
            </Text>
          </View>
        )}
      </View>

      <View className="flex-row justify-around py-4 bg-white mt-2">
        <View className="items-center">
          <Text className="text-2xl font-bold text-primary">0</Text>
          <Text className="text-gray-500 text-sm">Capturas</Text>
        </View>
        <View className="items-center">
          <Text className="text-2xl font-bold text-primary">0</Text>
          <Text className="text-gray-500 text-sm">Seguidores</Text>
        </View>
        <View className="items-center">
          <Text className="text-2xl font-bold text-primary">0</Text>
          <Text className="text-gray-500 text-sm">Seguindo</Text>
        </View>
      </View>

      <View className="p-4 gap-3">
        <Card>
          <TouchableOpacity className="flex-row items-center py-2">
            <Ionicons name="create-outline" size={24} color="#666" />
            <Text className="text-gray-700 ml-3 flex-1">Editar perfil</Text>
            <Ionicons name="chevron-forward" size={20} color="#999" />
          </TouchableOpacity>
        </Card>

        <Card>
          <TouchableOpacity className="flex-row items-center py-2">
            <Ionicons name="fish-outline" size={24} color="#666" />
            <Text className="text-gray-700 ml-3 flex-1">Minhas capturas</Text>
            <Ionicons name="chevron-forward" size={20} color="#999" />
          </TouchableOpacity>
        </Card>

        <Card>
          <TouchableOpacity className="flex-row items-center py-2">
            <Ionicons name="bookmark-outline" size={24} color="#666" />
            <Text className="text-gray-700 ml-3 flex-1">Salvos</Text>
            <Ionicons name="chevron-forward" size={20} color="#999" />
          </TouchableOpacity>
        </Card>

        <Card>
          <TouchableOpacity className="flex-row items-center py-2">
            <Ionicons name="settings-outline" size={24} color="#666" />
            <Text className="text-gray-700 ml-3 flex-1">Configurações</Text>
            <Ionicons name="chevron-forward" size={20} color="#999" />
          </TouchableOpacity>
        </Card>

        <Card>
          <TouchableOpacity className="flex-row items-center py-2">
            <Ionicons name="help-circle-outline" size={24} color="#666" />
            <Text className="text-gray-700 ml-3 flex-1">Ajuda</Text>
            <Ionicons name="chevron-forward" size={20} color="#999" />
          </TouchableOpacity>
        </Card>

        <Button
          title="Sair da conta"
          onPress={handleSignOut}
          variant="danger"
          className="mt-4"
        />
      </View>
    </ScrollView>
  )
}
