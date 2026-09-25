import type { ReactNode } from "react"
import Link from "next/link"
import { ArrowLeft, ArrowRight, NotebookPen } from "lucide-react"

/*
 * How I think through a problem, written as working notes rather than another résumé
 * summary. The worked example is hypothetical and labelled as such; the closing paragraph
 * only refers to roles listed on the resume in public/resume.
 *
 * Nothing on this page uses the scroll reveal. It is visible from the first paint,
 * so it never waits on JavaScript to show itself.
 */

const marginNotes = [
  { question: "Who is this helping?", tape: "bg-coral/35", tilt: "lg:-rotate-2" },
  { question: "How would we catch a wrong answer?", tape: "bg-teal/40", tilt: "lg:rotate-1" },
  { question: "What happens when someone uses it on a busy day?", tape: "bg-brand/30", tilt: "lg:-rotate-1" },
]

const trace = ["Sources", "Retrieval", "Response", "What the interface showed"]

const possibleCauses = ["Answer quality", "Missing context", "How the result is explained"]

function Step({ number, children }: { number: string; children: ReactNode }) {
  return (
    <li className="grid grid-cols-[2rem_minmax(0,1fr)] gap-3 sm:grid-cols-[2.5rem_minmax(0,1fr)] sm:gap-4">
      <span aria-hidden className="accent-serif pt-0.5 text-2xl leading-none text-coral sm:text-[1.75rem]">
        {number}
      </span>
      <div className="min-w-0">{children}</div>
    </li>
  )
}

