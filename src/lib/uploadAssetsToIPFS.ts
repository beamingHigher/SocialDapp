import { LensterAttachment } from '@generated/lenstertypes'
import axios from 'axios'

const projectId = process.env.NEXT_PUBLIC_INFURA_IPFS_PROJECT_ID
const projectSecret = process.env.NEXT_PUBLIC_INFURA_IPFS_PROJECT_SECRET
const projectIdAndSecret = `${projectId}:${projectSecret}`

const uploadAssetsToIPFS = async (data: any): Promise<LensterAttachment[]> => {
  try {
    const attachments = []
    for (let i = 0; i < data.length; i++) {
      let file = data.item(i)
      const formData = new FormData()
      formData.append('file', file, 'img')
      const upload = await axios('https://infura-ipfs.io:5001/api/v0/add', {
        method: 'POST',
        headers: {
          authorization: `Basic ${Buffer.from(projectIdAndSecret).toString(
            'base64'
          )}`
        },
        data: formData
      })
      const { Hash }: { Hash: string } = upload?.data
      attachments.push({
        item: `https://infura-ipfs.io/ipfs/${Hash}`,
        type: file.type,
        altTag: ''
      })
    }

    return attachments
  } catch {
    return []
  }
}

export default uploadAssetsToIPFS
