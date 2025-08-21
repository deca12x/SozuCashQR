"use client";

import { useDynamicContext, DynamicWidget } from "@dynamic-labs/sdk-react-core";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Login() {
  const { user } = useDynamicContext();
  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.push("/");
    }
  }, [user, router]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="text-2xl font-bold mb-8">
        Welcome to your Dynamic Webapp
      </div>
      <DynamicWidget />
    </div>
  );
}