export function WhyHireMeContent() {
  return (
    <div className="bg-life relative overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <span className="blob -left-24 top-0 size-96 bg-brand/22" />
        <span className="blob blob-2 -right-20 top-[45%] size-96 bg-pink/22" />
      </div>

      <div className="relative mx-auto max-w-[1100px] px-5 py-12 sm:px-6 sm:py-14 lg:px-8">
        <Link
          href="/"
          className="group inline-flex items-center gap-2 rounded-lg py-1 text-[0.9375rem] font-semibold text-subtle transition-colors hover:text-brand"
        >
          <ArrowLeft className="size-4 transition-transform duration-200 group-hover:-translate-x-0.5" />
          Back to portfolio
        </Link>

        <header className="mt-8 max-w-3xl">
          <p className="anim-enter label-mono inline-flex rounded-lg bg-white/70 px-2.5 py-1 text-brand backdrop-blur-sm">
            Why work with me
          </p>
          <h1 className="anim-enter anim-delay-1 mt-5 text-[2.25rem] leading-[1.1] font-extrabold text-ink sm:text-[2.75rem] lg:text-[3.5rem]">
            Show me where the user{" "}
            <span className="relative inline-block">
              {/* The full stop sits inside so the italic "s" keeps its right padding under bg-clip-text. */}
              <span className="accent-serif text-gradient-signature pr-1">hesitates.</span>
              <span
                aria-hidden
                className="absolute inset-x-0 -bottom-1 h-3 rounded-full bg-gradient-to-r from-brand/25 via-indigo/25 to-teal/25 blur-[2px]"
              />
            </span>
          </h1>
          <p className="anim-enter anim-delay-2 mt-6 max-w-2xl text-lg leading-relaxed text-subtle">
            The moments I watch for are small: someone stops trusting an answer, repeats a task, or
            works around a tool. That&apos;s usually where the real problem is, and it tells us what
            needs to change.
          </p>
        </header>

        <div className="mt-12 grid gap-8 lg:grid-cols-[minmax(0,1fr)_15.5rem] lg:gap-10">
          {/* The notebook page: one hypothetical situation, worked through step by step. */}
          <article
            aria-labelledby="notes-title"
            className="notes-paper relative overflow-hidden rounded-2xl border border-white card-shadow"
          >
            <span aria-hidden className="absolute inset-y-0 left-9 w-px bg-coral/35 sm:left-12" />

            <div className="relative py-7 pr-5 pl-13 sm:py-9 sm:pr-9 sm:pl-18">
              <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                <p className="label-mono inline-flex items-center gap-2 text-muted">
                  <NotebookPen className="size-4" aria-hidden />
                  Working notes
                </p>
                <p className="label-mono rounded-md border border-dashed border-orange/60 bg-orange/10 px-2 py-0.5 text-[#b45309]">
                  Hypothetical example
                </p>
              </div>

              <h2 id="notes-title" className="mt-5 text-xl leading-snug font-extrabold text-ink sm:text-2xl">
                &quot;A RAG assistant performs well in evaluation, but people still double-check its
                answers.&quot;
              </h2>
              <p className="mt-2 text-[0.9375rem] leading-relaxed text-muted">
                Not a past project, just a situation that comes up often, and how I&apos;d work
                through it.
              </p>

              <ol className="mt-8 space-y-7">
                <Step number="1">
                  <h3 className="text-lg font-bold text-ink">Ask to see a few answers people rechecked.</h3>
                  <p className="mt-1.5 leading-relaxed text-subtle">
                    Real examples first. A handful of them usually says more than an average score.
                  </p>
                </Step>

                <Step number="2">
                  <h3 className="text-lg font-bold text-ink">Trace each one end to end.</h3>
                  <ol aria-label="What to trace" className="mt-3 flex flex-wrap items-center gap-x-1.5 gap-y-2">
                    {trace.map((stage, index) => (
                      <li key={stage} className="flex items-center gap-1.5">
                        <span className="rounded-lg border border-hairline bg-white px-2.5 py-1 font-mono text-[0.8125rem] font-medium text-ink">
                          {stage}
                        </span>
                        {index < trace.length - 1 && (
                          <ArrowRight aria-hidden className="size-3.5 shrink-0 text-muted" />
                        )}
                      </li>
                    ))}
                  </ol>
                </Step>

                <Step number="3">
                  <h3 className="text-lg font-bold text-ink">Work out which kind of problem it is.</h3>
                  <ul aria-label="Possible causes" className="mt-3 flex flex-wrap gap-2">
                    {possibleCauses.map((cause) => (
                      <li
                        key={cause}
                        className="rounded-full border-2 border-dashed border-brand/35 px-3 py-1 text-[0.9375rem] font-semibold text-brand"
                      >
                        {cause}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-2.5 leading-relaxed text-subtle">
                    Each one points to a different fix, so it&apos;s worth being sure before building
                    anything.
                  </p>
                </Step>

                <Step number="4">
                  <h3 className="text-lg font-bold text-ink">Test whether a change helps people finish the task.</h3>
                  <p className="mt-1.5 leading-relaxed text-subtle">
                    The measure isn&apos;t a better score on its own. It&apos;s whether people stop
                    needing to double-check.
                  </p>
                </Step>
              </ol>
            </div>
          </article>

          {/* Margin notes: the questions I keep coming back to. */}
          <aside aria-labelledby="margin-title">
            <h2 id="margin-title" className="label-mono text-muted">
              In the margin
            </h2>
            <ul className="mt-4 grid gap-4 sm:grid-cols-3 lg:grid-cols-1 lg:gap-6 lg:pt-2">
              {marginNotes.map((note) => (
                <li
                  key={note.question}
                  className={`relative rounded-xl bg-[#fffdf5] px-4 pt-5 pb-4 shadow-[0_8px_20px_-12px_rgb(15_23_42/0.35)] ${note.tilt}`}
                >
                  <span
                    aria-hidden
                    className={`absolute -top-2 left-1/2 h-4 w-14 -translate-x-1/2 rotate-2 rounded-sm ${note.tape}`}
                  />
                  <p className="accent-serif text-xl leading-snug text-ink">{note.question}</p>
                </li>
              ))}
            </ul>
          </aside>
        </div>

        <section aria-labelledby="path-title" className="mt-14 max-w-2xl">
          <h2 id="path-title" className="label-mono text-muted">
            Where this comes from
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-subtle">
            Each of those steps comes from a different part of my work. Following a result back
            through the data and the model is the machine learning engineering side. Asking what
            people need from it is the product side, which is my job now. Building a
            variable-selection workflow with researchers at IU taught me that a result only helps if
            the next person can work with it. And helping students debug their assignments taught
            me to ask where exactly someone got stuck.
          </p>
        </section>

        <section
          aria-labelledby="closing"
          className="bg-contact on-dark mt-12 flex flex-col items-start gap-6 rounded-3xl p-7 sm:p-10 lg:flex-row lg:items-center lg:justify-between"
        >
          <h2 id="closing" className="sr-only">
            Get in touch
          </h2>
          <Link
            href="/#contact"
            className="group inline-flex max-w-xl items-center gap-4 rounded-2xl bg-white px-5 py-4 text-lg leading-snug font-bold text-ink transition-transform duration-200 hover:-translate-y-0.5 sm:px-6 sm:text-xl"
          >
            Tell me about the part that&apos;s almost working.
            <ArrowRight className="size-5 shrink-0 text-brand transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
          <Link
            href="/"
            className="group inline-flex items-center gap-2 rounded-lg py-1 text-[0.9375rem] font-semibold text-white/85 transition-colors hover:text-white"
          >
            <ArrowLeft className="size-4 transition-transform duration-200 group-hover:-translate-x-0.5" />
            Back to portfolio
          </Link>
        </section>
      </div>
    </div>
  )
}
