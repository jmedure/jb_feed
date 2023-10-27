export default function ProseWrapper({ children }) {
  return (
    <article className="content w-full font-normal prose-headings:no-underline prose-headings:font-bold prose-strong:text-neutral-800 scroll-smooth prose-p:tracking-tight prose-p:font-jbd prose-lg prose-headings:prose-xl sm:prose-lg leading-snug prose-a:text-blue-400 prose-a:font-medium prose-a:decoration-blue-100 hover:prose-a:decoration-blue-500 prose-a:transition-all prose-a:duration-100 hover:prose-a:bg-blue-50 hover:prose-a:text-blue-500 prose-a:underline prose-a:underline-offset-2 prose:tracking-tighter prose-a:blue-500 prose-headings:pt-3 sm:prose-headings:pt-6 prose-blockquote:font-fruit prose-headings:tracking-tight prose-headings:font-jbd sm:prose-headings:prose-xl prose-neutral prose-ul:leading-8 prose-ul:tracking-tight prose-ul:list-disc prose-ul:text-lg sm:prose-ul:text-lg prose-ul:font-jbd prose-ul:last:pb-0 prose prose:text-black/80">
      {children}
    </article>
  );
}
