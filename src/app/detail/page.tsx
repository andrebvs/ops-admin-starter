import { DemoDetailPage } from "@/features/demo/ui/demo-detail-page";
import { DemoWorkspace } from "@/features/demo/ui/demo-workspace";

export default function DetailPage() {
  return (
    <DemoWorkspace path="/detail">
      <DemoDetailPage />
    </DemoWorkspace>
  );
}
