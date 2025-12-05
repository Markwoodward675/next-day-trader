// lib/api.js
"use client";

import { ID } from "appwrite";
import { account } from "./appwrite";

export async function signupUser({ email, password, name }) {
  try {
    // 1. Create account
    await account.create(
      ID.unique(),  // generate random user ID
      email,
      password,
      name
    );

    // 2. Optionally create an email-password session right away
    await safeCreateEmailSession(email, password);

    // 3. (Optional) send verification email later if you want
    // await account.createVerification(`${window.location.origin}/verify-email`);

    return {
      success: true,
      message: "Account created successfully. You can now sign in."
    };
  } catch (error) {
    console.error("signupUser error:", error);
    return {
      success: false,
      message: error?.message || "Unable to sign up."
    };
  }
}

export async function loginUser({ email, password }) {
  try {
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

async function safeCreateEmailSession(email, password) {
  try {
    // log out current session if any (avoids “session already active” error)
    await account.deleteSession("current");
  } catch (_) {
    // ignore if no session
  }

  // For appwrite web SDK 13.x, this is createEmailSession
  return account.createEmailSession(email, password);
}

export async function logoutUser() {
  try {
    await account.deleteSession("current");
    return { success: true };
  } catch (error) {
    console.error("logoutUser error:", error);
    return {
      success: false,
      message: error?.message || "Unable to logout."
    };
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
