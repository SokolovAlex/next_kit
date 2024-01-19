import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { Button } from "../ui/button/button";

export default function Page() {
  return (
    <div>
      <Button>Some Button</Button>
      <Button variant='success' className='mx-2 gap-2'>Some Button <ArrowRightIcon className="w-5 md:w-6" /></Button>
      <Button variant='danger'>Some Button</Button>
    </div>
  );
}
