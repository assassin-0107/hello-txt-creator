import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield } from "lucide-react";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";

const Login = () => {

  const handleGoogleSuccess = (credentialResponse: any) => {
    console.log('Google login successful:', credentialResponse);
    // Handle successful login
    window.location.href = "/";
  };

  const handleGoogleError = () => {
    console.error('Google login failed');
  };


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
          </CardContent>
        </Card>
      </div>
    </GoogleOAuthProvider>
  );
};

export default Login;