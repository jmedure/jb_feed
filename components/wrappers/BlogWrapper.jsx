export default function BlogHeaderWrapper({ children }) {
  return (
    <div className="flex-wrap selection:bg-sky-100 scroll-smooth w-full sm:max-w-[640px] font-jbd mb-4">
      {children}
    </div>
  );
}
