import Logos from "@/components/logo";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";
import { Task } from "@/types";
import {
  DndContext,
  DragEndEvent,
  KeyboardSensor,
  PointerSensor,
  closestCenter,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable"; // Add useSortable hook
import { useState } from "react";
import { Link } from "react-router-dom";

function Tasks() {
  // const userState = useUserState((state) => state.user)
  const { toast } = useToast();
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor)
  );

  const [tasks, setTasks] = useState<Task[]>([]);

  const columns = [
    {
      id: 1,
      name: "todo",
      title: "To do",
    },
    {
      id: 2,
      name: "inProgress",
      title: "In Progress",
    },
    {
      id: 3,
      name: "done",
      title: "Done",
    },
  ];

  function handleAddTask(columnId: string) {
    const newTask = {
      id: `${tasks.length + 1}`,
      title: "New Task",
      description: "description",
      status: columnId,
    };
    setTasks((tasks) => [...tasks, newTask]);
  }

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (active.id === over?.id) {
      return;
    }

    setTasks((tasks) => {
      const newTasks = [...tasks];

      const sourceTaskIndex = newTasks.findIndex(
        (task) => task.id === active.id
      );
      const targetTaskIndex = newTasks.findIndex(
        (task) => task.id === over?.id
      );

      const sourceColumn = newTasks[sourceTaskIndex]?.status; // Ensure status exists
      const targetColumn = newTasks[targetTaskIndex]?.status; // Ensure status exists

      const activeTask = newTasks[sourceTaskIndex];

      if (sourceColumn && targetColumn) {
        activeTask.status = targetColumn;
      }

      return newTasks;
    });
  };

  const SortableItem = ({
    id,
    title,
    description,
  }: {
    id: string;
    title: string;
    description: string;
  }) => {
    const { attributes, listeners, setNodeRef, transform, transition } =
      useSortable({ id });

    return (
      <div
        ref={setNodeRef}
        style={{
          transform: transform
            ? `translate3d(${transform.x}px, ${transform.y}px, 0)`
            : undefined,
          transition,
        }}
        {...attributes}
        {...listeners}
        className="rounded-lg  px-3 py-2 bg-gray-200 dark:bg-gray-700"
      >
        <h3 className="font-semibold">{title}</h3>
        <p className="text-sm/relaxed text-gray-500 dark:text-gray-400">
          {description}
        </p>
      </div>
    );
  };

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
    >
      <div className="flex min-h-[87vh] w-full">
        <div className="hidden lg:flex flex-col w-[300px] border-r bg-gray-100/40 dark:bg-gray-800/40">
          <div className="flex h-[56px] items-center border-b px-6">
            <Link className="flex items-center gap-2 font-semibold" to="#">
              <Logos.Package className="h-6 w-6" />
              <span className="">Tasks</span>
            </Link>
            <Button
              className="ml-auto h-8 w-8 rounded-full border border-gray-200 dark:border-gray-800"
              size="icon"
              variant="outline"
              onClick={() => {
                toast({
                  title: "Scheduled: Catch up ",
                  description: "Friday, February 10, 2023 at 5:57 PM",
                  action: (
                    <ToastAction altText="Goto schedule to undo">
                      Undo
                    </ToastAction>
                  ),
                });
              }}
            >
              <Logos.Plus className="h-4 w-4" />
              <span className="sr-only">Add list</span>
            </Button>
          </div>
          <div className="flex-1 overflow-auto py-2">
            <div className="flex flex-col gap-2">
              {columns.map((status) => (
                <Accordion
                  type="single"
                  collapsible
                  className="w-full"
                  key={status.id}
                >
                  <AccordionItem
                    value="item-1"
                    className="rounded-lg bg-gray-100 px-3 py-2 dark:bg-gray-800"
                  >
                    <AccordionTrigger>{status.title}</AccordionTrigger>
                    {
                      <AccordionContent>
                        <div className="grid gap-2">
                          {tasks.length > 0 ? (
                            tasks
                              .filter((task) => task.status === status.name)
                              .map((task) => (
                                <div
                                  key={task.id}
                                  className="rounded-lg bg-gray-200 px-3 py-2 dark:bg-gray-700"
                                >
                                  <h3 className="font-semibold">
                                    {task.title}
                                  </h3>
                                  <p className="text-sm/relaxed text-gray-500 dark:text-gray-400">
                                    {task.description}
                                  </p>
                                </div>
                              ))
                          ) : (
                            <div className="text-center text-gray-500 dark:text-gray-400">
                              No tasks
                            </div>
                          )}
                        </div>
                      </AccordionContent>
                    }
                  </AccordionItem>
                </Accordion>
              ))}
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col">
          <header className="flex h-14 items-center gap-4 border-b bg-gray-100/40 px-6 dark:bg-gray-800/40">
            <Link className="lg:hidden" to="#">
              <Logos.Package className="h-6 w-6" />
              <span className="sr-only">Home</span>
            </Link>
            <h1 className="font-semibold text-lg md:text-2xl">Tasks</h1>
            <Button className="ml-auto lg:hidden" size="sm">
              Add list
            </Button>
          </header>
          <main className="flex-1 flex items-start p-4 gap-4 overflow-auto">
            <div className="grid gap-4 w-full">
              {columns.map((status) => (
                <SortableContext
                  items={tasks.filter((task) => task.status === status.name)}
                  strategy={verticalListSortingStrategy}
                  key={status.id}
                >
                  <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                    <div className="flex items-center gap-4">
                      <Logos.GripHorizontal className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                      <h2 className="font-semibold text-lg">{status.title}</h2>
                      <Button className="ml-auto rounded-full" size="icon">
                        <Logos.Plus
                          className="w-4 h-4"
                          onClick={() => handleAddTask(status.name)}
                        />
                        <span className="sr-only">Add card</span>
                      </Button>
                    </div>
                    <div className="grid gap-4 mt-4">
                      {tasks
                        .filter((task) => task.status === status.name)
                        .map((task) => (
                          <SortableItem
                            key={task.id}
                            id={task.id}
                            title={task.title}
                            description={task.description}
                          />
                        ))}
                    </div>
                  </div>
                </SortableContext>
              ))}
            </div>
          </main>
        </div>
      </div>
    </DndContext>
  );
}
export default Tasks;
