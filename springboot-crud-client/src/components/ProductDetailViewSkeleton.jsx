import { Skeleton, Stack } from '@chakra-ui/react'
import React from 'react'

export default function ProductDetailViewSkeleton() {
  return (
    <Stack>
        <Skeleton height='300px'/>
        <Skeleton height='30px' width='100px'/>
        <Skeleton height='30px' width='200px'/>
        <Skeleton height='15px' width='150px'/>
        <Skeleton height='20px' width='80px'/>
        <Skeleton height='25px' width='140px'/>
    </Stack>
  )
}
