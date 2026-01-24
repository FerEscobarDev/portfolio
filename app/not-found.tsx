"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[var(--color-bg-primary)] flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center gap-8 text-center"
      >
        <div className="flex flex-col gap-2">
          <span className="text-[var(--color-accent)] text-sm font-primary">
            {"// ERROR_404"}
          </span>
          <h1 className="font-display text-6xl md:text-8xl font-bold text-[var(--color-text-primary)]">
            404
          </h1>
          <p className="text-[var(--color-text-secondary)] text-lg font-primary mt-4">
            La página que buscas no existe o fue movida.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="bg-[var(--color-bg-secondary)] border border-[var(--color-border)] p-6 max-w-md"
        >
          <pre className="text-left text-sm font-primary">
            <span className="text-[var(--color-text-primary)]">
              {"try {"}
            </span>
            <br />
            <span className="text-[var(--color-code-string)]">
              {"  findPage('"}
              <span className="text-[var(--color-accent)]">requested_url</span>
              {"');"}
            </span>
            <br />
            <span className="text-[var(--color-text-primary)]">
              {"} catch (error) {"}
            </span>
            <br />
            <span className="text-[var(--color-terminal-red)]">
              {"  throw new PageNotFoundError();"}
            </span>
            <br />
            <span className="text-[var(--color-text-primary)]">{"}"}</span>
          </pre>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link
            href="/"
            className="inline-flex items-center justify-center bg-[var(--color-accent)] text-[var(--color-bg-primary)] px-8 py-4 font-primary text-sm font-semibold transition-all duration-300 hover:brightness-110"
          >
            goHome()
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}
