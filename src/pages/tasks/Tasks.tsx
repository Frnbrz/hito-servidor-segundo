
import Logos from "@/components/logo"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"



function Tasks() {
  return (
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
            <div className="rounded-lg bg-gray-100 px-3 py-2 dark:bg-gray-800">
              <Logos.List className="h-4 w-4 mr-2" />
              To Do
            </div>
            <div className="rounded-lg bg-gray-100 px-3 py-2 dark:bg-gray-800">
              <Logos.List className="h-4 w-4 mr-2" />
              In Progress
            </div>
            <div className="rounded-lg bg-gray-100 px-3 py-2 dark:bg-gray-800">
              <Logos.List className="h-4 w-4 mr-2" />
              Done
            </div>
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
            <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
              <div className="flex items-center gap-4">
                <Logos.GripHorizontal className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                <h2 className="font-semibold text-lg">To Do</h2>
                <Button className="ml-auto rounded-full" size="icon">
                  <Logos.Plus className="w-4 h-4" />
                  <span className="sr-only">Add card</span>
                </Button>
              </div>
              <div className="grid gap-4 mt-4">
                <div className="rounded-lg border border-dashed border-gray-200 p-4 dark:border-gray-800">
                  <h3 className="font-semibold">Buy groceries</h3>
                  <p className="text-sm/relaxed text-gray-500 dark:text-gray-400">Fruits, vegetables, milk</p>
                </div>
                <div className="rounded-lg border border-dashed border-gray-200 p-4 dark:border-gray-800">
                  <h3 className="font-semibold">Call mom</h3>
                  <p className="text-sm/relaxed text-gray-500 dark:text-gray-400">Wish her happy birthday</p>
                </div>
              </div>
            </div>
            <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
              <div className="flex items-center gap-4">
                <Logos.GripHorizontal className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                <h2 className="font-semibold text-lg">In Progress</h2>
                <Button className="ml-auto rounded-full" size="icon">
                  <Logos.Plus className="w-4 h-4" />
                  <span className="sr-only">Add card</span>
                </Button>
              </div>
              <div className="grid gap-4 mt-4">
                <div className="rounded-lg border border-dashed border-gray-200 p-4 dark:border-gray-800">
                  <h3 className="font-semibold">Design wireframes</h3>
                  <p className="text-sm/relaxed text-gray-500 dark:text-gray-400">For the new landing page</p>
                </div>
              </div>
            </div>

            <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
              <div className="flex items-center gap-4">
                <Logos.GripHorizontal className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                <h2 className="font-semibold text-lg">Done</h2>
                <Button className="ml-auto rounded-full" size="icon">
                  <Logos.Plus className="w-4 h-4" />
                  <span className="sr-only">Add card</span>
                </Button>
              </div>
              <div className="grid gap-4 mt-4">
                <div className="rounded-lg border border-dashed border-gray-200 p-4 dark:border-gray-800">
                  <h3 className="font-semibold">Write report</h3>
                  <p className="text-sm/relaxed text-gray-500 dark:text-gray-400">Quarterly earnings</p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default Tasks