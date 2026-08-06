// Dependencies
import { MongoClient } from 'mongodb';
import dotenv from 'dotenv/config';

// Import env variables
const DB_NAME = process.env.DB_NAME;
const DB_URI = process.env.DB_URI;

// Create client
const client = new MongoClient(DB_URI);

// Create database connection
export const db = client.db(DB_NAME);

// Test
// const featuredProjectsCollection = await db
// .collection('featuredProjects')
// .find({})
// .toArray();

// console.log(featuredProjectsCollection);
