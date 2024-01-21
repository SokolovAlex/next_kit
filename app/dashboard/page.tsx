import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import styles from '@/app/ui/dashboard.module.css';

import Image from 'next/image';
import { LinkCard } from '../ui/components/link-card';

export default function Page() {
  return (
    <main className={`flex flex-col min-h-screen p-24 items-center justify-between ${styles[`page-background`]}`}>
        <div className="flex items-center justify-between w-full flex-nowrap">
            <div className="text-lg rounded-lg bg-gray-50 px-10 py-4 border border-gray-300">
              My Github <a className="underline font-bold hover:text-spindle-900 text-spindle-500" href="https://github.com/SokolovAlex" target='_blank'>page</a>
            </div>

            <div>
              <Link
                href="/login"
                className="flex items-center gap-5 self-start rounded-lg bg-spindle-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-spindle-400 md:text-base"
              >
                <span>Log in</span> 
                <ArrowRightIcon className="w-5 md:w-6" />
              </Link>
            </div>
        </div>

        <div>
          <Image
            src="/svg/logo-no-background.svg"
            width={400}
            height={400}
            className="hidden md:block"
            alt="Screenshots of the dashboard project showing desktop version"
          />
        </div>

        <div className="flex items-stretch justify-between py-6 box-border">
            <LinkCard href="/projects" title="Projects" description="My Projects, tech stack and skills" />
            <LinkCard href="/experience" title="Experience" description="My job experience. My way and my wins. In what I am good" />
            <LinkCard href="/hobbies" title="Hobbies" description="My private hobbies. Where do I leave. My family." />
        </div>
    </main>
  );
}
