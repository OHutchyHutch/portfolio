import { React, useState, Fragment } from "react";
import { Dialog, Transition } from '@headlessui/react';
import content from "../api/websites.json";
export default function Works() {
    const [selected, setSelected] = useState(0);
    let [isOpen, setIsOpen] = useState(false);
    const [website, setWebsite] = useState(0);

    function selectButton(button) {
        if (button === selected) {
            setSelected(0);
        }
        else {
            setSelected(button);
        }
    }
    function openInfo(site) {
        setWebsite(site);
        setIsOpen(true);
    }
    function handleLinkClick() {
        window.open(`${content.websites[website].url}`);
    }
    return (
        <div className='flex flex-col justify-center'>
            <div className='flex justify-center w-full mb-12 text-white-light'>
                <button className={selected === 1 ? 'bg-med py-2 px-3 rounded-lg mx-3' : 'bg-med-accent hover:bg-med text-dark hover:text-light ease-in duration-200 py-2 px-3 rounded-lg mx-3'} onClick={() => { selectButton(1) }}>Front-End</button>
                <button className={selected === 2 ? 'bg-med py-2 px-3 rounded-lg mx-3' : 'bg-med-accent hover:bg-med text-dark hover:text-light ease-in duration-200 py-2 px-3 rounded-lg mx-3'} onClick={() => { selectButton(2) }}>Back-End</button>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                {content.websites.map((item, i) => {
                    if (selected === 1 && item.stack !== "Front-End" && item.stack !== "Full-Stack") return "";
                    if (selected === 2 && item.stack !== "Back-End" && item.stack !== "Full-Stack") return "";
                    else {
                        return (
                            <div className='bg-med h-64 p-2 rounded hover:scale-105 ease-in duration-200 flex flex-col' onClick={() => { openInfo(i) }} key={i}>
                                <div className='bg-med-accent h-3/4 rounded-sm'>
                                    <img src={'/images/sites/' + item.imageloc} className="object-fill w-full h-full" alt={item.name + " image"} />
                                </div>
                                <div className='flex flex-col border-l-4 mt-1 pl-2 border-med-accent'>
                                    <span className='text-xl tracking-wider font-bold text-light'>{item.name}</span>
                                    <span className='tracking-tighter text-light-accent font-semibold'>{item.stack}</span>
                                </div>
                            </div>
                        )
                    }
                })}
            </div>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={() => { setIsOpen(false) }}>
                    <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0">
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0 scale-95" enterTo="opacity-100 scale-100" leave="ease-in duration-200" leaveFrom="opacity-100 scale-100" leaveTo="opacity-0 scale-95">
                                <Dialog.Panel className="w-full max-w-6xl transform overflow-hidden rounded-2xl bg-slate-800 p-6 text-left align-middle shadow-xl transition-all">
                                    <img src={'../images/sites/' + content.websites[website].imageloc} className='max-w-full h-auto object-cover' alt="" />
                                    <Dialog.Title as="h3" className="text-6xl font-bold leading-[4rem] py-5 text-light text-center">
                                        {content.websites[website].name}
                                    </Dialog.Title>
                                    <div className="flex my-6 justify-center">
                                        <button type="button" className="inline-flex justify-center rounded-md border border-transparent bg-med-accent px-8 py-4 text-sm font-medium text-dark hover:bg-med ease-in duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-med focus-visible:ring-offset-2" onClick={handleLinkClick}>
                                            View Website
                                        </button>
                                    </div>
                                    <div id="tags" className="flex flex-row justify-center flex-wrap">
                                        {content.websites[website].tags.map((item, i) => (
                                            <div className="bg-med-accent text-dark m-1 px-2 py-1 rounded-md hover:bg-med hover:scale-105 ease-in duration-200" key={item}>{item}</div>
                                        ))}
                                    </div>
                                    <div className="mt-12 flex justify-end">
                                        <button type="button" className="inline-flex justify-center rounded-md border border-transparent bg-med-accent px-4 py-2 text-sm font-medium text-dark hover:bg-med ease-in duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-med focus-visible:ring-offset-2" onClick={() => { setIsOpen(false) }}>
                                            Got it, thanks!
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </div>
    );
}