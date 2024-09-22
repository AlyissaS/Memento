import auth from '@react-native-firebase/auth';
import { FIREBASE_AUTH } from "@/FirebaseConfig";

const user = auth().currentUser; // Get the current user outside of the array

export const quizData = [
    {
        question: "What is your name?",
        options: ["John", "Mary", user ? user.displayName : "Unknown", "Jeff"], // Safely access user
        answer: user ? user.displayName : "Unknown"
    }
];