import ClubCreateForm from "@/components/form/ClubCreateForm";
import {
  clubCreateDefaultValues,
  clubCreateFormSchema,
} from "@/components/form/schema/club.schema";
import { Card, CardContent } from "@/components/ui/card";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";

interface ClubCreateContainerProps {}

const ClubCreateContainer: React.FC<ClubCreateContainerProps> = () => {
  const form = useForm<z.infer<typeof clubCreateFormSchema>>({
    resolver: zodResolver(clubCreateFormSchema),
    defaultValues: clubCreateDefaultValues,
  });
  return (
    <FormProvider {...form}>
      <Card className="overflow-hidden">
        <CardContent className="grid p-0 md:grid-cols-2">
          <ClubCreateForm form={form} />
        </CardContent>
      </Card>
    </FormProvider>
  );
};

export default ClubCreateContainer;
