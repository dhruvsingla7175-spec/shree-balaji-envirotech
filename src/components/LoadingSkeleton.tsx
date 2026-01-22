import { motion } from "framer-motion";
import { Skeleton } from "@/components/ui/skeleton";

const LoadingSkeleton = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[100] bg-background flex items-center justify-center"
    >
      <div className="text-center space-y-8">
        {/* Logo Skeleton with Pulse */}
        <motion.div
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="relative mx-auto w-24 h-24"
        >
          <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl animate-pulse" />
          <Skeleton className="w-24 h-24 rounded-full" />
        </motion.div>

        {/* Company Name */}
        <div className="space-y-2">
          <Skeleton className="h-8 w-48 mx-auto" />
          <Skeleton className="h-4 w-32 mx-auto" />
        </div>

        {/* Loading Bar */}
        <div className="w-48 mx-auto">
          <div className="h-1 bg-muted rounded-full overflow-hidden">
            <motion.div
              animate={{ x: ["-100%", "100%"] }}
              transition={{
                duration: 1,
                repeat: Infinity,
                ease: "linear",
              }}
              className="h-full w-1/2 bg-gradient-to-r from-transparent via-primary to-transparent"
            />
          </div>
        </div>

        {/* Loading Text */}
        <motion.p
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-sm text-muted-foreground"
        >
          Loading sustainable solutions...
        </motion.p>
      </div>
    </motion.div>
  );
};

export default LoadingSkeleton;
