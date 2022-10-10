import { HStack, Skeleton, Spacer, Stack } from '@chakra-ui/react'
import React from 'react'

export default function ProductSkeleton() {
  return (
    <Stack>
        <Skeleton height='250px'/>
        <Skeleton height='30px' width='100px'/>
        <Skeleton height='30px' width='200px'/>
        <Skeleton height='15px' width='150px'/>
        <Skeleton height='25px' width='80px'/>
        <HStack>
        <Skeleton height='35px' width='100px'/>
        <Spacer/>
        <Skeleton height='35px' width='100px'/>
        <Skeleton height='35px' width='100px'/>
        </HStack>
    </Stack>
  )
}
