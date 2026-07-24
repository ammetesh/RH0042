export default function Footer() {
  return (
    <footer className="border-t border-border py-6 mt-10 text-center text-muted">
      © {new Date().getFullYear()} QSIE • Quantum Statistical Integrity Engine
    </footer>
  );
}