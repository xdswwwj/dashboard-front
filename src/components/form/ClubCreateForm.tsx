import { useCreateClubMutation } from "@/services/club/club.mutation";
import React from "react";
import { UseFormReturn } from "react-hook-form";
import { z } from "zod";
import { Button } from "../ui/button";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import {
  ClubCreateFormInterface,
  clubCreateFormSchema,
} from "./schema/club.schema";

interface ClubCreateFormProps {
  form: UseFormReturn<ClubCreateFormInterface>;
}

const ClubCreateForm: React.FC<ClubCreateFormProps> = ({ form }) => {
  const createClubMutate = useCreateClubMutation();

  const onSubmit = (values: z.infer<typeof clubCreateFormSchema>) => {
    console.log("values ><>", values);
    createClubMutate?.mutate(values);
  };

  return (
    <form onSubmit={form.handleSubmit(onSubmit)}>
      <div className="grid gap-2">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>클럽명</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
      <div className="grid gap-2">
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>클럽 설명</FormLabel>
              <FormControl>
                <Textarea {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
      <Button type="submit" className="w-full">
        클럽 생성
      </Button>
    </form>
  );
};

export default ClubCreateForm;
