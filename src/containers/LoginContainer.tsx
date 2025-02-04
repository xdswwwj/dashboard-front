import LoginForm from "@/components/form/LoginForm";
import {
  loginDefaultValues,
  loginFormSchema,
} from "@/components/form/schema/auth.schema";
import { Card, CardContent } from "@/components/ui/card";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";

const LoginContainer: React.FC = () => {
  const form = useForm<z.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: loginDefaultValues,
  });
  return (
    <FormProvider {...form}>
      <div className="flex flex-col gap-6">
        <Card className="overflow-hidden">
          <CardContent className="grid p-0 md:grid-cols-2">
            <LoginForm form={form} />
          </CardContent>
        </Card>
        <div className="text-balance text-center text-xs text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 hover:[&_a]:text-primary">
          계속 진행하면 <a href="#">이용 약관</a> 및
          <a href="#">개인정보 보호 정책</a>에 동의하게 됩니다.
        </div>
      </div>
    </FormProvider>
  );
};

export default LoginContainer;
