import Forms from './Forms';

function CTA() {
  return (
    <div className="relative isolate overflow-hidden bg-popover py-16 sm:py-24 lg:py-32">
        <div className="flex flex-col items-center">
            <h2 className="text-4xl font-semibold tracking-tight text-foreground">Subscribe to our newsletter</h2>
            <p className="mt-4 text-lg text-muted-foreground">
                Nostrud amet eu ullamco nisi aute in ad minim nostrud adipisicing velit quis. Duis tempor incididunt
                dolore.
            </p>
            <div className="mt-6 flex gap-x-4">
                <Forms placeholder="Enter your email" submitText="Sign Up" className="flex flex-row items-center"/>
            </div>
        </div>

      {/*<div aria-hidden="true" className="absolute top-0 left-1/2 -z-10 -translate-x-1/2 blur-3xl xl:-top-6">
        <div
          style={{
            clipPath:
              'polygon(74.1% 441% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="aspect-1155/678 w-288.75 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
        />
      </div>*/}
    </div>
  )
}

export default CTA;