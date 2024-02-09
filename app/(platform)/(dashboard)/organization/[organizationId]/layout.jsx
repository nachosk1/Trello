import OrgControl from "./_components/OrgControl";

export default function OrganizationIdLayout({ children }) {
  return (
    <>
      <OrgControl />
      {children}
    </>
  );
}
