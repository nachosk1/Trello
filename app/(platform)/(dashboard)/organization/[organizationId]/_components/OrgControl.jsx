"use client";

import { useOrganizationList } from "@clerk/nextjs";
import { useParams } from "next/navigation";
import { useEffect } from "react";

export default function OrgControl() {
  const params = useParams();
  const { setActive } = useOrganizationList();

  useEffect(() => {
    if (!setActive) return;
    setActive({
      organization: params.organizationId, // ek irganizationId tiene que ser el mismo nombre de la caprta con [ ]
    });
  }, [setActive, params.organizationId]);
  return null;
}
