export default function BlogHeaderWrapper({ children }) {
  return (
    <div className="selection:bg-sky-100 scroll-smooth w-full md:max-w-[640px] font-jbd  mb-4">
      {children}
    </div>
  );
}
