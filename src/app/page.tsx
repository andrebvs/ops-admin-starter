import { DemoDashboardPage } from "@/features/demo/ui/demo-dashboard-page";
import { DemoWorkspace } from "@/features/demo/ui/demo-workspace";

export default function HomePage() {
  return (
    <DemoWorkspace path="/">
      <DemoDashboardPage />
    </DemoWorkspace>
  );
}
