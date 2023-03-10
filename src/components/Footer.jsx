function Footer() {
  return (
    <footer className="footer mt-auto py-3 bg-light">
      <div className="container">
        <div className="row">
          <div className="col-12 cold-md-6 py-3">
            <p>Delicious recipes from around the world</p>
            <p className="text-muted">
              &copy; Copyright {new Date().getFullYear()}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
