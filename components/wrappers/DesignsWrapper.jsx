export default function DesignsWrapper({ children }) {
  return (
    <div className="flex-wrap container-fg w-full mx-auto selection:bg-sky-200 scroll-smooth font-jbd">
      {children}
    </div>
  );
}
