import { TouchableOpacity, Text, ActivityIndicator, View } from 'react-native'

type ButtonProps = {
  title: string
  onPress: () => void
  variant?: 'primary' | 'secondary' | 'danger' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  loading?: boolean
  icon?: React.ReactNode
}

export function Button({
  title,
  onPress,
  variant = 'primary',
  size = 'md',
  disabled = false,
  loading = false,
  icon,
}: ButtonProps) {
  const baseStyle = 'flex-row items-center justify-center rounded-lg'
  
  const variantStyle = {
    primary: 'bg-primary',
    secondary: 'bg-transparent border border-primary',
    danger: 'bg-danger',
    ghost: 'bg-transparent',
  }

  const sizeStyle = {
    sm: 'py-2 px-4',
    md: 'py-3 px-6',
    lg: 'py-4 px-8',
  }

  const textStyle = {
    primary: 'text-white font-semibold',
    secondary: 'text-primary font-semibold',
    danger: 'text-white font-semibold',
    ghost: 'text-primary font-semibold',
  }

  const textSize = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
  }

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled || loading}
      className={`${baseStyle} ${variantStyle[variant]} ${sizeStyle[size]} ${
        disabled || loading ? 'opacity-50' : ''
      }`}
      activeOpacity={0.7}
    >
      {loading ? (
        <ActivityIndicator color={variant === 'primary' || variant === 'danger' ? 'white' : '#0066CC'} />
      ) : (
        <View className="flex-row items-center gap-2">
          {icon}
          <Text className={`${textStyle[variant]} ${textSize[size]}`}>{title}</Text>
        </View>
      )}
    </TouchableOpacity>
  )
}
