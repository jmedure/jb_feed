export default function MainGridWrapper({ children }) {
  return (
    <ol className="grid grid-flow-row w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {children}
    </ol>
  );
}
