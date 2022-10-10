import { HStack, Skeleton, Spacer, Stack } from '@chakra-ui/react'
import React from 'react'

export default function EditProductFormSkeleton() {
  return (
    <Stack>
        <HStack>
            <Skeleton height='40px' width='100%'/>
            <Spacer/>
            <Skeleton height='40px' width='100%'/>
        </HStack>
        <HStack>
            <Skeleton height='40px' width='100%'/>
            <Spacer/>
            <Skeleton height='40px' width='100%'/>
        </HStack>
        <HStack>
            <Skeleton height='40px' width='100%'/>
            <Spacer/>
            <Skeleton height='40px' width='100%'/>
        </HStack>
    </Stack>
  )
}
