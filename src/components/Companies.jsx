export function Companies() {
  return (
    <>
  <section className="flex flex-wrap justify-center items-center gap-8 mx-8 mt-8 lg:gap-16 lg:mx-24 lg:mt-16 lg:py-8">
        <img src="/google.png" alt="Google" className="w-32 h-16 lg:w-40 lg:h-20 lg:mx-6 lg:my-4 object-contain" />
        <img src="/netflix.png" alt="Netflix" className="w-32 h-16 lg:w-40 lg:h-20 lg:mx-6 lg:my-4 object-contain" />
        <img src="/microsoft.png" alt="Microsoft" className="w-32 h-16 lg:w-40 lg:h-20 lg:mx-6 lg:my-4 object-contain" />
        <div className="flex justify-center items-center px-8 py-4 lg:px-16 lg:py-8">
          <img src="/mailbuster.png" alt="Mailbuster" className="w-40 h-20 lg:w-48 lg:h-24 lg:mx-8 object-contain" />
          <img src="/themewagon.png" alt="ThemeWagon" className="w-40 h-20 lg:w-48 lg:h-24 lg:mx-8 object-contain" />
        </div>
      </section>
    </>
  );
}
