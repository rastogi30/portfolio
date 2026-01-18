import { motion } from "framer-motion";

const fadeIn = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: {
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.5, ease: "easeOut" },
  },
  viewport: { once: true, amount: 0.3 },
});

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      {...fadeIn(0.1)}
      className="border-t border-[var(--border)] bg-[var(--card)]/50 py-10"
    >
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <div className="flex flex-col items-center gap-4 text-center">
          <p className="text-lg font-medium text-[var(--text-primary)]">
            Thanks for visiting ✨
          </p>
          <p className="text-sm text-[var(--text-muted)]">
            © {currentYear} All rights reserved. Made with ❤️ by Ansh Rastogi
          </p>
        </div>
      </div>
    </motion.footer>
  );
}

export default Footer;
