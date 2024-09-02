import { Account, Client } from 'appwrite';

const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('66cf1be3000f2aac4b7e');

    export const account = new Account(client)


export default client;