import { create } from 'ipfs-http-client'

const projectId = process.env.NEXT_PUBLIC_INFURA_IPFS_PROJECT_ID
const projectSecret = process.env.NEXT_PUBLIC_INFURA_IPFS_PROJECT_SECRET
const projectIdAndSecret = `${projectId}:${projectSecret}`

const client = create({
  host: 'infura-ipfs.io',
  port: 5001,
  protocol: 'https',
  headers: {
    authorization: `Basic ${Buffer.from(projectIdAndSecret).toString('base64')}`
  }
})

const uploadToIPFS = async (data: any) => {
  return await client.add(JSON.stringify(data))
}

export default uploadToIPFS
