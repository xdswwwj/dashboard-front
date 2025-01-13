import {
  accountDefaultValues,
  accountFormSchema,
} from "@/components/form/schema/schema";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useUpdateUserInfoMutation } from "@/services/api";
import useUserStore from "@/store/userStore";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";

const MyPageContainer: React.FC = () => {
  const { user } = useUserStore();
  const accountForm = useForm<z.infer<typeof accountFormSchema>>({
    resolver: zodResolver(accountFormSchema),
    defaultValues: accountDefaultValues({
      name: user?.name ? user.name : "",
      email: user?.email ? user.email : "",
      nickname: user?.nickname ? user.nickname : "",
      sex: user?.sex ? user.sex : 0,
    }),
  });
  const { mutate } = useUpdateUserInfoMutation();

  const onSubmit = (values: z.infer<typeof accountFormSchema>) => {
    console.log(values);
    mutate(values, {
      onSuccess: (data) => {
        console.log("Update successful", data);
      },
      onError: (error) => {
        console.error("Update failed", error);
      },
    });
  };
  return (
    <>
      <div className="flex flex-1 flex-col gap-4 p-4 pt-6">
        <Card>
          <FormProvider {...accountForm}>
            <form onSubmit={accountForm.handleSubmit(onSubmit)}>
              <CardHeader>
                <CardTitle>회원정보</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <FormField
                  control={accountForm.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>이름</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={accountForm.control}
                  name="nickname"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>닉네임</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={accountForm.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>이메일</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={accountForm.control}
                  name="sex"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>성별</FormLabel>
                      <FormControl>
                        <div className="flex gap-2">
                          <Button
                            type="button"
                            variant={field.value === 1 ? "default" : "outline"} // 선택된 상태에 따라 스타일 변경
                            onClick={() => field.onChange(1)} // 남성 선택 시
                          >
                            남
                          </Button>
                          <Button
                            type="button"
                            variant={field.value === 2 ? "default" : "outline"} // 선택된 상태에 따라 스타일 변경
                            onClick={() => field.onChange(2)} // 여성 선택 시
                          >
                            여
                          </Button>
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </CardContent>
              <CardFooter>
                <Button type="submit">Save changes</Button>
              </CardFooter>
            </form>
          </FormProvider>
        </Card>

        {user?.provider === "local" && (
          <Card>
            <CardHeader>
              <CardTitle>Password</CardTitle>
              <CardDescription>
                Change your password here. After saving, you'll be logged out.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <form>
                <div className="space-y-1">
                  <Label htmlFor="current">현재 비밀번호</Label>
                  <Input id="current" type="password" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="new">새로운 비밀번호</Label>
                  <Input id="new" type="password" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="new">새로운 비밀번호 확인</Label>
                  <Input id="new" type="password" />
                </div>
              </form>
            </CardContent>
            <CardFooter>
              <Button>저장</Button>
            </CardFooter>
          </Card>
        )}
      </div>
    </>
  );
};

export default MyPageContainer;
