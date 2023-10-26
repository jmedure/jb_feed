import Masonry from 'react-masonry-css';

export default function MasonryWrapper({
  children,
  breakpointColumnsObj = {
    default: 3,
    1000: 2,
    576: 1,
  },
  ...props
}) {
  return (
    <Masonry
      className="container-fg w-full flex space-x-4 my-1 bg-clip-padding items-start"
      breakpointCols={breakpointColumnsObj}
      columnClassName="masonry_grid_column"
      {...props}
    >
      {children}
    </Masonry>
  );
}
