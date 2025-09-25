import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Shield, Lock } from "lucide-react";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";

const Login = () => {
  const [password, setPassword] = useState("");

  const handleConnect = (e: React.FormEvent) => {
    e.preventDefault();
    if (password.length >= 8) {
      // Connect to Handcash
      console.log("Connecting to Handcash with password:", password);
      window.location.href = "/";
    }
  };

  const handleGoogleSuccess = (credentialResponse: any) => {
    console.log('Google login successful:', credentialResponse);
    // Handle successful login
    window.location.href = "/";
  };

  const handleGoogleError = () => {
    console.error('Google login failed');
  };

  const isPasswordValid = password.length >= 8;

  return (
    <GoogleOAuthProvider clientId="your-google-client-id.apps.googleusercontent.com">
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <div className="absolute inset-0 gaming-gradient opacity-20"></div>
        
        <Card className="w-full max-w-md card-shadow relative z-10">
          <CardHeader className="text-center space-y-4">
            <div className="w-16 h-16 mx-auto rounded-2xl primary-gradient flex items-center justify-center gaming-shadow">
              <Shield className="w-8 h-8 text-primary-foreground" />
            </div>
            <div>
              <CardTitle className="text-2xl font-bold">Ageless Republic</CardTitle>
              <p className="text-muted-foreground mt-2">Secure access to admin panel</p>
            </div>
          </CardHeader>
          
          <CardContent>
            <div className="space-y-6">
              {/* Google Login */}
              <div className="w-full">
                <GoogleLogin
                  onSuccess={handleGoogleSuccess}
                  onError={handleGoogleError}
                  useOneTap
                  theme="outline"
                  size="large"
                  width={400}
                />
              </div>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <Separator className="w-full" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-background px-2 text-muted-foreground">
                    Or continue with password
                  </span>
                </div>
              </div>

              {/* Password Login */}
              <form onSubmit={handleConnect} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                    <Input
                      id="password"
                      type="password"
                      placeholder="Enter your password (min 8 characters)"
                      className="pl-10"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      minLength={8}
                    />
                  </div>
                  {password.length > 0 && password.length < 8 && (
                    <p className="text-sm text-destructive">Password must be at least 8 characters long</p>
                  )}
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full primary-gradient gaming-shadow font-semibold"
                  disabled={!isPasswordValid}
                >
                  Connect to Handcash
                </Button>
              </form>
            </div>
          </CardContent>
        </Card>
      </div>
    </GoogleOAuthProvider>
  );
};

export default Login;