import { ClerkProvider } from "@clerk/nextjs";
import { esES } from "@clerk/localizations";

export default function layout({ children }) {
  return <ClerkProvider localization={esES}>{children}</ClerkProvider>;
}
