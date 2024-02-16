import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";

function Home() {
  return (
    <main className="flex-1">
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
        <div className="container flex flex-col items-center justify-center space-y-4 text-center px-4 md:px-6">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              Descubre la Magia del Agua
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Experimenta el encanto con nuestra colección de elixires y
              pociones místicas. Puro. Potente. Mágico.
            </p>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
        <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Productos Destacados
            </h2>
            <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Explora nuestras creaciones artesanales, cada una imbuida con su
              propio encanto especial.
            </p>
          </div>
          <div className="mx-auto grid max-w-5xl items-start gap-6 sm:grid-cols-2 lg:gap-12">
            <div className="flex flex-col gap-2">
              <h3 className="text-2xl font-bold">Esencia Etérea</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Una poción de belleza etérea, este elixir otorga un brillo
                radiante al bebedor, revelando su luz interior al mundo.
              </p>
              <Link
                className="inline-flex h-9 items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-white px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 
                dark:text-black dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                to="#"
              >
                Comprar Ahora
              </Link>
            </div>
            <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
              <img
                alt="Esencia Etérea"
                className="aspect-[1/1] overflow-hidden rounded-xl object-contain object-center"
                height="500"
                src="https://mtek3d.com/wp-content/uploads/2018/01/image-placeholder-500x500.jpg"
                width="500"
              />
            </div>
            <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
              <img
                alt="Esencia Etérea"
                className="aspect-[1/1] overflow-hidden rounded-xl object-contain object-center"
                height="500"
                src="https://mtek3d.com/wp-content/uploads/2018/01/image-placeholder-500x500.jpg"
                width="500"
              />
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-2xl font-bold">Canto de la Sirena</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Elaborado a partir de las lágrimas de las sirenas, este elixir
                encanta los sentidos, llenando el corazón de alegría y la mente
                de inspiración.
              </p>
              <Link
                className="inline-flex h-9 items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-white px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 dark:text-black disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                to="#"
              >
                Comprar Ahora
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Experimenta la Magia
            </h2>
            <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Permite que tu equipo se centre en enviar características en lugar
              de gestionar la infraestructura con CI/CD automatizado.
            </p>
          </div>
          <div className="mx-auto w-full max-w-sm space-y-2">
            <form className="flex space-x-2">
              <Input
                className="max-w-lg flex-1"
                placeholder="Ingresa tu correo electrónico"
                type="email"
              />
              <Button type="submit">Registrarse</Button>
            </form>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Regístrate para recibir una notificación cuando lancemos.
              <Link className="underline underline-offset-2" to="#">
                Términos y Condiciones
              </Link>
            </p>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 border-t">
        <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Contáctanos
            </h2>
            <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              ¿Listo para experimentar la magia? Ponte en contacto con nuestro
              equipo encantador.
            </p>
          </div>
          <div className="mx-auto w-full max-w-[400px] space-y-4">
            <form className="grid gap-4">
              <Input placeholder="Nombre" type="text" />
              <Input placeholder="Correo Electrónico" type="email" />
              <Input placeholder="Mensaje" type="text" />
              <Button type="submit">Enviar</Button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
