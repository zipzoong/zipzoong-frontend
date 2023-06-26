import { IConnection } from '@zipzoong/sdk';
import { Storage } from '@/lib/storage';

const connection: IConnection = {
  host: 'http://localhost:6060',
  simulate: true,
  headers: { Authorization: `Bearer ${Storage.getItem('access_token')}` }
};

export default connection;
