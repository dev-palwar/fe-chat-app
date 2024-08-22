"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Loader2 } from "lucide-react";
import ErrorBox from "@/components/error-box";

const Profiler = () => {
  const [username, setUsername] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleLogUsername = () => {
    setIsLoading(true);

    setTimeout(() => {
      console.log("Entered username:", username);
      setIsLoading(false);
    }, 1500);
  };

  return (
    <>
      {isError ? (
        <ErrorBox
          message="There was an error"
          onRetry={() => {
            setIsError(false);
          }}
        />
      ) : (
        <div className="flex items-center justify-center min-h-screen bg-background">
          <div className="w-full max-w-sm space-y-4">
            <div className="space-y-2">
              <Label htmlFor="username">Enter your username</Label>
              <Input
                id="username"
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                disabled={isLoading}
              />
            </div>
            <Button
              onClick={handleLogUsername}
              className="w-full"
              size={"lg"}
              disabled={isLoading || !username.trim()}
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Processing...
                </>
              ) : (
                "Log Username"
              )}
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default Profiler;
