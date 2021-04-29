import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Contact = () => (
  <section>
    <div className="min-h-screen flex flex-col justify-center md:flex-row-reverse" id="contact">
      <div className="w-full mt-16 md:w-3/6 flex items-end justify-end ">
        <LazyLoadImage
          src="/images/about.png"
          alt="profile"
          className="flex m-0"
          effect="blur"

        />
      </div>
      <div className="w-full md:w-3/6 flex items-center">
        <div className="w-full md:w-4/5 m-auto">
          <div className="mx-3 mt-5 ">
            <h1 className="text-5xl font-semibold mb-5">Contact</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled
              it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic
              typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including
              versions of Lorem Ipsum.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Contact;
