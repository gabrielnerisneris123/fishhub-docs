import { View, Text } from 'react-native'

type BadgeProps = {
  children: React.ReactNode
  variant?: 'default' | 'primary' | 'success' | 'warning' | 'danger'
  size?: 'sm' | 'md'
}

export function Badge({ children, variant = 'default', size = 'sm' }: BadgeProps) {
  const variantStyle = {
    default: 'bg-gray-100',
    primary: 'bg-primary/10',
    success: 'bg-success/10',
    warning: 'bg-warning/10',
    danger: 'bg-danger/10',
  }

  const textStyle = {
    default: 'text-gray-700',
    primary: 'text-primary',
    success: 'text-success',
    warning: 'text-warning',
    danger: 'text-danger',
  }

  const sizeStyle = {
    sm: 'px-2 py-1',
    md: 'px-3 py-1.5',
  }

  const textSize = {
    sm: 'text-xs',
    md: 'text-sm',
  }

  return (
    <View className={`rounded-full ${variantStyle[variant]} ${sizeStyle[size]}`}>
      <Text className={`font-medium ${textStyle[variant]} ${textSize[size]}`}>
        {children}
      </Text>
    </View>
  )
}
