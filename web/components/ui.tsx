import { Fragment } from "react";
import styles from "./ui.module.css";

const PLACEHOLDER = /(\[[A-Z][A-Z ]*\])/;

/**
 * Renders copy, highlighting any open [PLACEHOLDER] so it can't ship unnoticed.
 */
export function Copy({ children }: { children: string }) {
  const parts = children.split(PLACEHOLDER);
  if (parts.length === 1) return children;
  return parts.map((part, i) =>
    PLACEHOLDER.test(part) ? (
      <mark key={i} className={styles.placeholder} title="Placeholder — to be supplied">
        {part}
      </mark>
    ) : (
      <Fragment key={i}>{part}</Fragment>
    ),
  );
}

export function Eyebrow({
  children,
  tone = "dark",
  className,
}: {
  children: string;
  tone?: "dark" | "light";
  className?: string;
}) {
  const cls = [styles.eyebrow, tone === "light" ? styles.eyebrowOnPaper : "", className].filter(Boolean).join(" ");
  return <p className={cls}>{children}</p>;
}

type ButtonProps = {
  href: string;
  variant?: "primary" | "secondary" | "text";
  size?: "md" | "lg";
  children: React.ReactNode;
} & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "children">;

export function Button({ href, variant = "primary", size = "md", children, className, ...rest }: ButtonProps) {
  const cls = [styles.button, styles[variant], size === "lg" ? styles.lg : "", className].filter(Boolean).join(" ");
  return (
    <a href={href} className={cls} {...rest}>
      {children}
    </a>
  );
}

export function Chips({ items }: { items: string[] }) {
  return (
    <ul className={styles.chips}>
      {items.map((chip) => (
        <li key={chip} className={styles.chip}>
          {chip}
        </li>
      ))}
    </ul>
  );
}
