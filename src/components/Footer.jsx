import React from "react";
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => {
  return (
    <>
      <div className="text-center text-white bg-slate-800 md:text-left">
        <div className="md:flex">
          <div className="md:w-1/2">
            <div className="flex flex-col items-center gap-4 p-8 md:items-start md:px-12 md:py-20 md:flex-row border-slate-700">
              <div className="flex text-4xl font-bold md:w-1/3">

                <img src={'/logo.jpeg'} className="flex justify-center w-60 rounded-md"></img>
              </div>
              <div className="w-2/3 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint quisquam error ab harum. Sint quisquam error ab harum.  Sint quisquam error ab harum. Sint quisquam error ab harum.</div>
            </div>
            <div className="flex flex-col justify-around gap-8 p-8 text-sm border-t md:gap-0 md:flex-row md:px-12 md:py-20 border-slate-600">
              <div>
                <div className="mb-4 text-xl font-bold">Resources</div>
                <div className="mb-2">Why Congruence?</div>
                <div className="mb-2">Customer Service</div>
                <div className="mb-2">Blogs</div>
                <div className="mb-2">Guides</div>
                <div className="mb-2">Webinars</div>
                <div className="mb-2">Workplace Mgmt</div>
                <div className="mb-2">Glossary</div>
              </div><div>
                <div className="mb-4 text-xl font-bold">Company</div>
                <div className="mb-2">About Us</div>
                <div className="mb-2">Careers</div>
                <div className="mb-2">Contact Us</div>
                <div className="mb-2">Partnerships</div>
                <div className="mb-2">Press</div>
              </div>

              <div>
                <div className="mb-4 text-xl font-bold">Connect</div>
                <div className="mb-2">Facebook</div>
                <div className="mb-2">Twitter</div>
                <div className="mb-2">LinkedIn</div>
                <div className="mb-2">Instagram</div>
                <div className="mb-2">YouTube</div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 p-8 border-t md:border-t-0 md:border-l md:w-1/2 md:px-12 md:py-20 border-slate-600">
            <div className="text-sm font-semibold text-white">DEMO</div>
            <div className="flex flex-col gap-3 text-3xl text-white md:text-5xl ">
              <div>
                Request a
              </div>
              <div>
                Demo
              </div>
            </div>
            <div className="flex items-center justify-between mt-4 text-black bg-white rounded-full md:mt-8 md:w-3/4">
              <input className="w-full p-2 ml-3 outline-0" placeholder="Enter your email..." />
              <div className="p-4 md:p-4 rounded-full bg-[#6f32be] hover:bg-[#763dc0] scale-110">
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-narrow-right" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M5 12l14 0" />
                  <path d="M15 16l4 -4" />
                  <path d="M15 8l4 4" />
                </svg>

              </div>
            </div>
          </div>
        </div>
        <div className="text-sm border-t border-slate-600">
          <div className="md:h-[300px] flex flex-col md:flex-row md:items-end gap-8 px-12 py-8">
            <div>© 2023 Congruence</div>
            <div>Support</div>
            <div>Privacy</div>
            <div>Terms and Conditions</div>
            <div>Support</div>
            <div>Support</div>
          </div>
        </div>
      </div>

    </>
  );
};

export default Footer;

