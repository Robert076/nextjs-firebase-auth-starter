import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { auth } from "@/app/firebase/config";
import { onAuthStateChanged } from "firebase/auth";

const useRequireAuth = () => {
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        router.push("/sign-in");  // Redirect to sign-in page if not logged in
      }
    });

    return () => unsubscribe();
  }, [router]);
};

export default useRequireAuth;
