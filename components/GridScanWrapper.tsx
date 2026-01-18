"use client";

import { useEffect, useState } from "react";

export default function GridScanWrapper(props: any) {
  const [GridScanComponent, setGridScanComponent] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Only import GridScan on client side and if packages are available
    const loadGridScan = async () => {
      try {
        // Check if packages are available by trying to import them
        const [three, postprocessing] = await Promise.all([
          import("three").catch((e) => {
            console.error("Failed to load three:", e);
            return null;
          }),
          import("postprocessing").catch((e) => {
            console.error("Failed to load postprocessing:", e);
            return null;
          }),
        ]);
        
        // If packages are available, load GridScan
        if (three && postprocessing) {
          try {
            // Use a dynamic import
            const GridScanModule = await import("@/components/GridScan").catch((e) => {
              console.error("Failed to load GridScan component:", e);
              throw e;
            });
            const component = GridScanModule.GridScan || GridScanModule.default;
            if (component) {
              setGridScanComponent(() => component);
            } else {
              setError("GridScan component not found in module");
            }
          } catch (importError: any) {
            console.error("GridScan component could not be loaded:", importError);
            setError(importError?.message || "Failed to load GridScan component");
          }
        } else {
          const missing = [];
          if (!three) missing.push("three");
          if (!postprocessing) missing.push("postprocessing");
          const msg = `GridScan dependencies not available: ${missing.join(", ")}`;
          console.warn(msg);
          setError(msg);
        }
      } catch (error: any) {
        console.error("Error loading GridScan:", error);
        setError(error?.message || "Unknown error loading GridScan");
      } finally {
        setIsLoading(false);
      }
    };

    loadGridScan();
  }, []);

  if (isLoading) {
    return null;
  }

  if (error) {
    // Silently fail - don't show error in production
    return null;
  }

  if (!GridScanComponent) {
    return null;
  }

  return (
    <div className="w-full h-full absolute inset-0">
      <GridScanComponent {...props} />
    </div>
  );
}

