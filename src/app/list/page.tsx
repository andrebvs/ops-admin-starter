import { DemoListPage } from "@/features/demo/ui/demo-list-page";
import { DemoWorkspace } from "@/features/demo/ui/demo-workspace";

export default function ListPage() {
  return (
    <DemoWorkspace path="/list">
      <DemoListPage />
    </DemoWorkspace>
  );
}
