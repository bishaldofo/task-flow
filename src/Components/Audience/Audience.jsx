import Container from "../Container/Container";

const Audience = () => {
   return (
      <Container>
         <section className="py-10">
            <h2 className="text-5xl text-center mb-5">Who Can Benefit?</h2>
            <div className="persona-cards grid gap-10 grid-cols-3 pt-5">
            {/* Developer Persona */}
               <div className="persona-card">
                  <img className="h-40 mb-4" src="https://i.ibb.co/KsfBRg6/developer.png" alt="Developer" />
                  <p className="text-lg font-semibold">Developers</p>
                  <p>Efficiently manage coding tasks and projects with ease.</p>
               </div>
               {/* Corporate Professional Persona */}
               <div className="persona-card">
                  <img className="h-40 mb-4" src="https://i.ibb.co/gwgwgWv/corporate-user.png" alt="Corporate Professional" />
                  <p className="text-lg font-semibold">Corporate Professionals</p>
                  <p>Streamline workflow and enhance team collaboration.</p>
               </div>
               {/* Banker Persona */}
               <div className="persona-card">
                  <img className="h-40 mb-4" src="https://i.ibb.co/1GnCTwn/banker.png" alt="Banker" />
                  <p className="text-lg font-semibold">Bankers</p>
                  <p>Organize financial tasks and deadlines seamlessly.</p>
               </div>
            {/* Add more persona cards as needed */}
            </div>
         </section>
      </Container>
   );
};

export default Audience;