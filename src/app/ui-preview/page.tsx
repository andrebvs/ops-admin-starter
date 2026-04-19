import { DemoUiPreviewPage } from "@/features/demo/ui/demo-ui-preview-page";
import { DemoWorkspace } from "@/features/demo/ui/demo-workspace";

export default function UiPreviewPage() {
  return (
    <DemoWorkspace path="/ui-preview">
      <DemoUiPreviewPage />
    </DemoWorkspace>
  );
}
