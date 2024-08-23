import Form from '../common/Form';
import Headline from '../common/Headline';
import { ContactProps } from '~/shared/types';
import WidgetWrapper from '../common/WidgetWrapper';

const Contact = ({ header, content, items, form, id, hasBackground = false }: ContactProps) => (
  <WidgetWrapper id={id ? id : ''} hasBackground={hasBackground} containerClass="max-w-6xl">
    {header && <Headline header={header} titleClass="text-3xl sm:text-5xl" />}
    <div className="flex items-stretch justify-center">
      <div className={` ${!content && !items ? 'md:grid-cols-1' : 'md:grid-cols-2'}`}>
        <div className="h-full pr-6">
          {content && <p className="mt-3 mb-12 text-lg text-gray-600">{content}</p>}
          <ul className="mb-6 md:mb-0 flex grid lg:grid-cols-3 md:grid-cols-2 ">
            {items &&
              items.map(({ title, description, icon: Icon }, index) => (
                <li key={`item-contact-${index}`} className="flex">
                  <div className="flex max-h-10 max-w-10 min-w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
                    {Icon && <Icon className="h-4 w-4" />}
                  </div>
                  <div className="ml-4 rtl:ml-0 rtl:mr-4 mb-4">
                    <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900">{title}</h3>
                    {typeof description === 'string' ? (
                      <p key={`text-description-${index}`} className="text-gray-600">
                        {description}
                      </p>
                    ) : (
                      description &&
                      description.map((desc, index) => (
                        <p key={`text-description-${index}`} className="text-gray-600">
                          {desc}
                        </p>
                      ))
                    )}
                  </div>
                </li>
              ))}
          </ul>
        </div>
        {/* <Form {...form} containerClass="card h-fit max-w-2xl mx-auto p-5 md:p-12" btnPosition="center" /> */}
      </div>
    </div>
  </WidgetWrapper>
);

export default Contact;
