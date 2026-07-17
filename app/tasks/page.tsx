import PageCard from "@/components/PageCard";
import Link from "next/link";

const tasks = [
  { label: "Task #1", url: "/tasks/1" },
  { label: "Task #2", url: "/tasks/2" },
  { label: "Task #3", url: "/tasks/3" },
  { label: "Task #4", url: "/tasks/4" },
];

export default function TaskPage() {
  return (
    <PageCard>
      <h1>Tasks</h1>
      <ul>
        {tasks.map((task) => (
          <li key={task.url}>
            <Link href={task.url}>{task.label}</Link>
          </li>
        ))}
      </ul>
    </PageCard>
  );
}
