import { useState } from 'react'
import { View, Text, ScrollView, KeyboardAvoidingView, Platform } from 'react-native'
import { Link, router } from 'expo-router'
import { Input } from '@/components/ui/Input'
import { Button } from '@/components/ui/Button'
import { useAuth } from '@/hooks/useAuth'

export default function LoginScreen() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const { signIn } = useAuth()

  async function handleLogin() {
    if (!email || !password) {
      setError('Preencha todos os campos')
      return
    }

    setLoading(true)
    setError('')

    try {
      await signIn(email, password)
      router.replace('/(tabs)')
    } catch (err: any) {
      setError(err.message || 'Erro ao fazer login')
    } finally {
      setLoading(false)
    }
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      className="flex-1 bg-white"
    >
      <ScrollView contentContainerClassName="flex-1 p-6 justify-center">
        <View className="items-center mb-8">
          <Text className="text-4xl font-bold text-primary">FishHub</Text>
          <Text className="text-gray-500 mt-2">A maior comunidade de pesca</Text>
        </View>

        <View className="mb-6">
          <Input
            label="Email"
            placeholder="seu@email.com"
            keyboardType="email-address"
            autoCapitalize="none"
            value={email}
            onChangeText={setEmail}
            leftIcon="mail"
          />

          <Input
            label="Senha"
            placeholder="Sua senha"
            value={password}
            onChangeText={setPassword}
            isPassword
            leftIcon="lock-closed"
          />

          {error ? (
            <Text className="text-danger text-sm mt-2">{error}</Text>
          ) : null}

          <Link href="/(auth)/forgot-password" asChild>
            <Text className="text-primary text-sm text-right mt-2">
              Esqueceu a senha?
            </Text>
          </Link>
        </View>

        <Button
          title="Entrar"
          onPress={handleLogin}
          loading={loading}
          className="mb-4"
        />

        <View className="flex-row justify-center">
          <Text className="text-gray-500">Não tem conta? </Text>
          <Link href="/(auth)/register" asChild>
            <Text className="text-primary font-semibold">Cadastre-se</Text>
          </Link>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}
