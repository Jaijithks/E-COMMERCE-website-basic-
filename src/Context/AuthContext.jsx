import { createContext, useState } from "react";

export const AuthContext = createContext(null);

export default function AuthProvider({ children }) {
    // read current user from localStorage (stored as JSON)
    const stored = localStorage.getItem("currentUser");
    const [user, setUser] = useState(stored ? JSON.parse(stored) : null);

    function persistUser(u) {
        if (u) localStorage.setItem("currentUser", JSON.stringify(u));
        else localStorage.removeItem("currentUser");
        setUser(u);
    }

    function signUp(name, email, password) {
        const users = JSON.parse(localStorage.getItem("users") || "[]");

        if (users.find((u) => u.email === email)) {
            return { success: false, error: "Email already exists" };
        }

        const newuser = { name, email, password };
        users.push(newuser);
        localStorage.setItem("users", JSON.stringify(users));
        persistUser({ name, email });
        return { success: true };
    }

    function logIn(email, password) {
        const users = JSON.parse(localStorage.getItem("users") || "[]");
        const found = users.find((u) => u.email === email && u.password === password);
        if (!found) return { success: false, error: "Invalid credentials" };
        persistUser({ name: found.name, email: found.email });
        return { success: true };
    }

    function logOut() {
        persistUser(null);
    }

    return (
        <AuthContext.Provider value={{ user, signUp, logIn, logOut }}>
            {children}
        </AuthContext.Provider>
    );
}