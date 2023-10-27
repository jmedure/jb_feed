export default function DesignsWrapper({ children }) {
  return (
    <div className="flex-wrap mx-auto selection:bg-sky-100 scroll-smooth w-full sm:max-w-[600px] font-jbd mb-4">
      {children}
    </div>
  );
}
