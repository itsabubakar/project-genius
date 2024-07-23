import React from 'react'
import Image from 'next/image'
import md from 'markdown-it';

const markdown = `

## Come showcase your personal work and projects with prizes to be won

### Guidelines and Requirements

- Open to all students of Ahmadu Bello University.

- You are required to:
  - Have a working prototype.
  - A short summary about the project you would like to exhibit including the names of team members (if any).

- To register, visit [https://projectgenius.com.ng/exhibitions](https://docs.google.com/forms/d/e/1FAIpQLSdgZ1ZLgJekTn226ZA1wWzRL6dkQVo44stcvOF9-6N5NPXPAg/viewform) and fill the registration form 

## Exhibition Date and Location

Join us on August 8, 2024, at the PG E-library and ground floor of KIL for an exciting exhibition.

If you have any questions, please reach out to us:

- By email: [info@projectgenius.com.ng](mailto:info@projectgenius.com.ng)
- Call 090 5543 3811
`

import engineeringTwo from '../../../src/assets/images/exhibition.png'

type Props = {}

const Page = (props: Props) => {
    const post = {
        image: true
    }
   return (
    <section className="mx-auto py-8 sm:py-16 lg:py-20">
      <article>
        <header className={'text-center'}>
          <p className="mx-auto max-w-3xl px-4 sm:px-6">
            <time >Before 26th of July</time> ~{' '}
          </p>
          <h1 className="leading-tighter font-heading mx-auto mb-8 max-w-3xl px-4 text-4xl font-bold tracking-tighter sm:px-6 md:text-5xl">
            Call for exhibitions
          </h1>
          {post.image ? (
            <Image
              src={engineeringTwo}
              className="mx-auto mt-4 mb-6 max-w-full bg-gray-400 sm:rounded-md lg:max-w-6xl"
              sizes="(max-width: 900px) 400px, 900px"
              alt={'exhibition'}
              loading="eager"
              priority
              width={900}
              height={480}
            />
          ) : (
            <div className="mx-auto max-w-3xl px-4 sm:px-6">
              <div className="border-t" />
            </div>
          )}
        </header>
        <div
          className="prose-md prose-headings:font-heading prose-headings:leading-tighter container prose prose-lg mx-auto mt-8 max-w-3xl px-6 prose-headings:font-bold prose-headings:tracking-tighter prose-a:text-primary-600 prose-img:rounded-md prose-img:shadow-lg  sm:px-6 lg:prose-xl"
          dangerouslySetInnerHTML={{
            __html: md({
              html: true,
            }).render(markdown),
          }}
        />
      </article>
    </section>
  );
}

export default Page