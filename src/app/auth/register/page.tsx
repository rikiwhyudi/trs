import { RegisterForm } from "@/components/form/register-form"

export default function RegisterPage() {
  return (
    <div className="bg-muted flex min-h-[100vh] flex-1 md:min-h-min flex-col items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm md:max-w-3xl">
        <RegisterForm />
      </div>
    </div>
  )
}

 