import { IConnection } from '@zipzoong/sdk'
import { Storage } from '@/lib/storage'

const connection: IConnection = {
	host: 'localhost:3000/api',
	headers: { Authorization: `Bearer ${Storage.getItem('access_token')}` },
}

export default connection
