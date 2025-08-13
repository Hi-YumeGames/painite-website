import Image from 'next/image';

export default function BentoGrid() {
    return (
      <div className="bg-popover py-24 sm:py-32">
        <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-center text-base/7 font-semibold text-primary">Deploy faster</h2>
          <p className="mx-auto mt-2 max-w-lg text-center text-4xl font-semibold tracking-tight text-balance text-foreground sm:text-5xl">
            Everything you need to deploy your app
          </p>
          <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
            <div className="relative lg:row-span-2">
              <div className="absolute inset-px rounded-lg bg-card lg:rounded-l-4xl" />
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
                <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                  <p className="mt-2 text-lg font-medium tracking-tight text-foreground max-lg:text-center">
                    Mobile friendly
                  </p>
                  <p className="mt-2 max-w-lg text-sm/6 text-muted-foreground max-lg:text-center">
                    Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.
                  </p>
                </div>
                <div className="@container relative min-h-120 w-full grow max-lg:mx-auto max-lg:max-w-sm">
                  <div className="absolute inset-x-10 top-10 bottom-0 overflow-hidden rounded-t-[12cqw] border-x-[3cqw] border-t-[3cqw] border-border bg-foreground shadow-2xl">
                    <Image
                      alt="Mobile friendly illustration"
                      src="https://tailwindcss.com/plus-assets/img/component-images/bento-03-mobile-friendly.png"
                      width={400}
                      height={300}
                      className="size-full object-cover object-top"
                    />
                  </div>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-border/10 lg:rounded-l-4xl" />
            </div>
  
            <div className="relative max-lg:row-start-1">
              <div className="absolute inset-px rounded-lg bg-card max-lg:rounded-t-4xl" />
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
                <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                  <p className="mt-2 text-lg font-medium tracking-tight text-foreground max-lg:text-center">Performance</p>
                  <p className="mt-2 max-w-lg text-sm/6 text-muted-foreground max-lg:text-center">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit maiores impedit.
                  </p>
                </div>
                <div className="flex flex-1 items-center justify-center px-8 max-lg:pt-10 max-lg:pb-12 sm:px-10 lg:pb-2">
                  <Image
                    alt="Performance illustration"
                    src="https://tailwindcss.com/plus-assets/img/component-images/bento-03-performance.png"
                    width={300}
                    height={200}
                    className="w-full max-lg:max-w-xs"
                  />
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-border/10 max-lg:rounded-t-4xl" />
            </div>
  
            <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
              <div className="absolute inset-px rounded-lg bg-card" />
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)]">
                <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                  <p className="mt-2 text-lg font-medium tracking-tight text-foreground max-lg:text-center">Security</p>
                  <p className="mt-2 max-w-lg text-sm/6 text-muted-foreground max-lg:text-center">
                    Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi.
                  </p>
                </div>
                <div className="@container flex flex-1 items-center max-lg:py-6 lg:pb-2">
                  <Image
                    alt="Security illustration"
                    src="https://tailwindcss.com/plus-assets/img/component-images/bento-03-security.png"
                    width={200}
                    height={152}
                    className="h-[min(152px,40cqw)] object-cover"
                  />
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-border/10" />
            </div>
  
            <div className="relative lg:row-span-2">
              <div className="absolute inset-px rounded-lg bg-card max-lg:rounded-b-4xl lg:rounded-r-4xl" />
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
                <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                  <p className="mt-2 text-lg font-medium tracking-tight text-foreground max-lg:text-center">
                    Powerful APIs
                  </p>
                  <p className="mt-2 max-w-lg text-sm/6 text-muted-foreground max-lg:text-center">
                    Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget sem sodales gravida.
                  </p>
                </div>
                <div className="relative min-h-120 w-full grow">
                  <div className="absolute top-10 right-0 bottom-0 left-10 overflow-hidden rounded-tl-xl bg-foreground shadow-2xl outline outline-card/10">
                    <div className="flex bg-foreground outline outline-card/5">
                      <div className="-mb-px flex text-sm/6 font-medium text-muted-foreground">
                        <div className="border-r border-b border-r-card/10 border-b-card/20 bg-card/5 px-4 py-2 text-foreground">
                          NotificationSetting.jsx
                        </div>
                        <div className="border-r border-border/10 px-4 py-2">App.jsx</div>
                      </div>
                    </div>
                    <div className="px-6 pt-6 pb-14">{/* Your code example */}</div>
                  </div>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-border/10 max-lg:rounded-b-4xl lg:rounded-r-4xl" />
            </div>
          </div>
        </div>
      </div>
    );
  }