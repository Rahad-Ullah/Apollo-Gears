"use client";

import { Button } from "@heroui/button";
import { signIn } from "next-auth/react";

const GoogleLoginBtn = () => {
  return (
    <div>
      <Button onClick={() => signIn("google", { callbackUrl: "/" })}>
        Login with Google
      </Button>
    </div>
  );
};

export default GoogleLoginBtn;
