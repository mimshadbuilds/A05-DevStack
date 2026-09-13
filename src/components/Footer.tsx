import { FaGithub, FaLinkedinIn, FaTwitter, } from "react-icons/fa";
import footer_logo from '../assets/logo-text.png'

const Footer = () => {
    return (
        <footer className="border-t border-base-300 bg-base-100 text-base-content">
            <div className="mx-auto max-w-[1440px] px-5 pt-10 md:px-6">
                <div className="grid grid-cols-1 gap-x-10 gap-y-8 md:grid-cols-[1.7fr_0.8fr_0.8fr_0.9fr] md:items-start">
                    <div className="pr-4">
                        <div className="mb-5 flex items-center gap-3">
                            <img src={footer_logo} alt="" />
                        </div>
                        <p className="max-w-[350px] text-[15px] leading-6 text-base-content/60">
                            Curated tools, technologies, and resources for developers building modern software.
                        </p>
                        <div className="mt-5 flex items-center gap-5 text-base-content/60">
                            <a href="#">
                                <FaGithub size={18} />
                            </a>
                            <a href="#">
                                <FaTwitter size={18} />
                            </a>
                            <a href="#">
                                <FaLinkedinIn size={18} />
                            </a>
                        </div>
                    </div>
                    <div>
                        <h3 className="mb-5 text-[11px] font-semibold uppercase tracking-[0.22em] text-base-content/70">
                            Product
                        </h3>
                        <ul className="space-y-3">
                            <li>
                                <a href="#" className="inline-block text-[15px] leading-6 text-base-content/60">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="#" className="inline-block text-[15px] leading-6 text-base-content/60">
                                    Technologies
                                </a>
                            </li>
                            <li>
                                <a href="#" className="inline-block text-[15px] leading-6 text-base-content/60">
                                    Projects
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="mb-5 text-[11px] font-semibold uppercase tracking-[0.22em] text-base-content/70">
                            Company
                        </h3>
                        <ul className="space-y-3">
                            <li>
                                <a href="#" className="inline-block text-[15px] leading-6 text-base-content/60">
                                    About
                                </a>
                            </li>
                            <li>
                                <a href="#" className="inline-block text-[15px] leading-6 text-base-content/60">
                                    Contact
                                </a>
                            </li>
                            <li>
                                <a href="#" className="inline-block text-[15px] leading-6 text-base-content/60">Careers</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-[11px] font-semibold uppercase tracking-[0.22em] text-base-content/70 mb-5">Legal</h3>
                        <ul className="space-y-3">
                            <li>
                                <a href="#" className="inline-block text-[15px] leading-6 text-base-content/60">Privacy Policy</a>
                            </li>
                            <li>
                                <a href="#" className="inline-block text-[15px] leading-6 text-base-content/60">Terms of Service</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="mt-8 border-t border-base-300 pt-5 mb-4">
                    <div className="flex flex-col gap-3 text-[10px] text-base-content/50 justify-between md:flex-row md:items-center">
                        <p className="md:col-span-1">© 2026 Dev Stack. All rights reserved.</p>
                        <div className="flex items-center gap-5 md:col-start-4 md:justify-end">
                            <a href="#" className="text-slate-400">Privacy</a>
                            <a href="#" className="text-slate-400">Terms</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;