import { create } from 'zustand';

// Definisikan tipe untuk data pengguna dan state otentikasi
interface User {
  name: string;
  email: string;
}

type AuthState = {
  isLoggedIn: boolean;
  user: User | null;
  login: (user: User) => void;
  logout: () => void;
};

/**
 * Hook custom untuk state management otentikasi menggunakan Zustand.
 * Menyimpan status login dan informasi pengguna.
 */
export const useAuthStore = create<AuthState>((set) => ({
  isLoggedIn: false,
  user: null,
  // Aksi untuk login: mengubah state menjadi logged in dan menyimpan data user
  login: (user) => set({ isLoggedIn: true, user }),
  // Aksi untuk logout: mengembalikan state ke kondisi awal
  logout: () => set({ isLoggedIn: false, user: null }),
}));
