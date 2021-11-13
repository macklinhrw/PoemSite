import { chakra, HTMLChakraProps, useToken, Text } from '@chakra-ui/react'
import * as React from 'react'

export const Logo = (props: HTMLChakraProps<'svg'> & { iconColor?: string }) => {
  const { iconColor = 'currentColor', ...rest } = props
  const color = useToken('colors', iconColor)
  return (
    <div>
      <Text fontSize="2xl" fontWeight="bold" color="purple">
        Hunter
      </Text>
    </div>
  )
}
