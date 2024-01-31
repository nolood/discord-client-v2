import { useForm } from "react-hook-form";
import { type z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerFormSchema } from "~/widgets/register-form/model";
import { type FC } from "react";
import { Button, FormField, Input } from "~/shared/ui";
import {
  Form,
  FormControl,
  FormDescription,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/shared/ui/form";

const RegisterForm: FC = () => {
  const form = useForm<z.infer<typeof registerFormSchema>>({
    resolver: zodResolver(registerFormSchema),
    defaultValues: {
      username: "",
      password: "",
      passwordConfirm: "",
    },
  });

  const onSubmit = (values: z.infer<typeof registerFormSchema>): void => {
    console.log(values);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-[25px]"
      >
        <FormField
          control={form.control}
          name={"username"}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="Enter your username" {...field} />
              </FormControl>
              <FormMessage />
              <FormDescription>
                This is your login and display name
              </FormDescription>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name={"password"}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter your password"
                  type="password"
                  {...field}
                />
              </FormControl>
              <FormMessage />
              <FormDescription>This is your password</FormDescription>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name={"passwordConfirm"}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password repeat</FormLabel>
              <FormControl>
                <Input
                  placeholder="Repeat your password"
                  type="password"
                  {...field}
                />
              </FormControl>
              <FormMessage />
              <FormDescription>Its a repeat of your password</FormDescription>
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};

export default RegisterForm;
