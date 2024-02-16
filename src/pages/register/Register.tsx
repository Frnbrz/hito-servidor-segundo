import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { z } from "zod";

const schema = z.object({
  email: z.string().email("Email no válido"),
  password: z.string().min(3, "La contraseña debe tener al menos 3 caracteres"),
  firstname: z.string().min(1, "El nombre debe tener al menos 1 caracter"),
  lastname: z.string().min(1, "El apellido debe tener al menos 1 caracter"),
});

function Register() {
  const redirect = useNavigate();
  const SignUpSchema = z.object({
    email: z.string().email(),
    password: z.string().min(3).max(20),
    firstname: z.string().min(1),
    lastname: z.string().min(1),
  });
  type SignUpSchemaType = z.infer<typeof SignUpSchema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpSchemaType>({ resolver: zodResolver(schema) });

  const onSubmit: SubmitHandler<SignUpSchemaType> = (data) => {
    fetch("http://localhost:8080/api/v1/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then(async (data) => {
        await localStorage.setItem("token", data.access_token);
        await redirect("/tasks");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex items-center justify-center flex-1"
    >
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Registro</CardTitle>
          <CardDescription>
            Introduzca sus credenciales a continuación para crear una cuenta.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="firstname">Nombre</Label>
            <Input
              id="firstname"
              placeholder="Escribe tu nombre"
              required
              type="text"
              {...register("firstname")}
            />
            {errors.firstname && (
              <p className="text-red-500 text-sm">
                {errors.firstname?.message}
              </p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="lastname">Apellido</Label>
            <Input
              id="lastname"
              placeholder="Escribe tu apellido"
              required
              type="text"
              {...register("lastname")}
            />
            {errors.lastname && (
              <p className="text-red-500 text-sm">
                {errors?.lastname?.message}
              </p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              placeholder="Escribe tu email"
              required
              type="text"
              {...register("email")}
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email?.message}</p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              placeholder="Escribe tu password"
              required
              type="password"
              {...register("password")}
            />
            {errors.password && (
              <p className="text-red-500 text-sm">
                {errors?.password?.message}
              </p>
            )}
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full">Registro</Button>
        </CardFooter>
        <a href="/login" className="text-center block p-4">
          ¿Ya tienes cuenta? Inicia sesión
        </a>
      </Card>
    </form>
  );
}

export default Register;
