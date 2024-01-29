function Footer() {
  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <footer
        aria-labelledby="footer-heading"
        className="relative border-t border-gray-900/10 py-6 sm:mt-14 sm:py-8"
      >
        <h2 id="footer-heading" className="sr-only">
          Footer
        </h2>
        <div className="xl:grid xl:grid-cols-3 xl:gap-8 text-gray-900">
          &copy; 2024 National Institute of Artificial Intelligence.
        </div>
      </footer>
    </div>
  );
}

export default Footer;
