export default function ProseWrapper({ children }) {
  return (
    <article className="relative content mx-auto prose:mx-auto prose-headings:max-w-[600px] prose-ul:max-w-[600px] prose-ul:mx-auto prose-li:max-w-[600px] prose-headings:mx-auto prose-p prose-p:max-w-[600px] max-w-[800px] prose-img:max-w-[full] prose-img:py-12 font-normal prose-headings:no-underline prose-headings:font-bold prose-strong:text-neutral-800 scroll-smooth prose-p:tracking-normal prose-p:font-jbd prose-lg prose-headings:prose-xl sm:prose-lg leading-relaxed prose-a:text-blue-500 prose-a:font-medium prose-a:decoration-blue-100 hover:prose-a:decoration-blue-500 sm:hover:prose-a:underline-offset-4 transition-all duration-200 prose-a:duration-100 hover:prose-a:bg-blue-50 prose-a:underline prose-a:underline-offset-2 prose:tracking-tight prose-headings:pt-3 sm:prose-headings:pt-6 prose-blockquote:font-fruit prose-headings:tracking-tight prose-headings:font-jbd sm:prose-headings:prose-xl prose-neutral prose-ul:leading-relaxed prose-ul:tracking-normal prose-ul:list-disc prose-ul:text-lg sm:prose-ul:text-lg prose-ul:font-jbd prose-ul:last:pb-0 prose prose:text-neutral-800">
      {children}
    </article>
  );
}
