"use client"
import { Mail } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useRouter } from 'next/navigation';

export default function LoginBtn() {

    const router = useRouter();

    return (
        <Button onClick={() => router.push("/subscription")} ><Mail className="w-6 h-6 mr-2"/>Login with Gmail</Button>
    );
  }