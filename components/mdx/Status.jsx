import Link from 'next/link';

export default function Status(props) {
  const status = props.status;

  return (
    <Link
      href="/designs/colophon#project-status"
      className={
        status === 'WIP'
          ? 'bg-black/10 text-[#383838] w-min flex items-center rounded-md py-1 pr-2  pl-1 gap-x-[2px]'
          : status === 'Draft'
          ? 'bg-[#2767E3]/10 text-[#2767E3] w-min flex items-center rounded-md py-1 pl-1 pr-2 gap-x-[2px]'
          : status === 'Essay'
          ? 'bg-[#37B034]/10 text-[#37B034] w-min flex items-center rounded-md py-1 pl-1 pr-2 gap-x-[2px]'
          : null
      }
    >
      {status === 'WIP' ? (
        <div className="bg-[#383838] fill-white/80 p-[1px] rounded">
          {/* <svg
            width="20"
            height="20"
            viewBox="0 0 14 15"
            xmlns="http://www.w3.org/2000/svg"
          >
            <mask
              id="mask0_2488_17606"
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="14"
              height="15"
            >
              <rect y="0.5" width="14" height="14" />
            </mask>
            <g mask="url(#mask0_2488_17606)">
              <path d="M7 13.3346C6.67917 13.3346 6.40451 13.2204 6.17604 12.9919C5.94757 12.7635 5.83333 12.4888 5.83333 12.168H8.16667C8.16667 12.4888 8.05243 12.7635 7.82396 12.9919C7.59549 13.2204 7.32083 13.3346 7 13.3346ZM4.66667 11.5846V10.418H9.33333V11.5846H4.66667ZM4.8125 9.83464C4.14167 9.43602 3.60938 8.9013 3.21563 8.23047C2.82188 7.55964 2.625 6.83047 2.625 6.04297C2.625 4.82769 3.05035 3.7947 3.90104 2.94401C4.75174 2.09332 5.78472 1.66797 7 1.66797C8.21528 1.66797 9.24826 2.09332 10.099 2.94401C10.9497 3.7947 11.375 4.82769 11.375 6.04297C11.375 6.83047 11.1781 7.55964 10.7844 8.23047C10.3906 8.9013 9.85833 9.43602 9.1875 9.83464H4.8125ZM5.1625 8.66797H8.8375C9.275 8.35686 9.61285 7.97283 9.85104 7.51589C10.0892 7.05894 10.2083 6.56797 10.2083 6.04297C10.2083 5.14852 9.89722 4.39019 9.275 3.76797C8.65278 3.14575 7.89444 2.83464 7 2.83464C6.10556 2.83464 5.34722 3.14575 4.725 3.76797C4.10278 4.39019 3.79167 5.14852 3.79167 6.04297C3.79167 6.56797 3.91076 7.05894 4.14896 7.51589C4.38715 7.97283 4.725 8.35686 5.1625 8.66797Z" />
            </g>
          </svg> */}
          <svg
            width="20"
            height="20"
            viewBox="0 0 14 14"
            fill="inherit"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g mask="url(#mask0_2522_18256)">
              <path
                d="M9.90475 10.4995H12.6531V11.3745H9.02976L9.90475 10.4995ZM2.71405 11.3745L1.68201 10.3425C1.4771 10.1376 1.37222 9.88854 1.36736 9.59537C1.3625 9.30221 1.46252 9.04831 1.66742 8.83369L7.83728 2.43049C8.0422 2.21586 8.28974 2.10948 8.57991 2.11135C8.87008 2.11322 9.11762 2.21661 9.32252 2.42153L11.9666 5.06557C12.1715 5.27049 12.2749 5.52046 12.2768 5.81549C12.2786 6.11052 12.1771 6.36049 11.9722 6.56539L7.27973 11.3745H2.71405ZM6.9073 10.4995L11.3575 5.93273C11.3874 5.90281 11.4023 5.8598 11.4023 5.80371C11.4023 5.74761 11.3874 5.7046 11.3575 5.67469L8.72239 3.03961C8.69246 3.0097 8.65039 2.99474 8.59617 2.99474C8.54195 2.99474 8.49988 3.01157 8.46996 3.04523L2.28215 9.43719C2.25224 9.47085 2.23728 9.51479 2.23728 9.56901C2.23728 9.62324 2.25224 9.66531 2.28215 9.69523L3.08647 10.4995H6.9073Z"
                fill="white"
              />
            </g>
          </svg>
        </div>
      ) : status === 'Draft' ? (
        <div className="bg-[#2767E3] fill-white/80 p-[1px] rounded">
          <svg
            width="20"
            height="21"
            viewBox="0 0 14 15"
            xmlns="http://www.w3.org/2000/svg"
          >
            <mask
              id="mask0_2488_17372"
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="14"
              height="15"
            >
              <rect y="0.5" width="14" height="14" fill="#D9D9D9" />
            </mask>
            <g mask="url(#mask0_2488_17372)">
              <path d="M7.14583 6.81458L7.68542 7.35417L10.85 4.18958L10.3104 3.65L7.14583 6.81458ZM2.91667 11.5833H3.45625L6.85417 8.18542L6.31458 7.64583L2.91667 11.0437V11.5833ZM8.09375 8.59375L5.90625 6.40625L8.34167 3.97083L7.91875 3.54792L4.725 6.74167L3.90833 5.925L7.0875 2.73125C7.32083 2.49792 7.59549 2.38125 7.91146 2.38125C8.22743 2.38125 8.50208 2.49792 8.73542 2.73125L9.15833 3.15417L9.8875 2.425C10.0042 2.30833 10.1427 2.25 10.3031 2.25C10.4635 2.25 10.6021 2.30833 10.7187 2.425L12.075 3.78125C12.1917 3.89792 12.25 4.03646 12.25 4.19687C12.25 4.35729 12.1917 4.49583 12.075 4.6125L8.09375 8.59375ZM3.9375 12.75H1.75V10.5625L5.90625 6.40625L8.09375 8.59375L3.9375 12.75Z" />
            </g>
          </svg>
        </div>
      ) : status === 'Essay' ? (
        <div className="bg-[#37B034] fill-white/80 p-[1px] rounded">
          {/* <svg
            width="20"
            height="20"
            viewBox="0 0 14 15"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g mask="url(#mask0_2488_17534)">
              <path d="M5.01146 13.625L3.90313 11.7583L1.80313 11.2917L2.00729 9.13333L0.578125 7.5L2.00729 5.86667L1.80313 3.70833L3.90313 3.24167L5.01146 1.375L6.99479 2.22083L8.97813 1.375L10.0865 3.24167L12.1865 3.70833L11.9823 5.86667L13.4115 7.5L11.9823 9.13333L12.1865 11.2917L10.0865 11.7583L8.97813 13.625L6.99479 12.7792L5.01146 13.625ZM5.50729 12.1375L6.99479 11.4958L8.51146 12.1375L9.32813 10.7375L10.9323 10.3583L10.7865 8.725L11.8656 7.5L10.7865 6.24583L10.9323 4.6125L9.32813 4.2625L8.48229 2.8625L6.99479 3.50417L5.47813 2.8625L4.66146 4.2625L3.05729 4.6125L3.20313 6.24583L2.12396 7.5L3.20313 8.725L3.05729 10.3875L4.66146 10.7375L5.50729 12.1375ZM6.38229 9.57083L9.67813 6.275L8.86146 5.42917L6.38229 7.90833L5.12813 6.68333L4.31146 7.5L6.38229 9.57083Z" />
            </g>
          </svg> */}
          <svg
            width="20"
            height="20"
            viewBox="0 0 18 18"
            fill="inherit"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g mask="url(#mask0_2522_18452)">
              <path d="M6.79693 14.1645L2 9.36757L2.96146 8.40614L6.79693 12.2416L15.0385 4L16 4.96144L6.79693 14.1645Z" />
            </g>
          </svg>
        </div>
      ) : null}
      <div className=""></div>
      <div className="items-center font-bold capitalize whitespace-nowrap">
        {props.status}{' '}
        {props.version > 1 ? (
          <span className="lowercase font-medium ">v.{props.version}</span>
        ) : null}
      </div>
    </Link>
  );
}

// # Kilt babies

// Designing is something I get paid to do, developing is a budding hobby of mine. All versions of jacobs.blue are also a reflection of my dev skill. Knowing that I wanted

// **WIP (Work in progress.)**

// I’m gathering my thoughts. It may not even be coherent.

// **Draft**

// I’ve collected my thoughts and taken a shot at coherence. I’m usually rewriting for clarity, so expect many draft versions.

// **Essay**

// I’m officially sharing this one and not just for feedback. I stand on what I say here but I’m also always willing to have my mind changed. When I do, I’ll note the version.

// <ol className=" h-0 w-min decoration-red-800 list-decimal  relative mx-auto">
//   <Footnote id="1" number="1">
//     This translates into simple decisions like making the main content card have
//     a blue bg color. Every part of my programmed UI brain says that it should be
//     grey for easier transferability over to dark mode and a simpler color
//     system. But the Jacob’s Blue site at jacobs.blue ought to have some blue
//     got-da***t. Fun.
//   </Footnote>
// </ol>
