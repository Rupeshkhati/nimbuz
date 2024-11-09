import BlurPage from '@/components/ui/global/blur-page'
import MediaComponent from '@/components/media'
import { getMedia } from '@/lib/queires'
import React from 'react'

type Props = {
  params: { subaccountId: string }
}

const MediaPage = async ({ params }: Props) => {
  const data = await getMedia(params.subaccountId)

  return (
    <BlurPage>
      <MediaComponent
        data={data}
        subaccountId={params.subaccountId}
      />
    </BlurPage>
  )
}

export default MediaPage