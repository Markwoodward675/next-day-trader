// lib/api.js
"use client";

import { ID } from "appwrite";
import { account } from "./appwrite";

/**
 * Sign up a new user:
 * - Create Appwrite account
 * - Create email/password session
 * - Send verification email (link goes to /verify-email)
 */
export async function signupUser({ email, password, name }) {
  try {
    if (!email || !password) {
      return { success: false, message: "Email and password are required." };
    }

    // 1. Create the account
    await account.create(
      ID.unique(),   // userId
      email,
      password,
      name || ""
    );

    // 2. Log them in immediately (avoid duplicate sessions inside helper)
    await safeCreateEmailSession(email, password);

    // 3. Send verification email (if running in browser)
    if (typeof window !== "undefined") {
      const redirectUrl = `${window.location.origin}/verify-email`;
      await account.createVerification(redirectUrl);
    }

    return {
      success: true,
      message: "Account created. Check your email for the verification link."
    };
  } catch (error) {
    console.error("signupUser error:", error);
    return {
      success: false,
      message: error?.message || "Unable to sign up."
    };
  }
}

/**
 * Log in an existing user via email/password.
 */
export async function loginUser({ email, password }) {
  try {
    if (!email || !password) {
      return { success: false, message: "Email and password are required." };
    }

    await safeCreateEmailSession(email, password);
    const user = await account.get();

    return { success: true, user };
  } catch (error) {
    console.error("loginUser error:", error);
    return {
      success: false,
      message: error?.message || "Unable to sign in."
    };
  }
}

/**
 * Helper to avoid “session already active” issues and
 * to use the correct Appwrite SDK method.
 */
async function safeCreateEmailSession(email, password) {
  try {
    // Try to close any active session first (ignore errors if none exists)
    await account.deleteSession("current");
  } catch (_) {
    // no-op
  }

  // ✅ For newer Appwrite Web SDK: use createEmailPasswordSession
  return account.createEmailPasswordSession(email, password);
}

/**
 * Log out current user.
 */
export async function logoutUser() {
  try {
    await account.deleteSession("current");
    return { success: true };
  } catch (error) {
    console.error("logoutUser error:", error);
    return {
      success: false,
      message: error?.message || "Unable to log out."
    };
  }
}

/**
 * Get the currently logged-in user.
 * Returns null if not authenticated.
 */
export async function getCurrentUser() {
  try {
    const user = await account.get();
    return user;
  } catch (_) {
    return null;
  }
}

/**
 * Check if a user’s email is verified.
 */
export function isVerified(user) {
  return user?.emailVerification === true;
}
