import Link from 'next/link';
import { TestimonialsProps } from '~/shared/types';
import Headline from '../common/Headline';
import WidgetWrapper from '../common/WidgetWrapper';
import CTA from '../common/CTA';
import ItemTestimonial from '../common/ItemTestimonial';

const Testimonials = ({
  header,
  testimonials,
  callToAction,
  isTestimonialUp,
  id,
  hasBackground = false,
}: TestimonialsProps) => (
  <WidgetWrapper id={id ? id : ''} hasBackground={hasBackground} containerClass="">
    {header && <Headline header={header} titleClass="text-2xl sm:text-3xl" />}
    <div className="flex items-stretch justify-center">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {testimonials.map(
          ({ name, job, testimonial, image, href }, index) =>
            testimonial && (
              <div
                key={`item-testimonial-${index}`}
                className={`card max-w-sm h-full ${
                  !callToAction && href
                    ? 'hover:border-primary-600 hover:shadow-lg hover:transition hover:duration-100'
                    : ''
                }`}
              >
                {!callToAction ? (
                  <div >
                    <ItemTestimonial
                      name={name}
                      job={job}
                      testimonial={testimonial}
                      isTestimonialUp={isTestimonialUp}
                      hasDividerLine={true}
                      startSlice={0}
                      endSlice={150}
                      image={image}
                      containerClass="h-full"
                      panelClass="justify-between items-stretch w-full h-full"
                      nameJobClass="text-left rtl:text-right"
                      jobClass="text-sm"
                      imageClass="mr-4 rtl:mr-0 rtl:ml-4 h-10 w-10 rounded-full"
                    />
                  </div>
                ) : (
                  <ItemTestimonial
                    name={name}
                    job={job}
                    testimonial={testimonial}
                    isTestimonialUp={isTestimonialUp}
                    hasDividerLine={true}
                    startSlice={0}
                    endSlice={150}
                    image={image}
                    containerClass="h-full"
                    panelClass="justify-between items-stretch w-full h-full"
                    nameJobClass="text-left rtl:text-right"
                    jobClass="text-sm"
                    imageClass="mr-4 rtl:mr-0 rtl:ml-4 h-10 w-10 rounded-full"
                  />
                )}
              </div>
            ),
        )}
      </div>
    </div>
   
  </WidgetWrapper>
);

export default Testimonials;
