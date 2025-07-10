import { LoginForm } from "@/components/form/login-form"

export default function LoginPage() {
  return (
    <div className="bg-muted flex min-h-[100vh] flex-1 md:min-h-min flex-col items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm md:max-w-3xl">
        <LoginForm />
      </div>
    </div>
  )
}

 