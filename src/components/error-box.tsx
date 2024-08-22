import { AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ErrorComponentProps {
  message: string;
  onRetry: () => void;
}

export default function ErrorBox({ message, onRetry }: ErrorComponentProps) {
  return (
    <div className="flex flex-col justify-center h-[100vh] w-full max-w-md mx-auto">
      <div className="bg-destructive/15 border-destructive/50 border rounded-lg p-4 mb-4">
        <div className="flex items-center space-x-2">
          <AlertCircle className="h-4 w-4 text-destructive" />
          <h2 className="text-lg font-semibold text-destructive">Error</h2>
        </div>
        <p className="mt-2 text-sm text-destructive" role="alert">
          {message}
        </p>
      </div>
      <Button onClick={onRetry} variant="outline" className="w-full">
        Try Again
      </Button>
    </div>
  );
}
