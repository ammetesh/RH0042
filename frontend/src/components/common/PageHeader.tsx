interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

export default function PageHeader({
  title,
  subtitle,
}: PageHeaderProps) {
  return (
    <div className="mb-10">
      <h1 className="text-4xl font-bold gradient-text">
        {title}
      </h1>

      {subtitle && (
        <p className="mt-3 text-muted max-w-3xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}