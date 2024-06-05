"use client";

import { signIn } from "next-auth/react";
import { Button } from "../../components/ui/button";
import GithubIcon from "@/public/github.svg";
import Image from "next/image";

export default function GithubSignInButton() {
  return (
    <Button onClick={() => signIn("github")} variant="outline" size="icon">
      <Image src={GithubIcon} alt="github icon" className="w-6 h-6" />
    </Button>
  );
}
