import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Project } from "@/types";
import { dateFormatter } from "@/utils/utils";
import { useState } from "react";

const PROJECTS = [
  {
    id: 1,
    title: "titulo",
    description: "hola",
    tasks: [],
    createDate: "2024-02-16T18:46:14.651136",
    lastModified: null,
    createdBy: 3,
    lastModifiedBy: null,
  },
  {
    id: 2,
    title: "titulo",
    description: "hola",
    tasks: [],
    createDate: "2024-02-16T18:50:16.038242",
    lastModified: null,
    createdBy: 3,
    lastModifiedBy: null,
  },
  {
    id: 3,
    title: "titulo",
    description: "hola",
    tasks: [],
    createDate: "2024-02-16T18:50:16.710484",
    lastModified: null,
    createdBy: 3,
    lastModifiedBy: null,
  },
  {
    id: 4,
    title: "titulo",
    description: "hola",
    tasks: [],
    createDate: "2024-02-16T18:50:17.397598",
    lastModified: null,
    createdBy: 3,
    lastModifiedBy: null,
  },
  {
    id: 5,
    title: "titulo",
    description: "hola",
    tasks: [],
    createDate: "2024-02-16T18:50:18.079841",
    lastModified: null,
    createdBy: 3,
    lastModifiedBy: null,
  },
  {
    id: 6,
    title: "aa",
    description: "hola",
    tasks: [],
    createDate: "2024-02-16T19:04:55.66412",
    lastModified: null,
    createdBy: 3,
    lastModifiedBy: null,
  },
  {
    id: 7,
    title: "dassda",
    description: "hola",
    tasks: [],
    createDate: "2024-02-16T19:04:57.937534",
    lastModified: null,
    createdBy: 3,
    lastModifiedBy: null,
  },
  {
    id: 8,
    title: "bbb",
    description: "hola",
    tasks: [],
    createDate: "2024-02-16T19:04:59.589343",
    lastModified: null,
    createdBy: 3,
    lastModifiedBy: null,
  },
  {
    id: 9,
    title: "cc",
    description: "hola",
    tasks: [],
    createDate: "2024-02-16T19:05:01.236672",
    lastModified: null,
    createdBy: 3,
    lastModifiedBy: null,
  },
];

function Projects() {
  function onChange(event: React.ChangeEvent<HTMLInputElement>) {
    const inputValue = event.target.value;
    console.log(inputValue === "");
    if (inputValue === "") {
      setProjects(PROJECTS); // Replace `initialProjects` with the initial state of your projects projects
    } else {
      setProjects((projects: Project[]) =>
        projects.filter((project: Project) =>
          project.title.includes(inputValue)
        )
      );
    }
  }
  const [projects, setProjects] = useState<Project[]>(PROJECTS);
  return (
    <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-10">
      <div className="max-w-6xl w-full mx-auto flex items-center gap-4">
        <form className="flex-1">
          <Input
            className="bg-white dark:bg-gray-950 dark:text-black"
            placeholder="Buscar proyectos..."
            onChange={onChange}
          />
        </form>
        <Button>Agregar Nuevo</Button>
      </div>
      <div className="grid gap-6 max-w-6xl w-full mx-auto">
        {projects.map((project: Project) => (
          <Card key={project.id}>
            <CardHeader className="flex flex-row items-center gap-4">
              <BookOpenIcon className="w-8 h-8" />
              <div className="grid gap-1">
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.id}</CardDescription>
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button className="ml-auto" size="icon" variant="ghost">
                    <MoreHorizontalIcon className="w-4 h-4" />
                    <span className="sr-only">{project.title}</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>Borrar</DropdownMenuItem>
                  <DropdownMenuItem>Actualizar</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </CardHeader>
            <CardContent className="grid gap-2">
              <div className="text-sm font-semibold">{project.description}</div>
              <div className="flex items-center gap-4 text-sm">
                <div className="flex items-center gap-1">
                  <GithubIcon className="w-4 h-4" />
                  <span className="text-gray-500 dark:text-gray-400">
                    {dateFormatter(project.createDate)}
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <GitBranchIcon className="w-4 h-4" />
                  <span className="text-gray-500 dark:text-gray-400">main</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </main>
  );
}
export default Projects;

function BookOpenIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
    </svg>
  );
}

function MoreHorizontalIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="1" />
      <circle cx="19" cy="12" r="1" />
      <circle cx="5" cy="12" r="1" />
    </svg>
  );
}

function GitBranchIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="6" x2="6" y1="3" y2="15" />
      <circle cx="18" cy="6" r="3" />
      <circle cx="6" cy="18" r="3" />
      <path d="M18 9a9 9 0 0 1-9 9" />
    </svg>
  );
}

function GithubIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}
