export default function MainGridWrapper({ children }) {
  return (
    <ol className="container-fg grid grid-flow-row w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {children}
    </ol>
  );
}
