import logo from './logo.svg';
import './App.css';

import { AppRouter } from "./routes";

import { AuthProvider } from "../src/Auth/AuthContext";



export const App = () => {
  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  );
}