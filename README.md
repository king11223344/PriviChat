# PriviChat

PriviChat is a secure chat application built with React.js and powered by Firebase. It provides a WhatsApp-like chatting interface and leverages Firebase's authentication and real-time database capabilities. The app ensures the privacy of conversations by encrypting all messages and storing them securely with timestamps for efficient sorting. Additionally, PriviChat allows the chatroom owner to delete the chatroom directly from the database.

## Features

- **Secure Messaging**: All messages are encrypted to ensure privacy and confidentiality.
- **Real-time Chatting**: Enjoy a seamless chatting experience with real-time updates.
- **Authorization**: Only authorized users can access chatrooms, verified through Google Sign-In.
- **Efficient Storage**: Messages are stored and sorted using timestamps for quick retrieval.
- **Chatroom Deletion**: Chatroom owners have the ability to delete their chatrooms directly from the database.

## Prerequisites

Before running PriviChat, make sure you have the following:

- [Node.js](https://nodejs.org) installed on your machine.
- An active Firebase account and a created project.
- An ID for your Firebase project.
- Fill in all the required environment variables in the `.env` file, following the `.env.example` file.

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/king11223344/privichat.git
```
2. Navigate to the project directory:
3. Install the dependencies:
```bash
   npm install
```
4. Start the development server:
```bash
   npm run start
```
5. Open your browser and visit http://localhost:3000 to access PriviChat.

## Firebase Configuration

1. Create a Firebase project by visiting the Firebase Console.
2. Retrieve your Firebase project ID.
3. Enable Google Sign-In authentication in the Firebase Authentication section.
4. Update the .env file with the required Firebase configuration variables.
REACT_APP_FIREBASE_API_KEY: Your Firebase API key.
REACT_APP_FIREBASE_AUTH_DOMAIN: Your Firebase authentication domain.
REACT_APP_FIREBASE_DATABASE_URL: Your Firebase Realtime Database URL.
REACT_APP_FIREBASE_PROJECT_ID: Your Firebase project ID.
REACT_APP_FIREBASE_STORAGE_BUCKET: Your Firebase storage bucket.
REACT_APP_FIREBASE_MESSAGING_SENDER_ID: Your Firebase messaging sender ID.
REACT_APP_FIREBASE_APP_ID: Your Firebase app ID.

## Usage 

1. Upon launching PriviChat, you will be prompted to sign in with your Google account using the Google Sign-In method provided by Firebase.
2. After successful authentication, you can create a chatroom by entering an authorized email address.
3. Only users with authorized email addresses can access the chatroom.
4. Once inside a chatroom, you can send and receive messages securely. The chat interface is similar to WhatsApp.
5. As the owner of the chatroom, you will have the option to delete the chatroom directly from the database.


## Encryption and Security

PriviChat takes security seriously and ensures the privacy and confidentiality of conversations. All messages are encrypted before being stored in the Firebase Realtime Database. This encryption prevents any unauthorized access to the contents of the messages.

## Contributing
Contributions to PriviChat are welcome and encouraged! If you encounter any issues or have suggestions for improvements, please open an issue or submit a pull request on the [GitHub repository](https://github.com/king11223344/
