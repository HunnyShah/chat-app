"use client";

import LoadingLogo from "@/components/ui/shared/LoadingLogo";
import { ClerkProvider, useAuth } from "@clerk/nextjs";
import {
  AuthLoading,
  Authenticated,
  ConvexProvider,
  ConvexReactClient,
} from "convex/react";
import { ConvexProviderWithClerk } from "convex/react-clerk";
import { convexToJson } from "convex/values";
import React, { ReactNode } from "react";

type Props = {
  children: React.ReactNode;
};

const CONVEX_URL = "https://grateful-hawk-564.convex.cloud";
const convex = new ConvexReactClient(CONVEX_URL);

const ConvexClientProvider = ({ children }: Props) => {
  return (
    <ClerkProvider publishableKey="pk_test_ZnJhbmstZXdlLTI5LmNsZXJrLmFjY291bnRzLmRldiQ">
      <ConvexProviderWithClerk useAuth={useAuth} client={convex}>
        <Authenticated>{children}</Authenticated>
        <AuthLoading>
          <LoadingLogo />
        </AuthLoading>
      </ConvexProviderWithClerk>
    </ClerkProvider>
  );
};

export default ConvexClientProvider;
