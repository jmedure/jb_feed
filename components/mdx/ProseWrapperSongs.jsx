export default function ProseWrapperSongs({ children }) {
  return (
    <article className="content w-full space-y-4 pt-4 prose-headings:mt-0 prose-headings:p-0 prose-h2:pt-4 prose-h2:pb-0 font-normal prose-headings:children:text-red-500  prose-headings:no-underline prose-headings:font-medium scroll-smooth prose-p:tracking-tight prose-p:font-jbd prose-lg leading-snug prose-a:text-blue-400 prose-a:font-medium prose-a:decoration-blue-100 hover:prose-a:decoration-blue-500 prose-a:transition-all prose-a:duration-100 hover:prose-a:bg-blue-50 hover:prose-a:text-blue-500 prose-a:underline prose-a:underline-offset-2 prose:tracking-tight prose-a:blue-500 prose-headings:py-0 prose-blockquote:font-fruit prose-headings:tracking-tight prose-headings:font-jbd prose-headings:prose-lg prose-p:mt-0 prose-neutral prose-ul:leading-8 prose-ul:tracking-tight prose-ul:list-disc prose-ul:text-lg prose-ul:font-jbd prose-ul:last:pb-0 prose prose-p:text-neutral-700">
      {children}
    </article>
  );
}
