
import { Pool } from 'pg'

export const pool = new Pool(
{
host:'ec2-52-3-239-135.compute-1.amazonaws.com',
user:'lsasdqhzrdhbhv',
password:'0e08b2dbf6a05b4c0a1b1e550b8c005ebcc7f0340b564772aa0c4a2f823a85c5',
database:'d3djaofhda5rl6',
port:5432,
ssl: { rejectUnauthorized: false}

}
);