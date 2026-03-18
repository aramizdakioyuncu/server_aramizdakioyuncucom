"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

interface User {
  username: string;
  balance: number;
  avatar: string;
}

interface AuthContextType {
  user: User | null;
  isLoggedIn: boolean;
  login: (username: string, password: string) => Promise<boolean>;
  logout: () => void;
  updateBalance: (amount: number) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  // Load user from localStorage if exists (mock persistence)
  useEffect(() => {
    const savedUser = localStorage.getItem("auth_user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const login = async (username: string, password: string): Promise<boolean> => {
    // Mock login logic with a test user
    if (username === "berkay" && password === "123456") {
      const mockUser = {
        username: "Berkay",
        balance: 2500,
        avatar: "https://i.pravatar.cc/150?u=berkay",
      };
      setUser(mockUser);
      localStorage.setItem("auth_user", JSON.stringify(mockUser));
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("auth_user");
    window.location.href = "/";
  };

  const updateBalance = (amount: number) => {
    if (!user) return;
    const updatedUser = { ...user, balance: user.balance + amount };
    setUser(updatedUser);
    localStorage.setItem("auth_user", JSON.stringify(updatedUser));
  };

  return (
    <AuthContext.Provider value={{ user, isLoggedIn: !!user, login, logout, updateBalance }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
