import facebook from "../assets/images/facebook.svg";
import twitter from "../assets/images/twitter.svg";

function Footer() {
  return (
    <footer className="md:py-32 py-10 bg-[#DFDFFE]">
      <div>
        <div className="flex justify-around md:flex-row flex-col md:p-0 px-4">
          <div className="max-w-52">
            <h4 className="text-lg font-medium">BIG-SNEAKERS</h4>
            <p className="mt-4 text-sm">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever.Since the 1500s, when an unknown printer.
            </p>
          </div>
          <div className="max-w-52">
            <h4 className="text-lg font-medium">Follow Us</h4>
            <p className="mt-4 text-sm">
              Since the 1500s, when an unknown printer took a galley of type and
              scrambled.
            </p>
            <div className="flex mt-5">
              <a href="">
                <img src={facebook} alt="" />
              </a>
              <a className="ml-8" href="">
                <img src={twitter} alt="" />
              </a>
            </div>
          </div>
          <div className="max-w-52">
            <h4 className="text-lg font-medium">Contact Us</h4>
            <p className="mt-4 text-sm">
              E-Comm , 4578 Marmora Road, Glasgow D04 89GR
            </p>
          </div>
        </div>
        <div className="max-w-6xl w-full h-1 bg-cyan-50 mx-auto mt-14"></div>
      </div>
    </footer>
  );
}

export default Footer;
