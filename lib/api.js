// lib/api.js
"use client";

import { account } from "./appwrite";

export async function signupUser({ email, password, name }) {
  try {
    // 1. Create account
    await account.create("unique()", email, password, name);

    // 2. Create email/password session
    await safeCreateEmailSession(email, password);

    // 3. Send verification email
    await account.createVerification(
      `${window.location.origin}/verify-email` // you can create this page later if needed
    );

    return { success: true, message: "Account created. Check your email to verify your address." };
  } catch (error) {
    console.error("signupUser error:", error);
    return { success: false, message: error?.message || "Unable to sign up." };
  }
}

export async function loginUser({ email, password }) {
  try {
    await safeCreateEmailSession(email, password);
    const user = await account.get();

    return { success: true, user };
  } catch (error) {
    console.error("loginUser error:", error);
    return { success: false, message: error?.message || "Unable to sign in." };
  }
}

// Avoid "Creation of a session is prohibited when a session is active."
async function safeCreateEmailSession(email, password) {
  try {
    // Try to delete current session first
    await account.deleteSession("current");
  } catch (_) {
    // ignore if no session
  }

  return account.createEmailPasswordSession(email, password);
}

export async function logoutUser() {
  try {
    await account.deleteSession("current");
    return { success: true };
  } catch (error) {
    console.error("logoutUser error:", error);
    return { success: false, message: error?.message || "Unable to logout." };
  }
}

export async function getCurrentUser() {
  try {
    const user = await account.get();
    return user;
  } catch (_) {
    return null;
  }
}

export function isVerified(user) {
  // Appwrite user has "emailVerification" boolean
  return user?.emailVerification === true;
}
