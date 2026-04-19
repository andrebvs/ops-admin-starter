import { DemoFormPage } from "@/features/demo/ui/demo-form-page";
import { DemoWorkspace } from "@/features/demo/ui/demo-workspace";

export default function FormPage() {
  return (
    <DemoWorkspace path="/form">
      <DemoFormPage />
    </DemoWorkspace>
  );
}
