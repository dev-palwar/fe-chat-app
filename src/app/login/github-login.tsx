"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Loader2 } from "lucide-react";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

const GithubLogin: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = () => {
    setIsLoading(true);
    setTimeout(() => {
      console.log("Logging in with GitHub...");
      setIsLoading(false);
    }, 2000);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <Card className="w-full max-w-md">
        <CardContent className="flex flex-col items-center p-6">
          <GitHubLogoIcon className="w-16 h-16 mb-6 text-foreground" />
          <Button
            className="w-full max-w-xs"
            onClick={handleLogin}
            disabled={isLoading}
            size={"lg"}
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Logging in...
              </>
            ) : (
              <>
                <GitHubLogoIcon className="mr-2 h-4 w-4" />
                Login with GitHub
              </>
            )}
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default GithubLogin;
