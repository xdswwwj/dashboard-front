import { LoginJpg } from "@/assets";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { UseFormReturn } from "react-hook-form";
import { z } from "zod";
import SocialLoginButton from "../button/SocialLoginButton";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { loginFormSchema } from "./schema/auth.schema";

interface LoginFormProps {
  form: UseFormReturn<{ id: string; password: string }, any, undefined>;
}

const LoginForm: React.FC<LoginFormProps> = ({ form }) => {
  function onSubmit(values: z.infer<typeof loginFormSchema>) {
    console.log(values);
  }
  return (
    <>
      <form onSubmit={form.handleSubmit(onSubmit)} className="p-6 md:p-8">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-2xl font-bold">산이랑</h1>
            <p className="text-balance text-muted-foreground">
              산이랑에 오신 것을 환영합니다.
            </p>
          </div>
          <div className="grid gap-2">
            <FormField
              control={form.control}
              name="id"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>아이디</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="grid gap-2">
            {/* Password Field */}
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>비밀번호</FormLabel>
                  <FormControl>
                    <Input type="password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button type="submit" className="w-full">
            로그인
          </Button>
          <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
            <span className="relative z-10 bg-background px-2 text-muted-foreground">
              소셜 로그인
            </span>
          </div>
          <SocialLoginButton />
          <div className="text-center text-sm">
            계정이 없으신가요 ?
            <a href="#" className="underline underline-offset-4">
              회원가입
            </a>
          </div>
        </div>
      </form>
      <div className="relative hidden bg-muted md:block">
        <LoginJpg />
      </div>
    </>
  );
};

export default LoginForm;
