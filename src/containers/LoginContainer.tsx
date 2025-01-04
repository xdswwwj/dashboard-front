import LoginForm from "@/components/form/LoginForm";
import { loginFormSchema } from "@/components/form/schema/schema";
import { Card, CardContent } from "@/components/ui/card";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";

const LoginContainer: React.FC = () => {
  const form = useForm<z.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      id: "",
      password: "",
    },
  });
  return (
    <FormProvider {...form}>
      <div className="flex flex-col gap-6">
        <Card className="overflow-hidden">
          <CardContent className="grid p-0 md:grid-cols-2">
            <LoginForm form={form} />
          </CardContent>
        </Card>
      </div>
    </FormProvider>
  );
};

export default LoginContainer;
