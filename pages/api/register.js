import { v4 as uuidv4 } from 'uuid';
import excuteQuery from '../../lib/db';
import moment from 'moment';

export default async function handler(req, res) {
  console.log(req.body)
  const data = req.body
  const user = {
    id: uuidv4(),
    createdAt: moment().format( 'YYYY-MM-DD HH:mm:ss'),
    name: data.name,
    about: data.about,
    sustainable: data.sustainable,
    email: data.email,
    website: data.website,      
  };
  try {
    const result = await excuteQuery({
        query: 'INSERT INTO users (id, createdAt, email, name, about, sustainable, website) VALUES(?, ?, ?, ?, ?, ?, ?)',
        values: [user.id, user.createdAt.toString(), user.email, user.name, user.about, user.sustainable, user.website],
    });
    console.log( result );
    res.status(200).json({ result })
  } catch ( error ) {
    console.log( error );
    res.status(200).json({ error })
  }
}
