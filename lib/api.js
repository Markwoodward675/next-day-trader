// lib/api.js
"use client";

import { ID } from "appwrite";
import { account } from "./appwrite";

export async function signupUser({ email, password, name }) {
  try {
    // 1. Create the account
    await account.create(
      ID.unique(),   // userId
      email,
      password,
      name
    );

    // 2. Log them in right away
    await safeCreateEmailSession(email, password);

    // 3. (Optional) you can send a verification email later if you want
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

// IMPORTANT: use createEmailPasswordSession with your SDK version
async function safeCreateEmailSession(email, password) {
  try {
    // avoid "session already active" issues
    await account.deleteSession("current");
  } catch (_) {
    // ignore if no session
  }

  // For newer Appwrite Web SDKs
  return account.createEmailPasswordSession(email, password);
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
  return user?.emailVerification === true;
}
