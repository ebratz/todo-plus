import CreateBtn from "@/components/buttons/createBtn";
import NavBtn from "@/components/buttons/navBtn";
import TodoCard from "@/components/cards/todoCard";

export default function Page() {
    return (
      <main className="max-w-sm m-auto flex flex-col items-center px-2 pt-2">
        <div className="flex justify-between items-center w-full pb-4">
          <small className="font-medium text-sm" >To-Dos:</small>
          <small className="text-sm text-right" >20/300</small>
        </div>
        <div className="flex flex-col gap-2">
          <TodoCard/>
        </div>
        <NavBtn className="fixed bottom-4 right-2" text="Create To-Do" variant="default" route="/to-do/create" />
      </main>
    );
}
  