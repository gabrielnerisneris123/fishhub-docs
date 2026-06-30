import { useState } from 'react'
import { View, Text, TextInput, TextInputProps, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

type InputProps = TextInputProps & {
  label?: string
  error?: string
  leftIcon?: keyof typeof Ionicons.glyphMap
  isPassword?: boolean
}

export function Input({
  label,
  error,
  leftIcon,
  isPassword = false,
  className = '',
  ...props
}: InputProps) {
  const [isFocused, setIsFocused] = useState(false)
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)

  return (
    <View className="mb-4">
      {label && (
        <Text className="text-sm font-medium text-gray-700 mb-2">{label}</Text>
      )}
      <View
        className={`flex-row items-center border rounded-lg px-3 py-3 ${
          isFocused ? 'border-primary' : error ? 'border-danger' : 'border-gray-300'
        } bg-white`}
      >
        {leftIcon && (
          <Ionicons
            name={leftIcon}
            size={20}
            color={isFocused ? '#0066CC' : '#999999'}
            style={{ marginRight: 8 }}
          />
        )}
        <TextInput
          className={`flex-1 text-base text-gray-900 ${className}`}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          secureTextEntry={isPassword && !isPasswordVisible}
          placeholderTextColor="#999999"
          {...props}
        />
        {isPassword && (
          <TouchableOpacity
            onPress={() => setIsPasswordVisible(!isPasswordVisible)}
            className="ml-2"
          >
            <Ionicons
              name={isPasswordVisible ? 'eye-off' : 'eye'}
              size={20}
              color="#999999"
            />
          </TouchableOpacity>
        )}
      </View>
      {error && (
        <Text className="text-sm text-danger mt-1">{error}</Text>
      )}
    </View>
  )
}
