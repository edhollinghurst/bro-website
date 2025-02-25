"use client";

import type React from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

declare global {
  interface Window {
    sa_event?: (eventName: string) => void;
  }
}

export default function SignUpForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);
    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ firstName, lastName, email }),
      });

      if (response.ok) {
        setSubmitted(true);
        // Track the signup event with Simple Analytics
        if (typeof window.sa_event === "function") {
          window.sa_event("signup");
        }
      } else {
        const data = await response.json();
        throw new Error(data.error || "Something went wrong");
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="sign-up" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4 max-w-md">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Stay Updated
        </h2>
        <div className="text-center mb-8">
          <p className="text-gray-600 mb-4">
            Sign up to our mailing list to stay informed about BRO news and
            updates.
          </p>
          <a
            href="https://www.instagram.com/brogolfuk/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700"
          >
            <span>Follow us on Instagram</span>
            <span className="text-sm">@brogolfuk</span>
          </a>
        </div>
        {submitted ? (
          <div className="text-center text-green-600">
            <p className="mb-4">Thank you for signing up!</p>
            <p>We'll keep you updated on the British Rainbow Open.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="firstName">First Name</Label>
              <Input
                type="text"
                id="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </div>
            <div>
              <Label htmlFor="lastName">Last Name</Label>
              <Input
                type="text"
                id="lastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            {error && <p className="text-red-500">{error}</p>}
            <Button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white"
              disabled={isLoading}
            >
              {isLoading ? "Signing Up..." : "Sign Up"}
            </Button>
          </form>
        )}
      </div>
    </section>
  );
}
