import { useState } from 'react'
import { View, Text, ScrollView, KeyboardAvoidingView, Platform } from 'react-native'
import { Link, router } from 'expo-router'
import { Input } from '@/components/ui/Input'
import { Button } from '@/components/ui/Button'
import { useAuth } from '@/hooks/useAuth'

export default function RegisterScreen() {
  const [fullName, setFullName] = useState('')
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const { signUp } = useAuth()

  async function handleRegister() {
    if (!fullName || !username || !email || !password || !confirmPassword) {
      setError('Preencha todos os campos')
      return
    }

    if (password !== confirmPassword) {
      setError('As senhas não coincidem')
      return
    }

    if (password.length < 8) {
      setError('A senha deve ter pelo menos 8 caracteres')
      return
    }

    setLoading(true)
    setError('')

    try {
      await signUp(email, password, username, fullName)
      router.replace('/(tabs)')
    } catch (err: any) {
      setError(err.message || 'Erro ao criar conta')
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
          <Text className="text-gray-500 mt-2">Crie sua conta</Text>
        </View>

        <View className="mb-6">
          <Input
            label="Nome completo"
            placeholder="Seu nome"
            value={fullName}
            onChangeText={setFullName}
            leftIcon="person"
          />

          <Input
            label="Nome de usuário"
            placeholder="@usuario"
            autoCapitalize="none"
            value={username}
            onChangeText={setUsername}
            leftIcon="at"
          />

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
            placeholder="Mínimo 8 caracteres"
            value={password}
            onChangeText={setPassword}
            isPassword
            leftIcon="lock-closed"
          />

          <Input
            label="Confirmar senha"
            placeholder="Repita a senha"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            isPassword
            leftIcon="lock-closed"
          />

          {error ? (
            <Text className="text-danger text-sm mt-2">{error}</Text>
          ) : null}
        </View>

        <Button
          title="Criar conta"
          onPress={handleRegister}
          loading={loading}
          className="mb-4"
        />

        <View className="flex-row justify-center">
          <Text className="text-gray-500">Já tem conta? </Text>
          <Link href="/(auth)/login" asChild>
            <Text className="text-primary font-semibold">Faça login</Text>
          </Link>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}
