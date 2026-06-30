import { useState } from 'react'
import { View, Text, ScrollView, KeyboardAvoidingView, Platform } from 'react-native'
import { Link, router } from 'expo-router'
import { Input } from '@/components/ui/Input'
import { Button } from '@/components/ui/Button'
import { useAuth } from '@/hooks/useAuth'

export default function ForgotPasswordScreen() {
  const [email, setEmail] = useState('')
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const { resetPassword } = useAuth()

  async function handleResetPassword() {
    if (!email) {
      setError('Digite seu email')
      return
    }

    setLoading(true)
    setError('')

    try {
      await resetPassword(email)
      setSuccess(true)
    } catch (err: any) {
      setError(err.message || 'Erro ao enviar email')
    } finally {
      setLoading(false)
    }
  }

  if (success) {
    return (
      <View className="flex-1 bg-white p-6 justify-center items-center">
        <Text className="text-4xl mb-4">📧</Text>
        <Text className="text-xl font-bold text-gray-900 mb-2">
          Email enviado!
        </Text>
        <Text className="text-gray-500 text-center mb-8">
          Verifique sua caixa de entrada e siga as instruções para redefinir sua senha.
        </Text>
        <Link href="/(auth)/login" asChild>
          <Button title="Voltar para o login" variant="secondary" />
        </Link>
      </View>
    )
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      className="flex-1 bg-white"
    >
      <ScrollView contentContainerClassName="flex-1 p-6 justify-center">
        <View className="items-center mb-8">
          <Text className="text-4xl mb-4">🔑</Text>
          <Text className="text-2xl font-bold text-gray-900 mb-2">
            Esqueceu a senha?
          </Text>
          <Text className="text-gray-500 text-center">
            Digite seu email e enviaremos um link para redefinir sua senha.
          </Text>
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

          {error ? (
            <Text className="text-danger text-sm mt-2">{error}</Text>
          ) : null}
        </View>

        <Button
          title="Enviar link de recuperação"
          onPress={handleResetPassword}
          loading={loading}
          className="mb-4"
        />

        <Link href="/(auth)/login" asChild>
          <Text className="text-primary text-center font-semibold">
            Voltar para o login
          </Text>
        </Link>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}
