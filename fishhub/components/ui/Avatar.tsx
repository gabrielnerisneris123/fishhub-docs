import { Image, View, Text } from 'react-native'
import { getInitials } from '@/lib/utils'

type AvatarProps = {
  uri?: string | null
  name?: string
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  rounded?: boolean
}

const sizes = {
  xs: 24,
  sm: 32,
  md: 48,
  lg: 72,
  xl: 96,
}

const textSizes = {
  xs: 'text-xs',
  sm: 'text-sm',
  md: 'text-base',
  lg: 'text-xl',
  xl: 'text-2xl',
}

export function Avatar({ uri, name = '', size = 'md', rounded = true }: AvatarProps) {
  const dimension = sizes[size]
  const initials = getInitials(name)

  if (uri) {
    return (
      <Image
        source={{ uri }}
        className={`bg-gray-200 ${rounded ? 'rounded-full' : 'rounded-lg'}`}
        style={{ width: dimension, height: dimension }}
      />
    )
  }

  return (
    <View
      className={`bg-primary items-center justify-center ${rounded ? 'rounded-full' : 'rounded-lg'}`}
      style={{ width: dimension, height: dimension }}
    >
      <Text className={`text-white font-bold ${textSizes[size]}`}>
        {initials || '?'}
      </Text>
    </View>
  )
}
