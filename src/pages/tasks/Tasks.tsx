import Logos from "@/components/logo";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  DndContext,
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
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor)
  );

  const [columns, setColumns] = useState([
    {
      id: "todo",
      title: "To Do",
      items: [
        {
          id: "1",
          title: "Buy groceries",
          description: "Fruits, vegetables, milk",
        },
        {
          id: "2",
          title: "Comprar Chuches",
          description: "Fruits, vegetables, milk",
        },
      ],
    },
    {
      id: "inProgress",
      title: "In Progress",
      items: [
        {
          id: "1",
          title: "Design wireframes",
          description: "For the new landing page",
        },
      ],
    },
    {
      id: "done",
      title: "Done",
      items: [
        { id: "1", title: "Write report", description: "Quarterly earnings" },
      ],
    },
  ]);

  console.log(columns);

  function handleAddTask(columnId: string) {
    const task = {
      id: "3",
      title: "New task",
      description: "Description",
    };

    setColumns((columns) => {
      const newColumns = columns.map((column) => {
        if (column.id === columnId) {
          return {
            ...column,
            items: [...column.items, task],
          };
        }

        return column;
      });

      return newColumns;
    });
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleDragEnd = (event: { active: any; over: any }) => {
    const { active, over } = event;

    if (active.id !== over.id) {
      const activeColumn = columns.find((column) => column.id === active.id);
      const overColumn = columns.find((column) => column.id === over.id);
      const activeIndex = activeColumn?.items.findIndex(
        (item) => item.id === active.data.id
      );

      if (activeColumn && overColumn && activeIndex !== undefined) {
        const [removed] = activeColumn.items.splice(activeIndex, 1);
        overColumn.items.push(removed);
      }
    }
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
        className="rounded-lg border border-dashed border-gray-200 p-4 dark:border-gray-800"
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
      <div className="flex min-h-screen w-full">
        <div className="hidden lg:flex flex-col w-[300px] border-r bg-gray-100/40 dark:bg-gray-800/40">
          <div className="flex h-[60px] items-center border-b px-6">
            <Link className="flex items-center gap-2 font-semibold" to="#">
              <Logos.Package className="h-6 w-6" />
              <span className="">Tasks</span>
            </Link>
            <Button
              className="ml-auto h-8 w-8 rounded-full border border-gray-200 dark:border-gray-800"
              size="icon"
              variant="outline"
            >
              <Logos.Plus className="h-4 w-4" />
              <span className="sr-only">Add list</span>
            </Button>
          </div>
          <div className="flex-1 overflow-auto py-2">
            <div className="flex flex-col gap-2">
              {columns.map((column) => (
                <Accordion
                  type="single"
                  collapsible
                  className="w-full"
                  key={column.id}
                >
                  <AccordionItem
                    value="item-1"
                    className="rounded-lg bg-gray-100 px-3 py-2 dark:bg-gray-800"
                  >
                    <AccordionTrigger>{column.title}</AccordionTrigger>
                    {
                      <AccordionContent>
                        <div className="grid gap-2">
                          {column.items.map((item) => (
                            <div
                              key={item.id}
                              className="rounded-lg p-2 bg-gray-200 dark:bg-gray-700"
                            >
                              <h3 className="font-semibold">{item.title}</h3>
                              <p className="text-sm/relaxed text-gray-500 dark:text-gray-400">
                                {item.description}
                              </p>
                            </div>
                          ))}
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
              {columns.map((column) => (
                <div
                  className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800"
                  key={column.id}
                >
                  <div className="flex items-center gap-4">
                    <Logos.GripHorizontal className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                    <h2 className="font-semibold text-lg">{column.title}</h2>
                    <Button className="ml-auto rounded-full" size="icon">
                      <Logos.Plus
                        className="w-4 h-4"
                        onClick={() => handleAddTask(column.id)}
                      />
                      <span className="sr-only">Add card</span>
                    </Button>
                  </div>
                  <div className="grid gap-4 mt-4">
                    <SortableContext
                      id={column.id}
                      items={column.items}
                      strategy={verticalListSortingStrategy}
                    >
                      {column.items.map((item) => (
                        <SortableItem
                          key={item.id}
                          id={item.id}
                          title={item.title}
                          description={item.description}
                        />
                      ))}
                    </SortableContext>
                  </div>
                </div>
              ))}
            </div>
          </main>
        </div>
      </div>
    </DndContext>
  );
}
export default Tasks;
