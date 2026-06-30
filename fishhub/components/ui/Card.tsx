import { View, ViewProps, Pressable } from 'react-native'

type CardProps = ViewProps & {
  children: React.ReactNode
  onPress?: () => void
  variant?: 'default' | 'elevated' | 'outlined'
}

export function Card({
  children,
  className = '',
  onPress,
  variant = 'default',
  ...props
}: CardProps) {
  const variantStyle = {
    default: 'bg-white shadow-sm',
    elevated: 'bg-white shadow-md',
    outlined: 'bg-white border border-gray-200',
  }

  const content = (
    <View
      className={`rounded-xl p-4 ${variantStyle[variant]} ${className}`}
      {...props}
    >
      {children}
    </View>
  )

  if (onPress) {
    return (
      <Pressable onPress={onPress} android_ripple={{ color: 'rgba(0,0,0,0.1)' }}>
        {content}
      </Pressable>
    )
  }

  return content
}
