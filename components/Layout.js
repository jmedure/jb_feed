import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className="content">
      {children}
      {/* <Footer color="dark" /> */}
    </div>
  );
};

export default Layout;
