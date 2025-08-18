export default function SectionTitle({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <h2 className="text-center text-2xl sm:text-3xl font-medium text-[#0b0b0c] my-6 sm:my-10">
      {children}
    </h2>
  );
}
